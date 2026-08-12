"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Park } from '@/data/parks';

interface ParkModalProps {
  park: Park | null;
  onClose: () => void;
}

export default function ParkModal({ park, onClose }: ParkModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (park) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [park]);

  if (!park) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-start p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div className="w-full flex justify-end py-4 max-w-md mx-auto">
        <button 
          className="font-andale text-[11pt] tracking-wider uppercase border-b border-black outline-none"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
      
      <div 
        className="w-full max-w-md mx-auto flex flex-col items-start justify-start text-left mt-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-auto min-h-[300px] max-h-[60vh] mb-4 bg-gray-50">
          <Image 
            src={park.image} 
            alt={park.name} 
            fill
            className="object-contain"
          />
        </div>
        <h2 className="font-helvetica font-bold text-xl uppercase mb-2 m-0">{park.name}</h2>
        <div className="font-andale text-[11pt] text-gray-800 space-y-2 w-full">
          <p><span className="font-bold">Ubicación:</span> {park.colonia}</p>
          <p><span className="font-bold">Horario:</span> {park.horario}</p>
          <p><span className="font-bold">Escala:</span> {park.escala}</p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${park.lat},${park.lng}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 text-white font-helvetica font-bold uppercase text-xs px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
