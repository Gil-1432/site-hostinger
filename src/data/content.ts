import heroImg from '../assets/images/hero_soil_hands_1789587891811.jpg';
import aboutImg from '../assets/images/about_field_science_1789587903517.jpg';
import solBioImg from '../assets/images/sol_bioinsumos_1789587915386.jpg';
import solRemineralizacaoImg from '../assets/images/sol_remineralizacao_1789587928116.jpg';
import solResiduosImg from '../assets/images/sol_residuos_1789587939617.jpg';
import difTechImg from '../assets/images/dif_tech_soil_1789587951437.jpg';
import { SolutionItem, ImpactMetric, PartnershipAudience, DifferentialItem } from '../types';

export const WHATSAPP_URL =
  'https://wa.me/5535998376012?text=Ol%C3%A1%2C%20gostaria%20de%20entender%20como%20a%20Renovasolo%20pode%20gerar%20valor%20para%20o%20meu%20neg%C3%B3cio.';

export const CONTACT_INFO = {
  email: 'contato@renovasoloclimatech.com.br',
  phoneFormatted: '+55 (35) 99837-6012',
  phoneRaw: '+5535998376012',
  location: 'Carmo do Rio Claro — MG',
  locationDetail: 'Sul de Minas Gerais, Brasil',
};

export const NAV_LINKS = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre nós', href: '#sobre' },
  { name: 'Soluções', href: '#solucoes' },
  { name: 'Parcerias', href: '#parcerias' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Contato', href: '#contato' },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'hectares',
    value: '15.000 hectares',
    description: 'De solos em processo de regeneração',
    iconName: 'leaf',
    tag: 'Área projetada',
  },
  {
    id: 'carbono',
    value: '7.000 toneladas',
    description: 'De CO₂ equivalente com potencial de remoção e fixação no solo',
    iconName: 'cloud',
    tag: 'Carbono no solo',
  },
  {
    id: 'escopos',
    value: 'Escopos 1, 2 e 3',
    description: 'Apoio na estruturação e no acompanhamento de metas de descarbonização',
    iconName: 'shield',
    tag: 'Descarbonização',
  },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'insumos-biologicos',
    title: 'Insumos Biológicos',
    description:
      'Desenvolvimento e aplicação de soluções biológicas para bioativação, proteção e equilíbrio microbiológico do solo.',
    fullDetails: [
      'Bioativação de microrganismos benéficos para ciclagem eficiente de nutrientes e solubilização de fósforo e potássio.',
      'Aumento da resistência da planta a estresses hídricos e térmicos através de inoculações específicas.',
      'Melhoria gradual da atividade microbiana do solo, reduzindo a dependência química e estimulando o crescimento radicular.',
    ],
    benefits: [
      'Equilíbrio microbiológico do solo',
      'Bioativação e proteção natural',
      'Maior resiliência a veranicos',
    ],
    image: solBioImg,
    accentColor: '#2ECC71',
    tagBg: 'bg-[#2ECC71]/15',
    tagColor: 'text-[#1A382B]',
    iconName: 'microscope',
  },
  {
    id: 'remineralizacao-solo',
    title: 'Remineralização do Solo',
    description:
      'Recomposição de minerais essenciais e restauração da fertilidade dos solos para apoiar a produtividade, a resiliência e a retenção de carbono.',
    fullDetails: [
      'Aplicação técnica de pós de rocha silicática ricos em macro e micronutrientes naturais.',
      'Reativação do complexo de troca catiônica (CTC) do solo de forma sustentável e duradoura.',
      'Apoio à formação de agregados estáveis do solo, elemento-chave para a fixação física do carbono orgânico.',
    ],
    benefits: [
      'Recomposição de minerais essenciais',
      'Restauração duradoura da fertilidade',
      'Retenção estrutural de carbono',
    ],
    image: solRemineralizacaoImg,
    accentColor: '#B96F4A',
    tagBg: 'bg-[#B96F4A]/15',
    tagColor: 'text-[#4A3B32]',
    iconName: 'mountain',
  },
  {
    id: 'gestao-residuos',
    title: 'Gestão de Resíduos da Agricultura',
    description:
      'Transformação de resíduos do agronegócio em recursos valiosos, promovendo economia circular, eficiência produtiva e redução de emissões.',
    fullDetails: [
      'Processamento termofílico e compostagem técnica de subprodutos agropecuários e biomassas vegetais.',
      'Produção de condicionadores de solo ricos em matéria orgânica estável e substâncias húmicas.',
      'Fechamento de ciclos de nutrientes na propriedade rural com mitigação de emissões difusas de gases de efeito estufa.',
    ],
    benefits: [
      'Economia circular no agronegócio',
      'Produção de biofertilizantes ricos',
      'Redução de emissões na fazenda',
    ],
    image: solResiduosImg,
    accentColor: '#174A50',
    tagBg: 'bg-[#174A50]/15',
    tagColor: 'text-[#174A50]',
    iconName: 'recycle',
  },
];

