import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

type Project = {
  title: string;
  category: string;
  description: string;
  tools: string;
  image?: string;
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    title: "DocuChat",
    category: "AI-Powered Document Q&A",
    description:
      "AI-driven document chat platform enabling users to query PDFs and text files with accurate, citation-backed answers. Uses a scalable RAG pipeline with intent-aware semantic search classifying queries into 8 types.",
    tools: "FastAPI · Qdrant · Gemini · Supabase · LangChain · React",
    image: "/images/docuchat.png",
    github: "https://github.com/yshraj/intelligent-doc-search",
    demo: "https://intelligent-doc-search.vercel.app/",
  },
  {
    title: "VectorIngest",
    category: "Multi-Tenant AI Ingestion Platform",
    description:
      "B2B micro-SaaS where agencies deploy a private AI knowledge base per client. Documents auto-ingested into Qdrant via N8N → live Chatwoot chat widget goes live instantly. Includes full client dashboard with 8-chart analytics and an admin panel with org CRUD, feature flags, and usage limits.",
    tools: "Next.js 15 · Supabase · Qdrant · N8N · AWS S3 · Chatwoot · Docker",
    image: "/images/vectoringest.png",
    github: null,
    demo: null,
  },
  {
    title: "Jarvis",
    category: "Proactive Financial Agent",
    description:
      "Proactive AI assistant for financial advisers that surfaces priorities, overdue follow-ups, and pre-meeting briefs by combining structured client data with hybrid RAG and semantic search — reducing reactive work.",
    tools: "FastAPI · Qdrant · OpenAI · Supabase · Next.js · Tailwind CSS",
    image: "/images/jarvis.png",
    github: "https://github.com/yshraj/proactive-financial-agent",
    demo: "https://proactive-financial-agent.vercel.app/",
  },
  {
    title: "AI Live Chat Agent",
    category: "Production AI Chat Support",
    description:
      "Production-ready AI chat support system with semantic FAQ retrieval, persistent conversation history, Redis caching, and Gemini LLM. Supports both local Docker and cloud (MongoDB Atlas + Upstash Redis) deployments.",
    tools: "FastAPI · Gemini · MongoDB · React · Redis · Docker",
    image: "/images/ai-live-chat.png",
    github: "https://github.com/yshraj/AI-Live-Chat-Agent",
    demo: null,
  },
  {
    title: "OptiSense.ai",
    category: "SEO AI Analyzer",
    description:
      "Full-stack SEO analysis tool that queries 3+ LLMs simultaneously (Gemini, OpenRouter, HuggingFace) to score website AI-search visibility and generate actionable recommendations with PDF/CSV export.",
    tools: "Node.js · Express · MongoDB · React · Docker",
    image: "/images/optisense.png",
    github: "https://github.com/yshraj/optisense.ai",
    demo: null,
  },
  {
    title: "Real Estate Chatbot",
    category: "Sun Communities – Property Discovery AI",
    description:
      "AI-powered chatbot backend for a real estate platform helping users discover properties, get community details, and answer general inquiries using RAG over MongoDB Atlas Vector Search. Built as part of my role at Milestone Inc.",
    tools: "FastAPI · LangGraph · OpenAI GPT-4 · MongoDB Atlas · AKS",
    image: "/images/real-estate-chatbot.png",
    github: null,
    demo: null,
  },
  {
    title: "Itinerary Agent",
    category: "Hospitality AI – Travel Planning",
    description:
      "AI-driven itinerary planning agent using the ReAct (Reasoning and Acting) pattern. Reasons over user travel preferences and takes tool-based actions to generate and refine personalized travel itineraries. Built at Milestone Inc.",
    tools: "FastAPI · LangGraph · OpenAI GPT-4.1 · Qdrant · AKS",
    image: "/images/itinerary-agent.png",
    github: null,
    demo: null,
  },
  {
    title: "Bank Credit Card Q&A Bot",
    category: "RAG Chatbot for Bank Customer Support",
    description:
      "RAG chatbot that ingests credit card FAQ pages via Playwright, chunks and embeds content into Qdrant, and answers user queries with source attribution using GPT-4o.",
    tools: "FastAPI · Qdrant · OpenAI GPT-4o · Next.js · Playwright",
    image: "/images/bank-qa-bot.png",
    github: "https://github.com/yshraj/bank-creditcard-qa-bot",
    demo: null,
  },
  {
    title: "SmartStock Scout",
    category: "AI Stock & Sentiment Analysis",
    description:
      "AI-powered tool that analyzes stock market data by scraping Yahoo Finance and applying sentiment analysis to financial news using Hugging Face models, helping users gauge market sentiment and make informed decisions.",
    tools: "Node.js · Express.js · HuggingFace",
    image: "/images/smartstock.png",
    github: "https://github.com/yshraj/smartstock-scout",
    demo: "https://smartstock-scout.netlify.app/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const project = projects[currentIndex];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div className="carousel-slide">
              <div className="carousel-content">
                {/* Left: number + details */}
                <div className="carousel-info">
                  <div className="carousel-number">
                    <h3>{String(currentIndex + 1).padStart(2, "0")}</h3>
                  </div>
                  <div className="carousel-details">
                    <h4>{project.title}</h4>
                    <p className="carousel-category">{project.category}</p>
                    <p className="carousel-description">{project.description}</p>
                    <div className="carousel-tools">
                      <span className="tools-label">Stack</span>
                      <p>{project.tools}</p>
                    </div>
                    <div className="carousel-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="carousel-link-btn"
                          data-cursor="disable"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="carousel-link-btn carousel-link-demo"
                          data-cursor="disable"
                        >
                          <MdArrowOutward /> Live Demo
                        </a>
                      )}
                      {!project.github && !project.demo && (
                        <span className="carousel-private-badge">
                          Private / Internal
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: image */}
                <div className="carousel-image-wrapper">
                  <WorkImage
                    image={project.image}
                    alt={project.title}
                    link={project.github ?? project.demo ?? undefined}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot${index === currentIndex ? " carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
