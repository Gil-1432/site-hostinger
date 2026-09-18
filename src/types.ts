export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string[];
  benefits: string[];
  image: string;
  accentColor: string;
  tagBg: string;
  tagColor: string;
  iconName: 'microscope' | 'mountain' | 'recycle';
}

export interface ImpactMetric {
  id: string;
  value: string;
  description: string;
  iconName: 'leaf' | 'cloud' | 'shield';
  tag: string;
}

export interface PartnershipAudience {
  id: string;
  title: string;
  description: string;
  iconName: 'user' | 'users' | 'building' | 'trending-up' | 'graduation-cap';
  accent: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  reversed: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organizationType: string;
  message: string;
  consent: boolean;
}
