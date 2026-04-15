import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Pradeep Kaviraj",
    title: "Full Stack Developer | Backend-Focused | AI Integration",
    tagline: "Building scalable APIs and AI-powered applications using Next.js and Node.js",
    phone: "+91 9363623774",
    email: "pradeepmvk12@gmail.com",
    location: "Bengaluru, India",
    links: {
      linkedin: "https://linkedin.com/in/pradeep-kaviraj-283259324",
      github: "https://github.com/PradeepKaviraj",
      portfolio: "http://pradeepdev.duckdns.org"
    }
  },

  summary: "Full Stack Developer with strong backend focus, experienced in building scalable web applications and AI-powered systems using Next.js, Node.js, and TypeScript. Skilled in REST API design, authentication systems, and cloud deployment on AWS. Hands-on experience integrating LLM APIs with real-time streaming and persistent data handling.",

  roleFocus: {
    frontend: {
      headline: "Frontend Engineer (React / Next.js)",
      highlights: [
        "Built real-time streaming AI chat interfaces",
        "Developed reusable component architecture",
        "Handled loading, partial responses, and fallback UI states",
        "Built responsive UI using Tailwind CSS and animations"
      ],
      projects: [
        "AI SaaS Dashboard",
        "AI-Powered Developer Portfolio"
      ]
    },
    backend: {
      headline: "Backend Engineer (Node.js / APIs)",
      highlights: [
        "Designed REST APIs with JWT authentication",
        "Implemented secure access control and middleware",
        "Optimized MongoDB queries using indexing",
        "Handled async workflows and error handling"
      ],
      projects: [
        "AI SaaS Dashboard",
        "Prison Management System"
      ]
    },
    fullstack: {
      headline: "Full Stack Developer",
      highlights: [
        "Built end-to-end systems from UI to deployment",
        "Integrated frontend, backend, and AI services",
        "Deployed applications using AWS and Vercel",
        "Managed complete application lifecycle"
      ],
      projects: [
        "AI SaaS Dashboard",
        "AI-Powered Developer Portfolio"
      ]
    },
    ai: {
      headline: "AI Application Engineer",
      highlights: [
        "Integrated OpenRouter LLaMA APIs into applications",
        "Built real-time streaming AI response systems",
        "Designed prompt handling and context management",
        "Handled API failures and fallback mechanisms"
      ],
      projects: [
        "AI SaaS Dashboard",
        "AI-Powered Developer Portfolio"
      ]
    }
  },

  skills: {
    core: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React.js",
      "Next.js"
    ],
    backend: [
      "REST APIs",
      "JWT Authentication",
      "Middleware",
      "MongoDB",
      "MySQL"
    ],
    frontend: [
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Context API"
    ],
    ai: [
      "OpenRouter API",
      "LLaMA",
      "Prompt Engineering",
      "Streaming Responses"
    ],
    devops: [
      "AWS EC2",
      "Nginx",
      "PM2",
      "Vercel",
      "SSL",
      "DNS"
    ],
    tools: [
      "Git",
      "Postman",
      "Prisma",
      "Jest"
    ]
  },

  projects: [
    {
      name: "AI SaaS Dashboard",
      featured: true,
      link: "https://ai-saas-project-alpha.vercel.app/",
      github: "https://github.com/PradeepKaviraj",
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Prisma",
        "JWT",
        "OpenRouter"
      ],
      impact: "AI SaaS platform supporting multi-session chat with real-time streaming",
      description: [
        "Built real-time AI chat system with streaming responses",
        "Designed REST APIs for session-based chat handling",
        "Implemented JWT authentication and protected routes",
        "Structured MongoDB schema for efficient data handling",
        "Integrated OpenRouter LLM APIs for chat workflows",
        "Deployed full-stack application on Vercel with real-time streaming support"
      ]
    },
    {
      name: "AI-Powered Developer Portfolio",
      link: "http://pradeepdev.duckdns.org",
      github: "https://github.com/PradeepKaviraj",
      tech: [
        "Next.js",
        "TypeScript",
        "OpenRouter",
        "AWS EC2",
        "Nginx",
        "PM2"
      ],
      impact: "Portfolio with integrated AI chatbot and custom cloud deployment",
      description: [
        "Built AI chatbot with real-time streaming responses",
        "Handled prompt logic and conversational context",
        "Deployed application on AWS EC2 with Nginx and PM2",
        "Configured SSL and domain routing"
      ]
    },
    {
      name: "Parents Choice (Insurance Platform)",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Nodemailer"
      ],
      impact: "Client-facing insurance platform with responsive UI",
      description: [
        "Built responsive UI using Next.js and Tailwind CSS",
        "Implemented contact form with email workflow",
        "Added animations using Framer Motion"
      ]
    },
    {
      name: "Prison Management System",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL"
      ],
      impact: "Full-stack CRUD system managing structured data",
      description: [
        "Built REST APIs for CRUD operations",
        "Designed normalized MySQL schema",
        "Handled secure data flow between frontend and backend"
      ]
    }
  ],

  experience: [
    {
      role: "Software Developer Trainee",
      company: "NexDesign Studio Pvt. Ltd.",
      duration: "Jan 2026 – Present",
      location: "Bengaluru",
      points: [
        "Developed reusable React components to standardize UI architecture",
        "Implemented JWT-based authentication and access control",
        "Optimized MongoDB queries for better data retrieval",
        "Debugged full-stack issues using structured error handling"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "NexDesign Studio Pvt. Ltd.",
      duration: "Jul 2025 – Dec 2025",
      location: "Bengaluru",
      points: [
        "Built production-ready web applications",
        "Converted Figma designs into responsive UI",
        "Integrated backend services and workflows",
        "Managed deployments using Git and Vercel"
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
      name: "Full Stack Development – NexDesign Studio"
    },
    {
      name: "Advanced Diploma in Data Center Architecture"
    }
  ],

  strengths: [
    "Backend API Development",
    "Full Stack System Building",
    "AI Integration in Applications",
    "Cloud Deployment (AWS)",
    "Debugging and Problem Solving"
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Fluent" },
    { name: "Kannada", level: "Conversational" }
  ]
};