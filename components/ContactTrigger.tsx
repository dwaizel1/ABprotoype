"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useContactDrawer } from "@/components/ContactDrawer";

type ContactTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function ContactTrigger({
  children,
  className,
  onClick,
  ...props
}: ContactTriggerProps) {
  const { openContact } = useContactDrawer();

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        onClick?.(e);
        openContact();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
