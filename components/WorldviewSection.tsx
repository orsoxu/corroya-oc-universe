"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { worldview } from "@/data/mock";

export function WorldviewSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const lines = useMemo(
    () =>
      worldview
        .split("。")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => `${line}。`),
    []
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "-12% 0px -24% 0px",
        threshold: 0.22
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="worldview"
      className={`worldview-panel relative z-10 min-h-screen bg-museum-paper px-6 pb-24 pt-[clamp(8rem,18vh,14rem)] text-museum-ink sm:px-10 ${
        isVisible ? "is-visible" : ""
      }`}
      aria-label="世界观"
    >
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-[0.32fr_1fr] sm:gap-16">
        <div>
          <p className="text-[11px] font-bold tracking-[0.24em] text-museum-muted">
            世界观
          </p>
        </div>

        <div className="font-worldview max-w-4xl">
          <h1 className="worldview-title text-[clamp(2.35rem,5.8vw,5rem)] font-normal leading-[0.92] text-[color:var(--worldview-title-color)]">
            世界观
          </h1>
          <div className="mt-10 space-y-5 text-[clamp(1.25rem,2.45vw,2.5rem)] leading-[1.22] sm:mt-14 sm:space-y-7">
            {lines.map((line, index) => (
              <p key={line} className="worldview-line">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
