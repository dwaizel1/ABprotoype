"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowSquareIcon } from "@/components/ArrowSquareIcon";

type Slide = {
  label: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

const slides: Slide[] = [
  {
    label: "Employee-owned since 2021",
    title: "Ownership",
    body: "Through our ESOP, every member of the team is an owner. When your project succeeds, so do we, and you can see it in how our people show up every day.",
    image: "/images/about/team-group.jpg",
    alt: "Anderson Burton team gathered outside the Arroyo Grande office",
    objectPosition: "center 40%",
  },
  {
    label: "0.55 EMR",
    title: "Safety First",
    body: "From remote substations to occupied federal sites, everyone on our jobs has stop-work authority. Going home safe is the one milestone we never trade for schedule.",
    image: "/images/home/service-4.jpg",
    alt: "Aerial view of a substation under construction",
    objectPosition: "center 55%",
  },
  {
    label: "Design-Build & EPC",
    title: "Accountability",
    body: "One accountable team from first sketch through closeout. Transparent cost reporting means you see what we see, with no surprises at the end.",
    image: "/images/home/service-1.jpg",
    alt: "Modern two-story building with glass and metal facade",
    objectPosition: "center 45%",
  },
  {
    label: "Building since 1999",
    title: "Built to Last",
    body: "For 27 years, field-led teams have built for the National Park Service, utilities, and cities, creating facilities meant to serve communities for generations.",
    image: "/images/project/gallery-1.jpg",
    alt: "National Park visitor center with a stone entry sign and flagpole",
    objectPosition: "center 60%",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function ValuesSpotlight() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  const arrowClass =
    "btn flex size-11 shrink-0 items-center justify-center rounded-lg text-[var(--color-dark-blue)] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-dark-blue)]";

  return (
    <section
      className="page-pad pb-20 md:pb-28"
      aria-roledescription="carousel"
      aria-label="Our values"
      onKeyDown={onKeyDown}
    >
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[var(--color-dark-blue)] md:aspect-[16/8] lg:aspect-[16/7]">
          {slides.map((slide, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={slide.image}
              src={slide.image}
              alt={i === index ? slide.alt : ""}
              aria-hidden={i !== index}
              loading={i === 0 ? "eager" : "lazy"}
              data-reveal="false"
              className={`cover-media transition-opacity duration-600 ease-out motion-reduce:transition-none ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ objectPosition: slide.objectPosition }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-3 -mt-14 rounded-[14px] bg-[var(--color-yellow)] p-6 text-[var(--color-dark-blue)] md:absolute md:bottom-8 md:left-8 md:m-0 md:max-w-[460px] md:p-8 lg:bottom-10 lg:left-10">
          <div className="grid" aria-live="polite">
            {slides.map((slide, i) => {
              const active = i === index;
              return (
                <div
                  key={slide.title}
                  data-reveal="false"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                  aria-hidden={!active}
                  inert={!active}
                  className={`[grid-area:1/1] transition-[opacity,transform] duration-400 ease-out motion-reduce:transition-none ${
                    active
                      ? "translate-y-0 opacity-100 delay-100 motion-reduce:delay-0"
                      : "pointer-events-none translate-y-2.5 opacity-0 motion-reduce:translate-y-0"
                  }`}
                >
                  <p className="flex items-center gap-2 text-[13px] font-semibold tracking-tight">
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                      <circle cx="8" cy="8" r="6.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" />
                    </svg>
                    {slide.label}
                  </p>
                  <h3
                    className="mt-6 font-[family-name:var(--font-display)] font-semibold md:mt-8"
                    style={{
                      fontSize: "clamp(28px, 3vw, 40px)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {slide.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.55] md:text-[16px]">{slide.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 md:mt-8">
            <p
              className="font-[family-name:var(--font-display)] text-[15px] font-medium tabular-nums"
              aria-hidden
            >
              {pad(index + 1)} <span className="text-[var(--color-dark-blue)]/45">/ {pad(count)}</span>
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className={arrowClass}
                onClick={() => go(-1)}
                aria-label="Previous value"
              >
                <ArrowSquareIcon direction="left" size={32} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                className={arrowClass}
                onClick={() => go(1)}
                aria-label="Next value"
              >
                <ArrowSquareIcon direction="right" size={32} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
