'use client';

import { useState } from 'react';
import Image from 'next/image';
import banana1 from '../assets/banana1.jpg';
import banana2 from '../assets/banana2.jpg';
import banana3 from '../assets/banana3.jpg';
import banana4 from '../assets/banana4.jpg';
import cajuzinho1 from '../assets/cajuzinho1.jpg';
import cajuzinho2 from '../assets/cajuzinho2.jpg';
import cajuzinho3 from '../assets/cajuzinho3.jpg';
import cajuzinho4 from '../assets/cajuzinho4.jpg';
import flor1 from '../assets/flor1.jpg';
import flor2 from '../assets/flor2.jpg';
import flor3 from '../assets/flor3.jpg';
import flor4 from '../assets/flor4.jpg';
import cobogo1 from '../assets/cobogo1.jpg';
import cobogo2 from '../assets/cobogo2.jpg';
import cobogo3 from '../assets/cobogo3.jpg';
import cobogo4 from '../assets/cobogo4.jpg';
import copo1 from '../assets/copo1.jpg';
import copo2 from '../assets/copo2.jpg';
import copo3 from '../assets/copo3.jpg';
import copo4 from '../assets/copo4.jpg';
import molheira1 from '../assets/molheira1.jpg';
import molheira2 from '../assets/molheira2.jpg';
import molheira3 from '../assets/molheira3.jpg';
import molheira4 from '../assets/molheira4.jpg';
import mini1 from '../assets/mini1.jpg';
import mini2 from '../assets/mini2.jpg';
import mini3 from '../assets/mini3.jpg';
import mini4 from '../assets/mini4.jpg';
import maracuja1 from '../assets/maracuja1.jpg';
import maracuja2 from '../assets/maracuja2.jpg';
import maracuja3 from '../assets/maracuja3.jpg';
import maracuja4 from '../assets/maracuja4.jpg';
import araticum1 from '../assets/araticum1.jpg';    
import araticum2 from '../assets/araticum2.jpg';
import araticum3 from '../assets/araticum3.jpg';
import araticum4 from '../assets/araticum4.jpg';
import feliz1 from '../assets/feliz1.jpg';
import feliz2 from '../assets/feliz2.jpg';
import feliz3 from '../assets/feliz3.jpg';
import feliz4 from '../assets/feliz4.jpg';

// Mapeamento de imagens locais
const localImages = {
    banana1,
    banana2,
    banana3,
    banana4,
    cajuzinho1,
    cajuzinho2,
    cajuzinho3,
    cajuzinho4,
    flor1,
    flor2,
    flor3,
    flor4,
    cobogo1,
    cobogo2,
    cobogo3,
    cobogo4,
    copo1,
    copo2,
    copo3,
    copo4,
    molheira1,
    molheira2,
    molheira3,
    molheira4,
    mini1,
    mini2,
    mini3,
    mini4,
    maracuja1,
    maracuja2,
    maracuja3,
    maracuja4,
    araticum1,
    araticum2,
    araticum3,
    araticum4,
    feliz1,
    feliz2,
    feliz3,
    feliz4,
};

export default function Produtos({ t }) {
    const items = t.products.items;
    const productsPerPage = 4;
    const totalPages = Math.ceil(items.length / productsPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    const [activeImages, setActiveImages] = useState({});

    const getImagePath = (imageName) => {
        return localImages[imageName] || localImages.banana1;
    };

    const startIdx = (currentPage - 1) * productsPerPage;
    const endIdx = startIdx + productsPerPage;
    const currentProducts = items.slice(startIdx, endIdx);

    const handleImageSelect = (productIdx, imageIdx) => {
        setActiveImages(prev => ({
            ...prev,
            [productIdx]: imageIdx
        }));
    };

    const getActiveImageIdx = (productIdx) => {
        return activeImages[productIdx] ?? 0;
    };

    return (
        <section id="produtos" className="py-8 sm:py-12" style={{ background: "#FAF6F0" }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 sm:mb-20">
                    <p className="font-lato text-green-brand text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2 sm:mb-4">{t.products.eyebrow}</p>
                    <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-green-brand mb-4 sm:mb-6">{t.products.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
                    {currentProducts.map((p, idx) => {
                        const globalIdx = startIdx + idx;
                        const activeImgIdx = getActiveImageIdx(globalIdx);
                        const mainImage = getImagePath(p.images[activeImgIdx]);

                        return (
                            <div
                                key={globalIdx}
                                className="group bg-white overflow-hidden flex flex-col border border-transparent hover:border-green-brand/20 transition-all duration-500"
                            >

                                {/* Imagem Principal */}
                                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                                    <Image
                                        src={mainImage}
                                        alt={p.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{ filter: "sepia(8%) saturate(90%)" }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e1e]/70 via-transparent to-transparent" />

                                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                                        <span className="font-lato text-[8px] sm:text-[10px] text-green-brand tracking-[0.3em] uppercase bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5">
                                            {p.cat}
                                        </span>
                                    </div>
                                </div>

                                {/* Miniaturas */}
                                <div className="flex gap-1 sm:gap-2 bg-gray-50 p-2 sm:p-3 overflow-x-auto">
                                    {p.images.map((imgName, imgIdx) => {
                                        const img = getImagePath(imgName);
                                        return (
                                            <button
                                                key={imgIdx}
                                                onClick={() => handleImageSelect(globalIdx, imgIdx)}
                                                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${activeImgIdx === imgIdx
                                                        ? 'border-green-brand'
                                                        : 'border-green-brand/20 hover:border-green-brand/50'
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${p.name} view ${imgIdx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    style={{ filter: "sepia(8%) saturate(90%)" }}
                                                />
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Conteúdo */}
                                <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                                    <h3 className="font-playfair text-lg sm:text-xl md:text-2xl text-green-brand mb-2 tracking-wide">
                                        {p.name}
                                    </h3>

                                    <div className="w-6 sm:w-8 h-px bg-green-brand/40 mb-3 sm:mb-4" />

                                    <p className="font-lato text-xs sm:text-sm text-green-brand/85 leading-[1.7] sm:leading-[1.85] mb-4 sm:mb-6 flex-1">
                                        {p.desc}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* Paginação */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mt-12 sm:mt-16 overflow-x-auto pb-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className={`font-lato text-xs sm:text-sm px-2 sm:px-4 py-2 rounded border transition-all whitespace-nowrap ${currentPage === 1
                                    ? 'border-green-brand/20 text-green-brand/40 cursor-not-allowed'
                                    : 'border-green-brand text-green-brand hover:bg-green-brand/10'
                                }`}
                        >
                            Anterior
                        </button>

                        <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`font-lato text-xs sm:text-sm w-8 sm:w-10 h-8 sm:h-10 rounded border transition-all ${currentPage === page
                                            ? 'bg-green-brand text-white border-green-brand'
                                            : 'border-green-brand/40 text-green-brand hover:border-green-brand hover:bg-green-brand/10'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className={`font-lato text-xs sm:text-sm px-2 sm:px-4 py-2 rounded border transition-all whitespace-nowrap ${currentPage === totalPages
                                    ? 'border-green-brand/20 text-green-brand/40 cursor-not-allowed'
                                    : 'border-green-brand text-green-brand hover:bg-green-brand/10'
                                }`}
                        >
                            Próxima
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}