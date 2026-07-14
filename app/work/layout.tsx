import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Anderson Burton",
  description:
    "Key projects across federal, energy, municipal, and industrial construction.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
