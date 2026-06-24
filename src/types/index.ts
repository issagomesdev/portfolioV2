export type Theme = 'dark' | 'light';

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  icons: Array<{ name: string; title: string }>;
  tags: string[];
  stack: string[];
  liveUrl: string;
  githubUrl?: string;
  docsUrl?: string;
  align: 'left' | 'right';
  caseStudy: {
    year: string;
    challenge: string;
    solution: string;
    galleryImages: Array<{ title: string; description: string; src: string }>;
    client: string;
    role: string;
    date: string;
    service: string;
  };
}

export type ServiceColor = 'primary' | 'secondary' | 'tertiary' | 'primary-container' | 'secondary-container';

export interface Service {
  id: string;
  icon: string;
  color: ServiceColor;
  title: string;
  description: string;
  tags: string[];
  wide?: boolean;
  extraContent?: {
    items: string[];
  };
}

export interface TechItem {
  label: string;
}

export interface Stat {
  value: string;
  label: string;
  color: string;
}

export interface CvFile {
  id: string;
  name: string;
  viewUrl: string;
  downloadUrl: string;
  updatedAt?: string;
}
