import React from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { SolutionItem } from '../types';
import { WHATSAPP_URL } from '../data/content';

interface SolutionModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onContactClick,
}) => {
  if (!solution) return null;

  const whatsappSolutionLink = `${WHATSAPP_URL}&text=${encodeURIComponent(
    `Olá, gostaria de saber mais detalhes sobre a solução de ${solution.title} da Renovasolo Climatech.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with image preview */}
        <div className="relative h-48 sm:h-56 w-full shrink-0 overflow-hidden bg-[#1A382B]">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A382B] via-[#1A382B]/60 to-transparent"></div>
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 text-[#1A382B]"
              style={{ backgroundColor: solution.accentColor }}
            >
              Solução Regenerativa
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {solution.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-base text-[#4A3B32] leading-relaxed font-medium">
            {solution.description}
          </p>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A382B] mb-3">
              Abordagem Técnica e Aplicação
            </h4>
            <div className="space-y-2.5">
              {solution.fullDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#4A3B32]">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: solution.accentColor }}
                  />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F4F1EA] rounded-xl p-4 border border-[#4A3B32]/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A382B] mb-2">
              Destaques de Impacto no Solo
            </h4>
            <div className="flex flex-wrap gap-2">
              {solution.benefits.map((b, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white text-xs font-semibold text-[#1A382B] rounded-lg border border-[#4A3B32]/15"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm font-semibold text-[#66736B] hover:text-[#1A382B] hover:bg-gray-200/60 transition-colors text-center"
          >
            Fechar
          </button>
          
          <button
            type="button"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-bold bg-[#1A382B] hover:bg-[#285944] text-white transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Solicitar proposta</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappSolutionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-bold bg-[#2ECC71] hover:bg-[#27ae60] text-[#1A382B] transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
