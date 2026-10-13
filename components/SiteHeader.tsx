"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { useContactDrawer } from "@/components/ContactDrawer";
import { primaryNav, type NavItem } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant: _variant = "solid" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openContact } = useContactDrawer();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-dark-blue)] text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)]">
      <div className="page-pad flex h-[76px] items-center justify-between md:h-[84px]">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ab-logo.png"
            alt="Anderson Burton Construction"
            className="site-logo"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);

            if (item.children) {
              return (
                <NavDropdown
                  key={item.href}
                  item={item}
                  active={active}
                  pathname={pathname}
                />
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="nav-pill whitespace-nowrap px-3 py-2 text-[15px] 2xl:px-4 2xl:text-[16px]"
              >
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={openContact}
            className="btn btn-light ml-4 inline-flex h-11 items-center rounded-full px-6 text-[15px] font-medium"
          >
            Connect
          </button>
        </nav>

        <button
          type="button"
          className="btn flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
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
        <div className="border-t border-white/15 bg-[var(--color-blue)] text-white xl:hidden">
          <nav className="page-pad flex flex-col gap-1 py-5" aria-label="Mobile">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <div key={item.href} className="flex flex-col">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="nav-pill -mx-4 px-4 py-3 text-[20px]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mb-2 ml-1 flex flex-col border-l border-white/15 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className="nav-pill -mx-2 px-3 py-2 text-[16px]"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              className="btn btn-yellow mt-3 inline-flex h-12 w-fit items-center rounded-full px-6 text-[16px] font-medium"
              onClick={() => {
                setOpen(false);
                openContact();
              }}
            >
              Connect
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

type NavDropdownProps = {
  item: NavItem;
  active: boolean;
  pathname: string;
};

function NavDropdown({ item, active, pathname }: NavDropdownProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  return (
    <div
      className="relative"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
      onFocus={() => setMenuOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setMenuOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setMenuOpen(false);
      }}
    >
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        className="nav-pill inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-[15px] 2xl:px-4 2xl:text-[16px]"
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`transition-transform duration-200 motion-reduce:transition-none ${
            menuOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m2 3.5 3 3 3-3" />
        </svg>
      </Link>

      <div
        id={menuId}
        className={`absolute top-full left-1/2 w-[400px] -translate-x-1/2 pt-5 transition-[opacity,translate] duration-200 ease-out motion-reduce:transition-none ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="rounded-[18px] bg-white p-2 text-[var(--color-dark-blue)] shadow-[0_18px_40px_rgba(4,23,60,0.28)]">
          <ul>
            {item.children?.map((child) => {
              const current = pathname === child.href;
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    aria-current={current ? "page" : undefined}
                    className={`group flex items-center gap-4 rounded-[12px] p-2.5 pr-4 transition-colors hover:bg-[var(--color-cream)] focus-visible:bg-[var(--color-cream)] focus-visible:outline-none ${
                      current ? "bg-[var(--color-cream)]" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {child.image && (
                      <span className="relative size-14 shrink-0 overflow-hidden rounded-[10px] bg-[var(--color-dark-blue)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={child.image}
                          alt=""
                          className="cover-media"
                          style={{ objectPosition: child.imagePosition ?? "center" }}
                        />
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-semibold">{child.label}</span>
                      {child.description && (
                        <span className="mt-0.5 line-clamp-2 block text-[13px] leading-[1.4] text-[var(--color-dark-blue)]/65">
                          {child.description}
                        </span>
                      )}
                    </span>
                    <span
                      className="shrink-0 text-[var(--color-dark-blue)]/40 transition group-hover:translate-x-0.5 group-hover:text-[var(--color-dark-blue)] motion-reduce:transition-none"
                      aria-hidden
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={item.href}
            className="mt-1 flex items-center justify-between rounded-[12px] border-t border-[var(--color-dark-blue)]/10 px-3 pt-3 pb-2.5 text-[14px] font-semibold transition-colors hover:text-[var(--color-blue)]"
            onClick={() => setMenuOpen(false)}
          >
            {item.label} overview
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
