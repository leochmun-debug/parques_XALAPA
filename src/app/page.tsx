"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import ParkModal from '@/components/ParkModal';
import LocationSearch, { LocationCoords } from '@/components/LocationSearch';
import ArchiveView from '@/components/ArchiveView';
import { Park, parks } from '@/data/parks';
import { calculateHaversineDistance } from '@/utils/distance';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export interface ParkWithDistance extends Park {
  distanceKm?: number;
}

const parkNfcMap: Record<string, { name: string, image: string }> = {
  juarez: { name: 'PARQUE JUÁREZ', image: '/juarez.png' },
  naturalia: { name: 'NATURALIA', image: '/naturalia_NFC.png' },
  bicentenario: { name: 'PARQUE BICENTENARIO', image: '/parque_bicentenario_NFC.png' },
  los_lagos: { name: 'LOS LAGOS', image: '/los_lagos_NFC.png' },
  macuiltepetl: { name: 'MACUILTÉPETL', image: '/macuiltepetl_NFC.png' },
};

function NfcWelcomeView({ 
  parkId, 
  challenge, 
  onDismiss 
}: { 
  parkId: string; 
  challenge: string; 
  onDismiss: () => void; 
}) {
  const parkData = parkNfcMap[parkId] || { name: parkId.toUpperCase(), image: '/placeholder.jpg' };

  return (
    <div className="w-full min-h-screen bg-[#f4f4f4] flex flex-col justify-start text-left font-andale pb-12">
      {/* Hero Image */}
      <div className="relative w-full h-64">
        <Image 
          src={parkData.image} 
          alt={parkData.name} 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay for text readability */}
        <h1 className="absolute bottom-4 left-4 text-white font-helvetica font-bold text-3xl uppercase leading-none drop-shadow-md">
          BIENVENIDES A<br />{parkData.name}
        </h1>
      </div>

      {/* Institutional Logos */}
      <div className="w-full px-4 mt-6 flex justify-start">
        <Image 
          src="/logo_triple_negros_usar.png" 
          alt="Logos Institucionales" 
          width={280} 
          height={35} 
          style={{ maxWidth: '280px', height: 'auto' }} 
        />
      </div>

      {/* Challenge Section */}
      <div className="w-full px-4 mt-10 flex flex-col items-start text-left">
        <h2 className="font-helvetica font-bold text-2xl text-green-800 lowercase leading-tight">
          {challenge}
        </h2>
        
        {/* Progress Trees */}
        <div className="flex flex-row gap-2 mt-6">
          <Image src="/arbolito.png" alt="Arbolito completado" width={32} height={40} />
          <Image src="/arbolito.png" alt="Arbolito completado" width={32} height={40} />
          <Image src="/arbolito.png" alt="Arbolito completado" width={32} height={40} />
          <Image src="/arbolito vacio.png" alt="Arbolito vacío" width={32} height={40} />
          <Image src="/arbolito vacio.png" alt="Arbolito vacío" width={32} height={40} />
        </div>
        
        <p className="font-helvetica font-medium text-green-800 text-lg lowercase mt-4 leading-snug tracking-wide">
          completa dos arbolitos más para reclamar tu premio
        </p>
      </div>

      {/* Action Button */}
      <div className="w-full px-4 mt-12 mb-8">
        <button 
          onClick={onDismiss}
          className="w-full bg-black text-white font-helvetica font-bold uppercase py-4 text-xl tracking-wider hover:bg-gray-800 transition-opacity active:opacity-50"
        >
          ingresar al portal
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeView, setActiveView] = useState<'dashboard' | 'archive' | 'modal' | 'nfc'>('dashboard');
  const [previousView, setPreviousView] = useState<'dashboard' | 'archive'>('dashboard');
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);
  const [userLocation, setUserLocation] = useState<LocationCoords | null>(null);
  const [nfcParams, setNfcParams] = useState<{ parkId: string, challenge: string } | null>(null);
  
  // State for the desktop Hero Image preview
  const [hoveredPark, setHoveredPark] = useState<Park | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const parkId = params.get('park_id');
      const challenge = params.get('challenge');
      if (parkId && challenge) {
        setNfcParams({ parkId, challenge });
        setActiveView('nfc');
      }
    }
  }, []);

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

  const handleHeaderNav = (view: 'inicio' | 'mapa' | 'archivo' | 'galeria' | 'nfc_simulator') => {
    if (view === 'archivo') {
      setActiveView('archive');
    } else if (view === 'nfc_simulator') {
      setNfcParams({ parkId: 'juarez', challenge: '¡reto ecológico activado!' });
      setActiveView('nfc');
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

  if (activeView === 'nfc' && nfcParams) {
    return <NfcWelcomeView parkId={nfcParams.parkId} challenge={nfcParams.challenge} onDismiss={() => setActiveView('dashboard')} />;
  }

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
      <div className="w-full max-w-md mx-auto relative flex flex-col items-start justify-start text-left">
        
        <Header onNavigate={handleHeaderNav} />
        
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
        <div className="w-full px-4 mb-1 mt-4" id="gallery-section">
          <h2 className="font-helvetica font-bold text-xl tracking-wide leading-relaxed">
            O revisa nuestra galería aquí
          </h2>
        </div>

        <Gallery parks={displayParks} onParkClick={(park) => handleOpenModal(park, 'dashboard')} />

      </div>
    </main>
  );
}
