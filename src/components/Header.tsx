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
      <header className="w-full pt-8 pb-6 lg:px-0 relative">
        {/* Hamburger Menu - absolute top right on all views */}
        <button 
          onClick={() => setMenuOpen(true)}
          className="absolute top-10 right-4 lg:right-6 w-8 h-8 flex flex-col justify-center space-y-1.5 p-1 group focus:outline-none hover:opacity-50 transition-opacity z-40" 
          aria-label="Abrir Menu"
        >
          <span className="block w-full h-[2px] bg-black"></span>
          <span className="block w-full h-[2px] bg-black"></span>
          <span className="block w-3/4 h-[2px] bg-black ml-auto"></span>
        </button>

        <div className="flex flex-col justify-start items-start w-full pt-8 lg:pt-0">
          <div className="w-[280px] flex justify-start">
            <Image 
              src="/bienvenidos.png" 
              alt="Bienvenidos" 
              width={280}
              height={60}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>

          <div className="w-[280px] mt-4 flex justify-start">
            <Image 
              src="/visita_tus_parque_y_jardines.png" 
              alt="Visita tus parques y jardines" 
              width={280}
              height={70}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="w-[280px] mt-2 flex justify-start">
            <Image 
              src="/logo_triple_negros_usar.png" 
              alt="Logos Institucionales" 
              width={280}
              height={35}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col justify-center font-helvetica uppercase font-bold text-3xl">
          {/* Close Button Top Right */}
          <div className="absolute top-8 right-6 flex flex-row space-x-4">
            <button 
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Cerrar Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {/* Decorative hamburger lines next to the X as shown in the mockup */}
            <div className="w-10 h-10 flex flex-col justify-center space-y-1.5 p-1 hidden lg:flex">
              <span className="block w-full h-[2px] bg-black"></span>
              <span className="block w-full h-[2px] bg-black"></span>
              <span className="block w-full h-[2px] bg-black"></span>
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-end px-8 lg:px-24">
            {/* The black square from DESKTOP7 */}
            <div className="hidden lg:block w-24 h-24 bg-black mr-16"></div>

            {/* The Links stacked vertically on the right */}
            <div className="flex flex-col items-end space-y-6 text-2xl lg:text-4xl text-black">
              <button onClick={() => handleNav('inicio')} className="hover:text-gray-500 transition-colors">INICIO</button>
              <button onClick={() => handleNav('mapa')} className="hover:text-gray-500 transition-colors">MAPA</button>
              <button onClick={() => handleNav('archivo')} className="hover:text-gray-500 transition-colors">ARCHIVO</button>
              <button onClick={() => handleNav('galeria')} className="hover:text-gray-500 transition-colors">GALERÍA</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
