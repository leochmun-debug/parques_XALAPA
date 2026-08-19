export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] h-full w-full overflow-hidden opacity-[0.15] mix-blend-multiply">
      <svg 
        className="absolute -inset-[200%] h-[400%] w-[400%] animate-noise"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
