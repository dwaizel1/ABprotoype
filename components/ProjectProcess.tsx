"use client";

import { useId, useState } from "react";

type ColumnKey = "governance" | "controls" | "risk";

type Phase = {
  id: string;
  label: string;
  items: Record<ColumnKey, string[]>;
};

const columns: { key: ColumnKey; heading: string }[] = [
  { key: "governance", heading: "Project Governance" },
  { key: "controls", heading: "Cost & Schedule Controls" },
  { key: "risk", heading: "Risk & Compliance" },
];

const phases: Phase[] = [
  {
    id: "01",
    label: "Pre Construction",
    items: {
      governance: [
        "Kickoff with decision-makers and escalation paths",
        "Stakeholder map and communication plan",
        "Constructability reviews with the design team",
        "Site logistics and phasing plan",
      ],
      controls: [
        "Detailed estimate and cost model",
        "Value-engineering options, priced",
        "Baseline CPM schedule",
        "Long-lead equipment identified early",
      ],
      risk: [
        "Existing-conditions survey and site investigation",
        "Permit and agency approval roadmap",
        "Risk register with owners and mitigations",
        "Site-specific safety plan and hazard analysis",
      ],
    },
  },
  {
    id: "02",
    label: "Design",
    items: {
      governance: [
        "Owner review gates at 30, 60, and 90%",
        "Sign-off before each milestone advances",
        "Integrated design-build coordination meetings",
        "Shared decision log",
      ],
      controls: [
        "Estimate updated at every design milestone",
        "Target-value design held to budget",
        "Schedule refined with real design durations",
        "Early bid packages to protect the timeline",
      ],
      risk: [
        "Code and accessibility reviews",
        "UFC, LEED, and agency criteria tracking*",
        "Utility and environmental coordination",
        "BIM clash detection before the field*",
      ],
    },
  },
  {
    id: "03",
    label: "Procurement",
    items: {
      governance: [
        "Subcontractor prequalification",
        "Bid leveling shared openly with the owner",
        "Buyout reviewed together before award",
        "Contractor and vendor onboarding",
      ],
      controls: [
        "Competitive bids across every trade",
        "Buyout savings reported back to the owner",
        "Long-lead equipment released on schedule",
        "Allowance and escalation tracking",
      ],
      risk: [
        "Submittal register and review workflow",
        "Davis-Bacon and Buy American compliance*",
        "Bonding and insurance verification",
        "Supply-chain contingency plans",
      ],
    },
  },
  {
    id: "04",
    label: "Construction",
    items: {
      governance: [
        "Weekly owner-architect-contractor meetings",
        "Daily reports and photo logs",
        "Documented RFI and change-order workflow",
        "Single point of contact on site",
      ],
      controls: [
        "Monthly cost-to-complete reporting",
        "Change orders approved before work proceeds",
        "Three-week look-ahead schedules",
        "Milestones tracked, never quietly moved",
      ],
      risk: [
        "Stop-work authority for every person on site",
        "Daily safety briefings",
        "QA/QC inspections and third-party testing",
        "SWPPP and environmental controls",
        "Occupied-site and outage coordination*",
      ],
    },
  },
  {
    id: "05",
    label: "Closeout",
    items: {
      governance: [
        "Punch list walked with the owner",
        "Owner and facility-staff training",
        "Lessons-learned review",
        "Dedicated warranty contact",
      ],
      controls: [
        "Final cost reconciliation",
        "Retention and lien releases",
        "Unused contingency returned",
        "Final pay application",
      ],
      risk: [
        "Commissioning and functional testing",
        "O&M manuals and as-built drawings",
        "Permits closed and occupancy certified",
        "LEED and federal closeout packages*",
      ],
    },
  },
];

function ColumnIcon({ kind }: { kind: ColumnKey }) {
  if (kind === "governance") {
    return (
      <svg viewBox="0 0 40 28" className="h-7 w-10" aria-hidden>
        <rect x="1" y="1" width="38" height="26" rx="2" fill="currentColor" />
        <rect x="6" y="7" width="16" height="2.5" fill="#031229" />
        <rect x="6" y="13" width="28" height="2.5" fill="#031229" />
        <rect x="6" y="19" width="22" height="2.5" fill="#031229" />
      </svg>
    );
  }
  if (kind === "controls") {
    return (
      <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden>
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {[7.5, 14, 20.5].map((p) => (
          <g key={p}>
            <line x1={p} y1="1" x2={p} y2="27" stroke="currentColor" strokeWidth="1.2" />
            <line x1="1" y1={p} x2="27" y2={p} stroke="currentColor" strokeWidth="1.2" />
          </g>
        ))}
        <rect x="14" y="20.5" width="13" height="6.5" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 26 28" className="h-7 w-[26px]" aria-hidden>
      <path d="M13 1 25 5.5V13c0 7-5 12-12 14C6 25 1 20 1 13V5.5Z" fill="currentColor" />
      <path
        d="m8 14 3.5 3.5L18.5 10"
        fill="none"
        stroke="#031229"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function ProjectProcess() {
  const [activeId, setActiveId] = useState(phases[0].id);
  const baseId = useId();
  const phase = phases.find((p) => p.id === activeId) ?? phases[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Project phases"
        className="flex gap-8 overflow-x-auto border-b border-white/70 [scrollbar-width:none] md:gap-10 [&::-webkit-scrollbar]:hidden"
      >
        {phases.map((p) => {
          const selected = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${p.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              onClick={() => setActiveId(p.id)}
              className={`relative shrink-0 pb-4 text-[15px] transition-colors duration-200 md:text-[16px] ${
                selected ? "text-white" : "text-white/40 hover:text-white/75"
              }`}
            >
              {p.label}
              <span
                className={`absolute inset-x-0 bottom-0 h-1 bg-white/85 transition-opacity duration-200 ${
                  selected ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      <div
        key={phase.id}
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${phase.id}`}
        className="process-panel mt-12 md:mt-14"
      >
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {columns.map((col) => (
            <div key={col.key} className="text-white">
              <ColumnIcon kind={col.key} />
              <h3 className="mt-10 mb-4 text-[16px] font-semibold md:mt-12">
                {col.heading}
              </h3>
              <ul className="border-t border-white/40">
                {phase.items[col.key].map((item) => (
                  <li
                    key={item}
                    className="border-b border-white/40 py-2.5 text-[14px] leading-[1.4] text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-right text-[12px] text-white/50">
          *Varies by contract and delivery method
        </p>
      </div>
    </div>
  );
}
