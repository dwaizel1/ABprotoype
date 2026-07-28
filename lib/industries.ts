export type Industry = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  focuses: string[];
  workFilter: "Federal" | "Municipal" | "Energy" | "Commercial" | "Industrial";
  image: string;
};

export const industries: Industry[] = [
  {
    id: "01",
    slug: "federal",
    name: "Federal",
    shortName: "Federal",
    summary:
      "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    description:
      "We deliver federal projects where security, compliance, and schedule certainty are non-negotiable. From defense facilities to civil works and national park infrastructure, our teams are fluent in federal contracting requirements, documentation, and field execution.",
    focuses: [
      "Design-build and design-bid-build delivery",
      "Secure and occupied-site construction",
      "Federal QA/QC and closeout packages",
      "LEED and sustainability performance",
    ],
    workFilter: "Federal",
    image: "/images/home/industry.jpg",
  },
  {
    id: "02",
    slug: "energy",
    name: "Power & Energy",
    shortName: "Energy",
    summary:
      "Utilities and energy infrastructure delivered with schedule certainty and operational reliability.",
    description:
      "Energy and utility clients depend on uptime. We plan around outages, long-lead equipment, and live systems so critical infrastructure comes online safely — without compromising the grid or the people who run it.",
    focuses: [
      "EPC and complex multi-trade coordination",
      "Substation and utility infrastructure",
      "Outage-aware sequencing and commissioning",
      "Safety systems for high-consequence environments",
    ],
    workFilter: "Energy",
    image: "/images/home/service-4.jpg",
  },
  {
    id: "03",
    slug: "municipal",
    name: "Municipalities",
    shortName: "Municipal",
    summary:
      "Civic facilities and public works built for the communities that depend on them.",
    description:
      "Public buildings have to serve people every day. We build civic centers, public safety facilities, and municipal infrastructure with transparent communication, phased occupancy, and finishes that hold up under real public use.",
    focuses: [
      "Public safety and civic facilities",
      "Phased construction around active services",
      "Accessible, durable public spaces",
      "Budget stewardship for public owners",
    ],
    workFilter: "Municipal",
    image: "/images/home/service-2.jpg",
  },
  {
    id: "04",
    slug: "industrial-commercial",
    name: "Industrial & Commercial",
    shortName: "Industrial",
    summary:
      "Complex industrial and commercial builds from ground-up to renovation.",
    description:
      "From logistics warehouses to commercial campuses and specialty facilities, we bring design-build speed and field discipline to projects that need to open on time and operate hard from day one.",
    focuses: [
      "Ground-up industrial and warehouse facilities",
      "Commercial renovations and expansions",
      "Design-build schedule compression",
      "Heavy site and logistics planning",
    ],
    workFilter: "Industrial",
    image: "/images/home/service-1.jpg",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
