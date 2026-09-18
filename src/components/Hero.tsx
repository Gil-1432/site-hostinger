import React from 'react';
import { MessageCircle, ArrowDown, ShieldCheck, Sprout, Sparkles } from 'lucide-react';
import { WHATSAPP_URL, IMAGES } from '../data/content';

export const Hero: React.FC = () => {
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

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#1A382B] via-[#1F4434] to-[#1A382B] text-white"
    >
      {/* Background subtle topographic texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#2ECC71_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Mission copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#285944]/80 border border-[#2ECC71]/30 text-xs font-semibold tracking-wide text-[#8CCFD0]">
              <Sprout className="w-3.5 h-3.5 text-[#2ECC71]" />
              <span>Climatech Brasileira &middot; Agricultura Regenerativa</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
              Acreditamos que enfrentar as mudanças climáticas e garantir a segurança alimentar do planeta não são objetivos opostos —{' '}
              <span className="text-[#8CCFD0]">são a mesma missão.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#F4F1EA]/90 leading-relaxed font-normal max-w-2xl">
              Somos uma climatech nascida para unir ciência, tecnologia e agricultura regenerativa. Atuamos na restauração da fertilidade dos solos e no apoio à remoção de carbono da atmosfera, buscando gerar valor para o produtor, para as empresas e para o planeta.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-btn-whatsapp"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2ECC71] hover:bg-[#27ae60] text-[#1A382B] font-bold text-base shadow-lg shadow-[#2ECC71]/20 hover:shadow-xl hover:shadow-[#2ECC71]/30 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href="#contato"
                onClick={scrollToContact}
                id="hero-btn-contato"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-base backdrop-blur-sm transition-all duration-200"
              >
                <span>Solicitar atendimento</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Micro badges below CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                <span>Rastreabilidade e rigor técnico</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D9C28F]" />
                <span>Viabilidade econômica no campo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8CCFD0]"></span>
                <span>Base em Carmo do Rio Claro — MG</span>
              </div>
            </div>
          </div>

          {/* Right Column: Documentary Photography */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative framing element */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#2ECC71]/30 via-[#8CCFD0]/20 to-[#B96F4A]/20 rounded-2xl blur-sm -z-10"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#12281E]">
                <img
                  src={IMAGES.hero}
                  alt="Amostra de solo fértil e vivo em mãos de especialista agrícola com lavoura regenerativa ao fundo"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  id="hero-main-image"
                />

                {/* Subtitle tag on image */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#12281E]/95 via-[#12281E]/70 to-transparent p-4 sm:p-5">
                  <div className="flex items-center justify-between text-xs text-white/90">
                    <span className="font-semibold text-[#8CCFD0] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse"></span>
                      Solo vivo e produtivo
                    </span>
                    <span className="text-white/70">Ciência & Prática Agronômica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
