import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proposta de Desenvolvimento",
  description: "Proposta detalhada para desenvolvimento de software personalizado e escalável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload da cena Spline para carregamento antecipado */}
        <link 
          rel="preload" 
          href="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
          as="fetch" 
          crossOrigin="anonymous"
        />
        {/* Preload do runtime Spline */}
        <link 
          rel="preload" 
          href="https://unpkg.com/@splinetool/runtime" 
          as="script" 
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
