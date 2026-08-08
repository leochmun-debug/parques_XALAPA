"use client";

import React, { useState, useMemo } from 'react';

const PARKS_DATA = [
  { name: 'Parque Ecológico Macuiltepetl', eco: 10, social: 9, feas: 5, type: 'Pulmón Urbano / Alta Densidad' },
  { name: 'Parque Barranca Honda', eco: 10, social: 9, feas: 4, type: 'Periferia / Corredor Biológico' },
  { name: 'Parque Lineal Quetzalapan Sedeño', eco: 10, social: 9, feas: 4, type: 'Rescate Hídrico / Periferia' },
  { name: 'Parque Ecológico El Haya', eco: 10, social: 6, feas: 7, type: 'Bosque Mesófilo / Conservación' },
  { name: 'Paseo de los Lagos', eco: 9, social: 6, feas: 8, type: 'Cuerpo de Agua / Icónico' },
  { name: 'Parque Los Tecajetes', eco: 8, social: 4, feas: 9, type: 'Centro / Barranca Urbana' },
  { name: 'Parque La Estación', eco: 9, social: 7, feas: 7, type: 'Zona Histórica / Alta Visibilidad' },
  { name: 'Parque Miguel Hidalgo', eco: 7, social: 4, feas: 9, type: 'Centro / Emblemático' },
  { name: 'Parque Benito Juárez', eco: 7, social: 4, feas: 10, type: 'Centro Histórico / Explanada' },
  { name: 'Parque La Lagunilla', eco: 6, social: 10, feas: 5, type: 'Zona Vulnerable / Déficit Verde' },
  { name: 'Parque Unidad el Cafetal', eco: 5, social: 10, feas: 5, type: 'Sumidero / Prioridad Social' },
  { name: 'Lomas del Sumidero', eco: 4, social: 10, feas: 5, type: 'Sumidero / Recuperación de Espacio' },
  { name: 'Parque El Conejo', eco: 5, social: 10, feas: 5, type: 'Unidad y Trabajo / ZAP' },
  { name: 'Parque Jovita', eco: 5, social: 9, feas: 6, type: 'Revolución / Tejido Social' },
  { name: 'Ecologico el Naranjillo', eco: 5, social: 10, feas: 4, type: 'Casa Blanca / Vulnerabilidad' },
  { name: 'Parque Municipal del Castillo', eco: 4, social: 10, feas: 4, type: 'El Castillo / Periferia' },
  { name: 'Parque Bicentenario', eco: 5, social: 4, feas: 9, type: 'Centro / Alta Factibilidad' },
  { name: 'Barrio Xallitic', eco: 5, social: 4, feas: 9, type: 'Centro / Valor Patrimonial' },
  { name: 'Parque La Señoría', eco: 6, social: 2, feas: 8, type: 'Ánimas / Alta Plusvalía' },
  { name: 'Parque Hundido', eco: 7, social: 2, feas: 8, type: 'Ánimas / Control Pluvial' },
  { name: 'Marina Nacional', eco: 9, social: 9, feas: 4, type: 'San Roque / Gran Extensión' }
];

// Generate the remaining 49 parks to complete 70
for (let i = 22; i <= 70; i++) {
  PARKS_DATA.push({
    name: `Parque Genérico ${i}`,
    eco: Math.floor(Math.random() * 3) + 4, // 4-6
    social: Math.floor(Math.random() * 3) + 5, // 5-7
    feas: Math.floor(Math.random() * 3) + 6, // 6-8
    type: 'Área Verde Estándar / Municipal'
  });
}

