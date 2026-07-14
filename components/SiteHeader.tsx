"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/nav";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlay = variant === "overlay";

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-[var(--color-dark-blue)] text-white shadow-[0_1px_0_rgba(255,255,255,0.08)]">
      <div className="page-pad flex h-[76px] items-center justify-between md:h-[84px]">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80 md:text-[16px]"
          onClick={() => setOpen(false)}
        >
          Anderson Burton
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[16px] transition-opacity hover:opacity-100 ${
                  active ? "opacity-100 font-medium" : "opacity-75"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className={`btn btn-light inline-flex h-11 items-center rounded-full px-6 text-[15px] font-medium ${
              overlay ? "" : ""
            }`}
          >
            Connect →
          </Link>
        </nav>

        <button
          type="button"
          className="btn flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/15 bg-[var(--color-blue)] text-white lg:hidden">
          <nav className="page-pad flex flex-col gap-1 py-5" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-[20px] font-medium transition-opacity hover:opacity-70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn btn-yellow mt-3 inline-flex h-12 w-fit items-center rounded-full px-6 text-[16px] font-medium"
              onClick={() => setOpen(false)}
            >
              Connect →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
