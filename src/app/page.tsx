"use client";

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import ParkModal from '@/components/ParkModal';
import LocationSearch, { LocationCoords } from '@/components/LocationSearch';
import ArchiveView from '@/components/ArchiveView';
import { Park, parks } from '@/data/parks';
import { calculateHaversineDistance } from '@/utils/distance';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export interface ParkWithDistance extends Park {
  distanceKm?: number;
}

export default function Home() {
  const [activeView, setActiveView] = useState<'dashboard' | 'archive' | 'modal'>('dashboard');
  const [previousView, setPreviousView] = useState<'dashboard' | 'archive'>('dashboard');
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

  const handleOpenModal = (park: Park, origin: 'dashboard' | 'archive') => {
    setSelectedPark(park);
    setPreviousView(origin);
    setActiveView('modal');
  };

  const handleCloseModal = () => {
    setSelectedPark(null);
    setActiveView(previousView);
  };

  if (activeView === 'archive') {
    return <ArchiveView onParkSelect={(park) => handleOpenModal(park, 'archive')} onClose={() => setActiveView('dashboard')} />;
  }

  if (activeView === 'modal' && selectedPark) {
    return <ParkModal park={selectedPark} onClose={handleCloseModal} />;
  }

  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden min-h-screen font-andale text-black">
      <div className="w-full max-w-md mx-auto relative flex flex-col items-start justify-start text-left">
        
        <Header />
        
        <Carousel />

        {/* INTRO TEXT SECTION */}
        <section className="w-full px-4 mt-6 flex flex-col items-start justify-start text-left">
          <h2 className="font-helvetica font-bold text-xl leading-normal tracking-wide mb-3">
            Actividades culturales en nuestros parques
          </h2>
          <p className="font-andale text-[11pt] leading-snug">
            Explora la red de espacios públicos del municipio. Conoce las escalas, horarios y detalles 
            de cada área destinada al desarrollo y esparcimiento urbano.
          </p>
        </section>

        {/* Pre-Search CTA */}
        <section className="w-full px-4 mt-8 flex flex-col items-start">
          <h2 className="font-helvetica font-bold uppercase text-2xl tracking-tighter leading-none m-0">
            MIRA DÓNDE
          </h2>
          <div className="bg-black text-white px-3 py-1 mt-1 inline-block">
            <span className="font-andale uppercase text-sm tracking-widest">
              ACÁ DEBAJO ↓
            </span>
          </div>
        </section>

        <LocationSearch onLocationFound={setUserLocation} />

        {userLocation && (
          <div className="w-full px-4 mb-4">
            <div className="w-full font-andale text-[11pt] text-gray-800 border-l-4 border-black pl-3 py-1">
              <p><span className="font-bold">Ubicación detectada:</span></p>
              <p className="truncate text-sm">{userLocation.address || 'Coordenadas actuales'}</p>
            </div>
          </div>
        )}

        <Map userLocation={userLocation} parks={displayParks} />

        {/* Archive Gateway Button */}
        <div className="w-full px-4 mt-8 mb-8">
          <button 
            onClick={() => setActiveView('archive')}
            className="w-full border-2 border-black bg-white py-1 px-1 hover:bg-gray-100 transition-opacity duration-200 hover:opacity-75 active:opacity-50 flex flex-col items-start justify-start"
          >
            <span className="font-andale font-bold text-[13pt] leading-tight text-left block">
              Sumérgete en nuestro archivo
            </span>
            <span className="font-andale text-[10pt] leading-tight tracking-[0.15em] text-left block">
              son más de 80 parques para ti
            </span>
          </button>
        </div>

        {/* Gallery Subtitle */}
        <div className="w-full px-4 mb-1 mt-4">
          <h2 className="font-helvetica font-bold text-xl tracking-wide leading-relaxed">
            O revisa nuestra galería aquí
          </h2>
        </div>

        <Gallery parks={displayParks} onParkClick={(park) => handleOpenModal(park, 'dashboard')} />

      </div>
    </main>
  );
}
