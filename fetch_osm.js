const fs = require('fs');
const path = require('path');

// Overpass query looking for tourism attractions, museums, and historic monuments in Benin
const query = `[out:json][timeout:25];
area["name"="Bénin"]->.searchArea;
(
  node["tourism"~"attraction|museum"](area.searchArea);
  way["tourism"~"attraction|museum"](area.searchArea);
  node["historic"~"monument|ruins|archaeological_site"](area.searchArea);
  way["historic"~"monument|ruins|archaeological_site"](area.searchArea);
);
out body;
>;
out skel qt;`;

const apiUrl = 'https://overpass-api.de/api/interpreter';

// Fallback images (Unsplash)
const fallbackImages = [
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590426573887-2abe8da17ba4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1580828369619-142c1106e57d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
];

async function fetchOverpass() {
    const url = `${apiUrl}?data=${encodeURIComponent(query)}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'BeninTravelApp/1.0 (Integration Test)' } });
    if (!res.ok) throw new Error(`Overpass API returned ${res.status} ${res.statusText}`);
    return await res.json();
}

async function fetchWikipediaExtract(wikiTag) {
    if (!wikiTag) return null;
    const parts = wikiTag.split(':');
    const lang = parts.length > 1 ? parts[0] : 'fr';
    const title = parts.length > 1 ? parts.slice(1).join(':') : wikiTag;

    const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'BeninTravelApp/1.0' } });
        if (res.ok) {
            const json = await res.json();
            return json.extract || null;
        }
    } catch (e) { }
    return null;
}

function mapToAppFormat(element, index) {
    const tags = element.tags;
    const vibesArray = ['HISTORY', 'ROOTS', 'CULTURE', 'FAMILY', 'RELAX'];

    let city = 'COTONOU';
    const nameLower = tags.name.toLowerCase();
    if (nameLower.includes('ouidah')) city = 'UIDAH';
    else if (nameLower.includes('porto')) city = 'PORTO-NOVO';
    else if (nameLower.includes('abomey')) city = 'ABOMEY';

    const description = tags.description || tags.name;

    return {
        id: `osm-${element.id}`,
        name: tags.name,
        category: tags.tourism === 'museum' ? 'CULTURE' : (tags.historic ? 'HISTORY' : 'EVENT'),
        vibe: [vibesArray[index % vibesArray.length], 'FAMILY'],
        city: city,
        image: fallbackImages[index % fallbackImages.length],
        description: description,
        priceLevel: (index % 3) + 1, // 1 to 3
        _wikiTag: tags.wikipedia
    };
}

async function run() {
    console.log('Fetching places from OpenStreetMap...');
    try {
        const data = await fetchOverpass();
        let places = data.elements
            .filter(e => e.tags && e.tags.name)
            .map((e, i) => mapToAppFormat(e, i));

        console.log(`Found ${places.length} places. Enhancing with Wikipedia...`);

        // Sort to put those with Wikipedia tags first
        places.sort((a, b) => (b._wikiTag ? 1 : 0) - (a._wikiTag ? 1 : 0));

        // Take top 20
        places = places.slice(0, 20);

        for (let place of places) {
            if (place._wikiTag) {
                console.log(`Fetching Wiki for: ${place._wikiTag}`);
                const extract = await fetchWikipediaExtract(place._wikiTag);
                if (extract) place.description = extract;
            }
            delete place._wikiTag; // cleanup
        }

        const fileContent = `import { Place } from './db_master';

export const REAL_DATA_OSM: Place[] = ${JSON.stringify(places, null, 2)};
`;
        const destDir = path.join(__dirname, 'data');
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);
        const dest = path.join(destDir, 'real_osm_data.ts');
        fs.writeFileSync(dest, fileContent, 'utf8');
        console.log(`Successfully generated ${dest}`);
    } catch (err) {
        console.error('Error:', err);
    }
}

run();
