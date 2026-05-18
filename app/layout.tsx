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
  title: "Aratticum - Produtos Naturais Premium",
  description: "Descubra produtos naturais de alta qualidade. Cuidado artesanal, sustentabilidade genuína e bem-estar autêntico. Em português, inglês e espanhol.",
  keywords: ["Aratticum", "produtos naturais", "bem-estar", "sustentável"],
  openGraph: {
    title: "Aratticum - Produtos Naturais Premium",
    description: "Transforme sua rotina com produtos naturais de excelência.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
