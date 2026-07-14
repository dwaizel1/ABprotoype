import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectTemplateProps = {
  project: Project;
};

export function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <article className="bg-[var(--color-cream)]">
      <div className="frame relative h-[280px] w-full bg-[#414141] md:h-[420px] lg:h-[558px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.heroImage} alt="" />
      </div>

      <div className="page-pad grid gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <h1 className="type-h1 text-[var(--color-blue)] max-w-[612px]">
            {project.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-[15px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2.5 rounded-[11px] border border-[var(--color-blue)] px-5 py-2.5 type-h6 text-[var(--color-blue)]"
              >
                <span aria-hidden className="text-[14px]">
                  ◆
                </span>
                {tag}
              </span>
            ))}
          </div>

          <div
            className="mt-10 flex size-16 items-center justify-center rounded-full bg-[var(--color-dark-blue)] text-white"
            aria-hidden
          >
            ↓
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {[
            { label: "SQUARE FOOTAGE:", value: project.squareFootage },
            { label: "PROJECT COST", value: project.cost },
            { label: "CONTRACT TYPE:", value: project.contractType },
          ].map((stat) => (
            <div key={stat.label} className="border-b border-[var(--color-blue)]/30 pb-6">
              <p className="type-eyebrow text-[14px] tracking-[-0.21px] text-[var(--color-text-muted)] normal-case">
                {stat.label}
              </p>
              <p className="type-h3 mt-3 text-[var(--color-blue)]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="page-pad pb-20 lg:pl-[calc(50%+10px)] lg:pr-[80px]">
        <div className="type-body-1 text-[var(--color-blue)] max-w-[645px] space-y-6">
          {project.writeup.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
      </div>

      <div className="page-pad flex flex-col gap-[76px] pb-24">
        {project.gallery.map((src, i) => (
          <div
            key={src}
            className={`frame relative aspect-[16/10] w-full ${
              i === 1 ? "" : "rounded-[8px]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <div className="page-pad pb-16">
        <Link
          href="/work"
          className="type-body-2 text-[var(--color-blue)] underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
        >
          ← Back to Work
        </Link>
      </div>

      <div className="h-[120px] bg-[var(--color-deep-navy)] md:h-[200px] lg:h-[494px]" />
    </article>
  );
}
