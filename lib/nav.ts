export type NavItem = {
  label: string;
  href: string;
};

/** Primary nav from sitemap (pages we are building) */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Key Services", href: "/key-services" },
  { label: "About Us", href: "/about" },
  { label: "Client Core", href: "/services" },
];
