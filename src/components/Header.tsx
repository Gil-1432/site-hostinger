import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, Linkedin, Instagram } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_URL, LINKEDIN_URL, INSTAGRAM_URL } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['inicio', 'sobre', 'solucoes', 'parcerias', 'diferenciais', 'contato'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A382B]/95 backdrop-blur-md shadow-md py-3 text-white border-b border-[#285944]/40'
          : 'bg-[#1A382B]/85 backdrop-blur-sm py-4 text-white border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Name Typography */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex flex-col group focus:outline-none"
            id="brand-logo"
            aria-label="Renovasolo Climatech - Início"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none font-sans group-hover:text-[#2ECC71] transition-colors">
              Renovasolo
            </span>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#8CCFD0] leading-tight mt-0.5">
              Climatech
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.href.replace('#', '')}`}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#2ECC71] bg-white/5 font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Action: WhatsApp, LinkedIn & Instagram Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-linkedin-cta"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-[#0077B5] text-white/90 hover:text-white transition-colors duration-200 border border-white/10 hover:border-transparent"
              aria-label="Página da Renovasolo Climatech no LinkedIn"
              title="LinkedIn Oficial"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-instagram-cta"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-[#E1306C] text-white/90 hover:text-white transition-colors duration-200 border border-white/10 hover:border-transparent"
              aria-label="Perfil da Renovasolo Climatech no Instagram"
              title="Instagram Oficial"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2ECC71] hover:bg-[#27ae60] text-[#1A382B] font-semibold text-sm shadow-sm hover:shadow transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Abrir menu de navegação"
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2ECC71]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden bg-[#1A382B] border-b border-[#285944] px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium rounded-lg text-white/90 hover:text-white hover:bg-[#285944]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2ECC71] hover:bg-[#27ae60] text-[#1A382B] font-bold text-sm shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#0077B5] text-white text-sm font-semibold transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>Página no LinkedIn</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#E1306C] text-white text-sm font-semibold transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Perfil no Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
