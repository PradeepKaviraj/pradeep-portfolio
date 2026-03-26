import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Pradeep Kaviraj",
    title: "Full Stack Developer",
    phone: "+91 9363623774",
    email: "pradeepmvk12@gmail.com",
    location: "Bengaluru, Karnataka",
    links: {
      linkedin: "https://linkedin.com/in/pradeep-kaviraj",
      github: "https://github.com/PradeepKaviraj",
      portfolio: "https://pradeep-portfolio-lovat-chi.vercel.app",
      resume: "/Pradeep_Kaviraj_Resume.pdf"
    }
  },

  summary:
    "Full Stack Developer specializing in scalable web applications using Next.js, TypeScript, and Node.js. Experienced in building AI-powered platforms with LLM integration (LLaMA via OpenRouter API), real-time streaming, and context-aware systems. Strong in REST API design, authentication (JWT, bcrypt), database architecture (MongoDB, Prisma), and performance optimization.",

  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],

    frontend: [
      "React.js",
      "Next.js (App Router)",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI Design"
    ],

    backend: [
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "Next.js API Routes",
      "Authentication (JWT, bcrypt)",
      "Middleware",
      "API Integration"
    ],

    databases: [
      "MongoDB Atlas",
      "Prisma ORM",
      "MySQL",
      "Database Design",
      "CRUD Operations"
    ],

    ai: [
      "OpenRouter API",
      "LLaMA 3.1",
      "Prompt Engineering",
      "AI API Integration",
      "Streaming Responses"
    ],

    tools: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "CI/CD Pipelines",
      "Environment Variables"
    ],

    core: [
      "Data Structures & Algorithms (Basic)",
      "OOP Principles (Basic)",
      "System Design Basics",
      "Scalable Architecture",
      "Performance Optimization"
    ]
  },

  projects: [
    {
      name: "AI SaaS Dashboard",
      tech: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Prisma",
        "JWT",
        "OpenRouter API",
        "Tailwind CSS"
      ],
      featured: true,
      link: "https://ai-saas-project-alpha.vercel.app/",
      description: [
        "Built full-stack AI SaaS platform with multi-tool workflows (chat, content generation, code explanation)",
        "Integrated LLaMA (OpenRouter API) with real-time streaming responses",
        "Designed multi-chat architecture with persistent conversation history",
        "Implemented secure authentication using JWT, httpOnly cookies, and bcrypt",
        "Handled concurrent users with scalable backend design",
        "Deployed production-ready app on Vercel"
      ]
    },

    {
      name: "AI-Powered Developer Portfolio",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "OpenRouter API"
      ],
      link: "https://pradeep-portfolio-lovat-chi.vercel.app",
      description: [
        "AI chatbot for recruiter interaction with real-time responses",
        "Streaming API with custom chat state management",
        "Structured prompt system with fallback handling",
        "Fully responsive and optimized UI"
      ]
    },

    {
      name: "Parents Choice — Insurance Platform",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Nodemailer"
      ],
      link: "https://parentschoices.in",
      description: [
        "Built client-facing insurance platform",
        "Reusable component architecture",
        "Integrated email workflows using Nodemailer",
        "Improved UI performance and responsiveness"
      ]
    },

    {
      name: "Creative Academy",
      tech: ["Next.js", "JavaScript", "Tailwind CSS"],
      link: "https://creative-academy-sepia.vercel.app",
      description: [
        "Dynamic course platform with routing",
        "Converted Figma designs to production UI",
        "Optimized performance using lazy loading and code splitting"
      ]
    },

    {
      name: "Learning Management System",
      tech: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS"
      ],
      status: "In Progress",
      link: "https://github.com/PradeepKaviraj/lms-clients",
      description: [
        "Designing scalable LMS architecture",
        "Implementing admin workflows",
        "Building dashboard analytics",
        "Handling bulk data upload (XLSX)"
      ]
    },

    {
      name: "Prison Management System",
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      description: [
        "Full-stack CRUD application with REST APIs",
        "Designed normalized relational database schema",
        "Managed multiple modules with efficient data handling"
      ]
    }
  ],

  experience: [
    {
      role: "Software Developer Intern",
      company: "NexDesign Studio Pvt. Ltd.",
      duration: "July 2025 – January 2026",
      location: "Bengaluru",
      points: [
        "Delivered 3+ production-grade applications",
        "Built 20+ reusable UI components",
        "Integrated REST APIs for authentication and workflows",
        "Collaborated using Git (PRs, code reviews, branching)",
        "Deployed applications on Vercel",
        "Ensured responsive UI across devices"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "SSMRV College, Bengaluru",
      duration: "2022 – 2025",
      cgpa: "8.09 / 10"
    }
  ],

  certifications: [
    {
      name: "Full Stack Development Program",
      status: "2025–2026"
    },
    {
      name: "Advanced Diploma in Data Center Architecture",
      year: "2025"
    }
  ],

  strengths: [
    "Full Stack Development (Next.js, Node.js, TypeScript)",
    "AI & LLM Integration (OpenRouter, LLaMA, Streaming)",
    "Database Architecture & Design (MongoDB, Prisma, SQL)",
    "Scalable & Performance-Optimized Web Solutions",
    "Modern UI/UX with Tailwind CSS & Framer Motion"
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Professional" },
    { name: "Tamil", level: "Native" },
    { name: "Kannada", level: "Fluent" }
  ]
};