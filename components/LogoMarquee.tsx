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

export const awardLogos = [
  { src: "/images/logos/awards/army-commendation.png", alt: "U.S. Army Commendation Medal" },
  { src: "/images/logos/awards/top-general-contractors.png", alt: "Top General Contractors 2025" },
  { src: "/images/logos/awards/gold-shovel.png", alt: "Gold Shovel Standard" },
  { src: "/images/logos/awards/sba.png", alt: "U.S. Small Business Administration" },
  { src: "/images/logos/awards/inc-5000.png", alt: "Inc. 5000" },
  { src: "/images/logos/awards/isn.png", alt: "ISN" },
  { src: "/images/logos/awards/agc.png", alt: "Associated General Contractors of California" },
  { src: "/images/logos/awards/asce.png", alt: "American Society of Civil Engineers" },
] as const;

type LogoItem = { src: string; alt: string };

const VARIANTS = {
  partners: { label: "Partners", title: undefined, logos: LOGOS },
  awards: { label: "Awards", title: "Our Awards", logos: awardLogos },
} as const;

type LogoMarqueeProps = {
  variant?: keyof typeof VARIANTS;
  count?: number;
  label?: string;
  title?: string;
  logos?: readonly LogoItem[];
};

export function LogoMarquee({
  variant = "partners",
  count = CIRCLE_COUNT,
  label = VARIANTS[variant].label,
  title = VARIANTS[variant].title,
  logos = VARIANTS[variant].logos,
}: LogoMarqueeProps) {
  const baseLogos = Array.from(
    { length: Math.max(count, logos.length) },
    (_, i) => logos[i % logos.length],
  );
  const track = [...baseLogos, ...baseLogos];

  return (
    <section
      className="logo-marquee my-14 overflow-hidden bg-[var(--color-cream)] md:my-20"
      aria-label={title ?? label}
    >
      {title ? (
        <p className="page-pad type-eyebrow pb-6 text-[var(--color-dark-blue)]/60 md:pb-8">
          {title}
        </p>
      ) : null}

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-cream)] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-cream)] to-transparent md:w-24" />

        {/* Item box is the logo's bounding box; global `img { height: auto }` means sizing must come from max-h/max-w. */}
        <div className="logo-marquee__track flex w-max items-center gap-10 py-1.5 md:gap-14 md:py-2">
          {track.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex h-20 w-[120px] shrink-0 items-center justify-center md:h-[100px] md:w-[150px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain opacity-65 grayscale"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
