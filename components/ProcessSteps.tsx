"use client";

import { type ReactNode, useId, useState } from "react";
import { ArrowSquareIcon } from "@/components/ArrowSquareIcon";

type ProcessStep = {
  title: string;
  icon: StepIconName;
  short: string;
  value: string[];
  impact: string[];
};

const steps: ProcessStep[] = [
  {
    title: "Design-Build Leadership",
    icon: "lightbulb",
    short: "One integrated team from concept through completion.",
    value: [
      "Design, estimating, procurement, and construction aligned early",
      "A coordinated path forward for the client",
      "No disconnected handoffs",
    ],
    impact: ["Faster decisions", "Fewer surprises", "Stronger project control"],
  },
  {
    title: "Budget Certainty",
    icon: "budget",
    short: "Real-time pricing guidance before drawings are final.",
    value: [
      "Preconstruction team tests design options against budget",
      "Cost drivers identified",
      "Value-engineering solutions that protect the client’s priorities",
    ],
    impact: ["Smarter spending", "Reduced risk of late-stage redesign"],
  },
  {
    title: "Schedule Control",
    icon: "stopwatch",
    short: "Milestone-driven planning with proactive recovery strategies.",
    value: [
      "Realistic schedules",
      "Long-lead procurement coordinated",
      "Sequencing managed so field work stays productive and predictable",
    ],
    impact: ["Earlier occupancy", "Less downtime", "Clearer expectations"],
  },
  {
    title: "Permitting & Agency Coordination",
    icon: "permit",
    short: "Support through jurisdictional reviews and approvals.",
    value: [
      "Coordination with design teams and inspectors",
      "Coordination with utility providers and public agencies",
      "Approvals kept moving and preventable delays avoided",
    ],
    impact: ["Less administrative burden on the client"],
  },
  {
    title: "Constructability Reviews",
    icon: "drafting",
    short: "Practical field insight before construction begins.",
    value: [
      "Plans reviewed for conflicts and sequencing challenges",
      "Access constraints and utility impacts identified",
      "Scope gaps caught before they become change orders",
    ],
    impact: ["Cleaner documents", "Fewer RFIs", "Smoother execution"],
  },
  {
    title: "Trade Partner Management",
    icon: "hardHat",
    short: "Reliable subcontractor network with accountable leadership.",
    value: [
      "Trade partners qualified, coordinated, and managed",
      "The right team selected for the project’s scope and schedule",
      "Matched to quality and safety expectations",
    ],
    impact: ["Better performance", "Stronger jobsite coordination"],
  },
  {
    title: "Safety & Risk Management",
    icon: "shieldAlert",
    short: "Protecting people, property, schedule, and budget.",
    value: [
      "Safe work planned and site controls maintained",
      "Compliance tracked",
      "Risks identified early so the project moves forward responsibly",
    ],
    impact: ["Reduced exposure", "Greater confidence throughout construction"],
  },
  {
    title: "Quality Assurance",
    icon: "qualityBadge",
    short: "Built right the first time.",
    value: [
      "Inspections and punch tracking",
      "Material reviews and field verification",
      "Work that meets the design intent and client expectations",
    ],
    impact: ["A finished product that performs as promised"],
  },
  {
    title: "Client Communication",
    icon: "chat",
    short: "Clear reporting, quick responses, and no guesswork.",
    value: [
      "Consistent updates on budget and schedule",
      "Submittals, RFIs, issues, and decisions reported",
      "Clients always understand where the project stands",
    ],
    impact: ["Transparency", "Trust", "Better decision-making"],
  },
  {
    title: "Operational Continuity",
    icon: "cycle",
    short: "Construction planning that respects active business operations.",
    value: [
      "Work phased carefully on occupied campuses and commercial sites",
      "Planned around access, parking, and safety",
      "Noise, utilities, and business continuity considered",
    ],
    impact: ["Less disruption to staff, customers, tenants, and operations"],
  },
];

