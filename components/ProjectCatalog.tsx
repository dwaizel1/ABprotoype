"use client";

import { useMemo } from "react";
import { catalogGroups } from "@/lib/catalog-projects";

type CatalogFilter =
  | "All"
  | "Federal"
  | "Municipal"
  | "Energy"
  | "Commercial"
  | "Industrial";

type ProjectCatalogProps = {
  filter?: CatalogFilter;
};

export function ProjectCatalog({ filter = "All" }: ProjectCatalogProps) {
  const groups = useMemo(() => {
    return catalogGroups
      .map((group) => ({
        ...group,
        projects:
          filter === "All"
            ? group.projects
            : group.projects.filter((p) => p.type === filter),
      }))
      .filter((group) => group.projects.length > 0);
  }, [filter]);

  const total = groups.reduce((n, g) => n + g.projects.length, 0);

  if (total === 0) {
    return (
      <section className="page-pad pb-24 pt-16 md:pt-20">
        <h2 className="type-h2 capitalize text-[var(--color-dark-blue)]">
          Additional projects
        </h2>
        <p className="mt-6 type-body-2 text-[var(--color-text-muted)]">
          No additional projects match this filter.
        </p>
      </section>
    );
  }

  return (
    <section className="page-pad pb-24 pt-16 md:pt-20">
      <div className="mb-12 md:mb-16">
        <h2 className="type-h2 capitalize text-[var(--color-dark-blue)]">
          Additional projects
        </h2>
        <p className="mt-4 max-w-[560px] type-body-2 text-[var(--color-dark-blue)]/70">
          Screened portfolio entries shown without photography — title and a
          short description for each.
        </p>
      </div>

      <div className="space-y-16 md:space-y-20">
        {groups.map((group, index) => (
          <div key={group.category}>
            <div className={index === 0 ? "pt-0" : "border-t border-[var(--color-dark-blue)]/35 pt-5"}>
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(22px,2.4vw,28px)] font-semibold tracking-[-0.02em] text-[var(--color-dark-blue)]">
                {group.category}
              </h3>
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.projects.map((project) => (
                <li
                  key={`${group.category}-${project.title}`}
                  className="border-t border-[var(--color-dark-blue)]/20 pt-4"
                >
                  <h4 className="font-[family-name:var(--font-display)] text-[16px] leading-[1.3] font-semibold tracking-[-0.015em] text-[var(--color-dark-blue)] md:text-[17px]">
                    {project.title}
                  </h4>
                  <p className="mt-3 text-[13px] leading-[1.45] text-[var(--color-dark-blue)]/65">
                    {project.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
