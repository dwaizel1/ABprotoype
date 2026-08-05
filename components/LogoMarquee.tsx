"use client";

const CIRCLE_COUNT = 10;

type LogoMarqueeProps = {
  count?: number;
  label?: string;
};

export function LogoMarquee({
  count = CIRCLE_COUNT,
  label = "Partners",
}: LogoMarqueeProps) {
  const items = Array.from({ length: count }, (_, i) => i);
  const track = [...items, ...items];

  return (
    <section
      className="logo-marquee relative overflow-hidden border-y border-[var(--color-dark-blue)]/10 bg-[#f3f1ea]"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f3f1ea] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f3f1ea] to-transparent md:w-24" />

      <div className="logo-marquee__track flex w-max items-center gap-10 py-5 md:gap-14 md:py-6">
        {track.map((_, i) => (
          <div
            key={i}
            className="size-10 shrink-0 rounded-full bg-[var(--color-dark-blue)]/25 md:size-12"
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}
