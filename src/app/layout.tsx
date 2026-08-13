import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full flex flex-col font-andale bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
