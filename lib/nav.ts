export type NavItem = {
  label: string;
  href: string;
};

/** Primary nav from sitemap (pages we are building) */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
];

export const footerNav: NavItem[] = [
  { label: "How We Work", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Federal", href: "/industries#federal" },
  { label: "Energy", href: "/industries#energy" },
  { label: "Municipal", href: "/industries#municipal" },
  { label: "Industrial", href: "/industries#industrial-commercial" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about" },
  { label: "Contact", href: "/#contact" },
];
