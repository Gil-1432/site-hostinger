import React from 'react';
import { Award, CheckCircle2, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { DIFFERENTIALS } from '../data/content';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white text-[#1A382B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#285944]/10 text-[#285944] text-xs font-bold tracking-wide mb-3">
            <Award className="w-3.5 h-3.5 text-[#2ECC71]" />
            <span>Nossos Pilares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A382B] mb-4">
            Por que a Renovasolo?
          </h2>
          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Uma abordagem integrada que alia fundamentação agronômica, inovação climática e responsabilidade econômica com o produtor rural.
          </p>
        </div>

        {/* Alternating Blocks */}
        <div className="space-y-16 lg:space-y-24">
          {DIFFERENTIALS.map((item, index) => {
            const isReversed = item.reversed;

            return (
              <div
                key={item.id}
                id={`differential-${item.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-[#2ECC71]/20 to-[#8CCFD0]/20 rounded-2xl blur-sm group-hover:blur-md transition-all -z-10"></div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-[#4A3B32]/10 bg-[#1A382B]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-72 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#285944] text-[#2ECC71] flex items-center justify-center font-bold text-sm">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#66736B]">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1A382B]">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#4A3B32] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="pt-2 space-y-2.5">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2ECC71] shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-[#66736B] font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