const outcomes = ["Early Alignment", "Reduced Risk", "Cost Confidence", "Better Outcomes"];

const EASE = "ease-[cubic-bezier(0.2,0.8,0.2,1)]";

const stepIconPaths = {
  lightbulb: (
    <>
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3Z" />
      <path d="M9.5 18.5h5" />
      <path d="M10.5 21h3" />
    </>
  ),
  budget: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9c-.5-.8-1.5-1.3-2.8-1.3-1.6 0-2.8.8-2.8 2 0 2.8 5.6 1.5 5.6 4.3 0 1.2-1.2 2-2.8 2-1.3 0-2.3-.5-2.8-1.3" />
      <path d="M12 6v1.7M12 16.3V18" />
    </>
  ),
  stopwatch: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 10v3.5l2.5 2" />
      <path d="M9.5 2.5h5M12 2.5V6" />
      <path d="m18.5 6.5 1.5-1.5" />
    </>
  ),
  permit: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="m9 14.5 2 2 4-4" />
    </>
  ),
  drafting: (
    <>
      <path d="M4 20V4l16 16Z" />
      <path d="M8 16v-3.5l3.5 3.5Z" />
      <path d="M4 8h2M4 12h2" />
    </>
  ),
  hardHat: (
    <>
      <path d="M2.5 18.5h19" />
      <path d="M5 18.5V15a7 7 0 0 1 14 0v3.5" />
      <path d="M10 8.3V12M14 8.3V12" />
    </>
  ),
  shieldAlert: (
    <>
      <path d="M12 3 19 6v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6Z" />
      <path d="M12 8v4.5M12 16h.01" />
    </>
  ),
  qualityBadge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9.5 9 1.7 1.7 3.3-3.3" />
      <path d="M8.5 14 7 21l5-2.5 5 2.5-1.5-7" />
    </>
  ),
  chat: (
    <>
      <path d="M4 4.5h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8.5L5 16.5v-3H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
      <path d="M18 9h2a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-1v3l-3.5-3h-3.5a1 1 0 0 1-1-1v-1" />
    </>
  ),
  cycle: (
    <>
      <path d="M4 12a8 8 0 0 1 14.3-4.9" />
      <path d="M20 12a8 8 0 0 1-14.3 4.9" />
      <path d="M18.5 3.5v4h-4" />
      <path d="M5.5 20.5v-4h4" />
    </>
  ),
} satisfies Record<string, ReactNode>;

type StepIconName = keyof typeof stepIconPaths;

function StepIcon({ name, className }: { name: StepIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      focusable="false"
    >
      {stepIconPaths[name]}
    </svg>
  );
}

function ValueIcon() {
  return (
    <svg viewBox="0 0 40 28" className="h-7 w-10" aria-hidden>
      <rect x="1" y="1" width="38" height="26" rx="2" fill="currentColor" />
      <rect x="6" y="7" width="16" height="2.5" fill="var(--color-dark-blue)" />
      <rect x="6" y="13" width="28" height="2.5" fill="var(--color-dark-blue)" />
      <rect x="6" y="19" width="22" height="2.5" fill="var(--color-dark-blue)" />
    </svg>
  );
}

