import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Pradeep Kaviraj",
    title: "Full Stack Developer",
    phone: "+91 93636 23774",
    email: "pradeepmvk12@gmail.com",
    location: "Bengaluru, Karnataka",
    links: {
      linkedin: "https://linkedin.com/in/pradeep-kaviraj-283259324",
      github: "https://github.com/PradeepKaviraj",
      portfolio: "https://pradeep-portfolio-lovat-chi.vercel.app",
      resume: "/Pradeep_Kaviraj_Resume.pdf"
    }
  },

  summary: "Full Stack JavaScript Developer with experience building production-grade web applications using React.js, Next.js 14, TypeScript, and Node.js. Skilled in reusable component architecture, REST APIs, Redux Toolkit, and responsive UI development. Built an AI-powered portfolio with LLM chatbot integration.",

  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
    frontend: ["React.js", "Next.js 14", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    backend: ["Node.js", "Express.js", "REST APIs", "Nodemailer"],
    databases: ["MySQL", "MongoDB"],
    ai: ["OpenRouter API", "Prompt Engineering", "AI Chatbot Development", "Streaming Responses"],
    tools: ["Git", "GitHub", "Vercel", "VS Code", "Figma", "Postman"]
  },

  projects: [
    {
      name: "AI-Powered Developer Portfolio",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "OpenRouter API", "Nodemailer"],
      link: "https://pradeep-portfolio-lovat-chi.vercel.app",
      description: [
        "Built full-stack portfolio with real-time AI chatbot",
        "Implemented streaming API using Next.js backend",
        "Custom system prompt with strict response control",
        "Created reusable chat hook for frontend state",
        "Developed 6 responsive sections"
      ]
    },
    {
      name: "Parents Choice — Insurance Platform",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Nodemailer"],
      link: "https://parentschoices.in",
      description: [
        "Built client-facing insurance platform",
        "Created reusable UI components",
        "Implemented animations with Framer Motion",
        "Integrated email service using Nodemailer",
        "Fully responsive design"
      ]
    },
    {
      name: "Creative Academy",
      tech: ["Next.js", "JavaScript", "Tailwind CSS"],
      link: "https://creative-academy-sepia.vercel.app",
      description: [
        "Course discovery platform with dynamic routing",
        "Converted Figma designs to UI",
        "Optimized performance using lazy loading"
      ]
    },

    {
      name: "Learning Management System",
      tech: ["Next.js 14", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      link: "https://github.com/PradeepKaviraj/lms-clients",
      status: "In Progress",
      description: [
        "Scalable LMS architecture",
        "Bulk data upload via XLSX",
        "Admin workflows",
        "Dashboard analytics with charts"
      ]
    },
    {
      name: "Prison Management System",
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      description: [
        "Full-stack CRUD system",
        "Designed normalized database",
        "Built REST APIs",
        "Created reusable components"
      ]
    }
  ],

  experience: [
    {
      role: "Software Developer Intern",
      company: "NxDesignz Studio Pvt. Ltd.",
      duration: "July 2025 – January 2026",
      location: "Bengaluru",
      points: [
        "Worked on 3+ production projects",
        "Built reusable UI components",
        "Integrated REST APIs",
        "Used Git workflows and code reviews",
        "Deployed apps on Vercel",
        "Converted Figma designs to code"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications",
      college: "SSMRV College, Bengaluru",
      duration: "2022 – 2025",
      cgpa: "8.09"
    }
  ],

  certifications: [
    {
      name: "Advanced Diploma in Data Center Architecture",
      year: "2025"
    },
    {
      name: "Full Stack Development Program",
      status: "In Progress"
    }
  ],

  strengths: [
    "Full-stack development",
    "Reusable component architecture",
    "AI integration",
    "Responsive UI design",
    "API integration",
    "Performance optimization",
    "Clean code practices"
  ],

  languages: [
    { name: "Tamil", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Kannada", level: "Conversational" }
  ]
};
