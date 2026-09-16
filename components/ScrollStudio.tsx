"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ContactTrigger } from "@/components/ContactTrigger";
import { PhotoCredit } from "@/components/PhotoCredit";

const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/key-services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Client Core", href: "/services" },
];

const pills = [
  { label: "National Park Service", className: "bg-[#fecd07] text-[var(--color-dark-blue)]", style: { top: "12%", left: "6%", rotate: "-8deg" } },
  { label: "U.S. Army Corps", className: "bg-[var(--color-dark-blue)] text-[var(--color-cream)]", style: { top: "28%", left: "38%", rotate: "6deg" } },
  { label: "U.S. Air Force", className: "bg-[#e7eef6] text-[var(--color-dark-blue)]", style: { top: "62%", left: "8%", rotate: "-4deg" } },
  { label: "Amazon", className: "bg-[#f3a15a] text-[var(--color-dark-blue)]", style: { top: "48%", right: "8%", rotate: "10deg" } },
  { label: "Schneider", className: "bg-white text-[var(--color-dark-blue)] ring-1 ring-[var(--color-dark-blue)]/10", style: { top: "18%", right: "14%", rotate: "-6deg" } },
];

const chapters = [
  {
    title: "Federal\n& Parks",
    count: "09",
    copy: "Design-build work for national parks, memorials, and federal campuses — planned around remote sites, protected habitat, and occupied operations.",
    cards: [
      {
        kind: "graphic" as const,
        title: "Pinnacles National Park",
        caption: "LEED Platinum visitor facilities, delivered off-grid in a condor release zone.",
        graphic: "PINNACLES",
      },
      {
        kind: "image" as const,
        src: "/images/project/hero.jpg",
        alt: "Pinnacles National Park facilities",
        title: "Pinnacles National Park",
        caption: "A flagship National Park Service campus powered by an on-site micro-grid.",
      },
      {
        kind: "image" as const,
        src: "/images/home/service-1.jpg",
        alt: "Federal campus construction",
        title: "Federal Infrastructure Campus",
        caption: "A multi-building campus sequenced around occupied adjacent facilities.",
      },
    ],
  },
  {
    title: "Civic\n& Municipal",
    count: "06",
    copy: "Fire stations, civic centers, and public buildings kept open while new wings, systems, and life-safety upgrades come online.",
    cards: [
      {
        kind: "image" as const,
        src: "/images/home/service-2.jpg",
        alt: "Civic construction site",
        title: "Municipal Civic Center",
        caption: "Phased expansion that kept public-facing services running.",
      },
      {
        kind: "image" as const,
        src: "/images/project/gallery-1.jpg",
        alt: "Project interior",
        title: "Essential Facilities",
        caption: "Police, fire, and municipal buildings built for daily public use.",
      },
      {
        kind: "image" as const,
        src: "/images/home/industry.jpg",
        alt: "Municipal project",
        title: "Community Buildings",
        caption: "Durable civic work planned around access, schedule, and city operations.",
      },
    ],
  },
  {
    title: "Energy\n& Industry",
    count: "04",
    copy: "EPC delivery for substations, plants, and industrial campuses — one team across civil, electrical, and long-lead equipment.",
    cards: [
      {
        kind: "image" as const,
        src: "/images/home/hero.jpg",
        alt: "Solar canopy aerial",
        title: "Solar Canopy",
        caption: "Energy infrastructure that keeps a site running while it is built.",
      },
      {
        kind: "image" as const,
        src: "/images/home/service-4.jpg",
        alt: "Energy facility",
        title: "Substation Upgrade",
        caption: "Critical power work with early procurement and a single accountable team.",
      },
      {
        kind: "image" as const,
        src: "/images/home/values.jpg",
        alt: "Industrial site",
        title: "Industrial Complex",
        caption: "High-bay logistics space delivered design-build, ready for occupancy.",
      },
    ],
  },
  {
    title: "Historic\nRestoration",
    count: "08",
    copy: "Landmark buildings brought back with period materials, hidden modern systems, and the historic envelope left intact.",
    cards: [
      {
        kind: "image" as const,
        src: "/images/home/service-3.jpg",
        alt: "Historic restoration",
        title: "Historic Courthouse",
        caption: "Life safety and access upgrades concealed inside the original envelope.",
      },
      {
        kind: "image" as const,
        src: "/images/project/gallery-3.jpg",
        alt: "Restored interior detail",
        title: "Period Detail",
        caption: "Specialty trades matched original materials without losing the building’s character.",
      },
      {
        kind: "image" as const,
        src: "/images/project/gallery-2.jpg",
        alt: "Restoration craft",
        title: "National Historic Sites",
        caption: "From Yosemite landmarks to national cemeteries, repaired in place.",
      },
    ],
  },
];

