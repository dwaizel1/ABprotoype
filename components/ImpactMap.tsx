"use client";

import Link from "next/link";
import { geoAlbersUsa } from "d3-geo";
import { useEffect, useMemo, useState } from "react";
import {
  filterMapLocations,
  mapFilterOptions,
  type MapFilter,
  type MapLocation,
} from "@/lib/map-locations";

/** Wikimedia Blank US Map — Albers USA fitted to this SVG's state centroids. */
const MAP_WIDTH = 959;
const MAP_HEIGHT = 593;
const projection = geoAlbersUsa()
  .scale(1250)
  .translate([466, 290]);

function project(lat: number, lng: number): { x: number; y: number } | null {
  const point = projection([lng, lat]);
  if (!point) return null;

  let [x, y] = point;

  // Inset corrections so AK/HI land on this SVG's inset islands
  if (lng < -154 && lat < 30) {
    // Hawaii
    x += 30;
    y += 22;
  } else if (lng < -129 && lat > 50) {
    // Alaska
    x += 9;
    y -= 10;
  }

  return { x, y };
}

export function ImpactMap() {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [filter, setFilter] = useState<MapFilter>("Nationwide");
  const [activeId, setActiveId] = useState<string | null>(null);

  const locations = useMemo(() => filterMapLocations(filter), [filter]);
  const active = locations.find((l) => l.id === activeId) ?? null;
  const activePoint = active ? project(active.lat, active.lng) : null;

  useEffect(() => {
    let cancelled = false;
    fetch("/images/home/us-states.svg")
      .then((r) => r.text())
      .then((text) => {
        if (cancelled) return;
        const cleaned = text
          .replace(/<title>[\s\S]*?<\/title>/gi, "")
          .replace(/<circle[\s\S]*?<\/circle>/gi, "")
          .replace(/<path class="separator[^"]*"[\s\S]*?\/>/gi, "")
          .replace(/\s(width|height)="[^"]*"/gi, "")
          .replace(
            /<svg([^>]*)>/i,
            `<svg$1 viewBox="0 0 ${MAP_WIDTH} ${MAP_HEIGHT}" preserveAspectRatio="xMidYMid meet">`,
          );
        setSvgMarkup(cleaned);
      })
      .catch(() => {
        if (!cancelled) setSvgMarkup(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="page-pad pt-[50px] pb-14 md:pb-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
        <div className="flex shrink-0 flex-col items-start gap-2 lg:sticky lg:top-28 lg:w-[150px] lg:pt-6">
          {mapFilterOptions.map((option) => {
            const selected = option === filter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setFilter(option);
                  setActiveId(null);
                }}
                className={`btn h-9 rounded-full px-4 text-[13px] transition ${
                  selected
                    ? "bg-[var(--color-dark-blue)] text-[var(--color-cream)]"
                    : "border border-[var(--color-dark-blue)] bg-transparent text-[var(--color-dark-blue)] hover:bg-[var(--color-dark-blue)] hover:text-[var(--color-cream)]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div
          className="impact-us-map relative min-w-0 w-full flex-1"
          role="img"
          aria-label="Map of Anderson Burton project locations across the United States"
        >
          {svgMarkup ? (
            <div
              className="impact-us-map__svg w-full [&_svg]:h-auto [&_svg]:w-full"
              dangerouslySetInnerHTML={{ __html: svgMarkup }}
              onClick={() => setActiveId(null)}
            />
          ) : (
            <div className="aspect-[959/593] w-full bg-[var(--color-dark-blue)]/10" />
          )}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            {locations.map((loc) => {
              const point = project(loc.lat, loc.lng);
              if (!point) return null;
              const { x, y } = point;
              const isActive = loc.id === activeId;
              return (
                <g key={loc.id} className="pointer-events-auto">
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 16 : 11}
                    fill="transparent"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveId(loc.id === activeId ? null : loc.id);
                    }}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 11 : 7.5}
                    fill={isActive ? "var(--color-yellow)" : "#fff"}
                    stroke="var(--color-dark-blue)"
                    strokeWidth={isActive ? 3 : 2.25}
                    className="pointer-events-none"
                  >
                    <title>{`${loc.name}, ${loc.location}`}</title>
                  </circle>
                </g>
              );
            })}
          </svg>

          {active && activePoint && (
            <ProjectCard
              location={active}
              onClose={() => setActiveId(null)}
              position={activePoint}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  location,
  onClose,
  position,
}: {
  location: MapLocation;
  onClose: () => void;
  position: { x: number; y: number };
}) {
  const openLeft = position.x > MAP_WIDTH / 2;

  return (
    <div
      className={`absolute z-20 max-w-[min(300px,70vw)] -translate-y-full ${
        openLeft ? "-translate-x-full" : ""
      }`}
      style={{
        left: `${(position.x / MAP_WIDTH) * 100}%`,
        top: `${(position.y / MAP_HEIGHT) * 100}%`,
        marginTop: "-10px",
        marginLeft: openLeft ? "-12px" : "12px",
      }}
    >
      <div className="border border-[var(--color-dark-blue)] bg-[var(--color-yellow)] p-4 shadow-[4px_4px_0_var(--color-dark-blue)]">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold leading-tight text-[var(--color-dark-blue)]">
              {location.name}
            </p>
            <p className="mt-1 truncate text-[12px] text-[var(--color-dark-blue)]/70">
              {location.location} · {location.type}
              {location.cost ? ` · $${location.cost}` : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn flex size-7 shrink-0 items-center justify-center text-[16px] text-[var(--color-dark-blue)]/50 hover:text-[var(--color-dark-blue)]"
            aria-label="Close project card"
          >
            ×
          </button>
        </div>
        <p className="mt-2 line-clamp-2 text-[12px] leading-[1.45] text-[var(--color-dark-blue)]/75">
          {location.summary}
        </p>
        {location.slug && (
          <Link
            href={`/work/${location.slug}`}
            className="mt-2 inline-flex text-[12px] font-medium text-[var(--color-dark-blue)] transition-opacity hover:opacity-70"
          >
            View project →
          </Link>
        )}
      </div>
    </div>
  );
}
