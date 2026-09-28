import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "atfenix",
    title: "AtFenix",
    period: {
      start: "Apr 2026",
    },
    link: "https://one.atfenix.com",
    github: "https://github.com/Tarun553/AtFenix",
    skills: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "Cashfree",
      "k6",
      "Linux / Hypervisors",
    ],
    description: `Production Cloud IaaS & VPS Hosting Platform ([atfenix.com](https://atfenix.com)) and Enterprise Customer Management Portal ([one.atfenix.com](https://one.atfenix.com)) delivering reliable cloud infrastructure and data center solutions in India with 99.99% network uptime.

**Key Architecture & Highlights:**

- **Automated Cloud IaaS**: Engineered automated VPS provisioning workflows managing hypervisor orchestration, storage allocation, and virtual machine lifecycles.
- **Centralized Customer Portal (\`one.atfenix.com\`)**: Developed the cloud management portal allowing users to seamlessly deploy, monitor, reboot, and scale virtual servers with real-time performance telemetry.
- **Fault-Tolerant Engine**: Architected high-reliability systems using distributed Redis locks, async BullMQ workers, transactional rollbacks, and automated resource cleanup to eliminate duplicate billing and orphan VM instances.
- **Idempotent Billing & Payments**: Engineered secure Cashfree payment gateway integration with idempotent transaction verification and resilient webhook validation.
- **Query Tuning & Load Testing**: Reduced authentication latency by 50% and dashboard load time by 52% through database indexing, Redis connection pooling, and k6 stress testing.
- **Test Coverage**: Authored 50+ automated unit, integration, security, and E2E tests for mission-critical operations.`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/atfenix.png",
      alt: "AtFenix - Cloud IaaS & VPS Hosting Platform",
    },
  },
  {
    id: "fixcars-ai",
    title: "FixCars.ai",
    period: {
      start: "Feb 2026",
    },
    link: "https://fixcars.ai",
    github: "https://github.com/Tarun553/FixCars.ai",
    skills: [
      "Next.js",
      "React Native",
      "iOS & Android",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "MinIO",
      "LangChain",
      "RAG",
      "WebSockets",
    ],
    description: `AI-Powered Automotive Diagnostics Assistant & Telemetry Platform ([fixcars.ai](https://fixcars.ai)) available across responsive Web and cross-platform **iOS and Android** mobile applications (operated by Oahu Autoshop LLC).

**Key Architecture & Highlights:**

- **Cross-Platform Ecosystem (Web, iOS & Android)**: Built responsive Next.js web application and native mobile clients using React Native for iOS and Android, allowing drivers to diagnose vehicle faults on the go.
- **Multi-Modal AI Diagnostics**:
  - *Talk to AI Mechanic*: Conversational natural speech/voice interface for real-time symptom analysis and repair guidance.
  - *Dashboard Warning Photo Analysis*: Integrated computer vision pipeline to inspect warning lights and engine bay photos, stored via MinIO object storage.
  - *Ranked Root Causes & Cost Estimates*: Converts natural driver symptoms into ranked diagnostic probabilities with itemized local repair cost breakdowns.
- **Garage & Service Tracking**: Designed "My Garage" for storing multi-vehicle profiles (Year, Make, Model, VIN), scheduled maintenance reminders, and safety recall lookups.
- **Local Mechanic Network**: Built "Nearby Shops" geo-discovery to map certified local auto repair centers with real-time consultation booking.
- **RAG & Microservices**: Built LangChain-powered RAG pipeline over specialized automotive service manuals, backed by PostgreSQL, Redis caching, and BullMQ background workers.`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/fixcars.png",
      alt: "FixCars.ai - AI Car Diagnostic Assistant (Web, iOS & Android)",
    },
  },
  {
    id: "firecrawler",
    title: "FireCrawler",
    period: {
      start: "Nov 2025",
    },
    github: "https://github.com/Tarun553/FireCrawler",
    skills: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Pinecone",
      "BullMQ",
      "Gemini API",
      "Vector Search",
    ],
    description: `AI Platform for Automated Website Crawling, Semantic Indexing, and Embeddable Chatbots.

**Key Architecture & Highlights:**

- Built end-to-end intelligent crawling pipeline for automated website parsing, semantic chunking, and vector indexing into Pinecone.
- Integrated Gemini-powered RAG responses and voice assistant capabilities for conversational interaction over crawled content.
- Created modular TypeScript architecture with structured error handling, retry policies, and rate-limiting queues.
- Enabled drop-in embeddable chat widgets for third-party websites with customizable knowledge scopes.`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/firecrawler.png",
      alt: "FireCrawler - AI Web Crawling & Chatbot",
    },
  },
  {
    id: "ai-khata-bot",
    title: "AI Khata Bot",
    period: {
      start: "Feb 2026",
    },
    github: "https://github.com/Tarun553/telegramBot",
    link: "https://telegram-bot-eta-livid.vercel.app",
    skills: [
      "Next.js",
      "TypeScript",
      "Google Gemini Pro",
      "Telegram API",
      "PostgreSQL",
      "Prisma",
      "Upstash Redis",
      "Clerk",
      "Tailwind CSS",
    ],
    description: `AI-Powered Bookkeeping & Khata Assistant for Small Businesses and Shop Owners.

**Key Architecture & Highlights:**

- Built an intelligent bookkeeping assistant integrating Telegram bot conversational interface with a modern Next.js web analytics dashboard.
- Implemented multi-lingual natural language intent parsing (Hindi, Hinglish, English) using Google Gemini to automatically extract sales, credits, and debits (e.g., *"Ramesh ko 250 udhar"*).
- Designed automated transaction records and reconciliation workflows backed by PostgreSQL and Prisma ORM.
- Architected high-performance caching and rate limiting with Upstash Redis and automated webhook lifecycle management.
- Integrated Clerk authentication for secure multi-tenant merchant access.`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/ai-khata-bot.png",
      alt: "AI Khata Bot - Bookkeeping Assistant",
    },
  },
];