export function ScrollStudio() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const track = trackRef.current;
    if (!section || !frame || !track) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduced(motion.matches);
    syncMotion();
    let frameId = 0;

    const measure = () => {
      if (motion.matches) {
        section.style.height = "auto";
        track.style.transform = "none";
        return;
      }
      const travel = Math.max(0, track.scrollHeight - frame.clientHeight);
      section.style.height = `${window.innerHeight + travel}px`;
    };

    const update = () => {
      if (motion.matches) return;
      const travel = Math.max(0, track.scrollHeight - frame.clientHeight);
      const max = Math.max(1, section.offsetHeight - window.innerHeight);
      const scrolled = Math.min(Math.max(-section.getBoundingClientRect().top, 0), max);
      const y = (scrolled / max) * travel;
      track.style.transform = `translate3d(0, ${-y}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    const onMotion = () => {
      syncMotion();
      measure();
    };

    measure();
    update();

    const observer = new ResizeObserver(() => {
      measure();
      update();
    });
    observer.observe(track);
    observer.observe(frame);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motion.addEventListener("change", onMotion);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  function moveDot(event: React.MouseEvent<HTMLDivElement>) {
    const frame = frameRef.current;
    const dot = dotRef.current;
    if (!frame || !dot) return;
    const rect = frame.getBoundingClientRect();
    dot.style.transform = `translate3d(${event.clientX - rect.left - 7}px, ${event.clientY - rect.top - 7}px, 0)`;
  }

  return (
    <section ref={sectionRef} className="relative bg-[#d7e6f4]" aria-label="Selected work">
      <div
        className={`${reduced ? "relative h-auto" : "sticky top-0 h-svh"} flex items-stretch px-3 pt-[88px] pb-3 md:px-5 md:pt-[96px] md:pb-5`}
      >
        <div
          ref={frameRef}
          onMouseMove={moveDot}
          className={`group relative w-full rounded-[28px] bg-[var(--color-cream)] shadow-[0_24px_80px_rgba(4,23,60,0.12)] md:rounded-[36px] ${reduced ? "h-auto overflow-visible" : "h-full overflow-hidden lg:cursor-none"}`}
        >
          <div
            ref={dotRef}
            className="pointer-events-none absolute top-0 left-0 z-30 hidden h-3.5 w-3.5 rounded-full bg-[var(--color-dark-blue)]/70 lg:block"
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-5 md:px-7 md:pt-6">
            <p className="font-[family-name:var(--font-display)] text-[18px] leading-none font-semibold tracking-[-0.04em] text-[var(--color-dark-blue)] md:text-[22px]">
              AB
            </p>
            <ContactTrigger className="pointer-events-auto inline-flex h-9 items-center rounded-full border border-[var(--color-dark-blue)]/15 bg-white/80 px-4 text-[11px] font-medium tracking-[0.08em] text-[var(--color-dark-blue)] uppercase backdrop-blur-sm">
              Contact →
            </ContactTrigger>
          </div>

          <div
            ref={trackRef}
            className="will-change-transform"
          >
            <div className="grid min-h-[calc(100svh-120px)] md:grid-cols-2">
              <div className="flex items-start px-6 pt-24 pb-10 md:px-10 md:pt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/hero.jpg"
                  alt="Anderson Burton team on site"
                  className="aspect-[4/3] w-[78%] rounded-[18px] object-cover"
                />
              </div>
              <div className="border-t border-[var(--color-dark-blue)]/8 md:border-t-0 md:border-l">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/home/hero.jpg"
                  alt="Solar canopy under construction"
                  className="aspect-[16/11] w-full object-cover md:rounded-tr-[36px]"
                />
                <p className="max-w-[34ch] px-6 py-8 text-[15px] leading-[1.55] font-medium text-[var(--color-dark-blue)] md:px-10 md:text-[16px]">
                  Our clients — owners, agencies, and operators who need one team accountable from first concept through turnover.
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-16">
              <h2
                className="font-[family-name:var(--font-display)] leading-none font-semibold tracking-[-0.06em] text-[var(--color-dark-blue)]"
                style={{ fontSize: "clamp(72px, 16vw, 188px)" }}
              >
                OUR WORK
              </h2>
              {pills.map((pill) => (
                <span
                  key={pill.label}
                  className={`absolute hidden rounded-full px-4 py-2.5 text-[13px] font-medium whitespace-nowrap shadow-sm md:inline-flex ${pill.className}`}
                  style={{
                    top: pill.style.top,
                    left: pill.style.left,
                    right: pill.style.right,
                    transform: `rotate(${pill.style.rotate})`,
                  }}
                >
                  {pill.label}
                </span>
              ))}
            </div>

            {chapters.map((chapter) => (
              <div key={chapter.title} className="px-6 pt-10 pb-6 md:px-10">
                <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
                  <h3 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,64px)] leading-[0.95] font-semibold tracking-[-0.04em] whitespace-pre-line text-[var(--color-dark-blue)]">
                    {chapter.title}
                    <span className="ml-2 inline-flex h-7 w-7 translate-y-[-0.45em] items-center justify-center rounded-full border border-[var(--color-dark-blue)]/20 align-middle text-[11px] font-medium tracking-normal">
                      {chapter.count}
                    </span>
                  </h3>
                  <p className="max-w-[36ch] text-[14px] leading-[1.6] text-[var(--color-dark-blue)]/55 md:justify-self-end md:text-[15px]">
                    {chapter.copy}
                  </p>
                </div>

                <div className="mt-8 grid items-start gap-4 md:grid-cols-12 md:gap-5">
                  {chapter.cards.map((card, index) => (
                    <article
                      key={card.title}
                      className={index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-3" : "md:col-span-4"}
                    >
                      {card.kind === "graphic" ? (
                        <div className="flex aspect-[4/3] items-start overflow-hidden rounded-[16px] bg-[#fecd07] p-5 md:aspect-[5/4]">
                          <p className="font-[family-name:var(--font-display)] text-[clamp(40px,4vw,64px)] leading-[0.85] font-semibold tracking-[-0.05em] text-[var(--color-dark-blue)]">
                            {card.graphic}
                          </p>
                        </div>
                      ) : (
                        <div className="relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={card.src}
                            alt={card.alt}
                            className="aspect-[4/3] w-full rounded-[16px] object-cover md:aspect-[5/4]"
                          />
                          <PhotoCredit src={card.src} />
                        </div>
                      )}
                      <p className="mt-3 max-w-[32ch] text-[13px] leading-[1.45] text-[var(--color-dark-blue)]/70">
                        <span className="font-medium text-[var(--color-dark-blue)]">{card.title}</span>
                        {" — "}
                        {card.caption}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="h-28" />
          </div>

          <nav
            className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[var(--color-dark-blue)] px-2 py-2 shadow-lg md:bottom-6"
            aria-label="Page sections"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase transition-colors hover:bg-white/10 md:px-3.5 md:text-[11px]"
                style={{ color: "#fff9ec" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
