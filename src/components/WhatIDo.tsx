import "./styles/WhatIDo.css";

type Capability = {
  index: string;
  title: string;
  how: string;
  why: string;
};

const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "AI agents & retrieval",
    how: "LangGraph orchestration over vector search",
    why: "Answers grounded in your own data, with citations — not guesses.",
  },
  {
    index: "02",
    title: "Backend & APIs",
    how: "FastAPI and Node services, caching, containers",
    why: "The layer that has to stay up once real traffic arrives.",
  },
  {
    index: "03",
    title: "Ingestion at scale",
    how: "Crawlers and scraping APIs feeding LLM pipelines",
    why: "Retrieval is only ever as good as what you put into it.",
  },
];

const WhatIDo = () => {
  return (
    <section className="whatIDO" aria-labelledby="what-title">
      <div className="what-head" data-reveal>
        <p className="section-label">What I do</p>
        <h2 className="section-title what-title" id="what-title">
          Systems that <em>think</em>, and systems that <em>hold</em>.
        </h2>
      </div>

      <div className="what-box-in">
        {CAPABILITIES.map(({ index, title, how, why }) => (
          <article className="what-row" key={index} data-reveal>
            <span className="what-index" aria-hidden="true">
              {index}
            </span>
            <div className="what-row-body">
              <h3 className="what-row-title">{title}</h3>
              <p className="what-row-how">{how}</p>
              <p className="what-row-why">{why}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
