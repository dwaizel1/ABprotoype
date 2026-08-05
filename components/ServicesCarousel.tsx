"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ServiceCard = {
  title: string;
  desc: string;
  image: string;
  label: string;
};

type ServicesCarouselProps = {
  services: ServiceCard[];
};

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const scrollToIndex = useCallback((next: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.children[next] as HTMLElement | undefined;
    if (!card) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const left = scroller.scrollLeft + (cardRect.left - scrollerRect.left);
    scroller.scrollTo({ left, behavior: "smooth" });
    setIndex(next);
  }, []);

  const goPrev = () => {
    scrollToIndex((index - 1 + services.length) % services.length);
  };

  const goNext = () => {
    scrollToIndex((index + 1) % services.length);
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const syncIndex = () => {
      if (dragState.current.active) return;
      const cards = Array.from(scroller.children) as HTMLElement[];
      if (!cards.length) return;
      const origin = scroller.getBoundingClientRect().left;
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.getBoundingClientRect().left - origin);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setIndex(closest);
    };

    scroller.addEventListener("scroll", syncIndex, { passive: true });
    return () => scroller.removeEventListener("scroll", syncIndex);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    dragState.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: scroller.scrollLeft,
      moved: false,
    };
    setDragging(true);
    scroller.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || !dragState.current.active) return;
    const delta = e.clientX - dragState.current.startX;
    if (Math.abs(delta) > 4) dragState.current.moved = true;
    scroller.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || !dragState.current.active) return;
    dragState.current.active = false;
    setDragging(false);
    try {
      scroller.releasePointerCapture(e.pointerId);
    } catch {
      // already released
    }
  };

  return (
    <section className="page-pad pb-20 md:pb-28">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="type-h2 capitalize text-[var(--color-dark-blue)]">
          Our Services
        </h2>
        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            aria-label="Previous services"
            className="btn btn-outline flex size-12 items-center justify-center rounded-full"
            onClick={goPrev}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next services"
            className="btn btn-outline flex size-12 items-center justify-center rounded-full"
            onClick={goNext}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:gap-[17px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging
            ? "cursor-grabbing select-none snap-none"
            : "cursor-grab"
        }`}
      >
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`service-card group w-[min(85vw,431px)] shrink-0 snap-start transition-opacity duration-300 ${
              i < index ? "md:opacity-40" : ""
            } ${dragging ? "pointer-events-none" : ""}`}
            draggable={false}
          >
            <div className="frame relative aspect-square overflow-hidden rounded-[21px] bg-[#a66161]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt=""
                draggable={false}
                className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-dark-blue)]/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <span className="absolute left-5 top-6 z-10 max-w-[calc(100%-2.5rem)] rounded-[14px] bg-white/60 px-5 py-2.5 text-[11px] font-semibold leading-snug tracking-tight text-[var(--color-dark-blue)] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:bg-white/80 md:px-7 md:py-3">
                {s.label}
              </span>
            </div>
            <h3 className="mt-6 text-[clamp(28px,2.5vw,38px)] leading-[1] tracking-[-1.14px] text-[var(--color-dark-blue)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
              {s.title}
            </h3>
            <p className="mt-3.5 max-w-[394px] text-[14px] leading-[22px] text-[var(--color-dark-blue)] transition-opacity duration-500 group-hover:opacity-80">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
