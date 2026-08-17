import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll reveals for everything below the hero.
 *
 * Deliberately block-level: an earlier version split paragraphs into per-line
 * boxes with SplitText, which re-measured badly on resize and left orphaned
 * half-lines mid-paragraph. Elements are hidden from JS rather than CSS, so if
 * this never runs the content is simply visible.
 */
export function initReveals() {
  const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  if (!targets.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(targets, { opacity: 1, y: 0 });
    return;
  }

  // opacity, not autoAlpha: autoAlpha also sets visibility:hidden, which takes
  // the links inside un-revealed sections out of the tab order and dead-ends
  // keyboard navigation partway down the page.
  gsap.set(targets, { opacity: 0, y: 28 });

  ScrollTrigger.batch(targets, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        overwrite: true,
      }),
  });
}
