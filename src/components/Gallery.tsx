"use client";

import React from 'react';
import Image from 'next/image';
import { Park } from '@/data/parks';
import { ParkWithDistance } from '@/app/page';

interface GalleryProps {
  parks: ParkWithDistance[];
  onParkClick: (park: Park) => void;
}

export default function Gallery({ parks, onParkClick }: GalleryProps) {
  return (
    <section className="w-full pt-2 pb-12 mb-16 overflow-hidden">
      {/* STRICT AXIS RULE: Gallery items gap alignment. 
           We defined the header axis at exactly 280px width (plus 16px left padding = 296px).
           Card 1 (132px) + Gap (16px) + Card 2 (132px) = 280px width!
           Therefore, the right edge of Card 2 (and the start of the vertical gap between Card 2 & 3)
           aligns absolutely perfectly with the 280px vertical layout axis established by the logos! */}
      
      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 px-4 pb-4" id="gallery-grid">
        {parks.map((park, idx) => (
          <div 
            key={idx}
            className="snap-start flex-none w-[132px] flex flex-col items-start text-left cursor-pointer group"
            onClick={() => onParkClick(park)}
          >
            <div className="w-full aspect-square overflow-hidden bg-gray-100 mb-2 relative group-hover:opacity-90 transition-opacity">
              <Image 
                src={park.image} 
                alt={park.name} 
                fill
                className="object-cover" 
              />
              {park.distanceKm !== undefined && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white font-helvetica font-bold text-[10px] px-1.5 py-0.5">
                  {park.distanceKm.toFixed(1)} km
                </div>
              )}
            </div>
            <h3 className="font-helvetica font-bold text-[11pt] uppercase leading-tight line-clamp-2 m-0 group-hover:text-blue-600 transition-colors">
              {park.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

