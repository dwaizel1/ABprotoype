"use client";

import type { ReactNode } from "react";
import { ContactProvider } from "@/components/ContactDrawer";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ContactProvider>
      <ScrollReveal />
      {children}
    </ContactProvider>
  );
}
