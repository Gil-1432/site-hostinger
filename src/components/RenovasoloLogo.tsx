import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark'; // 'light' for light backgrounds (dark text), 'dark' for dark backgrounds (white/light text)
  orientation?: 'horizontal' | 'vertical';
  showTagline?: boolean;
  showSoilBase?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Símbolo da Gota Biotecnológica e Solar:
 * - Metade esquerda: Folha verde com haste e painel solar no topo.
 * - Metade direita: Gota azul com circuito eletrônico impresso branco.
 * - Centro: Gota de espaço negativo.
 */
export const RenovasoloSymbol: React.FC<{
  className?: string;
  size?: number;
  idSuffix?: string;
}> = ({ className = 'w-10 h-10', size, idSuffix = 'main' }) => {
  return (
    <svg
      viewBox="0 0 160 190"
      className={className}
      style={size ? { width: size, height: (size * 190) / 160 } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Símbolo Renovasolo Climatech"
    >
      <defs>
        {/* Gradiente Verde Folha Orgânica */}
        <linearGradient id={`leaf-grad-${idSuffix}`} x1="15" y1="180" x2="80" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#145A32" />
          <stop offset="45%" stopColor="#1E824C" />
          <stop offset="100%" stopColor="#2ECC71" />
        </linearGradient>

        {/* Gradiente Azul Circuito Tecnológico */}
        <linearGradient id={`tech-grad-${idSuffix}`} x1="80" y1="15" x2="150" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0072B5" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#00A3E0" />
        </linearGradient>
      </defs>

      {/* --- METADE DIREITA: Gota Tecnológica Azul --- */}
      <path
        d="M80 18 C105 50 150 95 150 135 C150 168 118 185 80 185 C80 185 80 150 80 140 C100 140 115 125 115 110 C115 90 95 65 80 45 Z"
        fill={`url(#tech-grad-${idSuffix})`}
      />

      {/* Trilhas de Circuito na Gota Azul com nós circulares */}
      <g stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.98">
        {/* Trilha 1 - superior */}
        <path d="M90 60 L90 85 L112 85" />
        <circle cx="112" cy="85" r="3.2" fill="#FFFFFF" />

        {/* Trilha 2 */}
        <path d="M100 70 L116 88 L116 110 L130 110" />
        <circle cx="130" cy="110" r="3.2" fill="#FFFFFF" />

        {/* Trilha 3 - média */}
        <path d="M88 100 L96 100 L96 135 L108 135" />
        <circle cx="108" cy="135" r="3.2" fill="#FFFFFF" />

        {/* Trilha 4 */}
        <path d="M106 120 L122 120 L122 142" />
        <circle cx="122" cy="142" r="3.2" fill="#FFFFFF" />

        {/* Trilha 5 - vertical base */}
        <path d="M94 146 L94 170" />
        <circle cx="94" cy="170" r="3.2" fill="#FFFFFF" />

        {/* Trilha 6 - lateral base */}
        <path d="M110 148 L126 148 L126 162" />
        <circle cx="126" cy="162" r="3.2" fill="#FFFFFF" />

        {/* Trilha 7 - topo */}
        <path d="M86 38 L98 52 L110 52" />
        <circle cx="110" cy="52" r="3.2" fill="#FFFFFF" />
      </g>

      {/* --- METADE ESQUERDA: Folhas Verdes Orgânicas --- */}
      {/* Corpo principal da folha */}
      <path
        d="M80 18 C55 50 10 95 10 135 C10 168 42 185 80 185 C80 185 80 150 80 140 C60 140 45 125 45 110 C45 90 65 65 80 45 Z"
        fill={`url(#leaf-grad-${idSuffix})`}
      />

      {/* Folha superior apontando para esquerda */}
      <path
        d="M38 85 C22 75 14 55 18 36 C35 38 48 52 46 72 Z"
        fill="#1E824C"
      />
      <path
        d="M20 40 C28 55 38 70 42 78"
        stroke="#2ECC71"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Folha inferior lateral */}
      <path
        d="M30 115 C12 110 5 95 8 80 C24 82 35 94 36 108 Z"
        fill="#145A32"
      />
      <path
        d="M10 82 C18 94 28 104 32 108"
        stroke="#2ECC71"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Haste do Painel Solar */}
      <path
        d="M40 50 L48 24"
        stroke="#145A32"
        strokeWidth="3.6"
        strokeLinecap="round"
      />

      {/* Painel Solar Fotovoltaico no Ápice */}
      <g transform="translate(48, 22) rotate(-18)">
        <rect
          x="-14"
          y="-11"
          width="28"
          height="22"
          rx="2"
          fill="#1A382B"
          stroke="#2ECC71"
          strokeWidth="1.5"
        />
        <line x1="-14" y1="-3" x2="14" y2="-3" stroke="#8CCFD0" strokeWidth="1.1" />
        <line x1="-14" y1="4" x2="14" y2="4" stroke="#8CCFD0" strokeWidth="1.1" />
        <line x1="-5" y1="-11" x2="-5" y2="11" stroke="#8CCFD0" strokeWidth="1.1" />
        <line x1="5" y1="-11" x2="5" y2="11" stroke="#8CCFD0" strokeWidth="1.1" />
      </g>

      {/* Gota Central de Espaço Negativo */}
      <path
        d="M80 50 C92 70 105 92 105 110 C105 125 94 135 80 135 C66 135 55 125 55 110 C55 92 68 70 80 50 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

/**
 * Base com Broto / Plântula com Raízes e Camada de Solo Fértil:
 * Exatamente como na imagem enviada pelo usuário.
 */
export const RenovasoloSoilBase: React.FC<{
  className?: string;
  theme?: 'light' | 'dark';
}> = ({ className = 'w-full max-w-sm', theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Broto / Plântula verde com raízes */}
      <svg viewBox="0 0 100 65" className="w-16 h-10 -mb-2 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Folha esquerda do broto */}
        <path
          d="M50 38 C42 30 32 30 26 34 C26 42 36 46 50 38 Z"
          fill="#2ECC71"
        />
        {/* Folha direita do broto */}
        <path
          d="M50 38 C58 28 70 28 76 33 C76 42 64 46 50 38 Z"
          fill="#1E824C"
        />
        {/* Folha central brotando */}
        <path
          d="M50 38 Q 50 24, 52 20 C 48 24, 48 32, 50 38 Z"
          fill="#2ECC71"
        />
        {/* Caule central */}
        <path
          d="M50 38 L50 48"
          stroke="#1E824C"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Raízes ramificadas penetrando o solo */}
        <g stroke={isDark ? '#8CCFD0' : '#D9C28F'} strokeWidth="1.2" strokeLinecap="round" opacity="0.9">
          <path d="M50 48 L46 56 L42 62" />
          <path d="M50 48 L50 59 L51 64" />
          <path d="M50 48 L54 56 L60 62" />
          <path d="M47 53 L43 57" />
          <path d="M53 54 L57 58" />
        </g>
      </svg>

      {/* Camada de Solo Fértil Marrom Texturizado */}
      <div className="w-full h-5 sm:h-6 rounded-md overflow-hidden relative shadow-xs">
        <svg viewBox="0 0 300 24" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          {/* Fundo do solo */}
          <path
            d="M0,8 Q 30,3 60,8 T 120,6 T 180,9 T 240,5 T 300,8 L 300,24 L 0,24 Z"
            fill={isDark ? '#3D2616' : '#5A3A22'}
          />
          {/* Camada superior ondulada do solo */}
          <path
            d="M0,8 Q 20,4 40,7 T 80,5 T 120,8 T 160,5 T 200,8 T 240,6 T 280,8 T 300,7"
            stroke={isDark ? '#5A3A22' : '#734A2C'}
            strokeWidth="3"
            fill="none"
          />
          {/* Torrões e texturas orgânicas de solo */}
          <g fill={isDark ? '#2B1A0E' : '#452B18'} opacity="0.85">
            <circle cx="35" cy="14" r="3" />
            <circle cx="85" cy="15" r="2.5" />
            <circle cx="140" cy="16" r="3" />
            <circle cx="195" cy="14" r="2.8" />
            <circle cx="250" cy="15" r="3.2" />
            <circle cx="280" cy="17" r="2" />
            <circle cx="60" cy="18" r="2" />
            <circle cx="165" cy="18" r="2" />
            <circle cx="220" cy="18" r="2.2" />
          </g>
        </svg>
      </div>
    </div>
  );
};

