import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | Anderson Burton",
  description: "How Anderson Burton governs, controls, and delivers each project.",
};

export default function OurApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
