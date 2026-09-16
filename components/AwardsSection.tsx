import { awards } from "@/lib/awards";

type AwardsSectionProps = {
  className?: string;
};

export function AwardsSection({ className = "" }: AwardsSectionProps) {
  return (
    <section className={`bg-[var(--color-dark-blue)] text-white ${className}`.trim()}>
      <div className="page-pad py-16 md:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="lg:w-[32%] lg:shrink-0">
            <p className="type-eyebrow text-[var(--color-yellow)]">Recognition</p>
            <h2 className="mt-3 text-[clamp(34px,4.2vw,62px)] font-semibold leading-[0.98] tracking-[-0.03em]">
              More Awards
            </h2>
          </div>

          <div className="w-full">
            <ul className="w-full space-y-2 border-l border-white/25 pl-5 text-[14px] leading-[1.45] font-normal text-white/75 md:pl-7 md:text-[22px]">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
