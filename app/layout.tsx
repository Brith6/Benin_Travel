import type { Metadata } from "next";
import { Orbitron, Montserrat } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEO-BENIN | Tourism 2077",
  description: "Explore the future of Benin's heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${orbitron.variable} ${montserrat.variable} antialiased bg-neo-black text-white font-sans selection:bg-neo-green selection:text-neo-black`}
      >
        {children}
      </body>
    </html>
  );
}
