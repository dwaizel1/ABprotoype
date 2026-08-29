"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./scroll-reveal.css";

const ROOT_SELECTOR = "section, footer, [data-reveal]";
const ITEM_SELECTOR = ".grid > *, ul > li, ol > li, [data-reveal-item]";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function collectTargets() {
  return Array.from(document.querySelectorAll<HTMLElement>(ROOT_SELECTOR)).filter(
    (el) => el.dataset.reveal !== "false",
  );
}

function prepareTarget(el: HTMLElement, index: number) {
  if (!el.classList.contains("scroll-reveal")) {
    el.classList.add("scroll-reveal");
    el.style.setProperty("--reveal-delay", `${Math.min(index * 30, 180)}ms`);
  }

  const items = Array.from(el.querySelectorAll<HTMLElement>(ITEM_SELECTOR)).filter(
    (item) =>
      !item.closest(".leaflet-container") &&
      item.dataset.reveal !== "false",
  );

  items.forEach((item, i) => {
    if (item.classList.contains("scroll-reveal-item")) return;
    item.classList.add("scroll-reveal-item");
    item.style.setProperty("--reveal-item-delay", `${Math.min(i * 65, 450)}ms`);
  });
}

function isNearViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh * 0.94 && rect.bottom > 40;
}

function nodeAddsTargets(node: Node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false;
  const el = node as Element;
  return el.matches(ROOT_SELECTOR) || !!el.querySelector(ROOT_SELECTOR);
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const pending = new Set<HTMLElement>();
    let debounceTimer = 0;

    const reveal = (el: HTMLElement) => {
      pending.delete(el);
      el.classList.add("is-revealed");
    };

    const observer = reduced
      ? null
      : new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              reveal(entry.target as HTMLElement);
              observer?.unobserve(entry.target);
            }
          },
          {
            root: null,
            rootMargin: "0px 0px -6% 0px",
            threshold: [0, 0.08, 0.15],
          },
        );

    const bind = () => {
      const targets = collectTargets();
      targets.forEach((el, i) => prepareTarget(el, i));

      if (reduced) {
        targets.forEach(reveal);
        return;
      }

      const firstSection = targets.find((el) => el.tagName === "SECTION");

      for (const el of targets) {
        if (el.classList.contains("is-revealed")) continue;

        const hero =
          el === firstSection && el.getBoundingClientRect().top < window.innerHeight * 0.5;

        if (hero || isNearViewport(el)) {
          if (hero) reveal(el);
          else requestAnimationFrame(() => reveal(el));
          continue;
        }

        if (!pending.has(el)) {
          pending.add(el);
          observer?.observe(el);
        }
      }
    };

    const scheduleBind = () => {
      window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(bind, 40);
    };

    bind();
    // Re-check after fonts/layout settle
    const t1 = window.setTimeout(bind, 200);
    const t2 = window.setTimeout(bind, 800);

    const mo = new MutationObserver((mutations) => {
      if (mutations.some((m) => Array.from(m.addedNodes).some(nodeAddsTargets))) {
        scheduleBind();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(debounceTimer);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      observer?.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
