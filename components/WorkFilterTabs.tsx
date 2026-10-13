"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, type ReactNode } from "react";
import { projects } from "@/lib/projects";

export const workFilters = [
  "All",
  "Federal",
  "Municipal",
  "Energy",
  "Commercial",
  "Industrial",
] as const;

export type WorkFilter = (typeof workFilters)[number];

function isWorkFilter(value: string | null): value is WorkFilter {
  return !!value && (workFilters as readonly string[]).includes(value);
}

/** Active filter, seeded from and kept in sync with the `?type=` query param. */
export function useWorkFilter() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const fromParam: WorkFilter = isWorkFilter(typeParam) ? typeParam : "All";
  const [activeFilter, setActiveFilter] = useState<WorkFilter>(fromParam);
  const [syncedTypeParam, setSyncedTypeParam] = useState(typeParam);

  if (typeParam !== syncedTypeParam) {
    setSyncedTypeParam(typeParam);
    setActiveFilter(fromParam);
  }

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return { activeFilter, setActiveFilter, filtered };
}

const counts = Object.fromEntries(
  workFilters.map((f) => [
    f,
    f === "All" ? projects.length : projects.filter((p) => p.type === f).length,
  ]),
) as Record<WorkFilter, number>;

type WorkFilterTabsProps = {
  active: WorkFilter;
  onChange: (filter: WorkFilter) => void;
  /** Rendered at the right end of the tab row. */
  aside?: ReactNode;
};

export function WorkFilterTabs({ active, onChange, aside }: WorkFilterTabsProps) {
  return (
    <div className="flex items-end gap-6 border-b border-[var(--color-dark-blue)]">
      <div
        className="-mb-px flex min-w-0 flex-1 gap-7 overflow-x-auto md:gap-10"
        role="tablist"
        aria-label="Filter projects"
      >
        {workFilters.map((f) => {
          const selected = f === active;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onChange(f)}
              className={`relative shrink-0 pb-3 text-[16px] transition-colors md:text-[18px] ${
                selected
                  ? "text-[var(--color-dark-blue)]"
                  : "text-[var(--color-dark-blue)]/55 hover:text-[var(--color-dark-blue)]/85"
              }`}
            >
              {f}
              <sup className="ml-0.5 text-[10px] md:text-[11px]">{counts[f]}</sup>
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-0 h-1 bg-[var(--color-dark-blue)] transition-opacity ${
                  selected ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
      {aside}
    </div>
  );
}
