"use client";

import type { ReactNode } from "react";
import { ContactProvider } from "@/components/ContactDrawer";

export function Providers({ children }: { children: ReactNode }) {
  return <ContactProvider>{children}</ContactProvider>;
}
