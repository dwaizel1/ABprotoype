"use client";

import { ArrowSquareIcon } from "@/components/ArrowSquareIcon";
import { useContactDrawer } from "@/components/ContactDrawer";

export function CareersCta() {
  const { openContactAs } = useContactDrawer();

  return (
    <section className="page-pad py-20 text-center md:py-28">
      <div className="mx-auto flex max-w-[860px] flex-col items-center">
        <h2 className="type-h2 text-balance text-[var(--color-dark-blue)]">
          Think you&rsquo;d be a good addition to our team?
        </h2>
        <p className="mt-4 max-w-[520px] text-[16px] leading-[1.6] text-[var(--color-dark-blue)]/70">
          We&rsquo;re always looking for builders, estimators, and project
          leaders who want a real stake in the work.
        </p>
        <button
          type="button"
          onClick={() => openContactAs("careers")}
          className="btn btn-primary mt-8 inline-flex h-11 items-center gap-2.5 rounded-full pr-5 pl-3 text-[14px] font-medium"
        >
          <ArrowSquareIcon size={22} strokeWidth={1.75} />
          View Careers
        </button>
      </div>
    </section>
  );
}
