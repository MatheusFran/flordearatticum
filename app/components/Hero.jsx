'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import back1 from '../assets/back1.jpg';
import back2 from '../assets/back2.jpg';
import back3 from '../assets/back3.jpg';
import back4 from '../assets/back4.jpg';
import back5 from '../assets/back5.jpg';
import back6 from '../assets/back6.jpg';
import back7 from '../assets/back7.jpg';
import logo from '../assets/logo.png';


const backgroundImages = [back1, back2, back3, back4, back5, back6, back7];

export default function Hero({ t }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
        }, 3000); // Troca de imagem a cada 5 segundos

        return () => clearInterval(interval);
    }, []);
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background images carousel */}
            <div className="absolute inset-0 w-full h-full">
                {backgroundImages.map((img, idx) => (
                    <div
                        key={idx}
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{
                            opacity: idx === currentImageIndex ? 1 : 0,
                        }}
                    >
                        <Image
                            src={img}
                            alt={`Background ${idx + 1}`}
                            fill
                            className="object-cover"
                            priority={idx === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Pink overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F07A79]/70 to-[#F07A79]/60 z-5" />

            <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
                {/* Ornamental line */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-10">
                    <div className="h-px w-8 sm:w-16 bg-gold/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                    <div className="h-px w-8 sm:w-16 bg-gold/40" />
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <Image
                        src={logo}
                        alt="Aratticum Logo"
                        width={320}
                        height={256}
                        className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
                        priority
                    />
                </div>

                {/* <div className="flex items-center justify-center gap-3 my-6">
                    <div className="h-px w-10 bg-gold/30" />
                    <p className="font-lato text-xs text-gold/70 tracking-[0.35em] uppercase">{t.hero.tagline}</p>
                    <div className="h-px w-10 bg-gold/30" />
                </div> */}

                <p className="font-playfair italic text-cream/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto px-4">
                    {t.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 px-4">
                    <a
                        href="#produtos"
                        className="px-6 sm:px-10 py-3 sm:py-3.5 bg-gold text-green-brand font-lato font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:bg-[#D4AA2F] hover:shadow-[0_0_30px_rgba(201,162,39,0.3)]"
                    >
                        {t.hero.cta1}
                    </a>
                    <a
                        href="#historia"
                        className="px-6 sm:px-10 py-3 sm:py-3.5 border-2 border-white text-white font-lato font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:bg-white hover:text-green-brand"
                    >
                        {t.hero.cta2}
                    </a>
                </div>
            </div>

            {/* Bottom ornament */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                <div className="h-px w-px border-l border-gold/30 h-12 animate-pulse" style={{ height: "48px", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(201,162,39,0.4), transparent)" }} />
            </div>
        </section>
    );
}