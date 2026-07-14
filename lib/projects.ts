export type Project = {
  slug: string;
  title: string;
  location: string;
  type: string;
  squareFootage: string;
  cost: string;
  contractType: string;
  tags: string[];
  heroImage: string;
  gallery: string[];
  writeup: string[];
};

export const projects: Project[] = [
  {
    slug: "pinnacles-national-park",
    title: "National Park Services, Pinnacles National Park",
    location: "Pinnacles, CA",
    type: "Federal",
    squareFootage: "45,000",
    cost: "12.9 Million",
    contractType: "FFP",
    tags: ["Client Core", "New Construction"],
    heroImage: "/images/project/hero.jpg",
    gallery: [
      "/images/project/gallery-1.jpg",
      "/images/project/gallery-2.jpg",
      "/images/project/gallery-3.jpg",
    ],
    writeup: [
      "Using a Design Build process, the teams at Anderson Burton and RRM Design Group worked in tandem to bring efficiencies and add value to this project. The RFP originally called for the project to achieve LEED Silver, but our team identified, developed and delivered several solutions which collectively achieved LEED Platinum, at no added cost to the client. The project initially included evaporative cooling in all buildings, but Anderson Burton together with RRM Design Group, proposed and delivered a significantly more efficient geo-thermal cooling system at no additional cost. This was achieved using the site drilled deep well pits already in the scope for domestic water supply. The project scope also included a Micro-Grid solar electric system which powered 100% of the facility off-grid.",
      "The remote location of this site proved challenging, requiring significant planning and proactive safety measures, as it was in a high-fire severity zone and a high-seismic activity zone, with no means of communications. Another unique challenge was that the park is a condor release facility, and the project fell within their protected range. Great care and planning went into minimizing construction noise and exhaust to avoid negatively impacting their chances of surviving reintroduction.",
      "This facility was built with American Recovery and Reinvestment Act (ARRA) funding which required specialized tracking and fast-tracked design and construction throughout the project schedule. It was also a flagship location for the National Parks, so that when we proved a successful team, we were awarded several additional projects for the National Parks Department, including in Yosemite National Park and in San Francisco.",
    ],
  },
  {
    slug: "federal-infrastructure-west",
    title: "Federal Infrastructure Campus",
    location: "San Luis Obispo, CA",
    type: "Federal",
    squareFootage: "62,000",
    cost: "18.4 Million",
    contractType: "DBB",
    tags: ["Client Core", "Federal"],
    heroImage: "/images/home/service-1.jpg",
    gallery: [
      "/images/home/service-1.jpg",
      "/images/home/industry.jpg",
      "/images/home/values.jpg",
    ],
    writeup: [
      "A multi-building federal campus delivered through coordinated design-build execution, balancing security requirements with long-term operational efficiency.",
      "The team sequenced critical path work around occupied adjacent facilities, maintaining continuity of operations for the client throughout construction.",
      "Safety systems, commissioning, and closeout documentation were aligned to federal standards from day one, reducing rework and accelerating turnover.",
    ],
  },
  {
    slug: "municipal-civic-center",
    title: "Municipal Civic Center Expansion",
    location: "Arroyo Grande, CA",
    type: "Municipal",
    squareFootage: "38,500",
    cost: "9.2 Million",
    contractType: "CMAR",
    tags: ["Municipal", "Renovation"],
    heroImage: "/images/home/service-2.jpg",
    gallery: [
      "/images/home/service-2.jpg",
      "/images/home/service-3.jpg",
      "/images/home/map.png",
    ],
    writeup: [
      "Expansion of a civic facility serving multiple municipal departments, designed for public access and long-term durability.",
      "Phased construction kept public-facing services online while new wings and systems were brought online.",
      "Sustainable materials and efficient mechanical systems were prioritized to lower lifetime operating costs for the city.",
    ],
  },
  {
    slug: "energy-substation-upgrade",
    title: "Power & Energy Substation Upgrade",
    location: "Central Coast, CA",
    type: "Energy",
    squareFootage: "22,000",
    cost: "14.1 Million",
    contractType: "EPC",
    tags: ["Power & Energy", "EPC"],
    heroImage: "/images/home/service-4.jpg",
    gallery: [
      "/images/home/service-4.jpg",
      "/images/home/hero.jpg",
      "/images/home/industry.jpg",
    ],
    writeup: [
      "An EPC delivery for critical energy infrastructure, integrating civil, structural, and electrical scopes under a single accountable team.",
      "Schedule certainty was maintained through early procurement of long-lead equipment and disciplined interface management.",
      "The finished facility supports regional grid reliability with improved safety clearances and modern monitoring systems.",
    ],
  },
  {
    slug: "historic-courthouse-restoration",
    title: "Historic Courthouse Restoration",
    location: "Santa Barbara, CA",
    type: "Commercial",
    squareFootage: "51,000",
    cost: "21.6 Million",
    contractType: "FFP",
    tags: ["Historical Restoration", "Commercial"],
    heroImage: "/images/home/service-3.jpg",
    gallery: [
      "/images/home/service-3.jpg",
      "/images/project/gallery-1.jpg",
      "/images/project/gallery-3.jpg",
    ],
    writeup: [
      "Sensitive restoration of a landmark civic building, preserving historic character while upgrading life safety and accessibility systems.",
      "Craftspeople and specialty consultants collaborated closely to match original materials and detailing.",
      "Modern building systems were concealed within the historic envelope to meet current codes without compromising the exterior presence.",
    ],
  },
  {
    slug: "industrial-warehouse-complex",
    title: "Industrial Warehouse Complex",
    location: "Oxnard, CA",
    type: "Industrial",
    squareFootage: "120,000",
    cost: "27.3 Million",
    contractType: "Design Build",
    tags: ["Industrial", "New Construction"],
    heroImage: "/images/home/service-2.jpg",
    gallery: [
      "/images/home/service-2.jpg",
      "/images/home/service-1.jpg",
      "/images/home/values.jpg",
    ],
    writeup: [
      "Ground-up industrial complex delivered for a commercial logistics client needing speed to occupancy.",
      "Design-build coordination compressed the schedule while protecting budget through early trade partner involvement.",
      "The facility includes high-bay storage, office mezzanines, and site improvements designed for heavy truck circulation.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
