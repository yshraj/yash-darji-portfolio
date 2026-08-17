export type CareerEntry = {
  id: string;
  years: string;
  span: string;
  role: string;
  company: string;
  context?: string;
  summary: string;
  details?: string[];
  stack?: string[];
  kind?: "work" | "education";
};

export const CAREER: CareerEntry[] = [
  {
    id: "webileapps",
    years: "2026",
    span: "Feb 2026 — Present",
    role: "Senior AI Engineer",
    company: "WebileApps",
    context: "Subsidiary of KFintech · deployed to Celigo",
    summary: "Two flagship GenAI platforms, built client-facing.",
    details: [
      "An AI-driven test automation solution that cut manual QA effort by 60%.",
      "A unified RAG platform where several teams create and manage enterprise chatbots from one dashboard.",
    ],
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "Azure OpenAI",
      "Pinecone",
      "FastAPI",
      "Docker",
      "Jenkins",
      "Argo CD",
      "AWS",
    ],
  },
  {
    id: "milestone-be",
    years: "2023–26",
    span: "Jul 2023 — Jan 2026",
    role: "Backend Engineer — AI & Agent Systems",
    company: "Milestone Inc.",
    summary: "Crawlers, ingestion APIs, and agents that went to production.",
    details: [
      "Led a large-scale crawler scanning millions of URLs weekly and reduced cost by 40%.",
      "Built scraping APIs that fed structured data into LLM applications for faster SEO analysis.",
      "Shipped chatbot and itinerary agents on LangGraph, FastAPI, and the OpenAI APIs.",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "OpenAI", "MongoDB Atlas", "Docker", "AKS"],
  },
  {
    id: "milestone-intern",
    years: "2023",
    span: "Jan 2023 — Jul 2023",
    role: "Software Engineer Intern",
    company: "Milestone Inc.",
    summary: "FAQ automation, plus performance work on legacy services.",
    details: [
      "Built an LLM-powered FAQ Manager for websites and Google Business profiles — 25% less manual effort.",
      "Optimised legacy .NET APIs for performance, scalability, and running cost.",
    ],
    stack: [".NET", "Node.js", "LLM APIs"],
  },
  {
    id: "canary",
    years: "2022",
    span: "May 2022 — Jul 2022",
    role: "Data Science & ML Intern",
    company: "Canary Mail",
    summary: "Phishing detection for inbox security.",
    details: [
      "Engineered an NLP phishing detector using supervised ML, URL analysis, and domain reputation signals.",
      "Real-time threat classification improved email security by 30%.",
    ],
    stack: ["Python", "NLP", "Supervised ML"],
  },
  {
    id: "nirma",
    years: "2019–23",
    span: "Jul 2019 — Jun 2023",
    role: "B.Tech, Computer Science & Engineering",
    company: "Nirma University",
    context: "Ahmedabad, India",
    summary: "CPI 8.4 / 10.",
    kind: "education",
  },
];

export const OPEN_SOURCE = [
  {
    label: "ai-job-search",
    meta: "22k+ stars",
    note: "Contributor — AI job application framework built on Claude Code.",
  },
  {
    label: "n8n",
    meta: "197k+ stars",
    note: "Community support — resolving GitHub issues and automation problems.",
  },
];
