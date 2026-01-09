'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';
import { DB_MASTER, Place } from '@/data/db_master';

export interface TripState {
  hotel: Place | null;
  morningActivity: Place | null;
  eveningActivity: Place | null;
  transport: Place | null;
}

interface TripContextType {
  trip: TripState;
  addToTrip: (type: keyof TripState, placeId: string) => void;
  removeFromTrip: (type: keyof TripState) => void;
  resetTrip: () => void;
  totalEstimatedPrice: number; // Juste une estimation basique (1-5 scale sum * multiplier)
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [trip, setTrip] = useState<TripState>({
    hotel: null,
    morningActivity: null,
    eveningActivity: null,
    transport: null
  });

  const addToTrip = (type: keyof TripState, placeId: string) => {
    const place = DB_MASTER.find(p => p.id === placeId) || null;
    setTrip(prev => ({ ...prev, [type]: place }));
  };

  const removeFromTrip = (type: keyof TripState) => {
    setTrip(prev => ({ ...prev, [type]: null }));
  };

  const resetTrip = () => {
    setTrip({
      hotel: null,
      morningActivity: null,
      eveningActivity: null,
      transport: null
    });
  };

  const totalEstimatedPrice = useMemo(() => {
    let score = 0;
    if (trip.hotel) score += trip.hotel.priceLevel * 20000;
    if (trip.morningActivity) score += trip.morningActivity.priceLevel * 5000;
    if (trip.eveningActivity) score += trip.eveningActivity.priceLevel * 10000;
    if (trip.transport) score += trip.transport.priceLevel * 15000;
    return score;
  }, [trip]);

  return (
    <TripContext.Provider value={{
      trip,
      addToTrip,
      removeFromTrip,
      resetTrip,
      totalEstimatedPrice
    }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
}
