import { Phone, Mail, Globe, Instagram } from "lucide-react";

export default function Contato({ t }) {
    const c = t.contact;

    return (
        <section
            id="contato"
            className="py-12 sm:py-24 md:py-36 relative overflow-hidden"
            style={{ background: "#FFFFFF" }}
        >
        {/* Subtle glow top right */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] opacity-[0.02] pointer-events-none"
                style={{ background: "radial-gradient(circle, #F07A79 0%, transparent 70%)" }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-24">
                    <p className="font-lato text-green-brand text-[10px] tracking-[0.5em] uppercase mb-2 sm:mb-3 md:mb-5">{c.eyebrow}</p>
                    <h2 className="font-playfair text-4xl sm:text-5xl md:text-7xl text-green-brand mb-4 sm:mb-6">{c.title}</h2>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-7">
                        <div className="h-px w-12 sm:w-20 bg-green-brand/30" />
                        <div className="w-1 h-1 rounded-full bg-green-brand/50" />
                        <div className="h-px w-12 sm:w-20 bg-green-brand/30" />
                    </div>
                    <p className="font-playfair italic text-green-brand/60 text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed px-4">
                        {c.subtitle}
                    </p>
                </div>

                {/* Contact info */}
                <div className="max-w-2xl mx-auto text-center">
                    <div className="p-6 sm:p-8 md:p-12 lg:p-16" style={{ background: "rgba(240,122,121,0.05)", border: "1px solid rgba(240,122,121,0.15)" }}>
                        <h3 className="font-playfair text-xl sm:text-2xl text-green-brand mb-2 tracking-wide">{c.getInTouch}</h3>
                        <div className="w-6 sm:w-8 h-px bg-green-brand/40 mb-6 sm:mb-8 md:mb-10 mx-auto" />

                        <div className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col items-center">
                            {[
                                { icon: <Phone size={16} />, label: c.phone, val: "+55 34 98811-9584", href: "tel:+5534988119584" },
                                { icon: <Mail size={16} />, label: c.email, val: "aratticum@gmail.com", href: "mailto:aratticum@gmail.com" },
                                { icon: <Instagram size={16} />, label: c.instagram, val: "@flordearatticum", href: "https://instagram.com/flordearatticum" },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 sm:gap-4 group w-full justify-center"
                                >
                                    <div className="text-green-brand/50 group-hover:text-green-brand transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-lato text-[8px] sm:text-[9px] text-green-brand/50 uppercase tracking-[0.4em]">{item.label}</p>
                                        <p className="font-lato text-xs sm:text-sm text-green-brand group-hover:text-green-brand/80 transition-colors duration-300">{item.val}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Brand stamp */}
                        {/* <div className="mt-12 pt-8 border-t border-green-brand/10 flex items-center justify-center gap-3">
                            <svg width="24" height="28" viewBox="0 0 120 145" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                                <path d="M60 6 C58 14 54 22 54 32 C54 42 60 47 60 47 C60 47 66 42 66 32 C66 22 62 14 60 6Z" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                                <path d="M60 28 C54 24 44 22 36 28 C28 34 28 44 30 50 C36 46 44 42 52 38 C56 35 60 28 60 28Z" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                                <path d="M60 28 C66 24 76 22 84 28 C92 34 92 44 90 50 C84 46 76 42 68 38 C64 35 60 28 60 28Z" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                                <circle cx="60" cy="68" r="11" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                                <circle cx="45" cy="75" r="10" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                                <circle cx="75" cy="75" r="10" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                                <circle cx="52" cy="90" r="10" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                                <circle cx="68" cy="90" r="10" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                                <circle cx="60" cy="104" r="10" stroke="#0f2e1e" strokeWidth="2.5" fill="none" />
                            </svg>
                            <span className="font-playfair text-green-brand/50 text-lg tracking-widest">Aratticum</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}