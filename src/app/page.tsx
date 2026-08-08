"use client";

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import ParkModal from '@/components/ParkModal';
import LocationSearch, { LocationCoords } from '@/components/LocationSearch';
import { Park, parks } from '@/data/parks';
import { calculateHaversineDistance } from '@/utils/distance';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export interface ParkWithDistance extends Park {
  distanceKm?: number;
}

export default function Home() {
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);
  const [userLocation, setUserLocation] = useState<LocationCoords | null>(null);

  // Compute sorted parks based on distance
  const displayParks = useMemo(() => {
    if (!userLocation) return parks;
    
    const parksWithDistances: ParkWithDistance[] = parks.map(park => ({
      ...park,
      distanceKm: calculateHaversineDistance(userLocation.lat, userLocation.lng, park.lat, park.lng)
    }));

    return parksWithDistances.sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
  }, [userLocation]);

  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden min-h-screen font-andale text-black">
      <div className="w-full max-w-md mx-auto relative flex flex-col items-start justify-start text-left">
        
        <Header />
        
        <Carousel />

        <LocationSearch onLocationFound={setUserLocation} />

        {/* INTRO TEXT & TRANSITION BLOCK */}
        <section className="w-full px-4 mt-2 flex flex-col items-start justify-start text-left">
          {userLocation ? (
            <div className="w-[280px] font-andale text-[11pt] text-gray-800 border-l-4 border-black pl-3 py-1 mb-4">
              <p><span className="font-bold">Ubicación detectada:</span></p>
              <p className="truncate text-sm">{userLocation.address || 'Coordenadas actuales'}</p>
            </div>
          ) : (
            <div className="w-[280px] font-andale text-[11pt] text-gray-800">
              <p>
                Explora la red de espacios públicos del municipio. Conoce las escalas, horarios y detalles 
                de cada área destinada al desarrollo y esparcimiento urbano.
              </p>
            </div>
          )}

          {/* Graphic Transition Block pointing to Map */}
          <div className="mt-6 flex flex-col items-start w-full border-t-[3px] border-black pt-4 pb-8">
            <h2 className="font-helvetica font-bold uppercase text-2xl tracking-tighter leading-none m-0">
              mira dónde
            </h2>
            <div className="bg-black text-white px-2 py-1 mt-1 inline-block">
              <span className="font-helvetica font-bold uppercase text-sm tracking-widest">
                acá debajo ↓
              </span>
            </div>
          </div>
        </section>

        <Map userLocation={userLocation} parks={displayParks} />

        <Gallery parks={displayParks} onParkClick={setSelectedPark} />

        <ParkModal park={selectedPark} onClose={() => setSelectedPark(null)} />

      </div>
    </main>
  );
}
