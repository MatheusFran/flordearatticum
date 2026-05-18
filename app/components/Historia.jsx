"use client"

import Image from "next/image";
import img from "../assets/image.png";

export default function Historia({ t }) {
    const stats = [
        { val: t.history.stat1, sub: t.history.stat1sub },
        { val: t.history.stat2, sub: t.history.stat2sub },
        { val: t.history.stat3, sub: t.history.stat3sub },
        { val: t.history.stat4, sub: t.history.stat4sub },
    ];

    return (
        <section id="historia" className="py-8 sm:py-12" style={{ background: "#F07A79" }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 sm:mb-20">
                    <p className="font-lato text-green-brand text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2 sm:mb-4">{t.history.eyebrow}</p>
                    <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-green-brand mb-4 sm:mb-6">{t.history.title}</h2>
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="h-px w-8 sm:w-12 bg-green-brand/40" />
                        <div className="w-1 h-1 rounded-full bg-green-brand/60" />
                        <div className="h-px w-8 sm:w-12 bg-green-brand/40" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center mb-12 sm:mb-24">
                    {/* Image */}
                    <div className="relative order-2 md:order-1">
                        <div className="relative h-[300px] sm:h-[380px] md:h-[420px] w-full">
                            <Image
                                src={img}
                                alt="Aratticum natural products"
                                fill
                                className="object-contain"
                                // className="object-cover object-top"
                                style={{ filter: "sepia(10%) saturate(90%)" }}
                            />
                        </div>
                        <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 border border-white-brand/25 p-3 sm:p-6 bg-white/5 backdrop-blur-sm">
                            <p className="font-playfair italic text-white-brand text-xs sm:text-base">{t.history.quote}</p>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                        <p className="font-playfair italic text-green-brand/85 text-lg sm:text-xl leading-relaxed">
                            {t.history.p1}
                        </p>
                        <p className="font-lato text-green-brand/60 text-xs sm:text-sm leading-[1.8] sm:leading-[1.9]">{t.history.p2}</p>
                        <p className="font-lato text-green-brand/60 text-xs sm:text-sm leading-[1.8] sm:leading-[1.9]">{t.history.p3}</p>
                    </div>
                </div>

                {/* Stats row */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-green-brand/10">
                    {stats.map((s, i) => (
                        <div key={i} className="text-center py-10 px-6" style={{ background: "#F07A79" }}>
                            <p className="font-playfair text-2xl text-green-brand mb-2">{s.val}</p>
                            <div className="w-6 h-px bg-green-brand/30 mx-auto mb-3" />
                            <p className="font-lato text-green-brand/70 text-xs tracking-widest uppercase">{s.sub}</p>
                        </div>
                    ))}
                </div> */}

            </div>
        </section>
    );
}