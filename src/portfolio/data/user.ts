import type { User } from "@/portfolio/types/user";

export const USER = {
  firstName: "Tarun",
  lastName: "Choudhary",
  displayName: "Tarun Choudhary",
  username: "Tarun553",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack & Mobile Engineer specializing in Next.js, React Native (iOS & Android), NestJS, and AI/Cloud solutions.",
  flipSentences: [
    "Full Stack & Mobile Engineer",
    "Distributed Systems & BullMQ",
    "AI & LLM Solutions",
    "Cloud & DevOps",
  ],
  address: "Ghaziabad, India",
  phoneNumber: "KzkxIDc4MTkwIDUwNzgw",
  email: "dGFydW5jaG91ZGhhcnkud29yazA3QGdtYWlsLmNvbQ==",
  website: "https://github.com/Tarun553",
  jobTitle: "Full Stack Engineer",
  jobs: [
    {
      title: "Full Stack Engineer",
      company: "Builder Monkey",
      website: "https://buildermonkey.com",
    },
    {
      title: "Ex-Full Stack Developer",
      company: "75 Way Technology",
      website: "https://75way.com",
    },
    {
      title: "Ex-Full Stack Developer Intern",
      company: "Sheriyans Coding School",
      website: "https://sheryians.com",
    },
  ],

  about: `
- Full Stack & Mobile Engineer with production experience building and deploying complete **SaaS platforms**, **cross-platform mobile apps (iOS & Android)**, and **cloud infrastructure** using Next.js, React Native, NestJS, PostgreSQL, Redis, and Docker.
- Shipped [AtFenix](https://atfenix.com) (Enterprise Cloud IaaS & Customer Portal at [one.atfenix.com](https://one.atfenix.com)) and [FixCars.ai](https://fixcars.ai) (AI Automotive Diagnostics on Web, iOS, and Android) serving **500+ active users**.
- Proven track record optimizing platform performance: reduced API latency by **50%** through Redis connection pooling, distributed caching, and query optimization; cut dashboard load times by **52%** through BullMQ tuning and k6 load testing.
- Architected fault-tolerant systems using **distributed Redis locks**, **async BullMQ workers**, transactional rollback, idempotent payment workflows, and automated resource cleanup.
- Resolved critical production incidents including Redis connection storms, duplicate billing, and orphan VM states.
- Deep hands-on experience building AI/LLM applications with **LangChain**, **LangGraph**, **RAG pipelines**, **vector search (Pinecone)**, and **Gemini API**.
- B.Tech in Computer Science Engineering (AI & ML) with strong grounding in software engineering principles, automated testing (Jest, Playwright, k6), and CI/CD pipelines.
`,
  avatar: "https://github.com/Tarun553.png",
  ogImage: "/Images/og.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "tarun",
    "tarun choudhary",
    "Tarun553",
    "full stack engineer",
    "full stack developer",
    "react native",
    "ios",
    "android",
    "nextjs",
    "nestjs",
    "ai engineer",
    "bullmq",
    "redis",
    "docker",
  ],
  dateCreated: "2026-04-01",
  resume: "https://drive.google.com/file/d/1Ovj_dGCMD_IfqvxYD29wi9PoSY8KeE5P/view?usp=drivesdk",
} satisfies User;
