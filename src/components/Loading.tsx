import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

/* Words uncover one at a time as the scene streams in, so the wait reads as the
   portfolio assembling itself rather than as a separate splash screen. */
const WORDS = ["BACKEND SYSTEMS", "AI AGENTS", "RAG PIPELINES"];

/* If WebGL is unavailable or the model request stalls, `percent` never reaches 100.
   Rather than trapping the visitor on a splash screen forever, hand over anyway —
   every section except the character renders fine without it. */
const BAILOUT_MS = 12000;

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const rootRef = useRef<HTMLDivElement>(null);
  const exitStarted = useRef(false);
  const [exiting, setExiting] = useState(false);

  const clamped = Math.min(100, Math.max(0, Math.round(percent)));
  // First word is up straight away so the panel is never a blank screen.
  const revealed = clamped >= 62 ? 3 : clamped >= 32 ? 2 : 1;

  useEffect(() => {
    const startExit = () => {
      if (exitStarted.current) return;
      exitStarted.current = true;
      setExiting(true);
    };

    if (clamped >= 100) {
      const t = window.setTimeout(startExit, 420);
      return () => window.clearTimeout(t);
    }
  }, [clamped]);

  useEffect(() => {
    const bail = window.setTimeout(() => {
      if (!exitStarted.current) {
        exitStarted.current = true;
        setExiting(true);
      }
    }, BAILOUT_MS);
    return () => window.clearTimeout(bail);
  }, []);

  useEffect(() => {
    if (!exiting) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handOff = () => {
      // initialFX drives the hero intro. It must never be able to strand the loader,
      // so failure here still releases the page.
      import("./utils/initialFX")
        .then((m) => m.initialFX())
        .catch((err) => {
          console.error("initialFX failed", err);
          document.body.style.overflowY = "auto";
        })
        .finally(() => setIsLoading(false));
    };

    if (reduced) {
      handOff();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setIsLoading(false) });

      tl.to(".loader-word-in", {
        yPercent: -105,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.in",
      })
        .to(
          [".loader-meta", ".loader-mark", ".loader-rail"],
          { opacity: 0, duration: 0.35, ease: "power2.out" },
          "<0.1"
        )
        // Wipe upward off the hero rather than cross-fading — no layout shift,
        // and it hands the eye straight to the character.
        .to(
          rootRef.current,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.95,
            ease: "power3.inOut",
            onStart: () => {
              import("./utils/initialFX")
                .then((m) => m.initialFX())
                .catch((err) => {
                  console.error("initialFX failed", err);
                  document.body.style.overflowY = "auto";
                });
            },
          },
          "<0.15"
        );
    }, rootRef);

    return () => ctx.revert();
  }, [exiting, setIsLoading]);

  return (
    <div className="loader-root" ref={rootRef} role="status" aria-live="polite">
      <span className="visually-hidden">Loading portfolio, {clamped} percent</span>

      <div className="loader-mark" aria-hidden="true">
        YD
      </div>

      <div className="loader-stage" aria-hidden="true">
        <ul className="loader-words">
          {WORDS.map((word, i) => (
            <li className="loader-word" key={word}>
              <span
                className="loader-word-in"
                style={{
                  transform: i < revealed ? "translateY(0)" : "translateY(105%)",
                  opacity: i < revealed ? 1 : 0,
                }}
              >
                {word}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="loader-rail" aria-hidden="true">
        <div className="loader-meta">
          <span>Yash Darji</span>
          <span className="loader-count">
            {String(clamped).padStart(3, "0")}
          </span>
        </div>
        <div className="loader-track">
          <div
            className="loader-fill"
            style={{ transform: `scaleX(${clamped / 100})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;

/* Reports how much of the character model has streamed in. The tail is estimated —
   three.js gives no reliable byte progress for the decrypted payload — but it
   eases toward 90 instead of stalling, and `loaded()` closes the gap for real. */
export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;
  let interval: number;

  const tick = () => {
    // Decreasing steps: quick early feedback, no jump to 100 before the model is ready.
    const remaining = 90 - percent;
    percent = Math.min(90, percent + Math.max(0.4, remaining * 0.09));
    setLoading(percent);
    if (percent >= 89.5) window.clearInterval(interval);
  };

  interval = window.setInterval(tick, 90);

  function clear() {
    window.clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      window.clearInterval(interval);
      interval = window.setInterval(() => {
        if (percent < 100) {
          percent = Math.min(100, percent + 1.5);
          setLoading(percent);
        } else {
          window.clearInterval(interval);
          resolve(percent);
        }
      }, 12);
    });
  }

  return { loaded, percent, clear };
};
