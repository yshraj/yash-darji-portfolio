import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother?.paused(false);
  document.getElementsByTagName("main")[0]?.classList.add("main-active");

  gsap.to("body", { backgroundColor: "#0a0e17", duration: 0.5, delay: 0.6 });

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    gsap.set(
      [
        ".landing-eyebrow",
        ".landing-name",
        ".landing-claim",
        ".landing-support",
        ".landing-scroll",
        ".header",
        ".icons-section",
        ".nav-fade",
      ],
      { opacity: 1, y: 0, clearProps: "filter" }
    );
    return;
  }

  const nameSplit = new SplitText(".landing-name span", {
    type: "chars,lines",
    linesClass: "split-line",
  });

  gsap.fromTo(
    nameSplit.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-eyebrow",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 0.25 }
  );

  gsap.fromTo(
    [".landing-claim", ".landing-support"],
    { opacity: 0, y: 34 },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.55,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade", ".landing-scroll"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.15 }
  );
}
