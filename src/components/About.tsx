import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/content';
import { RenovasoloBanner, RenovasoloFullLogo } from './RenovasoloLogo';

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

        {/* Card Especial da Identidade Visual Oficial & Banner Institucional */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#285944]/15 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Lado Esquerdo: O Logotipo Oficial da Imagem */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 bg-[#FBF9F5] rounded-2xl border border-[#D9C28F]/40 shadow-inner text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#285944] mb-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                  Logotipo Oficial da Marca
                </span>
                
                {/* Visualização exata do logo enviado pelo usuário */}
                <div className="p-4 bg-white rounded-xl shadow-xs border border-stone-200/60 w-full flex justify-center">
                  <RenovasoloFullLogo size="lg" />
                </div>

                <a
                  href="/assets/logo-renovasolo-vertical.svg"
                  download="logo-renovasolo-climatech.svg"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#145A32] hover:text-[#0284C7] transition-colors py-2 px-4 rounded-lg bg-white border border-stone-200 hover:border-[#0284C7]/40 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar Vetor Oficial (.SVG)</span>
                </a>
              </div>

              {/* Lado Direito: Os Elementos e Simbologia da Marca */}
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] block">
                  Identidade Visual & Simbologia
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A382B] leading-tight">
                  A união indissociável entre a Biologia do Solo e a Tecnologia Climática
                </h3>
                <p className="text-sm sm:text-base text-[#4A3B32] leading-relaxed">
                  O logotipo da Renovasolo Climatech sintetiza visualmente nosso propósito:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F4F1EA]/80 border border-[#285944]/10">
                    <span className="font-bold text-sm text-[#145A32] block mb-1">Folha & Painel Solar</span>
                    <p className="text-xs text-[#66736B] leading-relaxed">
                      Representa a captura biológica da luz e energia do sol para nutrir a vida vegetal e os ciclos da natureza.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F4F1EA]/80 border border-[#0284C7]/15">
                    <span className="font-bold text-sm text-[#0284C7] block mb-1">Gota & Trilhas de Circuito</span>
                    <p className="text-xs text-[#66736B] leading-relaxed">
                      Simboliza os recursos hídricos, inovação digital, inteligência agronômica e conectividade tecnológica no agro.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F4F1EA]/80 border border-[#B96F4A]/20">
                    <span className="font-bold text-sm text-[#B96F4A] block mb-1">Plântula com Raízes</span>
                    <p className="text-xs text-[#66736B] leading-relaxed">
                      O enraizamento profundo que estrutura a microbiologia e acelera o sequestro de carbono orgânico no solo.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F4F1EA]/80 border border-[#5A3A22]/20">
                    <span className="font-bold text-sm text-[#5A3A22] block mb-1">Camada de Solo Fértil</span>
                    <p className="text-xs text-[#66736B] leading-relaxed">
                      A base sustentadora de toda a produção agrícola e da vida no planeta, recuperada e fortalecida.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Institucional Oficial no rodapé do bloco */}
            <div className="mt-10 pt-8 border-t border-stone-200/80">
              <RenovasoloBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
