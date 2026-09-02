import type { Metadata, Viewport } from "next";
import "./globals.css";
import NoiseOverlay from "../components/NoiseOverlay";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
  themeColor: "#064e3b",
};

export const metadata: Metadata = {
  title: "Parques Xalapa",
  description: "Oferta de parques en Xalapa",
  openGraph: {
    title: "Parques Xalapa",
    description: "Oferta de parques y áreas verdes en Xalapa",
    url: "https://parquesxalapa.vercel.app", // Adjust if the domain is different
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Oferta de Parques en Xalapa",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
      </head>
      <body className="min-h-full flex flex-col font-andale bg-white text-black antialiased">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
