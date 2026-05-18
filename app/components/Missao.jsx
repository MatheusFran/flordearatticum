import { Leaf, Heart, Star } from "lucide-react";
import Image from "next/image";
import silvanaImg from "../assets/silvana-ft.png";

export default function Missao({ t }) {
    const values = [
        { icon: <Leaf size={24} />, title: t.mission.v1title, desc: t.mission.v1desc },
        { icon: <Heart size={24} />, title: t.mission.v2title, desc: t.mission.v2desc },
        { icon: <Star size={24} />, title: t.mission.v3title, desc: t.mission.v3desc },
    ];

    return (
        <section id="missao" className="py-8 sm:py-12" style={{ background: "#FAF6F0" }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <div className="text-center mb-12 sm:mb-20">
                    <p className="font-lato text-gold text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2 sm:mb-4">{t.mission.eyebrow}</p>
                    <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-green-brand mb-4 sm:mb-6">{t.mission.title}</h2>
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="h-px w-8 sm:w-12 bg-gold/40" />
                        <div className="w-1 h-1 rounded-full bg-gold/60" />
                        <div className="h-px w-8 sm:w-12 bg-gold/40" />
                    </div>
                    <p className="font-playfair italic text-lg sm:text-2xl md:text-3xl text-green-brand/80 max-w-2xl mx-auto mt-4 sm:mt-8 leading-relaxed px-4">
                        {t.mission.headline}
                    </p>
                </div>

                {/* Two-column content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-24">
                    <div className="space-y-4 sm:space-y-5">
                        {[t.mission.p1, t.mission.p2, t.mission.p3].map((p, i) => (
                            <p key={i} className="font-lato text-foreground/65 text-xs sm:text-sm md:text-base leading-[1.8] sm:leading-[1.9]">{p}</p>
                        ))}
                    </div>
                    <div className="relative h-[300px] sm:h-[380px] md:h-[420px] w-full">
                        <Image
                            src={silvanaImg}
                            alt="Aratticum natural products"
                            fill
                            className="object-contain"
                            // className="object-cover object-top"
                            style={{ filter: "sepia(10%) saturate(90%)" }}
                        />
                    </div>
                </div>

                {/* Values */}
                {/* <div className="grid md:grid-cols-3 gap-1">
                    {values.map((v, i) => (
                        <div key={i} className="text-center p-10 bg-white border border-gold/8 hover:border-gold/25 transition-colors duration-300">
                            <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/30 text-gold mb-6">
                                {v.icon}
                            </div>
                            <h3 className="font-playfair text-lg text-green-brand mb-3 tracking-wide">{v.title}</h3>
                            <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
                            <p className="font-lato text-sm text-foreground/60 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div> */}

            </div>
        </section>
    );
}