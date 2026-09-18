import React from 'react';
import { User, Users, Building2, TrendingUp, GraduationCap, ArrowRight, Share2, Network } from 'lucide-react';
import { PARTNERSHIP_AUDIENCES } from '../data/content';

export const Partnerships: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return <User className="w-5 h-5" />;
      case 'users':
        return <Users className="w-5 h-5" />;
      case 'building':
        return <Building2 className="w-5 h-5" />;
      case 'trending-up':
        return <TrendingUp className="w-5 h-5" />;
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Share2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="parcerias" className="py-20 lg:py-28 bg-[#F4F1EA] text-[#1A382B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A382B]/10 text-[#1A382B] text-xs font-bold tracking-wide mb-3">
            <Network className="w-3.5 h-3.5 text-[#285944]" />
            <span>Ecossistema de Colaboração</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A382B] mb-4">
            Construindo uma rede global de impacto
          </h2>
          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Desenvolvendo parcerias estratégicas para acelerar a transição ecológica e econômica no agronegócio.
          </p>
        </div>

        {/* Network Diagram Illustration */}
        <div className="mb-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#4A3B32]/10 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#285944]">
              Conexão Multissetorial Integrada
            </span>
            <p className="text-xs sm:text-sm text-[#66736B] mt-1">
              O solo regenerado como ponto convergente entre ciência, governança corporativa e viabilidade produtiva
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto h-64 sm:h-72 flex items-center justify-center">
            {/* SVG Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Lines from Central Node (400, 150) to peripherals */}
              <line x1="400" y1="150" x2="150" y2="70" stroke="#2ECC71" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="400" y1="150" x2="650" y2="70" stroke="#174A50" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="400" y1="150" x2="100" y2="220" stroke="#285944" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="400" y1="150" x2="700" y2="220" stroke="#B96F4A" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="400" y1="150" x2="400" y2="260" stroke="#D9C28F" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />
              <line x1="400" y1="150" x2="400" y2="40" stroke="#8CCFD0" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />

              {/* Orbital circle */}
              <circle cx="400" cy="150" r="110" stroke="#285944" strokeWidth="1" strokeDasharray="3 6" opacity="0.25" />
            </svg>

            {/* Central Node: Solo Vivo & Renovasolo */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1A382B] text-white flex flex-col items-center justify-center p-2 shadow-xl border-4 border-[#2ECC71]/40 text-center animate-pulse">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2ECC71]">
                  Solo Vivo
                </span>
                <span className="text-[9px] text-white/80 leading-tight">Renovasolo</span>
              </div>
            </div>

            {/* Peripheral Nodes (Responsive positioning) */}
            {/* Top Left: Produtores */}
            <div className="absolute top-2 sm:top-4 left-4 sm:left-12 flex items-center gap-2 bg-[#F4F1EA] px-3 py-1.5 rounded-full border border-[#2ECC71]/40 shadow-sm text-xs font-bold text-[#1A382B]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]"></span>
              <span>Produtor Rural</span>
            </div>

            {/* Top Center: Tecnologia */}
            <div className="absolute top-0 flex items-center gap-2 bg-[#F4F1EA] px-3 py-1.5 rounded-full border border-[#8CCFD0]/50 shadow-sm text-xs font-bold text-[#174A50]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8CCFD0]"></span>
              <span>Tecnologia & Dados</span>
            </div>

            {/* Top Right: Empresas Net Zero */}
            <div className="absolute top-2 sm:top-4 right-4 sm:right-12 flex items-center gap-2 bg-[#F4F1EA] px-3 py-1.5 rounded-full border border-[#174A50]/40 shadow-sm text-xs font-bold text-[#174A50]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#174A50]"></span>
              <span>Metas Net Zero</span>
            </div>

            {/* Bottom Left: Cooperativas */}
            <div className="absolute bottom-4 sm:bottom-6 left-2 sm:left-10 flex items-center gap-2 bg-[#F4F1EA] px-3 py-1.5 rounded-full border border-[#285944]/40 shadow-sm text-xs font-bold text-[#285944]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#285944]"></span>
              <span>Cooperativas</span>
            </div>

            {/* Bottom Center: Universidades */}
            <div className="absolute bottom-0 flex items-center gap-2 bg-[#F4F1EA] px-3 py-1.5 rounded-full border border-[#D9C28F] shadow-sm text-xs font-bold text-[#4A3B32]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9C28F]"></span>
              <span>Universidades & Pesquisa</span>
            </div>

            {/* Bottom Right: Investidores */}
            <div className="absolute bottom-4 sm:bottom-6 right-2 sm:right-10 flex items-center gap-2 bg-[#F4F1EA] px-3 py-1.5 rounded-full border border-[#B96F4A]/40 shadow-sm text-xs font-bold text-[#B96F4A]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B96F4A]"></span>
              <span>Investidores</span>
            </div>
          </div>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PARTNERSHIP_AUDIENCES.map((item, idx) => (
            <div
              key={item.id}
              id={`audience-${item.id}`}
              className={`p-6 bg-white rounded-2xl border border-[#4A3B32]/10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: item.accent }}
                  >
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A382B]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#66736B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#1A382B]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }}></span>
                <span>Modelo de colaboração técnica</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contato"
            onClick={scrollToContact}
            id="btn-oportunidades-parceria"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1A382B] hover:bg-[#285944] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Conhecer oportunidades de parceria</span>
            <ArrowRight className="w-5 h-5 text-[#2ECC71]" />
          </a>
        </div>
      </div>
    </section>
  );
};
