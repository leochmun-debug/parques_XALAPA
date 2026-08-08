"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';
import { ParkWithDistance } from '@/app/page';
import { LocationCoords } from './LocationSearch';

// Fix for default Leaflet icon paths in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const redDotIcon = L.divIcon({
  className: 'custom-red-dot',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -7]
});

const userDotIcon = L.divIcon({
  className: 'custom-red-dot !bg-blue-600 !border-white',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
  popupAnchor: [0, -8]
});

// Component to recenter map when user location changes
function RecenterMap({ location }: { location: LocationCoords | null }) {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], 14, { animate: true });
    }
  }, [location, map]);
  return null;
}

interface MapProps {
  userLocation: LocationCoords | null;
  parks: ParkWithDistance[];
}

export default function Map({ userLocation, parks }: MapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[450px] bg-gray-200" />;
  }

  // Centrado inicial en Xalapa si no hay userLocation
  const defaultCenter: [number, number] = [19.5312, -96.9159];

  return (
    <section className="w-full h-[450px] bg-gray-200 relative z-0" id="map-container">
      <MapContainer 
        center={defaultCenter} 
        zoom={14} 
        zoomControl={false}
        className="w-full h-full"
      >
        <RecenterMap location={userLocation} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          maxZoom={20}
        />
        
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userDotIcon}>
            <Popup>Tu ubicación ({userLocation.address})</Popup>
          </Marker>
        )}

        {parks.map((park, idx) => (
          <Marker key={idx} position={[park.lat, park.lng]} icon={redDotIcon}>
            <Popup minWidth={240} maxWidth={240}>
              <div className="flex flex-col bg-white text-left justify-start m-0 p-0 w-full h-full font-andale text-[11pt]">
                <div className="w-full h-32 m-0 p-0 relative">
                  <Image src={park.image} alt={park.name} fill className="object-cover block m-0 p-0" />
                </div>
                <div className="p-4 flex flex-col items-start justify-start text-left">
                  <h4 className="font-helvetica font-bold text-sm uppercase m-0 leading-tight">
                    {park.name}
                  </h4>
                  <div className="space-y-1 mt-2 text-gray-800 w-full text-xs">
                    {park.distanceKm !== undefined && (
                      <p className="m-0 text-blue-600 font-bold mb-1">A {park.distanceKm.toFixed(2)} km de ti</p>
                    )}
                    <p className="m-0"><span className="font-bold">Ubicación:</span> {park.colonia}</p>
                    <p className="m-0"><span className="font-bold">Horario:</span> {park.horario}</p>
                    <p className="m-0"><span className="font-bold">Escala:</span> {park.escala}</p>
                    
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${park.lat},${park.lng}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 bg-blue-600 text-white font-helvetica font-bold uppercase text-[10px] px-3 py-1.5 hover:bg-blue-700 transition-colors w-full text-center"
                    >
                      📍 Abrir en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
