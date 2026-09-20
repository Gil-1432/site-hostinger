import React from 'react';
import {
  Target,
  Eye,
  Sprout,
  Users,
  BarChart3,
  Globe,
  HeartHandshake,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { MISSION_VISION_VALUES } from '../data/content';

export const MissionVisionValues: React.FC = () => {
  const { mission, vision, values } = MISSION_VISION_VALUES;

  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'sprout':
        return <Sprout className="w-5 h-5 text-[#2ECC71]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#0284C7]" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-[#174A50]" />;
      case 'climate':
        return <Globe className="w-5 h-5 text-[#285944]" />;
      case 'prosperity':
        return <HeartHandshake className="w-5 h-5 text-[#B96F4A]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#2ECC71]" />;
    }
  };

  const getValueBadgeBg = (iconName: string) => {
    switch (iconName) {
      case 'sprout':
        return 'bg-[#2ECC71]/10 border-[#2ECC71]/30';
      case 'users':
        return 'bg-[#0284C7]/10 border-[#0284C7]/30';
      case 'chart':
        return 'bg-[#174A50]/10 border-[#174A50]/30';
      case 'climate':
        return 'bg-[#285944]/10 border-[#285944]/30';
      case 'prosperity':
        return 'bg-[#B96F4A]/10 border-[#B96F4A]/30';
      default:
        return 'bg-[#285944]/10 border-[#285944]/20';
    }
  };

  return (
    <section
      id="missao-visao-valores"
      className="py-20 lg:py-28 bg-[#FBF9F5] text-[#1A382B] border-t border-[#4A3B32]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A382B]/10 text-[#1A382B] text-xs font-bold tracking-wide mb-3">
            <Compass className="w-3.5 h-3.5 text-[#285944]" />
            <span>Diretrizes Estratégicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A382B] mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            A base ética, científica e humana que guia nossa atuação na regeneração da saúde do solo e na aceleração rumo à economia de baixo carbono.
          </p>
        </div>

        {/* Bloco Superior: Missão & Visão (2 Colunas com destaque) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card Missão */}
          <div
            id="card-missao"
            className="rounded-3xl p-8 sm:p-10 bg-white border border-[#285944]/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#145A32] via-[#2ECC71] to-[#8CCFD0]"></div>
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#145A32] bg-[#2ECC71]/15 px-3 py-1 rounded-full border border-[#2ECC71]/30">
                  Nossa Missão
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#1A382B] text-[#2ECC71] flex items-center justify-center shadow-inner">
                  <Target className="w-6 h-6 stroke-[2.2]" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#1A382B] mb-4 tracking-tight">
                Missão
              </h3>
              <p className="text-base sm:text-lg text-[#334139] leading-relaxed font-normal">
                {mission}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#285944]">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71]"></span>
              <span>Impacto real desde o primeiro dia de parceria</span>
            </div>
          </div>

          {/* Card Visão */}
          <div
            id="card-visao"
            className="rounded-3xl p-8 sm:p-10 bg-white border border-[#0284C7]/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0284C7] via-[#00A3E0] to-[#8CCFD0]"></div>
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7] bg-[#0284C7]/15 px-3 py-1 rounded-full border border-[#0284C7]/30">
                  Nossa Visão
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#174A50] text-[#8CCFD0] flex items-center justify-center shadow-inner">
                  <Eye className="w-6 h-6 stroke-[2.2]" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#1A382B] mb-4 tracking-tight">
                Visão
              </h3>
              <p className="text-base sm:text-lg text-[#334139] leading-relaxed font-normal">
                {vision}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#0284C7]">
              <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
              <span>Referência na América Latina em carbono e solo</span>
            </div>
          </div>
        </div>

        {/* Bloco Inferior: Valores */}
        <div id="secao-valores" className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#285944] block mb-1">
              Pilares Inegociáveis
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A382B] tracking-tight">
              Valores
            </h3>
            <p className="text-sm sm:text-base text-[#66736B] mt-2">
              Princípios que fundamentam nossa cultura, métodos agronômicos e relações corporativas:
            </p>
          </div>

          {/* Grid de Valores (5 cards com design harmonioso) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={val.title}
                id={`card-valor-${idx + 1}`}
                className={`rounded-2xl p-6 sm:p-7 bg-white border border-[#4A3B32]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  idx === 3 ? 'lg:col-span-1' : idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 ${getValueBadgeBg(
                        val.iconName
                      )}`}
                    >
                      {renderValueIcon(val.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#66736B] uppercase tracking-wider block">
                        Pilar 0{idx + 1}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-[#1A382B] leading-tight">
                        {val.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-[#4A3B32] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
