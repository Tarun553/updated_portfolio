import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "buildermonkey",
    companyName: "Builder Monkey",
    positions: [
      {
        id: "bm-fullstack-2026",
        title: "Full Stack Engineer",
        employmentPeriod: {
          start: "Apr 2026",
          end: undefined,
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Shipped AtFenix (Cloud IaaS & Customer Portal at atfenix.com / one.atfenix.com) and FixCars.ai (AI Diagnostics on Web, iOS, and Android) serving 500+ active users.
- Led end-to-end development using Next.js, React Native (iOS & Android), NestJS, Node.js, and CI/CD pipelines.
- Reduced API latency by 50% through Redis connection pooling, distributed caching, and query optimization.
- Improved dashboard load time by 52% through BullMQ tuning and k6 load testing.
- Architected fault-tolerant systems using distributed Redis locks, async BullMQ workers, transactional rollback, and automated resource cleanup.
- Resolved Redis connection storms, duplicate billing, and orphan VM issues.
- Engineered secure Cashfree payment workflows with idempotent verification and webhook validation.
- Developed 50+ automated tests across unit, integration, security, and E2E suites.
`,
        skills: [
          "Next.js",
          "React Native",
          "NestJS",
          "PostgreSQL",
          "Redis",
          "BullMQ",
          "Docker",
          "CI/CD",
          "k6",
          "Cashfree",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "75way",
    companyName: "75 Way Technology",
    positions: [
      {
        id: "75way-fullstack-2025",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "Dec 2025",
          end: "Apr 2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built and deployed MERN and Next.js applications for client production environments.
- Implemented secure authentication, REST APIs, LangChain-powered AI workflows, and WebSocket real-time communication.
- Designed responsive, performance-optimized user interfaces with modern React state management and structured error handling.
`,
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "LangChain",
          "WebSockets",
          "REST APIs",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "sheriyans",
    companyName: "Sheriyans Coding School",
    positions: [
      {
        id: "sheriyans-intern-2025",
        title: "Full Stack Developer Intern",
        employmentPeriod: {
          start: "Jul 2025",
          end: "Oct 2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed full-stack applications with Socket.IO real-time communication.
- Integrated Google Maps API, authentication systems, and real-time delivery tracking.
- Collaborated with engineering mentors to practice clean code patterns and Git workflows.
`,
        skills: [
          "JavaScript",
          "Node.js",
          "Express.js",
          "Socket.IO",
          "Google Maps API",
          "REST APIs",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
];