function ImpactIcon() {
  return (
    <svg viewBox="0 0 26 28" className="h-7 w-[26px]" aria-hidden>
      <path d="M13 1 25 5.5V13c0 7-5 12-12 14C6 25 1 20 1 13V5.5Z" fill="currentColor" />
      <path
        d="m8 14 3.5 3.5L18.5 10"
        fill="none"
        stroke="var(--color-dark-blue)"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function Breakdown({
  icon,
  heading,
  items,
}: {
  icon: ReactNode;
  heading: string;
  items: string[];
}) {
  return (
    <div className="text-white">
      {icon}
      <h3 className="mt-8 mb-4 text-[16px] font-semibold md:mt-10">{heading}</h3>
      <ul className="border-t border-white/40">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-white/40 py-2.5 text-[14px] leading-[1.4] text-white/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProcessSteps() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div>
      <ul className="border-t border-white/20">
        {steps.map((step, i) => {
          const isOpen = openIndex === i;
          const panelId = `${baseId}-panel-${i}`;
          const number = String(i + 1).padStart(2, "0");
          const [firstWord, ...restWords] = step.title.split(" ");
          const restOfTitle = restWords.join(" ");
          return (
            <li key={step.title} className="border-b border-white/20">
              <div
                className={`transition-colors duration-[420ms] ease-out motion-reduce:transition-none ${
                  isOpen ? "bg-[var(--color-dark-blue)]" : "hover:bg-white/5"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-4 py-7 text-left focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--color-yellow)] md:px-6 md:py-10"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span
                    className={`font-[family-name:var(--font-display)] font-medium tracking-[-0.05em] transition-colors duration-[420ms] ease-out motion-reduce:transition-none ${
                      isOpen ? "text-white" : "text-white/50"
                    }`}
                    style={{ fontSize: "clamp(48px, 6vw, 82px)", lineHeight: 1 }}
                  >
                    {number}
                  </span>
                  <span
                    className="flex items-center gap-2.5 text-right font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] sm:gap-4"
                    style={{ fontSize: "clamp(20px, 2.6vw, 32px)", lineHeight: 1 }}
                  >
                    <span>
                      <span className="whitespace-nowrap">
                        <span className="mr-2.5 inline-flex h-[1em] items-center align-top md:mr-3.5">
                          <StepIcon
                            name={step.icon}
                            className="h-6 w-6 text-[var(--color-yellow)] md:h-7 md:w-7"
                          />
                        </span>
                        {firstWord}
                      </span>
                      {restOfTitle && ` ${restOfTitle}`}
                    </span>
                    <span
                      className={`inline-flex shrink-0 transition-transform duration-[490ms] motion-reduce:transition-none ${EASE} ${
                        isOpen ? "rotate-90" : ""
                      }`}
                      aria-hidden
                    >
                      <ArrowSquareIcon size={24} strokeWidth={1.5} />
                    </span>
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-label={`${number} ${step.title}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-[630ms] motion-reduce:transition-none ${EASE} ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div
                    data-reveal="false"
                    className={`min-h-0 overflow-hidden ${
                      isOpen
                        ? "translate-y-0 opacity-100 motion-safe:[transition:opacity_420ms_ease_140ms,transform_630ms_cubic-bezier(0.2,0.8,0.2,1)_70ms]"
                        : "-translate-y-2 opacity-0 motion-safe:[transition:opacity_420ms_ease,transform_630ms_cubic-bezier(0.2,0.8,0.2,1)]"
                    }`}
                  >
                    <p className="px-4 pb-8 font-[family-name:var(--font-display)] text-[18px] leading-[1.25] tracking-[-0.02em] text-[var(--color-yellow)] md:px-6 md:pb-10 md:text-[20px]">
                      {step.short}
                    </p>
                    <div className="grid gap-12 px-4 pb-10 md:grid-cols-2 md:gap-10 md:px-6 md:pb-12 lg:gap-16">
                      <Breakdown
                        icon={<ValueIcon />}
                        heading="How We Add Value"
                        items={step.value}
                      />
                      <Breakdown
                        icon={<ImpactIcon />}
                        heading="Client Impact"
                        items={step.impact}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-16 md:mt-20">
        <h3 className="mb-4 text-[16px] font-semibold">Outcomes for Our Clients</h3>
        <ul className="grid border-t border-white/40 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-16">
          {outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-center gap-3 border-b border-white/40 py-4 font-[family-name:var(--font-display)] text-[20px] font-semibold tracking-[-0.02em] md:text-[24px]"
            >
              <span className="text-[var(--color-yellow)]" aria-hidden>
                ✓
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
