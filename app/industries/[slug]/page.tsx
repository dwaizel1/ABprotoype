import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowSquareIcon } from "@/components/ArrowSquareIcon";
import { PhotoCredit } from "@/components/PhotoCredit";
import { ProjectCatalog } from "@/components/ProjectCatalog";
import { ProjectTile } from "@/components/ProjectTile";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getIndustry, industries } from "@/lib/industries";
import { projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industries | Anderson Burton" };
  return {
    title: `${industry.name} | Anderson Burton`,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const featured = projects.filter((p) =>
    industry.workTypes.some((type) => type === p.type),
  );
  const others = industries.filter((i) => i.slug !== industry.slug);
  const workHref = `/work?type=${encodeURIComponent(industry.workFilter)}`;

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <SiteHeader variant="overlay" />

      <section className="relative flex min-h-[560px] h-[min(760px,88svh)] flex-col overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={industry.image}
          alt=""
          className="cover-media"
          style={{ objectPosition: industry.imagePosition ?? "center" }}
        />
        <PhotoCredit src={industry.image} className="right-3 bottom-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/85 from-10% via-black/45 to-transparent" />

        <div className="page-pad relative z-10 mt-auto pb-8 md:pb-10">
          <nav aria-label="Breadcrumb" className="text-[14px] text-white/70">
            <Link href="/industries" className="transition-colors hover:text-white">
              Industries
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white" aria-current="page">
              {industry.shortName}
            </span>
          </nav>
          <h1
            className="mt-4 font-[family-name:var(--font-display)] font-normal text-white"
            style={{
              fontSize: "clamp(44px, 6.4vw, 92px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {industry.name}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="page-pad py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="type-eyebrow text-[var(--color-dark-blue)]/60">
              {industry.id} &mdash; {industry.shortName}
            </p>
            <h2 className="type-h2 mt-3 text-[var(--color-dark-blue)]">
              {industry.headline}
            </h2>
          </div>
          <div className="lg:pt-9">
            <p className="text-[17px] leading-[1.65] text-[var(--color-dark-blue)]/85">
              {industry.description}
            </p>
            <ul className="mt-8 space-y-3 border-t border-[var(--color-dark-blue)]/20 pt-6">
              {industry.focuses.map((focus) => (
                <li
                  key={focus}
                  className="flex gap-3 text-[15px] leading-[1.5] text-[var(--color-dark-blue)]"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-blue)]"
                    aria-hidden
                  />
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured work */}
      {featured.length > 0 && (
        <section className="page-pad pb-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="type-h2 text-[var(--color-dark-blue)]">
              Featured {industry.shortName.toLowerCase()} work
            </h2>
            <Link
              href={workHref}
              className="btn btn-outline inline-flex h-11 items-center gap-2.5 rounded-full px-6 text-[15px] font-medium"
            >
              View all {industry.shortName} work
              <ArrowSquareIcon size={20} />
            </Link>
          </div>

          <div className="mt-10 grid gap-x-5 gap-y-12 md:mt-14 md:grid-cols-2">
            {featured.map((project, i) => {
              const spanFull = featured.length % 2 === 1 && i === 0;
              return (
                <div key={project.slug} className={spanFull ? "md:col-span-2" : undefined}>
                  <ProjectTile
                    project={project}
                    aspect={spanFull ? "aspect-[4/3] md:aspect-[16/7]" : "aspect-[3/2]"}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}

      <ProjectCatalog filter={industry.workTypes} />

      {/* Other industries */}
      <section className="page-pad border-t border-[var(--color-dark-blue)]/15 py-16 md:py-24">
        <h2 className="type-h2 text-[var(--color-dark-blue)]">Explore other industries</h2>
        <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {others.map((other) => (
            <li key={other.slug}>
              <Link href={`/industries/${other.slug}`} className="group block">
                <div className="frame relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#414141]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={other.image}
                    alt=""
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: other.imagePosition ?? "center" }}
                  />
                  <PhotoCredit src={other.image} />
                </div>
                <p className="mt-4 flex items-center justify-between gap-4 text-[18px] font-medium text-[var(--color-dark-blue)]">
                  {other.name}
                  <ArrowSquareIcon
                    size={22}
                    className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </p>
                <p className="mt-1 text-[14px] leading-[1.5] text-[var(--color-dark-blue)]/65">
                  {other.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}
