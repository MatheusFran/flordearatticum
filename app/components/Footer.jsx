import Image from 'next/image';
import logo from '../assets/logo.png';

export default function Footer({ t }) {
    return (
        <footer style={{ background: "#F07A79" }} className="py-8 sm:py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <Image
                            src={logo}
                            alt="Aratticum Logo"
                            width={150}
                            height={120}
                            className="object-contain w-32 sm:w-40 md:w-48"
                        />
                    </div>
                </div>

                <div className="flex justify-center gap-3 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 flex-wrap">
                    {[
                        ["#missao", t.nav.mission],
                        ["#historia", t.nav.history],
                        ["#produtos", t.nav.products],
                        ["#contato", t.nav.contact],
                    ].map(([href, label]) => (
                        <a key={href} href={href} className="font-lato text-[8px] sm:text-[10px] text-green-brand/50 hover:text-green-brand uppercase tracking-[0.3em] transition-colors">
                            {label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                    <div className="h-px w-8 sm:w-16 bg-green-brand/20" />
                    <div className="w-1 h-1 rounded-full bg-green-brand/30" />
                    <div className="h-px w-8 sm:w-16 bg-green-brand/20" />
                </div>

                <p className="font-lato text-green-brand/40 text-[8px] sm:text-[10px] text-center tracking-widest uppercase">
                    © {new Date().getFullYear()} Aratticum · {t.footer.rights} · {t.footer.product} 🇧🇷
                </p>
            </div>
        </footer>
    );
}