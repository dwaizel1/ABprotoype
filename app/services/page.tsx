"use client";

import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const services = [
  {
    id: "01",
    title: "Project Governance",
    columns: [
      {
        icon: "◎",
        heading: "Clear Ownership",
        paragraphs: [
          "Decision rights, escalation paths, and reporting cadence are defined before work begins.",
          "Stakeholders stay aligned through structured reviews that protect scope, vision, and accountability.",
        ],
      },
      {
        icon: "☰",
        heading: "Transparent Process",
        paragraphs: [
          "Every phase has documented gates so progress is measurable and surprises stay rare.",
          "We keep the client core at the center of every coordination meeting and field decision.",
        ],
      },
    ],
  },
  {
    id: "02",
    title: "Cost & Schedule Controls",
    columns: [
      {
        icon: "$",
        heading: "Budget Certainty",
        paragraphs: [
          "We know where every dollar goes before it's spent. No hidden costs, no scope creep that catches you off guard.",
          "Change orders are documented, reviewed, and approved before any work proceeds. Contingencies are built in strategically, not padded in as a safety blanket.",
        ],
      },
      {
        icon: "⏱",
        heading: "Schedule Control",
        paragraphs: [
          "We stay ahead of the timeline through proactive planning, not reactive damage control.",
          "Milestones are set early and tracked consistently — not adjusted when things get uncomfortable. We use look-ahead scheduling to spot conflicts before they hit the critical path.",
        ],
      },
    ],
  },
  {
    id: "03",
    title: "Risk & Compliance",
    columns: [
      {
        icon: "⚠",
        heading: "Risk Anticipation",
        paragraphs: [
          "We identify site, regulatory, and operational risks early and plan mitigations into the baseline.",
          "High-consequence environments get elevated planning, not last-minute workarounds.",
        ],
      },
      {
        icon: "✓",
        heading: "Compliance Ready",
        paragraphs: [
          "Federal, municipal, and utility requirements are tracked as living constraints throughout delivery.",
          "Documentation, QA/QC, and closeout packages are built continuously — not scrambled at the end.",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  const [openId, setOpenId] = useState("02");

  return (
    <div className="min-h-screen bg-[var(--color-services-bg)] text-white">
      <SiteHeader variant="overlay" />
      <div className="h-[76px] md:h-[84px]" />

      <section className="page-pad pt-16 pb-12 md:pt-24 md:pb-16">
        <span className="inline-flex items-center rounded-[9px] bg-[var(--color-yellow)] px-3.5 py-1.5 text-[12px] font-medium tracking-[-0.6px] text-[var(--color-blue)]">
          Our Approach to Success
        </span>
        <h1
          className="mt-6 max-w-[952px] font-[family-name:var(--font-display)] text-white"
          style={{
            fontSize: "clamp(36px, 5.2vw, 78px)",
            lineHeight: 1.03,
            letterSpacing: "-0.043em",
          }}
        >
          <span className="font-bold">Client Core</span>{" "}
          <span className="font-normal">
            One goal: protect your vision, budget, and schedule.
          </span>
        </h1>
        <hr className="mt-16 border-white/40 md:mt-20" />
      </section>

      <section className="page-pad pb-24">
        <ul>
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <li key={service.id} className="relative">
                <button
                  type="button"
                  className={`btn flex w-full items-center justify-between gap-6 py-8 text-left md:py-10 ${
                    isOpen
                      ? "rounded-[43px] bg-[var(--color-services-panel)] px-6 shadow-[0_12px_97px_rgba(0,0,0,0.25)] md:px-10"
                      : "hover:bg-white/5 rounded-[24px] px-2 md:px-4"
                  }`}
                  onClick={() => setOpenId(isOpen ? "" : service.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
                    <span
                      className={`font-[family-name:var(--font-display)] font-medium tracking-[-0.05em] ${
                        isOpen ? "text-white" : "text-white/50"
                      }`}
                      style={{
                        fontSize: "clamp(64px, 8vw, 120px)",
                        lineHeight: 1,
                      }}
                    >
                      {service.id}
                    </span>
                    <span
                      className="font-[family-name:var(--font-display)] font-bold tracking-[-0.05em] sm:ml-auto"
                      style={{
                        fontSize: "clamp(28px, 3.8vw, 56px)",
                        lineHeight: 1.12,
                      }}
                    >
                      {service.title}
                    </span>
                  </div>
                  <span className="shrink-0 text-2xl" aria-hidden>
                    →
                  </span>
                </button>

                {isOpen && (
                  <div className="-mt-2 rounded-b-[43px] bg-[var(--color-services-panel)] px-6 pb-12 md:px-10 md:pb-16">
                    <div className="ml-0 grid gap-10 md:ml-[auto] md:max-w-[860px] md:grid-cols-2 md:gap-12">
                      {service.columns.map((col) => (
                        <div key={col.heading}>
                          <div className="flex items-center gap-4 border-b border-white/40 pb-3">
                            <span className="text-[24px]" aria-hidden>
                              {col.icon}
                            </span>
                            <h3 className="font-[family-name:var(--font-display)] text-[25px] tracking-[-1.25px]">
                              {col.heading}
                            </h3>
                          </div>
                          <div className="mt-5 space-y-4 type-body-2 leading-[21px] text-white/95">
                            {col.paragraphs.map((p) => (
                              <p key={p.slice(0, 32)}>{p}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!isOpen && <div className="border-b border-white/20" />}
              </li>
            );
          })}
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}
