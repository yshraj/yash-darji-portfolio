import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdAdd } from "react-icons/md";
import { CAREER, OPEN_SOURCE } from "../data/career";
import "./styles/Career.css";

const Career = () => {
  const [open, setOpen] = useState<string | null>(CAREER[0].id);

  const toggle = (id: string) => {
    setOpen((current) => (current === id ? null : id));
    // Entries change the page height, so the pinned/scrubbed timelines above
    // need their measurements back.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <section className="career-section" id="career" aria-labelledby="career-title">
      <div className="career-container">
        <div className="section-head" data-reveal>
          <p className="section-label">Career</p>
          <h2 className="section-title" id="career-title">
            Four years of shipping, <em>in order</em>.
          </h2>
        </div>

        <div className="career-info">
          <div className="career-timeline" aria-hidden="true">
            <div className="career-dot"></div>
          </div>

          <ol className="career-list">
            {CAREER.map((entry) => {
              const expanded = open === entry.id;
              const expandable = Boolean(entry.details?.length);

              return (
                <li
                  className={`career-info-box${expanded ? " is-open" : ""}${
                    entry.kind === "education" ? " is-education" : ""
                  }`}
                  key={entry.id}
                >
                  <span className="career-node" aria-hidden="true" />

                  <div className="career-years">
                    <span className="career-year">{entry.years}</span>
                    <span className="career-span">{entry.span}</span>
                  </div>

                  <div className="career-main">
                    {expandable ? (
                      <button
                        type="button"
                        className="career-trigger"
                        onClick={() => toggle(entry.id)}
                        aria-expanded={expanded}
                        aria-controls={`career-panel-${entry.id}`}
                        data-cursor="disable"
                      >
                        <span className="career-heading">
                          <h3>{entry.role}</h3>
                          <p className="career-company">
                            {entry.company}
                            {entry.context && (
                              <span className="career-context">
                                {entry.context}
                              </span>
                            )}
                          </p>
                          <p className="career-summary">{entry.summary}</p>
                        </span>
                        <span className="career-toggle" aria-hidden="true">
                          <MdAdd />
                        </span>
                      </button>
                    ) : (
                      <div className="career-trigger career-trigger-static">
                        <span className="career-heading">
                          <h3>{entry.role}</h3>
                          <p className="career-company">
                            {entry.company}
                            {entry.context && (
                              <span className="career-context">
                                {entry.context}
                              </span>
                            )}
                          </p>
                          <p className="career-summary">{entry.summary}</p>
                        </span>
                      </div>
                    )}

                    {expandable && (
                      <div
                        className="career-panel"
                        id={`career-panel-${entry.id}`}
                        role="region"
                        aria-label={`${entry.role} at ${entry.company}, details`}
                      >
                        <div className="career-panel-in">
                          <ul className="career-points">
                            {entry.details?.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                          {entry.stack && (
                            <div className="tag-row career-stack">
                              {entry.stack.map((tech) => (
                                <span className="tag" key={tech}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="career-aside" data-reveal>
          <p className="career-aside-label">Open source</p>
          <ul>
            {OPEN_SOURCE.map(({ label, meta, note }) => (
              <li key={label}>
                <span className="career-aside-name">{label}</span>
                <span className="career-aside-meta">{meta}</span>
                <span className="career-aside-note">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Career;
