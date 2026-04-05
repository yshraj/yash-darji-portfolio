# Yash Darji – Portfolio Content Reference

> This file documents all content used in the 3D React portfolio, including which UI component/section each piece lives in, so it can be ported to any other template.

---

## Personal Identity

| Field | Value |
|-------|-------|
| **Name** | Yash Darji |
| **Tagline / Hero subtitle** | Backend Engineer building AI Agents, RAG Systems & Scalable APIs. |
| **Bio (About section)** | I'm Yash Darji, a skilled software developer with expertise in Node.js, Express.js, and Python. I specialize in web development, machine learning, and automating user flows to improve efficiency and enhance user experiences. With extensive experience in building browser automation and web scraping tools, I create scalable, user-friendly solutions that solve real-world problems. Let's collaborate to turn your ideas into impactful results! |

---

## Navigation Links

Rendered in: **`Navbar.jsx`** — fixed top nav with scroll-aware background.

| Label | Anchor |
|-------|--------|
| About | `#about` |
| Work  | `#work`  |
| Contact | `#contact` |

---

## About / Services Cards

Rendered in: **`About.jsx`** — 4 tilt cards with gradient border, shown below the bio paragraph.

| # | Card Title |
|---|-----------|
| 1 | Backend Engineer |
| 2 | AI Agent Developer |
| 3 | RAG Systems |
| 4 | Python / FastAPI |

---

## Technologies / Skills

Rendered in: **`Tech.jsx`** — animated 3D spinning balls (Three.js `BallCanvas`), one ball per technology.

| # | Technology Name | Status |
|---|----------------|--------|
| 1 | Python | existing |
| 2 | Node JS | existing |
| 3 | JavaScript | existing |
| 4 | TypeScript | existing |
| 5 | FastAPI | existing |
| 6 | LangGraph / LangChain | existing |
| 7 | OpenAI / Gemini | existing |
| 8 | Qdrant (Vector DB) | existing |
| 9 | Supabase | existing |
| 10 | PostgreSQL | existing |
| 11 | MongoDB | existing |
| 12 | Express.js | existing |
| 13 | Docker | existing |
| 14 | Azure Services | existing |
| 15 | Git | existing |
| 16 | Next.js | **new** — used in proactive-financial-agent, VectorIngest, bank-qa-bot |
| 17 | Redis | **new** — caching layer in AI Live Chat Agent |
| 18 | N8N | **new** — workflow automation in VectorIngest + n8n-runner repo |
| 19 | AWS S3 | **new** — file storage in VectorIngest |
| 20 | Playwright | **new** — web scraping in bank-creditcard-qa-bot |

---

## Work Experience

Rendered in: **`Experience.jsx`** — **Vertical Timeline** (uses `react-vertical-timeline-component`). Each entry is a `VerticalTimelineElement` with a company logo icon, date on the side, title, company name, and bullet points.

---

### 1. Data Science and ML Intern — Canary Mail
- **Date:** May 2022 – July 2022
- **Icon background:** `#383E56`
- **Points:**
  - Developed NLP-based machine learning models to detect phishing emails and malicious links using supervised learning, URL analysis, and domain reputation signals.
  - Improved email security by 30% through real-time classification and automated threat detection.

---

### 2. Software Development Engineer Intern — Milestone Inc.
- **Date:** January 2023 – July 2023
- **Icon background:** `#E6DEDD`
- **Points:**
  - Contributed to developing the FAQ Manager Product, a tool for managing FAQs across websites and Google My Business (GMB) accounts, with automated FAQ generation reducing human interpretation by 25%.
  - Enhanced legacy .NET APIs to improve performance, optimize resource usage, and reduce operational costs, ensuring greater efficiency and scalability.

---

### 3. Backend Engineer – AI & Agent Systems — Milestone Inc.
- **Date:** July 2023 – January 2026
- **Icon background:** `#E6DEDD`
- **Points:**
  - Led development of a large-scale web crawler, scanning millions of URLs weekly and reducing costs by 40%, enabling faster SEO performance analysis.
  - Developed REST APIs for on-demand scraping (DOM/Markdown with configs) for AI ingestion pipelines, enabling structured data flow into LLM applications.
  - Built and deployed AI-driven chatbot and itinerary agents using LangGraph, FastAPI, and OpenAI APIs, streamlining workflows and enhancing automation.

