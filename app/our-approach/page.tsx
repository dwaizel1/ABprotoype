import { ProcessSteps } from "@/components/ProcessSteps";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-[var(--color-services-bg)] text-white">
      <SiteHeader variant="overlay" />
      <div className="h-[76px] md:h-[84px]" />

      <section className="page-pad pt-16 pb-12 md:pt-24 md:pb-16">
        <span className="inline-flex items-center rounded-[9px] bg-[var(--color-yellow)] px-3.5 py-1.5 text-[12px] font-medium tracking-[-0.6px] text-[var(--color-blue)]">
          Design-Build Commercial General Contractor
        </span>
        <h1
          className="mt-6 max-w-[952px] font-[family-name:var(--font-display)] text-white"
          style={{
            fontSize: "clamp(36px, 5.2vw, 78px)",
            lineHeight: 1.03,
            letterSpacing: "-0.043em",
          }}
        >
          <span className="font-bold">Our Approach</span>{" "}
          <span className="font-normal">
            One goal: protecting the client’s vision, budget, schedule, and{" "}
            <span className="whitespace-nowrap">long-term</span> success.
          </span>
        </h1>
        <hr className="mt-16 border-white/40 md:mt-20" />
      </section>

      <section className="page-pad pb-24" aria-labelledby="core-client-approach">
        <h2 id="core-client-approach" className="type-h2">
          Our Core Client Approach
        </h2>
        <p className="type-body-1 mt-4 mb-10 text-white/70 md:mb-14">
          Vision • Budget • Schedule • Quality
        </p>
        <ProcessSteps />
      </section>

      <SiteFooter />
    </div>
  );
}
