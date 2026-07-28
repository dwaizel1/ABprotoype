"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  filterMapLocations,
  mapFilterOptions,
  type MapFilter,
  type MapLocation,
} from "@/lib/map-locations";

const US_CENTER: [number, number] = [39.5, -98.35];
const US_ZOOM = 4;
const WEST_ZOOM = 5.2;
const WEST_CENTER: [number, number] = [37.2, -119.5];
const EAST_CENTER: [number, number] = [38.5, -77.5];
const EAST_ZOOM = 5;
const ELSEWHERE_CENTER: [number, number] = [36.5, -100];
const ELSEWHERE_ZOOM = 4.2;

function viewForFilter(filter: MapFilter): {
  center: [number, number];
  zoom: number;
} {
  switch (filter) {
    case "West Coast":
      return { center: WEST_CENTER, zoom: WEST_ZOOM };
    case "East Coast":
      return { center: EAST_CENTER, zoom: EAST_ZOOM };
    case "Elsewhere":
      return { center: ELSEWHERE_CENTER, zoom: ELSEWHERE_ZOOM };
    default:
      return { center: US_CENTER, zoom: US_ZOOM };
  }
}

function markerIconHtml(active: boolean) {
  const size = active ? 44 : 34;
  const ring = active ? "var(--color-yellow)" : "#ffffff";
  return `
    <span class="impact-marker" style="
      display:flex;align-items:center;justify-content:center;
      width:${size}px;height:${size}px;border-radius:999px;
      background:#04173c;border:2px solid ${ring};
      box-shadow:0 8px 20px rgba(4,23,60,0.28);
    ">
      <span style="
        display:block;width:12px;height:12px;border-radius:2px;
        background:#fff;position:relative;
      ">
        <span style="
          position:absolute;inset:3.5px;border-radius:1px;background:#04173c;
        "></span>
      </span>
    </span>
  `;
}

