import React, { useState } from 'react';
import { Microscope, Mountain, Recycle, ArrowRight, Sparkles } from 'lucide-react';
import { SOLUTIONS } from '../data/content';
import { SolutionItem } from '../types';
import { SolutionModal } from './SolutionModal';

export const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  const handleContactScroll = () => {
    const element = document.getElementById('contato');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'microscope':
        return <Microscope className="w-5 h-5 stroke-[2.2]" />;
      case 'mountain':
        return <Mountain className="w-5 h-5 stroke-[2.2]" />;
      case 'recycle':
        return <Recycle className="w-5 h-5 stroke-[2.2]" />;
      default:
        return <Sparkles className="w-5 h-5 stroke-[2.2]" />;
    }
  };

  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-white text-[#1A382B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#285944]/10 text-[#285944] text-xs font-bold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2ECC71]" />
            <span>Portfólio de Atuação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A382B] mb-4">
            Nossas soluções regenerativas
          </h2>
          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Tecnologia, conhecimento e práticas integradas para recuperar a vitalidade do solo e gerar valor em toda a cadeia agrícola.
          </p>
        </div>

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => {
            // Specific visual styling accents per card specification
            let borderHover = 'hover:border-[#2ECC71]';
            let iconBg = 'bg-[#2ECC71]/15 text-[#1A382B]';
            let badgeBg = 'bg-[#2ECC71]/15 text-[#1A382B]';

            if (index === 1) {
              // Remineralização: Marrom solo, terracota e areia dourada
              borderHover = 'hover:border-[#B96F4A]';
              iconBg = 'bg-[#D9C28F]/30 text-[#4A3B32]';
              badgeBg = 'bg-[#B96F4A]/15 text-[#B96F4A]';
            } else if (index === 2) {
              // Gestão de resíduos: Azul petróleo, verde mata e verde sálvia
              borderHover = 'hover:border-[#174A50]';
              iconBg = 'bg-[#8CCFD0]/30 text-[#174A50]';
              badgeBg = 'bg-[#174A50]/15 text-[#174A50]';
            }

            return (
              <div
                key={solution.id}
                id={`card-solucao-${solution.id}`}
                className={`flex flex-col bg-[#F4F1EA]/60 rounded-2xl overflow-hidden border border-[#4A3B32]/10 ${borderHover} shadow-sm hover:shadow-lg transition-all duration-300 group`}
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-[#1A382B]">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg backdrop-blur-md ${badgeBg} shadow-sm`}>
                      Solução 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
                        {renderIcon(solution.iconName)}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-[#1A382B]">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-[#4A3B32] leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Highlights & CTA */}
                  <div className="pt-4 border-t border-[#4A3B32]/10 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {solution.benefits.slice(0, 2).map((b, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2.5 py-1 bg-white rounded-md text-[#66736B] border border-[#4A3B32]/10"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedSolution(solution)}
                      id={`btn-saiba-mais-${solution.id}`}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white hover:bg-[#1A382B] text-[#1A382B] hover:text-white border border-[#4A3B32]/15 text-sm font-bold shadow-sm transition-all duration-200 group/btn"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSolution && (
        <SolutionModal
          solution={selectedSolution}
          onClose={() => setSelectedSolution(null)}
          onContactClick={handleContactScroll}
        />
      )}
    </section>
  );
};
