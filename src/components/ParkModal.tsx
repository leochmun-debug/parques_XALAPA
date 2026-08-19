import React from 'react';
import Image from 'next/image';
import { Park } from '@/data/parks';
import { ScrambleText } from './ScrambleText';

interface ParkModalProps {
  park: Park | null;
  onClose: () => void;
}

export default function ParkModal({ park, onClose }: ParkModalProps) {
  if (!park) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center overflow-y-auto font-andale text-black">
      
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

      <div className="w-full max-w-md lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-start text-left pb-16 lg:px-8">
        
        {/* Left Side: Images & Title */}
        <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-8">
          {/* Title */}
          <h1 className="font-helvetica font-bold text-2xl px-4 lg:px-0 mb-4 uppercase w-full">
            {park.name}
          </h1>

          {/* Hero Image / Gallery */}
          <div className="w-full relative h-[300px] lg:h-[500px] mb-6 flex flex-col">
            <div className="w-full h-full relative">
              <Image 
                src={park.images && park.images.length > 0 ? park.images[0] : '/placeholder.jpg'} 
                alt={park.name} 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* If there are more images, we could render a small strip here. 
                For now we just use the first image since most only have one. */}
            {park.images && park.images.length > 1 && (
              <div className="flex flex-row overflow-x-auto gap-2 mt-2">
                {park.images.map((img, idx) => (
                  <div key={idx} className="w-20 h-20 relative flex-shrink-0">
                    <Image src={img} alt={`${park.name} ${idx}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Data Sheet */}
        <div className="w-full lg:w-1/2 px-4 lg:px-0 flex flex-col space-y-4 lg:mt-12">
          <div className="flex flex-col">
            <span className="font-bold">Horario de apertura:</span>
            <ScrambleText text={park.horario} />
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Uso general del parque:</span>
            <ScrambleText text={park.uso_general || "No disponible"} />
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Infraestructura presente:</span>
            <ScrambleText text={park.infraestructura || "No disponible"} />
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Año de inauguración:</span>
            <ScrambleText text={park.año_inauguracion || "Desconocido"} />
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Estado general del inmueble:</span>
            <ScrambleText text={park.estado_general || "Sin evaluación reciente"} />
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Última rehabilitación:</span>
            <ScrambleText text={park.ultima_rehabilitacion || "No registrada"} />
          </div>
        </div>

      </div>
    </div>
  );
}
