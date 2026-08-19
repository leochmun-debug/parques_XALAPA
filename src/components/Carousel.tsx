"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { parks } from '@/data/parks';

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: number) => {
    if (!carouselRef.current || !carouselRef.current.firstElementChild) return;
    const itemWidth = (carouselRef.current.firstElementChild as HTMLElement).offsetWidth;
    carouselRef.current.scrollBy({ left: direction * itemWidth, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full mt-2">
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth w-full" 
        id="carousel"
      >
        {parks.map((park, idx) => (
          <div key={idx} className="flex-[0_0_100%] min-w-0 snap-start snap-always relative aspect-square bg-gray-100">
            <Image 
              src={park.images && park.images.length > 0 ? park.images[0] : '/placeholder.jpg'} 
              alt={park.name} 
              fill
              className="object-cover" 
              priority={idx === 0}
            />
            {/* Very subtle grey subtitle in Andale Mono */}
            <div className="absolute bottom-3 left-4 z-20">
              <span className="font-andale text-gray-300 text-[11pt] tracking-wide drop-shadow-md">
                {park.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Inward Custom Arrows */}
      <button 
        onClick={() => scrollCarousel(-1)}
        className="absolute top-1/2 left-[20%] -translate-y-1/2 z-10 w-10 h-10 cursor-pointer opacity-90 active:opacity-100 bg-transparent border-none p-0 outline-none"
        aria-label="Previous image"
      >
        <Image src="/left_arrow.png" alt="Previous" fill className="object-contain drop-shadow-lg" />
      </button>
      
      <button 
        onClick={() => scrollCarousel(1)}
        className="absolute top-1/2 right-[20%] -translate-y-1/2 z-10 w-10 h-10 cursor-pointer opacity-90 active:opacity-100 bg-transparent border-none p-0 outline-none"
        aria-label="Next image"
      >
        <Image src="/right_arrow.png" alt="Next" fill className="object-contain drop-shadow-lg" />
      </button>
    </section>
  );
}
