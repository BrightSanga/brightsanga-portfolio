import { Project, Skill, Experience, Service, Testimonial, PricingPackage } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'food-delivery',
    title: "Dary's Delivery",
    description: "A sophisticated food delivery ecosystem tailored for South Africa's local vendors. I implemented a robust real-time order tracking system using Firebase's Firestore, ensuring instant synchronization between customer apps and vendor dashboards.",
    tags: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    id: 'pool-tables',
    title: 'PrimePlaysBilliards',
    description: 'A premium e-commerce marketplace featuring a complex custom product configurator. I developed the logic using React state management to allow users to visualize real-time changes to table finishes.',
    tags: ['Vite', 'TypeScript', 'E-commerce'],
  },
  {
    id: 'cinema-web',
    title: 'Road House Cinema',
    description: 'A cinematic portal for movie lovers in Harare, Zimbabwe. I integrated a specialized Movie Database API to fetch dynamic showtimes and metadata with a custom seat-booking algorithm.',
    tags: ['React', 'Framer Motion', 'Movie API'],
  }
];

export const SKILLS: Skill[] = [
  { name: 'Software Architecture', level: 96, icon: '🏛️' },
  { name: 'React', level: 92, icon: '⚛️' },
  { name: 'TypeScript', level: 88, icon: '📘' },
  { name: 'Linux (Arch/Kali)', level: 94, icon: '🐧' },
  { name: 'JavaScript', level: 95, icon: '🟨' },
  { name: 'CSS3/Tailwind', level: 92, icon: '🎨' },
];

export const SERVICES: Service[] = [
  {
    title: 'Full-Stack Development',
    description: 'Building high-performance, responsive web applications with robust backends and clean architectural patterns.',
    icon: '💻'
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailoring complex digital systems to meet specific business requirements with a focus on scalability and reliability.',
    icon: '⚙️'
  },
  {
    title: 'Linux SysAdmin',
    description: 'Server deployment, security auditing, and automation using Arch and Debian-based systems.',
    icon: '🛡️'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Richard Rupere",
    role: "Founder, PrimePlaysBilliards",
    content: "Bright developed a custom product configurator for our billiards site that exceeded our expectations. His attention to detail and technical skill are remarkable.",
    avatar: ""
  },
  {
    name: "Dary",
    role: "Founder, Dary's Delivery",
    content: "The delivery app Bright made for us has completely transformed our operations. The real-time tracking is flawless and the user experience is world-class.",
    avatar: ""
  }
];

export const EXPERIENCES: Experience[] = [
  {
    year: '2026 - Future',
    title: 'BSc in Industrial and Environmental Physics',
    organization: 'MUBAS',
    description: 'Incoming student focusing on the intersection of physics, technology, and environmental systems.'
  },
  {
    year: '2020 - 2024',
    title: 'High School Diploma',
    organization: 'Jamo Private Secondary School',
    description: 'Achieved 3 Distinctions in Mathematics, Computer Studies, and Chemistry.'
  },
  {
    year: '2023 - Present',
    title: 'Freelance Web Developer',
    organization: 'Self-Employed',
    description: 'Leveraging modern frameworks and high-performance algorithms to deliver high-end digital solutions globally.'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    title: "Starter",
    price: "R 1,200",
    priceMWK: "K 150,000",
    features: [
      "Basic Website",
      "Ready in 3-7 working days",
      "Free .co.za Domain Registration",
      "1 GB SSD Storage",
      "Upto 5 Website Pages",
      "WordPress CMS",
      "Free Auto SSL Certificate",
      "Mobile & Tablet Friendly",
    ],
    isFeatured: false,
  },
  {
    title: "Business",
    price: "R 2,500",
    priceMWK: "K 300,000",
    features: [
      "All Basic Features Included",
      "Ready in 5-10 working days",
      "Business Emails",
      "1 GB SSD Storage",
      "Upto 6 Website Pages",
      "WordPress CMS",
      "Monthly Content Updates",
      "FAQ Toggle Section",
      "Google Map Setup",
      "Pricing Table",
      "Contact Forms",
      "Google My Business Setup",
      "12 Months Starter Hosting",
    ],
    isFeatured: true,
  },
  {
    title: "Enterprise",
    price: "R 4,000",
    priceMWK: "K 500,000",
    features: [
      "All Business Features Included",
      "Advanced SEO",
      "E-commerce Functionality",
      "Custom API Integrations",
      "Priority Support",
    ],
    isFeatured: false,
  },
];
