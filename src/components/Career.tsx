import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Engineer</h4>
                <h5>Milestone Inc.</h5>
              </div>
              <h3>2023–26</h3>
            </div>
            <p>
              Led development of a large-scale web crawler scanning millions of URLs
              weekly (40% cost reduction). Built REST APIs for AI ingestion pipelines
              and deployed production AI agents — chatbots and itinerary planners —
              using LangGraph, FastAPI, and OpenAI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>Milestone Inc.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built the FAQ Manager product for managing FAQs across websites and
              Google My Business accounts with automated generation (25% reduction in
              manual effort). Enhanced legacy .NET APIs for performance and scalability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Intern</h4>
                <h5>Canary Mail</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed NLP models to detect phishing emails and malicious links using
              supervised learning, URL analysis, and domain reputation signals —
              improving email security by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
