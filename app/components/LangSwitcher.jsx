"use client";

export default function LangSwitcher({ lang, setLang }) {
    const langs = ["pt", "en", "es"];
    return (
        <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex gap-1 bg-black/30 backdrop-blur-md border border-gold/20 rounded-full px-2 py-1.5">
            {langs.map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`font-lato text-[10px] sm:text-xs tracking-widest uppercase px-2 sm:px-3 py-1 rounded-full transition-all duration-200 ${lang === l
                            ? "bg-gold text-green-brand font-bold"
                            : "text-cream/70 hover:text-gold"
                        }`}
                >
                    {l}
                </button>
            ))}
        </div>
    );
}