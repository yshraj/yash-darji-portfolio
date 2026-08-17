import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar, { smoother } from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Skills from "./Skills";
import Work from "./Work";
import { initReveals } from "./utils/reveal";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    initReveals();
  }, []);

  // ScrollSmoother moves content with a transform, so the browser's own
  // "scroll the focused element into view" does nothing — tabbing would walk
  // through links that stay off screen. Drive the smoother instead, and only
  // for keyboard focus so clicking never yanks the page around.
  useEffect(() => {
    const onFocusIn = (event: FocusEvent) => {
      const el = event.target as HTMLElement | null;
      if (!el?.closest?.("#smooth-content")) return;
      if (!el.matches(":focus-visible")) return;

      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) return;

      smoother?.scrollTo(el, true, "center center");
    };

    document.addEventListener("focusin", onFocusIn);
    return () => document.removeEventListener("focusin", onFocusIn);
  }, []);

  // The physics well pulls in rapier + postprocessing (~2.5 MB). Left to a bare
  // lazy() it downloads while the visitor is still watching the loader and
  // competing with the character model, so hold it until the toolkit section is
  // one screen away — still several screens of runway before it is on screen.
  const [techReady, setTechReady] = useState(false);

  useEffect(() => {
    if (!isDesktopView || techReady) return;
    const trigger = ScrollTrigger.create({
      trigger: ".skills-section",
      start: "top bottom",
      once: true,
      onEnter: () => setTechReady(true),
    });
    return () => trigger.kill();
  }, [isDesktopView, techReady]);

  useEffect(() => {
    if (techReady) ScrollTrigger.refresh();
  }, [techReady]);

  useEffect(() => {
    let frame = 0;
    const resizeHandler = () => {
      setIsDesktopView(window.innerWidth > 1024);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Skills />
            <Work />
            {isDesktopView && techReady && (
              <Suspense fallback={null}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
