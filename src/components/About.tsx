import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#F4F1EA] text-[#1A382B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with documentary realism */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Subtle background decoration */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#D9C28F]/40 -z-10"></div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#4A3B32]/10 bg-white">
                <img
                  src={IMAGES.about}
                  alt="Produtor rural e consultor da Renovasolo analisando dados agrícolas e amostra de solo em campo"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-white border-t border-[#4A3B32]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#285944]/10 text-[#285944] flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A382B]">Alinhamento no Campo</h4>
                      <p className="text-xs text-[#66736B]">Proximidade técnica com a realidade de cada fazenda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and Missão */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A382B]/10 text-[#1A382B] text-xs font-bold tracking-wide">
              <Compass className="w-3.5 h-3.5 text-[#285944]" />
              <span>Sobre a Renovasolo Climatech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A382B] leading-tight">
              Lucro com propósito: a lógica do impacto
            </h2>

            <p className="text-base sm:text-lg text-[#4A3B32] leading-relaxed">
              Operamos sob a premissa do lucro com propósito: construímos um modelo de negócio em que a rentabilidade da empresa e do produtor cresce lado a lado com a recuperação de cada hectare de terra. Ao conectar a cadeia agrícola ao mercado global de carbono e às metas Net Zero, trabalhamos para demonstrar que recuperar o solo pode ser uma estratégia de valor, produtividade e resiliência para o futuro.
            </p>

            {/* Highlight Box with Terracotta / Golden Sand styling */}
            <div
              id="about-highlight-box"
              className="rounded-2xl p-6 bg-gradient-to-r from-[#B96F4A] to-[#C97E59] text-white shadow-md border border-[#B96F4A]/40 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-[#F4F1EA]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F4F1EA]/80 block mb-1">
                  Assinatura Institucional
                </span>
                <p className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                  Renovasolo Climatech. Regenerando a terra, descarbonizando o futuro.
                </p>
              </div>
            </div>

            {/* Bloco de Missão */}
            <div
              id="about-mission-block"
              className="rounded-2xl p-6 bg-white border border-[#285944]/15 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#285944]">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                <span>Nossa Missão</span>
              </div>
              <p className="text-base text-[#1A382B] font-medium leading-relaxed">
                Acelerar a transição para uma agricultura de baixo carbono, utilizando tecnologia climática e regeneração do solo para gerar rentabilidade no campo e apoiar a remoção de carbono da atmosfera com responsabilidade, rastreabilidade e base técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
