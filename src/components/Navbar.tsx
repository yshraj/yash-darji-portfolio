import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const LINKS = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".landing-section",
        start: "bottom 90%",
        onEnter: () => setScrolled(true),
        onLeaveBack: () => setScrolled(false),
      });

      LINKS.forEach(({ id }) => {
        if (!document.getElementById(id)) return;
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => self.isActive && setActive(id),
        });
      });
    });

    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  const jumpTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.innerWidth <= 1024 || !smoother) return;
    e.preventDefault();
    smoother.scrollTo(`#${id}`, true, "top top");
  };

  return (
    <>
      <header className={`header${scrolled ? " header-scrolled" : ""}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          YD
          <span className="navbar-dot" aria-hidden="true" />
        </a>

        <nav aria-label="Sections">
          <ul>
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => jumpTo(e, id)}
                  aria-current={active === id ? "true" : undefined}
                  className={active === id ? "nav-active" : undefined}
                >
                  <HoverLinks text={label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