/**
 * Logotipo Oficial Completo Renovasolo Climatech:
 * Representa com máxima fidelidade a imagem enviada pelo usuário:
 * 1. Símbolo com Folha/Painel Solar e Gota Azul com Circuito Eletrônico
 * 2. RENOVASOLO (Verde floresta)
 * 3. CLIMATECH (Azul tecnológico com espaçamento)
 * 4. Broto verde com raízes + Camada de solo fértil
 */
export const RenovasoloFullLogo: React.FC<{
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ className = '', theme = 'light', size = 'md' }) => {
  const isDark = theme === 'dark';

  const containerSizes = {
    sm: 'max-w-[200px]',
    md: 'max-w-[260px]',
    lg: 'max-w-[320px]',
    xl: 'max-w-[380px]',
  };

  const symbolSizes = {
    sm: 'w-24 h-28',
    md: 'w-32 h-36',
    lg: 'w-40 h-48',
    xl: 'w-48 h-56',
  };

  const titleSizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  };

  const subSizes = {
    sm: 'text-xs sm:text-sm tracking-[0.25em]',
    md: 'text-sm sm:text-base tracking-[0.28em]',
    lg: 'text-base sm:text-lg tracking-[0.3em]',
    xl: 'text-lg sm:text-xl tracking-[0.32em]',
  };

  return (
    <div className={`flex flex-col items-center text-center ${containerSizes[size]} ${className}`}>
      {/* 1. Símbolo da gota */}
      <div className="transition-transform duration-300 hover:scale-105">
        <RenovasoloSymbol className={symbolSizes[size]} idSuffix={`full-${theme}-${size}`} />
      </div>

      {/* 2. Tipografia Oficial */}
      <div className="mt-3 sm:mt-4 flex flex-col items-center">
        <span
          className={`font-black uppercase tracking-tight leading-none ${titleSizes[size]} ${
            isDark ? 'text-white' : 'text-[#145A32]'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          RENOVASOLO
        </span>
        <span
          className={`font-bold uppercase leading-none mt-1 sm:mt-1.5 ${subSizes[size]} ${
            isDark ? 'text-[#8CCFD0]' : 'text-[#0284C7]'
          }`}
        >
          CLIMATECH
        </span>
      </div>

      {/* 3. Base com Broto e Solo Fértil */}
      <div className="w-full mt-2 sm:mt-3">
        <RenovasoloSoilBase theme={theme} />
      </div>
    </div>
  );
};

/**
 * Logotipo Versátil (Horizontal para Navbar / Vertical para Hero e Rodapé):
 */
export const RenovasoloLogo: React.FC<LogoProps> = ({
  className = '',
  theme = 'light',
  orientation = 'horizontal',
  showTagline = false,
  showSoilBase = false,
  size = 'md',
}) => {
  const isDark = theme === 'dark';

  if (orientation === 'vertical') {
    return (
      <RenovasoloFullLogo
        className={className}
        theme={theme}
        size={size}
      />
    );
  }

  // Configuração de tamanhos para modo horizontal
  const symbolSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-18 h-18 sm:w-20 sm:h-20',
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subSizes = {
    sm: 'text-[9px] sm:text-[10px] tracking-[0.25em]',
    md: 'text-[10px] sm:text-xs tracking-[0.28em]',
    lg: 'text-xs sm:text-sm tracking-[0.3em]',
    xl: 'text-sm sm:text-base tracking-[0.32em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 flex-row text-left ${className}`}>
      <div className="shrink-0 transition-transform duration-200 hover:scale-105">
        <RenovasoloSymbol className={symbolSizes[size]} idSuffix={`horiz-${theme}-${size}`} />
      </div>

      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black uppercase font-sans tracking-tight ${titleSizes[size]} ${
            isDark ? 'text-white' : 'text-[#145A32]'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          RENOVASOLO
        </span>
        <span
          className={`font-bold uppercase font-sans mt-0.5 sm:mt-1 ${subSizes[size]} ${
            isDark ? 'text-[#8CCFD0]' : 'text-[#0284C7]'
          }`}
        >
          CLIMATECH
        </span>
        {showTagline && (
          <span
            className={`text-[9px] sm:text-[10px] font-semibold uppercase mt-1 tracking-wider ${
              isDark ? 'text-[#F4F1EA]/70' : 'text-[#4A3B32]'
            }`}
          >
            Tecnologia que regenera o solo
          </span>
        )}
        {showSoilBase && (
          <div className="w-full max-w-[140px] mt-1">
            <div className="h-1.5 rounded-full bg-gradient-to-r from-[#145A32] via-[#0284C7] to-[#5A3A22]" />
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Banner Institucional Renovasolo:
 * Representa com fidelidade a composição do banner com logotipo, camada de solo fértil,
 * plântula brotando com raízes, trilhas cibernéticas conectando a galhos com folhas e painéis solares,
 * e a mensagem "TECNOLOGIA QUE REGENERA O SOLO".
 */
export const RenovasoloBanner: React.FC<{
  className?: string;
  showBorder?: boolean;
}> = ({ className = '', showBorder = true }) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-white ${
        showBorder ? 'border border-[#2ECC71]/30 shadow-lg' : ''
      } ${className}`}
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 lg:p-10 gap-6">
        {/* Lado Esquerdo: Logotipo Oficial com Base de Solo */}
        <div className="flex items-center gap-4">
          <RenovasoloSymbol className="w-16 h-16 sm:w-20 sm:h-20 shrink-0" idSuffix="banner-emb" />
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#145A32] tracking-tight leading-none">
              RENOVASOLO
            </span>
            <span className="text-xs sm:text-sm lg:text-base font-bold text-[#0284C7] tracking-[0.3em] uppercase mt-1.5 leading-none">
              CLIMATECH
            </span>
            {/* Solo decorativo sutil sob o texto */}
            <div className="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#145A32] to-[#5A3A22] mt-2" />
          </div>
        </div>

        {/* Centro / Fundo Ilustrado: Raízes, Circuitos e Broto */}
        <div className="hidden md:flex flex-1 items-center justify-center px-4 max-w-xl">
          <svg viewBox="0 0 400 100" className="w-full h-16" fill="none">
            {/* Solo base estilizado */}
            <path
              d="M0 80 Q 50 75, 100 80 T 200 80 T 300 75 T 400 80 L 400 100 L 0 100 Z"
              fill="#5A3A22"
              opacity="0.9"
            />
            {/* Broto central */}
            <g transform="translate(100, 65)">
              <path d="M0 15 Q 0 0, -8 -8 C -4 -12, 4 -12, 8 -8 Q 0 0, 0 15 Z" fill="#2ECC71" />
              <path d="M0 15 Q -10 5, -16 2 C -18 -4, -10 -6, -4 -2 Q 0 5, 0 15 Z" fill="#1E824C" />
              <path d="M0 15 Q 10 5, 16 2 C 18 -4, 10 -6, 4 -2 Q 0 5, 0 15 Z" fill="#2ECC71" />
              {/* Raízes virando circuitos */}
              <path d="M0 15 L-6 25 L-15 28 L-22 35" stroke="#8CCFD0" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="-22" cy="35" r="2" fill="#0284C7" />
              <path d="M0 15 L6 25 L16 28 L30 35 L45 35" stroke="#8CCFD0" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="45" cy="35" r="2" fill="#0284C7" />
            </g>

            {/* Trilhas Tecnológicas fluindo para a direita */}
            <g stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
              <path d="M145 65 L170 50 L220 50 L240 30" />
              <circle cx="240" cy="30" r="2.5" fill="#0284C7" />
              <path d="M160 75 L190 75 L210 60 L260 60" />
              <circle cx="260" cy="60" r="2.5" fill="#0284C7" />
              <path d="M175 82 L230 82 L250 72 L280 72" />
              <circle cx="280" cy="72" r="2.5" fill="#0284C7" />
            </g>

            {/* Galhos orgânicos com painéis solares à direita */}
            <g transform="translate(300, 20)">
              <path d="M0 45 C 15 35, 25 20, 45 15" stroke="#1E824C" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 35 C 25 32, 35 38, 40 45" stroke="#1E824C" strokeWidth="1.5" strokeLinecap="round" />
              {/* Folhas */}
              <path d="M45 15 C 50 10, 58 14, 55 20 C 50 22, 45 18, 45 15 Z" fill="#2ECC71" />
              <path d="M25 22 C 30 18, 38 22, 35 27 C 30 29, 25 25, 25 22 Z" fill="#145A32" />
              {/* Mini Painel Solar */}
              <rect x="36" y="26" width="12" height="9" rx="1" fill="#1A382B" stroke="#2ECC71" strokeWidth="1" />
              <line x1="36" y1="30.5" x2="48" y2="30.5" stroke="#8CCFD0" strokeWidth="0.6" />
              <line x1="42" y1="26" x2="42" y2="35" stroke="#8CCFD0" strokeWidth="0.6" />
            </g>
          </svg>
        </div>

        {/* Lado Direito: Slogan Oficial */}
        <div className="flex flex-col text-center lg:text-right">
          <span className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F2937] tracking-wider uppercase leading-snug">
            TECNOLOGIA QUE
            <br />
            REGENERA O SOLO
          </span>
        </div>
      </div>

      {/* Faixa inferior decorativa de solo com transição de circuitos */}
      <div className="h-2 w-full bg-gradient-to-r from-[#145A32] via-[#0284C7] to-[#5A3A22]" />
    </div>
  );
};
