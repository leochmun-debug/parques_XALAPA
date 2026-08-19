import React, { useState, useEffect, useRef } from 'react';
import { Park, parks } from '@/data/parks';

interface ArchiveViewProps {
  onParkSelect: (park: Park) => void;
  onClose: () => void;
}

import { ScrambleText } from './ScrambleText';

export default function ArchiveView({ onParkSelect, onClose }: ArchiveViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredParks = parks.filter(park => 
    park.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-x-hidden font-andale text-black">
      
      {/* Top Controls */}
      <div className="w-full flex justify-end p-4 sticky top-0 bg-white/90 z-10">
        <button 
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity"
          aria-label="Cerrar"
        >
          {/* Minimalist Thin-lined X Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="w-full max-w-md lg:max-w-6xl mx-auto relative flex flex-col items-start justify-start text-left px-4 lg:px-8 pb-8">
        
        <h1 className="font-helvetica font-bold text-xl leading-tight mb-2 uppercase">
          Más de 80 parques y áreas verdes
        </h1>
        
        <p className="font-andale text-[11pt] leading-snug mb-8 max-w-[280px]">
          información de infraestructura para actores gubernamentales y ciudadanía, recuento de condiciones actuales .
        </p>
        
        <div className="w-full mb-10">
          <input 
            type="text" 
            placeholder="realice una búsqueda por inicial"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-black px-4 py-3 outline-none font-andale focus:bg-gray-50"
          />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 border-t-2 border-black pt-4">
          {filteredParks.map((park, index) => (
            <div 
              key={index}
              onClick={() => onParkSelect(park)}
              className="w-full border-b-2 lg:border-2 border-black py-4 lg:p-4 transition-opacity duration-200 hover:opacity-75 lg:hover:-translate-y-1 lg:hover:shadow-lg active:opacity-50 cursor-pointer lg:bg-white"
            >
              <div className="font-andale uppercase text-sm tracking-wider">
                <ScrambleText text={park.name} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
