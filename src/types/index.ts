export interface PersonalLinks {
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  links: PersonalLinks;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  ai: string[];
  tools: string[];
}

export interface Project {
  name: string;
  tech: string[];
  link?: string;
  description: string[];
  status?: string;
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
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  strengths: string[];
  languages: Language[];
}
