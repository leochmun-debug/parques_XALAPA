import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
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
        <button className="w-8 h-8 flex flex-col justify-center space-y-1.5 p-1 group focus:outline-none" aria-label="Menu">
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
  );
}
