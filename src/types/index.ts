export interface PersonalData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export interface Summary {
  description: string;
  highlights: string[];
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

export interface Project {
  title: string;
  type: string;
  description: string;
  techStack: string[];
  features: string[];
  live?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  college: string;
  duration: string;
}

export interface Certification {
  title: string;
  year?: string;
  status?: string;
  organization?: string;
}

export interface ResumeData {
  personal: PersonalData;
  summary: Summary;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}