---

## Projects

Rendered in: **`Works.jsx`** — tilt cards grid (uses `react-tilt`). Each card shows a screenshot, project name, description, tech tags, and optional GitHub / Demo buttons.

Section intro text:
> "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."

---

### 1. DocuChat – AI-Powered Document Q&A
- **Description:** AI-driven document chat platform enabling users to query PDFs and text files with accurate, citation-backed answers. Uses a scalable RAG pipeline with intent-aware semantic search classifying queries into 8 types.
- **Tags:** FastAPI · Qdrant · Gemini · Supabase · LangChain · React
- **GitHub:** https://github.com/yshraj/intelligent-doc-search
- **Demo:** —
- **Image file:** `src/assets/docuchat.png`

---

### 2. Multi-Tenant AI Ingestion Platform (VectorIngest)
- **Description:** B2B micro-SaaS where agencies deploy a private AI knowledge base per client. Clients upload documents → auto-ingested into Qdrant via N8N → a live Chatwoot chat widget powered by that knowledge base goes live on their website. Includes a full client dashboard (project timeline, multi-step questionnaire, drag-and-drop upload, real-time document status, chat beta, 8-chart analytics, conversation history) and an admin panel with org CRUD, feature flags, usage limits, and full customer preview mode. Chatwoot is provisioned headlessly per org in 9 automated steps — clients get a one-line embed script, AI is live instantly.
- **Tags:** Next.js 15 · Supabase · Qdrant · N8N · AWS S3 · Chatwoot · Docker · Tailwind/shadcn
- **GitHub:** — *(private / no public repo)*
- **Demo:** — *(self-hosted, AWS Lightsail — $24/month)*
- **Image file:** *(needs screenshot — placeholder needed)*

---

### 3. Proactive Financial Agent (Jarvis)
- **Description:** Proactive AI assistant for financial advisers that surfaces priorities, overdue follow-ups, and pre-meeting briefs by combining structured client data with hybrid RAG and semantic search.
- **Tags:** FastAPI · Qdrant · OpenAI · Supabase · Next.js
- **GitHub:** https://github.com/yshraj/proactive-financial-agent
- **Demo:** —
- **Image file:** `src/assets/jarvis.png`

---

### 4. AI Live Chat Agent
- **Description:** Production-ready AI chat support system with semantic FAQ retrieval, persistent conversation history, Redis caching, and Gemini LLM. Supports both local Docker and cloud (MongoDB Atlas + Upstash Redis) deployments.
- **Tags:** FastAPI · Gemini · MongoDB · React · Redis
- **GitHub:** https://github.com/yshraj/AI-Live-Chat-Agent
- **Demo:** —
- **Image file:** `src/assets/livechat.png`

---

### 5. OptiSense.ai – SEO AI Analyzer
- **Description:** Full-stack SEO analysis tool that queries 3+ LLMs simultaneously (Gemini, OpenRouter, HuggingFace) to score website AI-search visibility and generate actionable recommendations with PDF/CSV export.
- **Tags:** Node.js · Express · MongoDB · React · Docker
- **GitHub:** https://github.com/yshraj/optisense.ai
- **Demo:** —
- **Image file:** `src/assets/optisense.png`

---

### 6. Real Estate Chatbot – Sun Communities
- **Description:** AI-powered chatbot backend for a real estate platform helping users discover properties, get community details, and answer general inquiries using RAG over MongoDB Atlas Vector Search.
- **Tags:** FastAPI · LangGraph · OpenAI GPT-4 · MongoDB Atlas · AKS
- **GitHub:** — *(private / no public repo)*
- **Demo:** —
- **Image file:** `src/assets/realestate.jpg`

---

### 7. Itinerary Agent – Hospitality AI
- **Description:** AI-driven itinerary planning agent using the ReAct (Reasoning and Acting) pattern. Reasons over user travel preferences and takes tool-based actions to generate and refine personalized itineraries.
- **Tags:** FastAPI · LangGraph · OpenAI GPT-4.1 · Qdrant · AKS
- **GitHub:** — *(private / no public repo)*
- **Demo:** —
- **Image file:** `src/assets/tripguide.png` *(reused placeholder)*

