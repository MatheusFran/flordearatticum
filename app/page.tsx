"use client";

import { useState } from "react";
import { translations } from "@/lib/i18n";

import Hero from "./components/Hero";
import Missao from "./components/Missao";
import Historia from "./components/Historia";
import Produtos from "./components/Produtos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import LangSwitcher from "./components/LangSwitcher";

export default function Home() {
  const [lang, setLang] = useState("pt");
  const t = translations[lang];

  return (
    <div className="min-h-screen">
      <LangSwitcher lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Missao t={t} />
        <Historia t={t} />
        <Produtos t={t} />
        <Contato t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}