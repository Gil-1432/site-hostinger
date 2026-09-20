import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactGoals } from './components/ImpactGoals';
import { About } from './components/About';
import { MissionVisionValues } from './components/MissionVisionValues';
import { Solutions } from './components/Solutions';
import { Partnerships } from './components/Partnerships';
import { Differentials } from './components/Differentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A382B] flex flex-col font-sans selection:bg-[#2ECC71]/20 selection:text-[#1A382B]">
      {/* 1. Cabeçalho Fixo / Semiestruturado */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Principal */}
        <Hero />

        {/* 3. Metas de Impacto (12 Meses) */}
        <ImpactGoals />

        {/* 4. Sobre a Renovasolo */}
        <About />

        {/* 5. Missão, Visão e Valores */}
        <MissionVisionValues />

        {/* 6. Soluções Regenerativas */}
        <Solutions />

        {/* 7. Públicos e Parcerias */}
        <Partnerships />

        {/* 8. Diferenciais */}
        <Differentials />

        {/* 9. Formulário de Contato */}
        <Contact />
      </main>

      {/* 10. Rodapé Institucional */}
      <Footer />

      {/* 11. Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
