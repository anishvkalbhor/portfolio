import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anish Kalbhor",
  initials: "AK",
  url: "https://anishvkalbhor.me",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "AI & Full-Stack Engineer specializing in scalable systems, real-time applications, and intelligent software.",
  summary:
    "Final-year **Information Technology** student with under a year of professional experience and a strong track record in **hackathons** and **rapid prototyping**. I build **AI-powered** and **full-stack applications**, including real-time systems and scalable web platforms using **FastAPI, Next.js, and TypeScript**. Passionate about solving real-world problems through efficient **system design and practical AI implementation.**",
  avatarUrl: "/me.jpg",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Next.js",
    "React",
    "Node.js",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "WebSockets",
    "Docker",
    "CI/CD",
    "RAG",
    "LLMs",
    "Vector Search",
    "Machine Learning",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "anishkalbhor2020@gmail.com",
    tel: "+91-9325359422",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anishvkalbhor",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anishvkalbhor",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:anishkalbhor2020@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://anishvkalbhor-resume.vercel.app",
        icon: NotebookIcon,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Lumovate Intelligence",
      href: "https://www.lumovateintelligence.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/lumovate.png",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Worked as a Software Engineer Intern at Lumovate Intelligence, where I built a full-stack social platform using Next.js, TypeScript, Tailwind CSS, and MongoDB, delivering real-time interactions and improving user engagement. Developed a secure authentication and onboarding system using Clerk with modular multi-step flows, validation, and reusable components to enhance user experience and reduce drop-offs. Designed scalable backend architecture, including efficient MongoDB schemas for managing user profiles, interests, and preferences, and integrated a map-based location feature to enable dynamic, location-aware functionality.",
    },
  ],
  education: [
    {
      school: "St. Francis Institute of Technology",
      href: "https://www.sfit.ac.in/",
      degree: "B.E in Information Technology",
      logoUrl: "/sfit.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Quickserve",
      href: "https://github.com/anishvkalbhor/QuickServe",
      dates: "June 2025 - May 2026",
      active: true,
      description:
        "QuickServe is an AI-powered, voice-first ordering system for restaurant workflows. It combines speech recognition, NLU intent/entity parsing, response generation, cart/session persistence, and payment flow support in one stack.",
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "Typescript",
        "MongoDB",
        "Rasa NLU",
        "LLMs",
        "TTS & STT"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anishvkalbhor/QuickServe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Quickserve_Banner.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Victor",
      href: "https://github.com/inception-js-org/Victor/tree/anish",
      dates: "December 2025",
      active: false,
      description:
        "A production-ready Retrieval-Augmented Generation (RAG) system built with LangChain, featuring intelligent document processing, semantic search, and conversational AI capabilities. The system integrates Google Drive synchronization, web scraping, and multi-modal document processing with enterprise-grade authentication and monitoring.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Python",
        "FastAPI",
        "LangChain",
        "Vector Search",
        "RAG Pipeline",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/inception-js-org/Victor/tree/anish",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Victor_Banner.png",
      video: "https://res.cloudinary.com/duycyjk2n/video/upload/v1777734309/dhc2y7wwrpzw6dbn1eez.mp4",
    },
    {
      title: "PCOS Detect",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "PCOS Detect is an end-to-end AI-powered clinical decision support system designed to assess Polycystic Ovary Syndrome (PCOS)",
      technologies: [
        "Next.js",
        "Typescript",
        "SQLite",
        "Python",
        "FastAPI",
        "Clerk Auth",
        "Machine Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anishvkalbhor/PCOS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/PCOS_Detect_Banner.png",
      video: "",
    },
    {
      title: "Devpress",
      href: "https://automatic.chat",
      dates: "November 2025",
      active: true,
      description:
        "DevPress is a modern, full-stack blogging application built to demonstrate a clean, type-safe, and scalable architecture.It allows users to create, read, edit, and delete blog posts, manage categories, upload images, and search for content - all through a seamless and responsive interface.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Monorepo Architecture",
        "tRPC",
        "Drizzle ORM",
        "Tiptap Editor",
        "Zod Validation",
      ],
      links: [
        {
          type: "Website",
          href: "https://anishvkalbhor-devpress.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/anishvkalbhor/fullstack_blogging_application",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/duycyjk2n/video/upload/v1777738552/ijvzwwed1ooyxfrlijqd.mp4",
    },
  ],
  hackathons: [
    {
      title: "Prakalp (2nd Prize) - Quickserve",
      dates: "April 2026",
      location: "Mumbai, India",
      description:
      "Presented Quickserve at Prakalp, an inter-college level competition in organized by Computer department St. Francis Institute of Technology, and secured 2nd prize among 50+ teams for our innovative AI-powered voice-first ordering system designed to revolutionize restaurant workflows.",
      image:
      "/sfit.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1L8qSXMlSdZ4-Q03e1YIj5a2wMITjAfvC/view?usp=sharing",
        },
      ],
    },
    {
      title: "Colloquium (3rd Prize) - Quickserve",
      dates: "March 2026",
      location: "Mumbai, India",
      description:
        "Presented Quickserve at Colloquium, a college level competition in organized by Information Technology department St. Francis Institute of Technology, and secured 3rd prize among 100+ teams for our innovative AI-powered voice-first ordering system designed to revolutionize restaurant workflows.",
      image:
        "/sfit.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1RCSuDBi0NVT0PwKf3gVY4LttDFKKM5SP/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Hackrypt - Cosmic Cypher (3rd Runner up)",
      dates: "January 2026",
      location: "Mumbai, India",
      description:
        "Developed a modern, AI-powered biometric attendance and identity verification platform built for educational institutions combining facial recognition with fingerprint verification to provide a secure, contactless, and efficient way to verify student and faculty presence.",
      image:
        "/Hackrypt.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/anishvkalbhor_trcac-devclub-hackrypt-ugcPost-7418559526729232384-U475",
        },
      ],
    },
    {
      title: "Crakathon (IIT Bombay) - (4th place)",
      dates: "January 2026",
      location: "Mumbai, India",
      description:
        "Developed an object detection model to identify and classify road damage using the RDD2022 dataset. The approach leveraged YOLO-based architectures, explored suitable backbones and domain-specific data augmentations, and incorporated ensembling strategies to improve performance.",
      icon: "public",
      image:
        "/Crakathon.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1kbYchXxDNNFLCebwU_xH4d3wvpeqq_WH/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Smart India Hackathon (Finalists) - Victor",
      dates: "December 2025",
      location: "Rourkela, India",
      description:
        "Developed a production-ready Retrieval-Augmented Generation (RAG) system for Ministry of Education, India, performing efficient RAG over a large corpus of educational documents",
      image:
        "/SIH_logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/inception-js-org/Victor/tree/anish",
        },
      ],
    },
  ],
} as const;
