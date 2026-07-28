import type { Metadata } from "next";
import localFont from "next/font/local";
import { Golos_Text } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const alfabet = localFont({
  src: [
    {
      path: "../fonts/alfabet/Alfabet-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/alfabet/Alfabet-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/alfabet/Alfabet-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/alfabet/Alfabet-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-alfabet",
  display: "swap",
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Anderson Burton Construction",
    template: "%s | Anderson Burton",
  },
  description:
    "Employee-owned Design Build and EPC firm tackling complex construction since 1999.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alfabet.variable} ${golos.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-golos)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
