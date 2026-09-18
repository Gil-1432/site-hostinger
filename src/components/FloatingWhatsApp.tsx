import React, { useState } from 'react';
import { MessageCircle, X, ChevronUp, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end pointer-events-none"
    >
      {/* Expandable popup tooltip */}
      {isOpen && (
        <div
          id="whatsapp-floating-card"
          className="pointer-events-auto mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fadeIn transition-all"
        >
          {/* Header of popup */}
          <div className="bg-[#1A382B] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2ECC71] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">Fale com a Renovasolo</h4>
                <span className="text-[10px] text-[#8CCFD0] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] animate-pulse"></span>
                  Disponível para atendimento
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Minimizar janela do WhatsApp"
              className="p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 space-y-3 bg-[#F4F1EA]/50">
            <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs text-[#1A382B] shadow-2xs">
              <p className="font-medium leading-relaxed">
                Entenda como podemos gerar valor juntos!
              </p>
              <span className="block text-[10px] text-gray-400 mt-1 text-right">
                Equipe Renovasolo
              </span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="floating-whatsapp-action-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2ECC71] hover:bg-[#27ae60] text-white font-bold text-xs shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current text-white" />
              <span>Iniciar conversa no WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="pointer-events-auto flex items-center gap-2">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#1A382B] text-xs font-bold rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all"
          >
            <span>Fale com a Renovasolo</span>
            <ChevronUp className="w-3.5 h-3.5 text-[#2ECC71]" />
          </button>
        )}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="btn-whatsapp-floating-bubble"
          aria-label="Abrir WhatsApp da Renovasolo Climatech"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#2ECC71] hover:bg-[#27ae60] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#2ECC71]/40"
        >
          <MessageCircle className="w-7 h-7 fill-current text-white" />
        </a>
      </div>
    </aside>
  );
};
