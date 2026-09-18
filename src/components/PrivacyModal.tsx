import React from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#1A382B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#2ECC71]/20 text-[#2ECC71] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Política de Privacidade</h3>
              <p className="text-xs text-[#8CCFD0]">Renovasolo Climatech</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-sm text-[#4A3B32] space-y-4 leading-relaxed">
          <div className="flex items-center gap-2 text-[#285944] font-semibold text-xs uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Compromisso de Transparência e LGPD</span>
          </div>

          <p>
            A <strong>Renovasolo Climatech</strong> valoriza a privacidade e a segurança dos dados pessoais de produtores rurais, parceiros comerciais, pesquisadores e investidores.
          </p>

          <h4 className="font-bold text-[#1A382B] pt-2">1. Coleta e Uso dos Dados</h4>
          <p>
            As informações fornecidas através do formulário de contato (nome, e-mail corporativo, telefone/WhatsApp e tipo de organização) são utilizadas estritamente para responder à sua solicitação, apresentar diagnósticos ou propostas de parcerias de descarbonização e regeneração do solo.
          </p>

          <h4 className="font-bold text-[#1A382B] pt-2">2. Não Compartilhamento</h4>
          <p>
            Não comercializamos, alugamos nem repassamos seus dados cadastrais para terceiros sem autorização prévia expressa.
          </p>

          <h4 className="font-bold text-[#1A382B] pt-2">3. Direitos do Titular</h4>
          <p>
            Em cumprimento à Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode a qualquer momento solicitar a atualização, correção ou exclusão definitiva de seus dados por meio do nosso canal oficial:
            <br />
            <strong>E-mail: </strong>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#285944] underline">
              {CONTACT_INFO.email}
            </a>
          </p>

          <h4 className="font-bold text-[#1A382B] pt-2">4. Sede Institucional</h4>
          <p>
            Renovasolo Climatech &middot; {CONTACT_INFO.location}, Brasil.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1A382B] hover:bg-[#285944] text-white text-sm font-semibold transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
