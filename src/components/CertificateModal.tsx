"use client";

import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ---------------------------------------------------------------------------
// Lightweight Hashing Function
// ---------------------------------------------------------------------------
export function generateVoucher(parks: string[], secret: string): string {
  const combined = [...parks].sort().join('-') + '-' + secret;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  const positiveHash = Math.abs(hash);
  // Convert to base36 (alphanumeric) and pad or slice to exactly 5 chars, then prepend prefix
  const alphanumeric = positiveHash.toString(36).toUpperCase().padStart(5, '0').slice(0, 5);
  return `XAL-${alphanumeric}`;
}

// ---------------------------------------------------------------------------
// CanvasRevealEffect (Lightweight replica of Aceternity UI canvas effect)
// ---------------------------------------------------------------------------
export const CanvasRevealEffect = ({
  animationSpeed = 5.1,
  opacities = [0.1, 0.2, 0.3, 0.5, 0.8, 1],
  containerClassName,
  dotSize = 3,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize dot opacities grid
    const cols = Math.ceil(width / dotSize);
    const rows = Math.ceil(height / dotSize);
    const dots = Array.from({ length: cols * rows }, () => Math.random());

    let time = 0;
    const render = () => {
      time += animationSpeed * 0.01;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const index = i * rows + j;
          // Slowly fluctuate opacities based on time and index
          const fluctuation = Math.sin(time + dots[index] * 100) * 0.5 + 0.5;
          
          // Randomly pick an opacity level from the provided array
          const targetOpacityLevel = opacities[Math.floor(fluctuation * (opacities.length - 1))];
          
          ctx.fillStyle = `rgba(255, 255, 255, ${targetOpacityLevel * 0.4})`;
          ctx.fillRect(i * dotSize, j * dotSize, dotSize - 1, dotSize - 1);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationSpeed, dotSize, opacities]);

  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// View 5: Certificate Modal
// ---------------------------------------------------------------------------
interface CertificateModalProps {
  visitedParks: string[];
  onDismiss: () => void;
}

export default function CertificateModal({ visitedParks, onDismiss }: CertificateModalProps) {
  const secret = 'xal_eco_26';
  const voucherCode = useMemo(() => generateVoucher(visitedParks, secret), [visitedParks]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Canvas Reveal Effect */}
      <div className="absolute inset-0 w-full h-full">
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-emerald-900"
          dotSize={4}
        />
        {/* Radial gradient mask as requested to ensure text legibility */}
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-md text-white"
      >
        <h1 className="font-helvetica font-bold text-4xl uppercase mb-6 drop-shadow-lg tracking-wide leading-tight">
          CERTIFICADO<br/>ECOLÓGICO
        </h1>

        <div className="mb-8">
          <p className="font-andale font-bold text-[14pt] tracking-widest text-white">
            {voucherCode}
          </p>
        </div>

        <p className="font-andale text-[12pt] mb-12 opacity-90 max-w-[280px] leading-relaxed drop-shadow-md text-white">
          presenta este código ante el personal municipal para validar tu recorrido y desbloquear tu beneficio.
        </p>

        <button 
          onClick={onDismiss}
          className="bg-white text-black font-helvetica font-bold uppercase py-3 px-8 text-lg hover:bg-gray-200 transition-colors active:scale-95 transform rounded-sm"
        >
          Aceptar
        </button>
      </motion.div>
    </div>
  );
}
