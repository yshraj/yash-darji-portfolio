import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <p className="landing-greeting">Hello! I'm</p>
            <h1>
              YASH
              <br />
              <span>DARJI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-role">Freelance Backend Engineer &amp;</h2>
            <div className="landing-info-h2" aria-hidden="true">
              <div className="landing-h2-1">AI Agents</div>
              <div className="landing-h2-2">RAG Systems</div>
            </div>
            <div className="landing-info-row" aria-hidden="true">
              <div className="landing-h2-info">RAG Systems</div>
              <div className="landing-h2-info-1">AI Agents</div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
