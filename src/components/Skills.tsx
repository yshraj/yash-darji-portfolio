import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Skills.css";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  {
    num: "01",
    cat: "Frontend",
    desc: "Interfaces & experiences",
    color: "#5eead4",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    num: "02",
    cat: "Backend",
    desc: "APIs & server systems",
    color: "#818cf8",
    skills: ["Node.js", "Python", "FastAPI", "Express"],
  },
  {
    num: "03",
    cat: "AI / ML",
    desc: "Agents, RAG & models",
    color: "#f472b6",
    skills: ["LangChain", "LangGraph", "Gemini", "Qdrant"],
  },
  {
    num: "04",
    cat: "Databases",
    desc: "Storage & retrieval",
    color: "#fb923c",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Supabase"],
  },
  {
    num: "05",
    cat: "Infra",
    desc: "Deployment & tooling",
    color: "#a3e635",
    skills: ["Docker", "Git", "Vercel"],
  },
];

const Skills = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="toolkit" className="skills-section">
      <h2 className="skills-heading">
        My <span>Toolkit</span>
      </h2>

      <div className="skills-grid" ref={gridRef}>
        {SKILLS.map(({ num, cat, desc, color, skills }) => (
          <div
            key={cat}
            className="skills-card"
            data-cat={cat}
            style={{ "--card-color": color } as React.CSSProperties}
          >
            <div className="skills-card-top">
              <div className="skills-card-meta">
                <span className="skills-card-num">{num}</span>
                <span className="skills-card-desc">{desc}</span>
              </div>
              <h3 className="skills-card-cat">{cat}</h3>
            </div>

            <div className="skills-chips">
              {skills.map((s) => (
                <span key={s} className="skills-chip">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
