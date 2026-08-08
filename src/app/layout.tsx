import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parques Xalapa",
  description: "Oferta de parques en Xalapa",
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