---

### 8. Bank Credit Card Q&A Bot
- **Description:** RAG chatbot for bank customer support that ingests credit card FAQ pages via Playwright, chunks and embeds content into Qdrant, and answers user queries with source attribution using GPT-4o.
- **Tags:** FastAPI · Qdrant · OpenAI GPT-4o · Next.js · Playwright
- **GitHub:** https://github.com/yshraj/bank-creditcard-qa-bot
- **Demo:** —
- **Image file:** `src/assets/bankqabot.png`

---

### 9. AI Stock & Sentiment Analysis Tool
- **Description:** AI-powered tool that analyzes stock market data by scraping Yahoo Finance and applying sentiment analysis to financial news using Hugging Face models, helping users gauge market sentiment.
- **Tags:** Node.js · Express.js · HuggingFace
- **GitHub:** https://github.com/yshraj/smartstock-scout
- **Demo:** https://smartstock-scout.netlify.app/
- **Image file:** `src/assets/smartstock-scout.png`

---

## Contact

Rendered in: **`Contact.jsx`** — left-aligned contact card with links + EmailJS contact form. (Earth canvas was removed/commented out.)

| Field | Value |
|-------|-------|
| **Email** | yash.darji.coder@gmail.com |
| **LinkedIn** | https://www.linkedin.com/in/yash-darji/ |
| **GitHub** | https://github.com/yshraj |

---

## Page / Section Layout Map

| Section | Component File | Section Anchor | Key UI Pattern |
|---------|---------------|----------------|----------------|
| Navbar | `Navbar.jsx` | — | Fixed top bar, scroll-aware bg |
| Hero | `Hero.jsx` | — | Full-screen, 3D computer canvas (Three.js) |
| About / Bio | `About.jsx` | `#about` | Paragraph + 4 tilt service cards |
| Technologies | `Tech.jsx` | — | 3D spinning ball per tech (Three.js BallCanvas) |
| Work Experience | `Experience.jsx` | `#work` | **Vertical Timeline** (react-vertical-timeline-component) |
| Projects | `Works.jsx` | — | Tilt card grid (react-tilt) |
| Contact | `Contact.jsx` | `#contact` | Contact links + EmailJS form |

---

## Asset Files Reference

| Asset | File Path |
|-------|-----------|
| DocuChat screenshot | `src/assets/docuchat.png` |
| Jarvis screenshot | `src/assets/jarvis.png` |
| Live Chat screenshot | `src/assets/livechat.png` |
| OptiSense screenshot | `src/assets/optisense.png` |
| Real Estate screenshot | `src/assets/realestate.jpg` |
| Bank QA Bot screenshot | `src/assets/bankqabot.png` |
| SmartStock Scout | `src/assets/smartstock-scout.png` |
| Itinerary Agent | `src/assets/tripguide.png` |
| Company – Milestone | `src/assets/company/milestone.png` |
| Company – Canary Mail | `src/assets/company/canarymail.png` |
| Tech – Python | `src/assets/tech/python.svg` |
| Tech – LangChain | `src/assets/tech/langchain.svg` |
| Tech – OpenAI | `src/assets/tech/openai.svg` |
| Tech – Gemini | `src/assets/tech/gemini.svg` |
| Tech – Qdrant | `src/assets/tech/qdrant.png` |
| Tech – Supabase | `src/assets/tech/supabase.svg` |
| Tech – PostgreSQL | `src/assets/tech/postgresql.svg` |
| Tech – Azure | `src/assets/tech/azure.svg` |
| Tech – Express.js | `src/assets/tech/expressjs.svg` |
| Tech – Next.js | *(icon needed)* |
| Tech – Redis | *(icon needed)* |
| Tech – N8N | *(icon needed)* |
| Tech – AWS S3 | *(icon needed)* |
| Tech – Playwright | *(icon needed)* |
| VectorIngest screenshot | *(screenshot needed)* |
