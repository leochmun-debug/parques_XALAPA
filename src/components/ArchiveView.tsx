import React, { useState, useEffect, useRef } from 'react';
import { Park, parks } from '@/data/parks';

interface ArchiveViewProps {
  onParkSelect: (park: Park) => void;
  onClose: () => void;
}

// Scramble text effect component
const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const scramble = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 2; // Speed control
    }, 30);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          scramble();
          hasAnimatedRef.current = true; // Only animate once per mount/scroll to prevent annoying looping
        } else if (!entries[0].isIntersecting) {
          // Reset so it animates again when they scroll back to it
          hasAnimatedRef.current = false;
          reset();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      observer.disconnect();
    };
  }, [text]);

  return (
    <span 
      ref={elementRef}
      onMouseEnter={() => {
        // Still allow manual hover trigger for desktop users
        hasAnimatedRef.current = true;
        scramble();
      }}
      onMouseLeave={reset}
      className="cursor-pointer inline-block w-full"
    >
      {displayText}
    </span>
  );
};

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

      <div className="w-full max-w-md mx-auto relative flex flex-col items-start justify-start text-left px-4 pb-8">
        
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

        <div className="w-full flex flex-col border-t-2 border-black">
          {filteredParks.map((park, index) => (
            <div 
              key={index}
              onClick={() => onParkSelect(park)}
              className="w-full border-b-2 border-black py-4 transition-opacity duration-200 hover:opacity-75 active:opacity-50"
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
