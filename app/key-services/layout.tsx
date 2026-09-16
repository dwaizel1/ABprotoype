import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Services | Anderson Burton",
  description:
    "Design Build, commercial construction, historical restoration, and operations & maintenance.",
};

export default function KeyServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
