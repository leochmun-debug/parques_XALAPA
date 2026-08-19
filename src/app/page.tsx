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
  
  // State for the desktop Hero Image preview
  const [hoveredPark, setHoveredPark] = useState<Park | null>(null);

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

  const handleHeaderNav = (view: 'inicio' | 'mapa' | 'archivo' | 'galeria') => {
    if (view === 'archivo') {
      setActiveView('archive');
    } else {
      setActiveView('dashboard');
      setTimeout(() => {
        if (view === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (view === 'mapa') {
          const mapEl = document.getElementById('map-container');
          if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth' });
        } else if (view === 'galeria') {
          const galEl = document.getElementById('gallery-section');
          if (galEl) galEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  if (activeView === 'archive') {
    return <ArchiveView onParkSelect={(park) => handleOpenModal(park, 'archive')} onClose={() => setActiveView('dashboard')} />;
  }

  if (activeView === 'modal' && selectedPark) {
    return <ParkModal park={selectedPark} onClose={handleCloseModal} />;
  }

  // Use the first park as default for the hero image if none hovered
  const previewPark = hoveredPark || displayParks[0];

  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden min-h-screen font-andale text-black">
      <div className="w-full relative flex flex-col items-start justify-start text-left lg:px-6">
        
        {/* DESKTOP TOP ROW */}
        <div className="w-full lg:flex lg:flex-row lg:justify-between lg:mb-12">
          
          <div className="w-full lg:w-1/2 lg:pr-8">
            <Header onNavigate={handleHeaderNav} />
            
            {/* Mobile Carousel - hidden on lg */}
            <div className="lg:hidden w-full">
              <Carousel />
            </div>

            {/* INTRO TEXT SECTION */}
            <section className="w-full pl-4 pr-16 lg:px-0 mt-6 flex flex-col items-start justify-start text-left">
              <h2 className="font-helvetica font-bold text-xl leading-normal mb-3">
                Actividades culturales en nuestros parques
              </h2>
              <p className="font-andale text-[11pt] leading-snug lg:max-w-md">
                Explora la red de espacios públicos del municipio. Conoce las escalas, horarios y detalles 
                de cada área destinada al desarrollo y esparcimiento urbano.
              </p>
            </section>
          </div>

          {/* Large Hero Image (Desktop only) */}
          <div className="hidden lg:block lg:w-1/2 relative h-[500px] mt-8">
            {previewPark && previewPark.images && previewPark.images.length > 0 && (
              <div className="w-full h-full relative">
                <img 
                  src={previewPark.images[0]} 
                  alt={previewPark.name} 
                  className="object-cover w-full h-full shadow-lg" 
                />
                <div className="absolute bottom-4 left-6 text-white drop-shadow-md">
                  <h3 className="font-helvetica font-bold text-sm uppercase">{previewPark.name}</h3>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Subtitle */}
        <div className="w-full px-4 lg:px-0 mb-4 mt-4 lg:mt-8" id="gallery-section">
          <h2 className="font-helvetica font-bold text-xl leading-relaxed">
            Revisa nuestra galería aquí
          </h2>
        </div>

        <div className="w-full lg:-mx-6 lg:w-[calc(100%+3rem)]">
          <Gallery 
            parks={displayParks} 
            onParkClick={(park) => handleOpenModal(park, 'dashboard')} 
            onParkHover={setHoveredPark}
          />
        </div>

        {/* DESKTOP BOTTOM ROW */}
        <div className="w-full lg:flex lg:flex-row lg:justify-between lg:items-start mt-12 lg:mt-[15vh] mb-[20vh] lg:mb-[40vh]">
          <div className="w-full lg:w-1/2 lg:pr-8">
            {/* Pre-Search CTA */}
            <section className="w-full px-4 lg:px-0 mb-6 flex flex-col items-start">
              <p className="font-andale text-[13px] lg:text-[15px] leading-relaxed text-justify w-full">
                Gracias a esta herramienta interactiva podrás determinar qué parque te queda más cerca y al picar sobre una opción se desplegará información sobre él.
              </p>
            </section>

            <Map userLocation={userLocation} parks={displayParks} />

            <div className="mt-4 w-full">
              <LocationSearch onLocationFound={setUserLocation} />
            </div>

            {userLocation && (
              <div className="w-full px-4 lg:px-0 mt-4">
                <div className="w-full font-andale text-[11pt] text-gray-800 border-l-4 border-black pl-3 py-1">
                  <p><span className="font-bold">Ubicación detectada:</span></p>
                  <p className="truncate text-sm">{userLocation.address || 'Coordenadas actuales'}</p>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 lg:pl-16 mt-16 lg:mt-0 flex justify-center lg:justify-end px-4 mb-8">
            {/* Archive Gateway Button */}
            <button 
              onClick={() => setActiveView('archive')}
              className="w-full lg:w-3/4 border-2 border-black bg-white py-4 px-6 hover:bg-gray-100 transition-opacity duration-200 hover:opacity-75 active:opacity-50 flex flex-col items-center justify-center text-center"
            >
              <span className="font-andale font-bold text-[14pt] leading-tight block mb-2">
                sumérgete en nuestro archivo
              </span>
              <span className="font-andale text-[10pt] leading-tight tracking-[0.15em] block">
                son más de 80 parques para ti
              </span>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
