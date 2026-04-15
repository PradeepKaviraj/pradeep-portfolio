export interface PersonalLinks {
  linkedin: string;
  github: string;
  portfolio: string;
  resume?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline?: string;
  phone: string;
  email: string;
  location: string;
  links: PersonalLinks;
}

export interface RoleFocusSection {
  headline: string;
  highlights: string[];
  projects: string[];
}

export interface RoleFocus {
  frontend: RoleFocusSection;
  backend: RoleFocusSection;
  fullstack: RoleFocusSection;
  ai: RoleFocusSection;
}

export interface Skills {
  core: string[];
  backend: string[];
  frontend: string[];
  ai: string[];
  devops: string[];
  tools: string[];
}

export interface Project {
  name: string;
  tech: string[];
  link?: string;
  github?: string;
  impact?: string;
  description: string[];
  status?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

export interface Education {
  degree: string;
  college: string;
  duration: string;
  cgpa?: string;
}

export interface Certification {
  name: string;
  year?: string;
  status?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  roleFocus?: RoleFocus;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  strengths: string[];
  languages: Language[];
}