export const PARTNERSHIP_AUDIENCES: PartnershipAudience[] = [
  {
    id: 'produtores',
    title: 'Produtores rurais',
    description:
      'Soluções práticas para melhorar a saúde do solo, a resiliência e a eficiência da propriedade.',
    iconName: 'user',
    accent: '#2ECC71',
  },
  {
    id: 'cooperativas',
    title: 'Cooperativas e associações',
    description:
      'Projetos escaláveis para fortalecer produtores, organizar dados e ampliar oportunidades.',
    iconName: 'users',
    accent: '#285944',
  },
  {
    id: 'empresas-net-zero',
    title: 'Empresas com metas Net Zero',
    description:
      'Tecnologia, rastreabilidade e apoio à gestão de emissões na cadeia produtiva.',
    iconName: 'building',
    accent: '#174A50',
  },
  {
    id: 'investidores',
    title: 'Investidores e grupos econômicos',
    description:
      'Um modelo de negócio conectado à transição climática, à agricultura e à geração de valor.',
    iconName: 'trending-up',
    accent: '#B96F4A',
  },
  {
    id: 'pesquisa',
    title: 'Institutos de pesquisa e universidades',
    description:
      'Parcerias para desenvolver conhecimento, validar práticas e aproximar ciência e campo.',
    iconName: 'graduation-cap',
    accent: '#D9C28F',
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'sustentabilidade-financeira',
    title: 'Sustentabilidade financeiramente viável',
    subtitle: 'Rentabilidade e impacto caminhando juntos',
    description:
      'Acreditamos que a sustentabilidade precisa ser financeiramente viável. Trabalhamos para que a rentabilidade da empresa e do produtor rural cresça em proporção direta à regeneração do solo e à remoção responsável de carbono.',
    points: [
      'Modelo de negócio focado no ganho do produtor rural',
      'Redução de custos operacionais com insumos ao longo do tempo',
      'Valorização patrimonial através da recuperação da terra fértil',
    ],
    image: aboutImg,
    reversed: false,
  },
  {
    id: 'regeneracao-respeito',
    title: 'Regeneração e respeito à terra',
    subtitle: 'O solo como organismo vivo e dinâmico',
    description:
      'Entendemos o solo como um ecossistema vivo. Nossas soluções buscam recuperar sua vitalidade, promover resiliência climática e contribuir para a segurança alimentar das futuras gerações.',
    points: [
      'Preservação da microbiota nativa e atividade biológica',
      'Aumento da capacidade de retenção hídrica do solo',
      'Cobertura vegetal contínua e proteção contra erosão',
    ],
    image: heroImg,
    reversed: true,
  },
  {
    id: 'ciencia-tecnologia',
    title: 'Ciência, tecnologia e rastreabilidade',
    subtitle: 'Decisões embasadas em dados técnicos confiáveis',
    description:
      'Unimos conhecimento técnico, tecnologia climática e acompanhamento de indicadores para apoiar decisões mais eficientes, transparentes e conectadas à realidade de cada operação.',
    points: [
      'Monitoramento georreferenciado e amostragem estratificada',
      'Rastreabilidade técnica para metas de descarbonização',
      'Abordagem pragmática e aplicável ao dia a dia da lavoura',
    ],
    image: difTechImg,
    reversed: false,
  },
];

export const IMAGES = {
  hero: heroImg,
  about: aboutImg,
  solBio: solBioImg,
  solRemineralizacao: solRemineralizacaoImg,
  solResiduos: solResiduosImg,
  difTech: difTechImg,
};
