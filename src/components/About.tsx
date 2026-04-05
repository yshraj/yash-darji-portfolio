import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Yash Darji — a backend engineer who builds AI agents, RAG systems,
          and scalable APIs that ship to real users. I specialise in Node.js,
          Python, and FastAPI, with deep experience in LangGraph, vector databases,
          and LLM integrations. At Milestone Inc. I led everything from large-scale
          web crawlers to production-grade AI chatbots and itinerary planners.
          I enjoy turning messy problems into systems that just work.
        </p>
      </div>
    </div>
  );
};

export default About;
