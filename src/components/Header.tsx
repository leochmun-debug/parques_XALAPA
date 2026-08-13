import React, { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onNavigate?: (view: 'inicio' | 'mapa' | 'archivo' | 'galeria') => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (target: 'inicio' | 'mapa' | 'archivo' | 'galeria') => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(target);
    }
  };

  return (
    <>
      <header className="w-full pt-8 pb-6 px-4">
        <div className="flex flex-row justify-between items-start w-full">
          {/* Bienvenidos - aligned perfectly to the 280px axis */}
          <div className="w-[280px]">
            <Image 
              src="/bienvenidos.png" 
              alt="Bienvenidos" 
              width={280}
              height={60}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
          {/* Hamburger Menu - top right */}
          <button 
            onClick={() => setMenuOpen(true)}
            className="w-8 h-8 flex flex-col justify-center space-y-1.5 p-1 group focus:outline-none hover:opacity-50 transition-opacity" 
            aria-label="Abrir Menu"
          >
            <span className="block w-full h-[2px] bg-black"></span>
            <span className="block w-full h-[2px] bg-black"></span>
            <span className="block w-3/4 h-[2px] bg-black ml-auto"></span>
          </button>
        </div>

        {/* Visita tus parques - constrained to the same 280px axis */}
        <div className="w-[280px] mt-4">
          <Image 
            src="/visita_tus_parque_y_jardines.png" 
            alt="Visita tus parques y jardines" 
            width={280}
            height={70}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Institutional Logos 
             STRICT AXIS RULE: Header block width forced to exactly 280px. */}
        <div className="w-[280px] mt-2">
          <Image 
            src="/logo_triple_negros_usar.png" 
            alt="Logos Institucionales" 
            width={280}
            height={35}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center font-helvetica uppercase font-bold text-3xl space-y-8">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-4 w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity"
            aria-label="Cerrar Menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button onClick={() => handleNav('inicio')} className="hover:opacity-50 hover:tracking-widest transition-all">INICIO</button>
          <button onClick={() => handleNav('mapa')} className="hover:opacity-50 hover:tracking-widest transition-all">MAPA</button>
          <button onClick={() => handleNav('archivo')} className="hover:opacity-50 hover:tracking-widest transition-all">ARCHIVO</button>
          <button onClick={() => handleNav('galeria')} className="hover:opacity-50 hover:tracking-widest transition-all">GALERÍA</button>
        </div>
      )}
    </>
  );
}
