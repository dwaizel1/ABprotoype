import { industries } from "@/lib/industries";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  image?: string;
  imagePosition?: string;
  children?: NavItem[];
};

/** Primary nav from sitemap (pages we are building) */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  {
    label: "Industries",
    href: "/industries",
    children: industries.map((industry) => ({
      label: industry.name,
      href: `/industries/${industry.slug}`,
      description: industry.summary,
      image: industry.image,
      imagePosition: industry.imagePosition,
    })),
  },
  { label: "Key Services", href: "/key-services" },
  { label: "About Us", href: "/about" },
  { label: "Client Core", href: "/services" },
];
