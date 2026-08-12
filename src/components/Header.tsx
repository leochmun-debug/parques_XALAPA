import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full pt-8 pb-6 px-4">
      <div className="flex flex-row justify-between items-start w-full">
        {/* Bienvenidos - aligned perfectly to the 280px axis */}
        <div className="relative w-[280px] h-[60px]">
          <Image 
            src="/bienvenidos.png" 
            alt="Bienvenidos" 
            fill
            className="object-contain object-left" 
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
      <div className="w-[280px] mt-6 relative h-[80px]">
        <Image 
          src="/visita_tus_parque_y_jardines.png" 
          alt="Visita tus parques y jardines" 
          fill
          className="object-contain object-left" 
        />
      </div>

      {/* Institutional Logos 
           STRICT AXIS RULE: Header block width forced to exactly 280px.
           The right edge of the third logo aligns perfectly with this axis. */}
      <div className="flex flex-row items-center justify-between w-[280px] mt-6 h-[40px] relative gap-2">
        <div className="relative w-1/3 h-full">
          <Image src="/logo_ayuntamiento_xalapa_negro.png" alt="Ayuntamiento" fill className="object-contain object-left" />
        </div>
        <div className="relative w-1/3 h-full">
          <Image src="/direccion_desarrollo_urbano_negro.png" alt="Desarrollo Urbano" fill className="object-contain object-center" />
        </div>
        <div className="relative w-1/3 h-full">
          <Image src="/medio_ambiente_logo_negro.png" alt="Medio Ambiente" fill className="object-contain object-right" />
        </div>
      </div>
    </header>
  );
}
