import React from 'react';
import Image from 'next/image';
import { Park } from '@/data/parks';

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

      <div className="w-full max-w-md mx-auto flex flex-col items-start justify-start text-left pb-16">
        
        {/* Title */}
        <h1 className="font-helvetica font-bold text-2xl px-4 mb-4 uppercase w-full">
          {park.name}
        </h1>

        {/* Hero Image - Zero Side Padding */}
        <div className="w-full relative h-[300px] mb-6">
          <Image 
            src={park.image} 
            alt={park.name} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Data Sheet */}
        <div className="w-full px-4 flex flex-col space-y-4">
          <div className="flex flex-col">
            <span className="font-bold">Horario de apertura:</span>
            <span>{park.horario}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Uso general del parque:</span>
            <span>{park.uso_general || "No disponible"}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Infraestructura presente:</span>
            <span>{park.infraestructura || "No disponible"}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Año de inauguración:</span>
            <span>{park.año_inauguracion || "Desconocido"}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Estado general del inmueble:</span>
            <span>{park.estado_general || "Sin evaluación reciente"}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold">Última rehabilitación:</span>
            <span>{park.ultima_rehabilitacion || "No registrada"}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
