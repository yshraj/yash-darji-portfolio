import "./styles/Skills.css";

const GROUPS = [
  {
    num: "01",
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Node.js"],
  },
  {
    num: "02",
    label: "AI & retrieval",
    items: ["LangGraph", "LangChain", "OpenAI", "Gemini", "Qdrant", "Pinecone"],
  },
  {
    num: "03",
    label: "Backend & data",
    items: ["FastAPI", "Express", "PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    num: "04",
    label: "Interfaces",
    items: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    num: "05",
    label: "Ship & operate",
    items: ["Docker", "AWS", "Azure", "Jenkins", "Argo CD", "n8n", "Playwright"],
  },
];

const Skills = () => {
  return (
    <section id="toolkit" className="skills-section" aria-labelledby="toolkit-title">
      <div className="section-head" data-reveal>
        <p className="section-label">Toolkit</p>
        <h2 className="section-title" id="toolkit-title">
          What I reach for
        </h2>
      </div>

      <dl className="skills-matrix">
        {GROUPS.map(({ num, label, items }) => (
          <div className="skills-group" key={num} data-reveal>
            <dt>
              <span className="skills-num" aria-hidden="true">
                {num}
              </span>
              {label}
            </dt>
            <dd>
              <ul className="tag-row">
                {items.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
