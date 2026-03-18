import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
  personal: {
    name: "Pradeep Kaviraj",
    role: "Frontend Engineer",
    tagline: "Building scalable, high-performance web applications with modern UI/UX",
    location: "Bengaluru, India",
    email: "pradeepmvk12@gmail.com",
    phone: "+91 93636 23774",
    github: "https://github.com/PradeepKaviraj",
    linkedin: "https://linkedin.com/in/pradeep-kaviraj-283259324",
    portfolio: "https://creative-academy-sepia.vercel.app"
  },

  summary: {
    description:
      "Frontend-focused JavaScript developer specializing in React.js, Next.js, and TypeScript with real-world experience building scalable, production-ready applications. Strong in component architecture, performance optimization, and responsive UI development.",
    highlights: [
      "6-month internship delivering production-level applications",
      "Strong in reusable component architecture",
      "Experience with REST APIs and client-server data flow",
      "Focus on performance optimization and clean code"
    ]
  },

  skills: {
    frontend: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML5",
      "CSS3"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs"
    ],
    database: [
      "MySQL",
      "MongoDB"
    ],
    tools: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Figma"
    ]
  },

  projects: [
    {
      title: "Creative Academy",
      type: "Frontend Application",
      description:
        "A modern educational platform with interactive UI, smooth animations, and responsive design.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      features: [
        "Built fully responsive UI across all devices",
        "Implemented smooth animations and transitions",
        "Optimized performance using lazy loading and efficient component structuring",
        "Used Next.js App Router with dynamic routing"
      ],
      live: "https://creative-academy-sepia.vercel.app",
      github: "https://github.com/PradeepKaviraj/creative-academy"
    },
    {
      title: "Prison Management System",
      type: "Full Stack Application",
      description:
        "A full-stack system for managing prisoner and staff records with complete CRUD operations.",
      techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
      features: [
        "Handled multiple data modules with CRUD operations",
        "Designed MySQL database schema",
        "Built REST APIs for seamless client-server communication",
        "Developed 15+ reusable React components",
        "Improved UI consistency and performance"
      ],
      github: "https://github.com/PradeepKaviraj"
    },
    {
      title: "Learning Management System",
      type: "Full Stack Application (In Progress)",
      description:
        "A scalable LMS platform with admin workflows and structured course management.",
      techStack: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      features: [
        "Designed modular and scalable architecture",
        "Implemented global state management using Redux Toolkit",
        "Built admin workflows for course scheduling",
        "Integrated XLSX bulk data upload"
      ]
    }
  ],

  experience: [
    {
      role: "Software Developer Intern",
      company: "NxDesignz Studio Pvt. Ltd.",
      location: "Bengaluru, India",
      duration: "June 2024 – December 2024",
      highlights: [
        "Developed 3+ production-level web applications",
        "Built reusable UI components with modular architecture",
        "Worked with Git workflows and team collaboration",
        "Deployed applications using Vercel",
        "Improved responsiveness and fixed UI/UX issues"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "SSMRV College",
      duration: "2022 – 2025"
    }
  ],

  certifications: [
    {
      title: "Advanced Diploma in Data Center Architecture",
      year: "2024"
    },
    {
      title: "Full Stack Development Program",
      status: "In Progress",
      organization: "NxDesignz Studio Pvt. Ltd."
    }
  ]
};
