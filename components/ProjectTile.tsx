import Link from "next/link";
import { PhotoCredit } from "@/components/PhotoCredit";
import type { Project } from "@/lib/projects";

type ProjectTileProps = {
  project: Project;
  aspect: string;
};

export function ProjectTile({ project, aspect }: ProjectTileProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className={`frame relative overflow-hidden rounded-[16px] bg-[#414141] ${aspect}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt=""
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <PhotoCredit src={project.heroImage} />
      </div>
      <p className="mt-4 text-[16px] leading-snug font-medium text-[var(--color-dark-blue)] md:text-[18px]">
        {project.title}
      </p>
      <p className="mt-1 text-[13px] text-[var(--color-text-muted)]">
        {project.location}
      </p>
    </Link>
  );
}
