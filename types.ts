export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PricingPackage {
  title: string;
  price: string;
  priceMWK: string;
  features: string[];
  isFeatured: boolean;
}
