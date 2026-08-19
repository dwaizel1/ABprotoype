"use client";

const CIRCLE_COUNT = 10;
const LOGOS = [
  { src: "/images/logos/air-force.png", alt: "U.S. Air Force" },
  { src: "/images/logos/usace.png", alt: "U.S. Army Corps of Engineers" },
  { src: "/images/logos/blank-logo.png", alt: "Partner logo" },
  { src: "/images/logos/nps.png", alt: "National Park Service" },
  { src: "/images/logos/schneider.png", alt: "Schneider Electric" },
  { src: "/images/logos/amazon.png", alt: "Amazon" },
] as const;

type LogoMarqueeProps = {
  count?: number;
  label?: string;
};

export function LogoMarquee({
  count = CIRCLE_COUNT,
  label = "Partners",
}: LogoMarqueeProps) {
  const baseLogos = Array.from(
    { length: Math.max(count, LOGOS.length) },
    (_, i) => LOGOS[i % LOGOS.length],
  );
  const track = [...baseLogos, ...baseLogos];

  return (
    <section
      className="logo-marquee relative overflow-hidden border-y border-[var(--color-dark-blue)]/10 bg-[#f3f1ea]"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f3f1ea] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f3f1ea] to-transparent md:w-24" />

      <div className="logo-marquee__track flex w-max items-center gap-10 py-10 md:gap-14 md:py-14">
        {track.map((logo, i) => (
          <div key={`${logo.src}-${i}`} className="flex h-7 w-[120px] shrink-0 items-center justify-center md:h-9 md:w-[150px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-auto object-contain opacity-65 grayscale"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