export default function DashboardPage() {
  const [wEco, setWEco] = useState(33);
  const [wSocial, setWSocial] = useState(33);
  const [wFeas, setWFeas] = useState(34);

  const scoredParks = useMemo(() => {
    let totalWeight = wEco + wSocial + wFeas;
    if (totalWeight === 0) totalWeight = 1;
    
    const mapped = PARKS_DATA.map(park => {
      const finalScore = (
        (park.eco * wEco) +
        (park.social * wSocial) +
        (park.feas * wFeas)
      ) / totalWeight;
      
      return { ...park, finalScore };
    });
    
    return mapped.sort((a, b) => b.finalScore - a.finalScore);
  }, [wEco, wSocial, wFeas]);

  const top5 = scoredParks.slice(0, 5);
  const winner = top5[0];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 lg:gap-40 justify-start items-start text-left font-andale">
      
      {/* LEFT COLUMN: Controls */}
      <div className="w-full md:w-[45%] flex flex-col">
        <h1 className="font-helvetica font-bold text-3xl md:text-4xl tracking-tight leading-none mb-2">
          matriz de evaluación multicriterio (MCE)
        </h1>
        <h2 className="font-helvetica font-bold text-sm md:text-base mb-6 tracking-wide">
          dirección de desarrollo urbano de Xalapa.
        </h2>
        
        <p className="font-andale text-sm mb-6 leading-relaxed max-w-md">
          ajuste las barras que muestran diferentes criterios para ver cómo las prioridades que se tomen en cuenta determinan el parque o area verde bajo responsabilidad municipal a intervenir.
        </p>

        {/* Thick black separator */}
        <div className="w-full h-4 bg-black mb-10"></div>

        <h3 className="font-helvetica font-bold text-xl mb-10">
          prioridades de política urbana (ejes)
        </h3>

        {/* Sliders Container */}
        <div className="flex flex-col gap-10">
          
          {/* Eco Slider */}
          <div className="flex flex-col">
            <label className="font-helvetica font-bold text-lg italic">
              impacto ecológico
            </label>
            <span className="font-andale text-xs text-gray-700 mb-2">
              permeabilidad, biodiversidad, estado de arbolamiento
            </span>
            <input 
              type="range" 
              min="0" max="100" 
              value={wEco} 
              onChange={(e) => setWEco(Number(e.target.value))}
              className="w-full appearance-none h-[2px] bg-black outline-none slider-thumb-eco accent-green-600"
              style={{ accentColor: '#22c55e' }}
            />
          </div>

          {/* Social Slider */}
          <div className="flex flex-col">
            <label className="font-helvetica font-bold text-lg italic">
              equidad social
            </label>
            <span className="font-andale text-xs text-gray-700 mb-2">
              déficit de área verde, reducción de crimen, uso comunitario
            </span>
            <input 
              type="range" 
              min="0" max="100" 
              value={wSocial} 
              onChange={(e) => setWSocial(Number(e.target.value))}
              className="w-full appearance-none h-[2px] bg-black outline-none slider-thumb-soc accent-blue-600"
              style={{ accentColor: '#2563eb' }}
            />
          </div>

          {/* Feasibility Slider */}
          <div className="flex flex-col">
            <label className="font-helvetica font-bold text-lg italic">
              factibilidad física
            </label>
            <span className="font-andale text-xs text-gray-700 mb-2">
              topografía, infraestructura presente
            </span>
            <input 
              type="range" 
              min="0" max="100" 
              value={wFeas} 
              onChange={(e) => setWFeas(Number(e.target.value))}
              className="w-full appearance-none h-[2px] bg-black outline-none slider-thumb-feas accent-red-600"
              style={{ accentColor: '#dc2626' }}
            />
          </div>

        </div>

        <div className="mt-12 flex">
          <button className="border border-black px-6 py-1 font-helvetica font-bold text-sm hover:bg-black hover:text-white transition-colors">
            desplegar &nbsp; sub-criterios
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN: Leaderboard */}
      <div className="w-full md:w-[55%] flex flex-col pt-8 items-start justify-start text-left">
        
        {/* Winner Card */}
        <div className="flex flex-col mb-16 items-start justify-start w-full max-w-3xl mx-0">
          <div className="border border-black w-full p-2 text-left flex flex-col justify-start items-start">
            <h2 className="font-helvetica font-bold text-2xl md:text-3xl tracking-tight leading-none mb-1">
              {winner.name.toLowerCase()}
            </h2>
            <span className="font-andale text-xs tracking-widest">
              recomendación de área a intervenir
            </span>
          </div>
          <div className="mt-4 font-andale text-xs text-left w-full max-w-3xl mx-0 justify-start items-start">
            calificación: {winner.finalScore.toFixed(2)} / 10.00 &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp; {winner.type.toLowerCase()}
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="w-full max-w-3xl mx-0 flex flex-col items-start justify-start text-left">
          {/* Table Headers */}
          <div className="flex w-full mb-6 text-[10px] md:text-xs">
            <div className="w-[50%]"></div>
            <div className="w-[30%] text-left font-andale">
              calificaciones base (i/e/f)
            </div>
            <div className="w-[20%] text-left font-andale">
              calificación total
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col gap-8">
            {top5.map((park, index) => (
              <div key={index} className="flex w-full items-center">
                <div className="w-[50%] flex flex-col">
                  <span className="font-andale font-bold text-[10px] leading-none mb-1">
                    #{index + 1}
                  </span>
                  <span className="font-helvetica font-bold text-xl md:text-2xl leading-none">
                    {park.name.toLowerCase()}
                  </span>
                </div>
                
                <div className="w-[30%] text-left font-andale text-xs tracking-widest">
                  i:{park.eco} / e:{park.social} / f:{park.feas}
                </div>
                
                <div className="w-[20%] text-left font-andale font-bold text-sm">
                  {park.finalScore.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
