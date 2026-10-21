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
  /** CSS object-position for the hero so wide crops keep the subject in frame */
  heroPosition?: string;
  gallery: string[];
  writeup: string[];
};

export const projects: Project[] = [
  {
    slug: "new-cuyama-fire-station",
    title: "New Cuyama Fire Station",
    location: "New Cuyama, CA",
    type: "Municipal",
    squareFootage: "—",
    cost: "—",
    contractType: "—",
    tags: ["Public Safety", "New Construction"],
    heroImage: "/images/projects/new-cuyama-fire-station-dusk.jpg",
    heroPosition: "60% 75%",
    gallery: [
      "/images/projects/new-cuyama-fire-station.jpg",
      "/images/home/service-2.jpg",
    ],
    writeup: [
      "A new public safety facility for the County of Santa Barbara in New Cuyama, bringing a county fire station and a sheriff's station together on one site to serve the Cuyama Valley.",
      "The building combines fire apparatus bays with sheriff and staff spaces under a single roof, along with a rooftop solar array, site paving, accessible walkways, and drought-tolerant landscaping.",
      "New Cuyama sits in a remote corner of the county, so crews, deliveries, and inspections were planned around long travel distances to keep the work moving.",
    ],
  },
  {
    slug: "harris-building",
    title: "Harris Building",
    location: "San Luis Obispo, CA",
    type: "Commercial",
    squareFootage: "—",
    cost: "—",
    contractType: "—",
    tags: ["Commercial", "Office"],
    heroImage: "/images/projects/harris-building.jpg",
    heroPosition: "center 58%",
    gallery: ["/images/home/industry.jpg"],
    writeup: [
      "A two-story administration building at 1025 Farmhouse Lane in San Luis Obispo.",
      "The building's defining feature is a glass-walled upper floor that cantilevers out over the entry and parking below, carried on angled columns, with an exterior steel stair at one end.",
      "Smooth light-colored panels, dark metal siding, and vertical fins give the long elevations their rhythm, and the site is finished with drought-tolerant landscaping.",
    ],
  },
  {
    slug: "kennecott-mine-structures",
    title: "Kennecott Mine Structures and Utilities",
    location: "Wrangell–St. Elias National Park, AK",
    type: "Federal",
    squareFootage: "—",
    cost: "—",
    contractType: "—",
    tags: ["National Park Service", "Historic Restoration"],
    heroImage: "/images/projects/kennecott-mine-structures.jpg",
    heroPosition: "center 62%",
    gallery: [],
    writeup: [
      "Repair of historic mine structures and site utilities at Kennecott, the early-20th-century copper mining camp preserved within Wrangell–St. Elias National Park and Preserve in Alaska, for the National Park Service.",
      "The Kennecott mill town is a National Historic Landmark, so repairs were approached with the goal of preserving historic fabric and character while addressing aging structures and the utilities that serve them.",
      "The site lies deep in the park at the end of a long gravel road, which shapes how materials, equipment, and crews reach the work and how the short Alaska construction season is used.",
    ],
  },
  {
    slug: "uss-maine-memorial",
    title: "USS Maine Memorial",
    location: "Arlington National Cemetery, VA",
    type: "Federal",
    squareFootage: "—",
    cost: "—",
    contractType: "—",
    tags: ["Historic Restoration", "Memorial"],
    heroImage: "/images/projects/uss-maine-memorial.jpg",
    heroPosition: "center 45%",
    gallery: ["/images/home/service-3.jpg"],
    writeup: [
      "Restoration of the USS Maine Memorial at Arlington National Cemetery, which honors the sailors and Marines lost when the battleship Maine sank in Havana Harbor in 1898. The memorial is built around the ship's recovered mast.",
      "The work focused on repairing and preserving the memorial's historic materials so it continues to stand as a place of remembrance.",
      "Working inside an active national cemetery meant planning around services and visitors, and protecting the surrounding graves, headstones, and grounds throughout construction.",
    ],
  },
  {
    slug: "pinnacles-national-park",
    title: "Pinnacles National Park Visitor Center",
    location: "Pinnacles, CA",
    type: "Federal",
    squareFootage: "45,000",
    cost: "12.9 Million",
    contractType: "FFP",
    tags: ["Client Core", "New Construction"],
    heroImage: "/images/projects/pinnacles-national-park.jpg",
    heroPosition: "center 62%",
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
    slug: "ansel-adams-gallery",
    title: "Ansel Adams Gallery Buildings",
    location: "Yosemite National Park, CA",
    type: "Federal",
    squareFootage: "—",
    cost: "—",
    contractType: "—",
    tags: ["National Park Service", "Historic Rehabilitation"],
    heroImage: "/images/projects/ansel-adams-gallery.jpg",
    heroPosition: "center 55%",
    gallery: [],
    writeup: [
      "Rehabilitation of Buildings 902 and 904 at the Ansel Adams Gallery in Yosemite Village, Yosemite National Park, for the National Park Service.",
      "The gallery has operated in Yosemite since 1902, when it opened as Best's Studio, and remains one of the park's best-known visitor destinations. The rehabilitation work was planned to respect the character of the historic buildings.",
      "Yosemite Village is one of the busiest areas of the park, so staging, access, and safety were coordinated to keep visitors and park operations moving around the work.",
    ],
  },
  {
    slug: "ahwahnee-hotel",
    title: "Ahwahnee Hotel",
    location: "Yosemite National Park, CA",
    type: "Federal",
    squareFootage: "—",
    cost: "—",
    contractType: "—",
    tags: ["National Park Service", "National Historic Landmark"],
    heroImage: "/images/projects/ahwahnee-hotel.jpg",
    heroPosition: "center 55%",
    gallery: [],
    writeup: [
      "Correction of critical hazards and rehabilitation work at the Ahwahnee Hotel in Yosemite Valley for the National Park Service. Opened in 1927, the hotel is a National Historic Landmark.",
      "The work addressed life-safety and building-condition issues while protecting the hotel's historic architecture and interiors.",
      "Working in an iconic building in one of the country's most visited national parks called for careful coordination of access, staging, and protection of historic finishes.",
    ],
  },
  {
    slug: "los-banos-parking-lot",
    title: "Los Banos Parking Lot",
    location: "Los Banos, CA",
    type: "Energy",
    squareFootage: "—",
    cost: "—",
    contractType: "—",
    tags: ["Solar Carport", "Power & Energy"],
    heroImage: "/images/projects/los-banos-parking-lot.jpg",
    heroPosition: "center",
    gallery: ["/images/home/hero-solar.jpg"],
    writeup: [
      "A solar carport built over a parking lot in Los Banos, in Merced County in California's Central Valley.",
      "Steel canopies carry rows of photovoltaic panels above the parking stalls, generating power on site while shading parked cars.",
      "Steel erection and panel installation were staged from within the lot using aerial lifts, with materials laid down on site to keep the work contained.",
    ],
  },
  {
    slug: "comanche-peak-nuclear-power-plant",
    title: "Comanche Peak Nuclear Power Plant",
    location: "Glen Rose, TX",
    type: "Energy",
    squareFootage: "—",
    cost: "—",
    contractType: "—",
    tags: ["Power & Energy", "Nuclear"],
    heroImage: "/images/projects/comanche-peak-nuclear-power-plant.jpg",
    heroPosition: "center 40%",
    gallery: ["/images/projects/comanche-peak-aerial.jpg"],
    writeup: [
      "Work at the Comanche Peak Nuclear Power Plant near Glen Rose, Texas, a two-unit nuclear generating station southwest of Fort Worth.",
      "Construction on an operating nuclear site follows strict security, access, and safety protocols, with work planned around plant operations so generation is not disrupted.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
