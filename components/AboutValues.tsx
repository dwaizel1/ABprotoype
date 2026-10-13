import type { ReactNode } from "react";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const values: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Ownership",
    body: "Employee-owned since 2021, every person on the team has a real stake in the result — so we treat your budget and schedule like our own.",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.85 12.15 19 4" />
        <path d="m16 7 2.5 2.5" />
        <path d="m18.5 4.5 2 2" />
      </svg>
    ),
  },
  {
    title: "Safety First",
    body: "Everyone on site carries stop-work authority. Our 0.55 EMR reflects a simple rule: no schedule outranks the crew going home safe.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    body: "One accountable team from design through closeout, with transparent cost reporting and no surprises at the end.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Built to Last",
    body: "Field-led craft and self-performed work where it counts, delivering facilities that stay safe, compliant, and running for decades.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="14" width="8" height="6" rx="0.5" />
        <rect x="13" y="14" width="8" height="6" rx="0.5" />
        <rect x="8" y="7" width="8" height="6" rx="0.5" />
        <path d="M12 3v1.5" />
      </svg>
    ),
  },
];

export function AboutValues() {
  return (
    <section className="page-pad pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="grid gap-8 lg:grid-cols-4 lg:gap-10">
        <p className="type-eyebrow text-[var(--color-dark-blue)]/60 lg:pt-3">+ Our Values</p>

        <div className="lg:col-span-3">
          <p
            className="max-w-[920px] font-[family-name:var(--font-display)] font-normal text-[var(--color-dark-blue)]"
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
            }}
          >
            Since 1999, we&apos;ve built for the National Park Service, the Air Force, utilities,
            and cities — as employee-owners, not just contractors. Our values are why clients trust us
            with work that has to be done safely, honestly, and right.
          </p>

          <div className="mt-16 grid gap-y-10 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-l border-[var(--color-dark-blue)]/20 pr-6 pl-5 md:pl-6"
              >
                <span className="flex size-10 items-center justify-center rounded-[8px] bg-[var(--color-dark-blue)]/[0.06] text-[var(--color-dark-blue)]">
                  {value.icon}
                </span>
                <h3 className="mt-8 font-[family-name:var(--font-display)] text-[20px] leading-[1.2] font-normal tracking-[-0.01em] text-[var(--color-dark-blue)]">
                  {value.title}
                </h3>
                <p className="mt-3 max-w-[260px] text-[14px] leading-[1.55] text-[var(--color-dark-blue)]/70">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
