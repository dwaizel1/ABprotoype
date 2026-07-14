import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import { getAllProjectSlugs, getProject } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project | Anderson Burton" };
  return {
    title: `${project.title} | Anderson Burton`,
    description: project.writeup[0]?.slice(0, 140),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="bg-[var(--color-cream)]">
      <div className="relative z-10">
        <SiteHeader variant="overlay" />
      </div>
      <ProjectTemplate project={project} />
      <SiteFooter showCta={false} />
    </div>
  );
}
