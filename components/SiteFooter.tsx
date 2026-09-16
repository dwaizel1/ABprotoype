"use client";

import Link from "next/link";
import { useContactDrawer } from "@/components/ContactDrawer";
import { primaryNav } from "@/lib/nav";

type SiteFooterProps = {
  showCta?: boolean;
};

export function SiteFooter({ showCta = true }: SiteFooterProps) {
  const { openContact } = useContactDrawer();

  return (
    <footer id="contact" className="bg-[var(--color-yellow)] text-[var(--color-dark-blue)]">
      {showCta && (
        <div className="page-pad flex flex-col gap-8 pt-16 pb-12 md:flex-row md:items-start md:justify-between md:pt-20">
          <h2 className="type-h2 max-w-[860px] capitalize">
            Ready to break
            <br />
            ground? Let&apos;s talk.
          </h2>
          <button
            type="button"
            onClick={openContact}
            className="btn btn-primary inline-flex h-[56px] shrink-0 items-center justify-center rounded-full px-8 type-body-2"
          >
            Contact Us →
          </button>
        </div>
      )}

      <div className="page-pad flex flex-col gap-10 pb-10 pt-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="type-body-3 max-w-[400px]">
          <p className="font-bold mb-0">ANDERSON BURTON</p>
          <p className="mb-0">121 Nevada St, Arroyo Grande, CA</p>
          <p>805 481 5096 · sales@andersonburton.com</p>
        </div>

        <nav
          className="flex flex-wrap gap-x-5 gap-y-3 type-body-2"
          aria-label="Footer"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={openContact}
            className="hover:opacity-70"
          >
            Contact
          </button>
        </nav>
      </div>

      <div className="page-pad pb-12">
        <p className="type-body-3">
          © 2026 Anderson Burton Construction · WBE · WOSB · ESOP
        </p>
      </div>
    </footer>
  );
}
