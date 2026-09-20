import React from 'react';
import { Sprout, CloudRain, ShieldCheck, Layers, Info, Calendar } from 'lucide-react';
import { IMPACT_METRICS } from '../data/content';

export const ImpactGoals: React.FC = () => {
  return (
    <section
      id="metas-impacto"
      className="relative bg-[#174A50] text-white py-16 lg:py-20 border-y border-[#285944]/60 overflow-hidden"
    >
      {/* Subtle organic pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#8CCFD0_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A382B] border border-[#8CCFD0]/30 text-xs font-semibold text-[#8CCFD0] mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#2ECC71]" />
            <span>Projeção Estratégica &middot; 12 Meses</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Nossas metas de impacto para os próximos 12 meses
          </h2>
        </div>

        {/* 3 Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {/* Card 1: 5.000 hectares */}
          <div
            id="metric-hectares"
            className="rounded-2xl p-6 sm:p-8 bg-[#1A382B]/80 border border-[#285944] hover:border-[#2ECC71]/50 transition-all duration-300 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/15 text-[#2ECC71] flex items-center justify-center">
                  <Sprout className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#285944] text-[#8CCFD0]">
                  {IMPACT_METRICS[0].tag}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                {IMPACT_METRICS[0].value}
              </div>
              <p className="text-sm sm:text-base text-[#F4F1EA]/85 leading-relaxed font-normal">
                {IMPACT_METRICS[0].description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#8CCFD0]">
              <Layers className="w-3.5 h-3.5" />
              <span>Restauração biológica e mineral em camadas</span>
            </div>
          </div>

          {/* Card 2: 7.000 toneladas */}
          <div
            id="metric-carbono"
            className="rounded-2xl p-6 sm:p-8 bg-[#1A382B]/80 border border-[#285944] hover:border-[#8CCFD0]/50 transition-all duration-300 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#8CCFD0]/15 text-[#8CCFD0] flex items-center justify-center">
                  <CloudRain className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#285944] text-[#8CCFD0]">
                  {IMPACT_METRICS[1].tag}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                {IMPACT_METRICS[1].value}
              </div>
              <p className="text-sm sm:text-base text-[#F4F1EA]/85 leading-relaxed font-normal">
                {IMPACT_METRICS[1].description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#8CCFD0]">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71]"></span>
              <span>Potencial de fixação no perfil do solo</span>
            </div>
          </div>

          {/* Card 3: Escopos 1, 2 e 3 */}
          <div
            id="metric-escopos"
            className="rounded-2xl p-6 sm:p-8 bg-[#1A382B]/80 border border-[#285944] hover:border-[#D9C28F]/50 transition-all duration-300 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#D9C28F]/15 text-[#D9C28F] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#285944] text-[#D9C28F]">
                  {IMPACT_METRICS[2].tag}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                {IMPACT_METRICS[2].value}
              </div>
              <p className="text-sm sm:text-base text-[#F4F1EA]/85 leading-relaxed font-normal">
                {IMPACT_METRICS[2].description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#8CCFD0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2ECC71]" />
              <span>Métricas auditáveis e rastreáveis</span>
            </div>
          </div>
        </div>

        {/* Mandatory Disclaimer Note */}
        <div className="max-w-3xl mx-auto rounded-xl bg-[#12281E]/60 border border-white/10 p-4 flex items-start gap-3 text-xs sm:text-sm text-white/80">
          <Info className="w-5 h-5 text-[#8CCFD0] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-white">Observação técnica: </span>
            Metas projetadas para os próximos 12 meses, sujeitas à evolução dos projetos, validação técnica e atualização dos indicadores.
          </p>
        </div>
      </div>
    </section>
  );
};
