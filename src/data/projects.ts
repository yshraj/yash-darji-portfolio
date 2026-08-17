export type Project = {
  id: string;
  title: string;
  category: string;
  pitch: string;
  stack: string[];
  image?: string;
  github?: string;
  demo?: string;
  /** Shown when there is nothing to link to, so the row never looks broken. */
  note?: string;
};

export const FEATURED: Project[] = [
  {
    id: "vectoringest",
    title: "VectorIngest",
    category: "Multi-tenant AI ingestion platform",
    pitch:
      "Agencies stand up a private knowledge base per client. Documents auto-ingest into Qdrant through n8n, and a live chat widget goes on the client's site with a one-line embed. Ships with a client dashboard and an admin panel for orgs, feature flags, and usage limits.",
    stack: ["Next.js 15", "Supabase", "Qdrant", "n8n", "AWS S3", "Chatwoot", "Docker"],
    image: "/images/vectoringest.png",
    note: "Private — self-hosted",
  },
  {
    id: "docuchat",
    title: "DocuChat",
    category: "Document Q&A",
    pitch:
      "Ask questions of your PDFs and get citation-backed answers. Intent-aware search classifies each question into one of eight query types before retrieval, so the pipeline fetches the right thing instead of the nearest thing.",
    stack: ["FastAPI", "Qdrant", "Gemini", "Supabase", "LangChain", "React"],
    image: "/images/docuchat.png",
    github: "https://github.com/yshraj/intelligent-doc-search",
    demo: "https://intelligent-doc-search.vercel.app/",
  },
  {
    id: "jarvis",
    title: "Jarvis",
    category: "Proactive financial agent",
    pitch:
      "An assistant for financial advisers that speaks first: priorities, overdue follow-ups, and pre-meeting briefs, assembled from structured client records plus hybrid RAG over their documents.",
    stack: ["FastAPI", "Qdrant", "OpenAI", "Supabase", "Next.js"],
    image: "/images/jarvis.png",
    github: "https://github.com/yshraj/proactive-financial-agent",
    demo: "https://proactive-financial-agent.vercel.app/",
  },
];

export const MORE_WORK: Project[] = [
  {
    id: "refineiq",
    title: "RefineIQ",
    category: "On-device prompt refiner",
    pitch:
      "A Chrome extension that rewrites AI prompts using a LoRA-tuned model running in the browser, with on-device dictation. Prompts never leave the device.",
    stack: ["TypeScript", "Chrome MV3", "Transformers.js", "ONNX Runtime", "PEFT/LoRA"],
    note: "Published extension",
  },
  {
    id: "live-chat",
    title: "AI Live Chat Agent",
    category: "Chat support backend",
    pitch:
      "Semantic FAQ retrieval with persistent conversation history and a Redis cache. Runs on local Docker or fully managed.",
    stack: ["FastAPI", "Gemini", "MongoDB", "Redis", "React"],
    image: "/images/ai-live-chat.png",
    github: "https://github.com/yshraj/AI-Live-Chat-Agent",
  },
  {
    id: "optisense",
    title: "OptiSense.ai",
    category: "SEO visibility analyzer",
    pitch:
      "Queries three LLMs at once to score how visible a site is to AI search, then exports the recommendations as PDF or CSV.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Docker"],
    image: "/images/optisense.png",
    github: "https://github.com/yshraj/optisense.ai",
  },
  {
    id: "bank-qa",
    title: "Credit Card Q&A Bot",
    category: "RAG for customer support",
    pitch:
      "Ingests credit card FAQ pages with Playwright, embeds them into Qdrant, and answers with source attribution.",
    stack: ["FastAPI", "Qdrant", "GPT-4o", "Next.js", "Playwright"],
    image: "/images/bank-qa-bot.png",
    github: "https://github.com/yshraj/bank-creditcard-qa-bot",
  },
  {
    id: "real-estate",
    title: "Real Estate Chatbot",
    category: "Sun Communities · property discovery",
    pitch:
      "Property search and community answers over MongoDB Atlas Vector Search, serving a live real estate platform.",
    stack: ["FastAPI", "LangGraph", "GPT-4", "Atlas Vector", "AKS"],
    image: "/images/real-estate-chatbot.png",
    note: "Client work at Milestone",
  },
  {
    id: "itinerary",
    title: "Itinerary Agent",
    category: "Hospitality · travel planning",
    pitch:
      "A ReAct agent that reasons over travel preferences and calls tools to build and refine itineraries.",
    stack: ["FastAPI", "LangGraph", "GPT-4.1", "Qdrant", "AKS"],
    image: "/images/itinerary-agent.png",
    note: "Client work at Milestone",
  },
  {
    id: "smartstock",
    title: "SmartStock Scout",
    category: "Market sentiment",
    pitch:
      "Scrapes market data and runs sentiment analysis over financial news to read the mood on a ticker.",
    stack: ["Node.js", "Express", "Hugging Face"],
    image: "/images/smartstock.png",
    github: "https://github.com/yshraj/smartstock-scout",
    demo: "https://smartstock-scout.netlify.app/",
  },
];
