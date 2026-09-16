import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Core | Anderson Burton",
  description: "How Anderson Burton governs, controls, and delivers each project.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
