import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/Landing.css";

const ROTATING = ["AI agents", "RAG systems", "scalable APIs"];

const Landing = ({ children }: PropsWithChildren) => {
  const trackRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // The track holds the words plus a clone of the first, so the loop can run
    // one direction only and snap back invisibly on the clone.
    const steps = ROTATING.length;
    const stepPct = 100 / (steps + 1);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      for (let i = 1; i <= steps; i++) {
        tl.to(track, {
          yPercent: -stepPct * i,
          duration: 0.75,
          ease: "power3.inOut",
          delay: 2.4,
        });
      }
      tl.set(track, { yPercent: 0 });
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <section className="landing-section" id="landingDiv" aria-label="Introduction">
      <div className="landing-container">
        <div className="landing-intro">
          <p className="landing-eyebrow">Backend &amp; AI Engineer</p>
          <h1 className="landing-name" aria-label="Yash Darji">
            <span aria-hidden="true">Yash</span>
            <span aria-hidden="true">Darji</span>
          </h1>
        </div>

        <div className="landing-info">
          {/* The rotator reads as a run-on list to a screen reader, so the
              animated version is decorative and the sentence is stated once. */}
          <p className="visually-hidden">
            I build AI agents, RAG systems, and scalable APIs.
          </p>
          <p className="landing-claim" aria-hidden="true">
            <span className="landing-claim-verb">I build</span>
            <span className="landing-rotator">
              <span className="landing-rotator-track" ref={trackRef}>
                {ROTATING.map((word) => (
                  <span key={word}>{word}</span>
                ))}
                <span aria-hidden="true">{ROTATING[0]}</span>
              </span>
            </span>
          </p>
          <p className="landing-support">
            Production systems that carry real traffic — not demos.
          </p>
        </div>
      </div>

      {children}

      <a className="landing-scroll" href="#about" data-cursor="disable">
        <span>Scroll</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
};

export default Landing;
