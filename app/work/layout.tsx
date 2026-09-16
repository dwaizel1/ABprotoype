import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Anderson Burton",
  description:
    "Projects that prove what ownership looks like on the ground — federal, energy, municipal, and industrial construction.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
