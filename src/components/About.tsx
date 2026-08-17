import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-me">
        <h2 className="about-label" id="about-title" data-reveal>
          About
        </h2>
        <p className="about-copy" data-reveal>
          I&apos;m a backend engineer working on AI systems — agents, retrieval
          pipelines, and the APIs underneath them. Today that means GenAI
          platforms at WebileApps, on a client engagement with Celigo. Before
          that, three years at Milestone Inc. taking crawlers, chatbots, and
          planning agents from prototype to production traffic.
        </p>
        <p className="about-note" data-reveal>
          I like the unglamorous part: making a system hold up once real users
          arrive.
        </p>
      </div>
    </section>
  );
};

export default About;
