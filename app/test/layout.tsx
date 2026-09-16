import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test | Anderson Burton",
  description: "Split layout with service copy on the left and project imagery on the right.",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