export function ImpactMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Map<string, LeafletMarker>>(new Map());
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState<MapFilter>("Nationwide");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [cardPos, setCardPos] = useState<{ x: number; y: number } | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const locations = useMemo(() => filterMapLocations(filter), [filter]);
  const active = locations.find((l) => l.id === activeId) ?? null;

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!containerRef.current || mapRef.current) return;
      const L = await import("leaflet");

      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        center: US_CENTER,
        zoom: US_ZOOM,
        zoomControl: false,
        attributionControl: true,
        scrollWheelZoom: false,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 18,
        },
      ).addTo(map);

      map.on("click", () => {
        setActiveId(null);
        setCardPos(null);
      });

      mapRef.current = map;
      setReady(true);
      setContainerWidth(containerRef.current.clientWidth);

      requestAnimationFrame(() => {
        map.invalidateSize();
      });
    }

    void init();

    const onResize = () => {
      mapRef.current?.invalidateSize();
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    if (!ready || !mapRef.current) return;
    let cancelled = false;

    async function syncMarkers() {
      const L = await import("leaflet");
      const map = mapRef.current;
      if (!map || cancelled) return;

      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current.clear();

      locations.forEach((loc) => {
        const icon = L.divIcon({
          className: "impact-marker-wrap",
          html: markerIconHtml(false),
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        });

        const marker = L.marker([loc.lat, loc.lng], {
          icon,
          title: loc.name,
          alt: loc.name,
        }).addTo(map);
        marker.on("click", (e) => {
          L.DomEvent.stopPropagation(e);
          const point = map.latLngToContainerPoint([loc.lat, loc.lng]);
          setActiveId(loc.id);
          setCardPos({ x: point.x, y: point.y });
        });
        const el = marker.getElement();
        if (el) {
          el.setAttribute("aria-label", `${loc.name}, ${loc.location}`);
        }
        markersRef.current.set(loc.id, marker);
      });
    }

    void syncMarkers();

    return () => {
      cancelled = true;
    };
  }, [ready, locations]);

  useEffect(() => {
    if (!ready || !mapRef.current) return;
    const view = viewForFilter(filter);
    mapRef.current.flyTo(view.center, view.zoom, { duration: 0.75 });
  }, [ready, filter]);

  useEffect(() => {
    if (!ready) return;
    let cancelled = false;

    async function refreshIcons() {
      const L = await import("leaflet");
      if (cancelled) return;

      markersRef.current.forEach((marker, id) => {
        const isActive = id === activeId;
        marker.setIcon(
          L.divIcon({
            className: "impact-marker-wrap",
            html: markerIconHtml(isActive),
            iconSize: [isActive ? 44 : 34, isActive ? 44 : 34],
            iconAnchor: [isActive ? 22 : 17, isActive ? 22 : 17],
          }),
        );
      });
    }

    void refreshIcons();

    return () => {
      cancelled = true;
    };
  }, [ready, activeId, locations]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !active) {
      setCardPos(null);
      return;
    }

    const update = () => {
      const point = map.latLngToContainerPoint([active.lat, active.lng]);
      setCardPos({ x: point.x, y: point.y });
    };

    update();
    map.on("move zoom", update);
    return () => {
      map.off("move zoom", update);
    };
  }, [active]);

  const cardOpensLeft = !cardPos || cardPos.x > Math.min(360, containerWidth * 0.45);

  return (
    <div className="relative h-[min(72vh,760px)] min-h-[420px] w-full overflow-hidden bg-[#e8e6df]">
      <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 page-pad pt-6 md:pt-8">
        <div className="pointer-events-auto flex flex-wrap gap-2">
          {mapFilterOptions.map((option) => {
            const selected = option === filter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setFilter(option);
                  setActiveId(null);
                  setCardPos(null);
                }}
                className={`btn h-9 rounded-full px-4 text-[13px] ${
                  selected
                    ? "btn-pill-active"
                    : "border border-[var(--color-dark-blue)] bg-white/90 text-[var(--color-dark-blue)] backdrop-blur-sm hover:bg-[var(--color-dark-blue)] hover:text-white"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {active && cardPos && (
        <ProjectCard
          location={active}
          x={cardPos.x}
          y={cardPos.y}
          openLeft={cardOpensLeft}
          onClose={() => {
            setActiveId(null);
            setCardPos(null);
          }}
        />
      )}
    </div>
  );
}

function ProjectCard({
  location,
  x,
  y,
  openLeft,
  onClose,
}: {
  location: MapLocation;
  x: number;
  y: number;
  openLeft: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-20 -translate-y-1/2 ${
        openLeft ? "-translate-x-full pr-3" : "pl-3"
      }`}
      style={{ left: x, top: y }}
    >
      <div
        className={`pointer-events-auto flex max-w-[min(320px,70vw)] items-stretch overflow-hidden rounded-[22px] bg-white shadow-[0_16px_40px_rgba(4,23,60,0.22)] ${
          openLeft ? "" : "flex-row-reverse"
        }`}
      >
        <div className="min-w-0 flex-1 py-3 pl-5 pr-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[14px] font-semibold leading-tight text-[var(--color-dark-blue)]">
                {location.name}
              </p>
              <p className="mt-1 truncate text-[12px] text-[var(--color-dark-blue)]/60">
                {location.location} · {location.type}
                {location.cost ? ` · $${location.cost}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="btn -mr-1 -mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-[16px] text-[var(--color-dark-blue)]/50 hover:bg-[var(--color-dark-blue)]/5 hover:text-[var(--color-dark-blue)]"
              aria-label="Close project card"
            >
              ×
            </button>
          </div>
          <p className="mt-2 line-clamp-2 text-[12px] leading-[1.45] text-[var(--color-dark-blue)]/70">
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
        <div
          className="flex w-11 shrink-0 items-center justify-center bg-[var(--color-dark-blue)]"
          aria-hidden
        >
          <span className="relative block size-3 rounded-[2px] bg-white">
            <span className="absolute inset-[3px] rounded-[1px] bg-[var(--color-dark-blue)]" />
          </span>
        </div>
      </div>
    </div>
  );
}
