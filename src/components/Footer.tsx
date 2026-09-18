import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO, WHATSAPP_URL } from '../data/content';
import { PrivacyModal } from './PrivacyModal';
import { RenovasoloLogo } from './RenovasoloLogo';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <>
      <footer id="footer" className="bg-[#1A382B] text-white pt-16 pb-12 border-t border-[#285944]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Description */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <RenovasoloLogo theme="dark" size="lg" showTagline showSoilBase />
              </div>

              <p className="text-sm text-[#F4F1EA]/80 leading-relaxed max-w-sm">
                Conectamos ciência, tecnologia e agricultura regenerativa para recuperar solos, gerar valor no campo e apoiar a descarbonização das cadeias produtivas.
              </p>

              <div className="pt-2">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#285944] text-[#8CCFD0] border border-[#2ECC71]/20">
                  Regenerando a terra, descarbonizando o futuro.
                </span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8CCFD0]">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm text-[#F4F1EA]/80">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="hover:text-[#2ECC71] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Official Contacts */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8CCFD0]">
                Contato Oficial
              </h4>
              <ul className="space-y-3 text-sm text-[#F4F1EA]/80">
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.phoneFormatted}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8CCFD0] shrink-0" />
                  <span>{CONTACT_INFO.location}</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setPrivacyModalOpen(true)}
                  className="text-xs text-[#8CCFD0] hover:underline"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4F1EA]/60">
            <p>© Renovasolo Climatech. Todos os direitos reservados.</p>
            
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="hover:text-white transition-colors"
              >
                Privacidade
              </button>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Voltar ao topo da página"
                className="flex items-center gap-1 hover:text-[#2ECC71] transition-colors"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </>
  );
};
