import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FEATURED, MORE_WORK, Project } from "../data/projects";
import WorkImage from "./WorkImage";
import "./styles/Work.css";

const ProjectLinks = ({ project }: { project: Project }) => {
  if (!project.github && !project.demo) {
    return <span className="project-note">{project.note}</span>;
  }

  return (
    <div className="project-links">
      {project.github && (
        <a
          className="btn"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          <FaGithub aria-hidden="true" /> Code
          <span className="visually-hidden"> for {project.title}</span>
        </a>
      )}
      {project.demo && (
        <a
          className="btn btn-primary"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          <MdArrowOutward aria-hidden="true" /> Live
          <span className="visually-hidden"> demo of {project.title}</span>
        </a>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="work-container">
        <div className="section-head" data-reveal>
          <p className="section-label">Selected work</p>
          <h2 className="section-title" id="work-title">
            Things I built that <em>run</em>.
          </h2>
        </div>

        <div className="featured-list">
          {FEATURED.map((project, i) => (
            <article className="featured" key={project.id} data-reveal>
              <div className="featured-media">
                <WorkImage image={project.image} alt={project.title} />
              </div>

              <div className="featured-body">
                <span className="featured-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")} / Featured
                </span>
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-category">{project.category}</p>
                <p className="featured-pitch">{project.pitch}</p>

                <ul className="featured-stack" aria-label="Stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>

        <div className="more-work">
          <h3 className="more-work-label" data-reveal>More work</h3>

          <ul className="more-list">
            {MORE_WORK.map((project) => (
              <li className="more-row" key={project.id} data-reveal>
                <div className="more-row-head">
                  <h4>{project.title}</h4>
                  <p className="more-category">{project.category}</p>
                </div>
                <p className="more-pitch">{project.pitch}</p>
                <p className="more-stack">{project.stack.join(" · ")}</p>
                <ProjectLinks project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
