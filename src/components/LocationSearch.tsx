"use client";

import React, { useState } from 'react';

export interface LocationCoords {
  lat: number;
  lng: number;
  address?: string;
}

interface LocationSearchProps {
  onLocationFound: (location: LocationCoords) => void;
}

export default function LocationSearch({ onLocationFound }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAutoLocation = () => {
    setError(null);
    setLoading(true);

    if (!navigator.geolocation) {
      setError("Tu navegador no soporta geolocalización.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);
        onLocationFound({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          address: "Tu ubicación actual"
        });
      },
      (err) => {
        setLoading(false);
        setError("No se pudo obtener tu ubicación. Intenta buscar manualmente.");
      },
      { timeout: 10000, maximumAge: 0 }
    );
  };

  const handleManualSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setError(null);
    setLoading(true);

    try {
      // Agregamos "Xalapa, Veracruz" explícitamente para limitar y mejorar los resultados
      const query = `${searchQuery}, Xalapa, Veracruz`;
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`);
      const data = await response.json();

      if (data && data.length > 0) {
        onLocationFound({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
          address: data[0].display_name.split(',')[0] // Tomamos la parte más relevante
        });
        setSearchQuery('');
      } else {
        setError("No encontramos ese lugar en Xalapa. Intenta ser más específico.");
      }
    } catch (err) {
      setError("Hubo un error al buscar. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-6 mb-4 flex flex-col items-start justify-start text-left font-andale text-[11pt]">
      <div className="w-full flex flex-col space-y-3">
        <button 
          onClick={handleAutoLocation}
          disabled={loading}
          className="w-full bg-white border-2 border-black text-black py-3 font-andale lowercase tracking-widest text-sm hover:bg-gray-100 transition-opacity duration-200 hover:opacity-75 active:opacity-50 disabled:opacity-50"
        >
          {loading ? "buscando..." : "usar mi ubicación"}
        </button>
        
        <div className="flex items-center w-full">
          <div className="flex-grow h-[2px] bg-black"></div>
          <span className="px-3 text-black text-xs uppercase font-andale">O BUSCAR</span>
          <div className="flex-grow h-[2px] bg-black"></div>
        </div>

        <form onSubmit={handleManualSearch} className="w-full flex flex-row">
          <input 
            type="text" 
            placeholder="Ej. Calle Enríquez..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={loading}
            className="flex-grow border-2 border-black border-r-0 px-3 py-3 outline-none focus:bg-gray-50 font-andale"
          />
          <button 
            type="submit"
            disabled={loading || !searchQuery.trim()}
            className="bg-black text-white px-6 font-andale uppercase transition-opacity duration-200 hover:opacity-75 active:opacity-50 disabled:opacity-50"
          >
            I R
          </button>
        </form>
      </div>

      {error && (
        <p className="text-red-600 text-xs mt-2 font-andale font-bold">{error}</p>
      )}
    </div>
  );
}
