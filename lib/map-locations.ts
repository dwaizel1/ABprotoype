export type MapRegion = "West Coast" | "East Coast" | "Elsewhere" | "Alaska";

export type MapLocation = {
  id: string;
  name: string;
  location: string;
  type: string;
  region: MapRegion;
  lat: number;
  lng: number;
  cost?: string;
  slug?: string;
  summary: string;
};

/** Portfolio pins for the impact map — includes featured projects + nationwide presence. */
export const mapLocations: MapLocation[] = [
  {
    id: "pinnacles",
    name: "Pinnacles National Park",
    location: "Pinnacles, CA",
    type: "Federal",
    region: "West Coast",
    lat: 36.4906,
    lng: -121.1825,
    cost: "12.9 Million",
    slug: "pinnacles-national-park",
    summary: "LEED Platinum design-build campus for the National Park Service.",
  },
  {
    id: "slo-federal",
    name: "Federal Infrastructure Campus",
    location: "San Luis Obispo, CA",
    type: "Federal",
    region: "West Coast",
    lat: 35.2828,
    lng: -120.6596,
    cost: "18.4 Million",
    slug: "federal-infrastructure-west",
    summary: "Multi-building federal campus delivered with occupied-site sequencing.",
  },
  {
    id: "arroyo-grande",
    name: "Municipal Civic Center",
    location: "Arroyo Grande, CA",
    type: "Municipal",
    region: "West Coast",
    lat: 35.1186,
    lng: -120.5907,
    cost: "9.2 Million",
    slug: "municipal-civic-center",
    summary: "Civic expansion built in phases so public services stayed online.",
  },
  {
    id: "central-coast-energy",
    name: "Power & Energy Substation",
    location: "Central Coast, CA",
    type: "Energy",
    region: "West Coast",
    lat: 35.365,
    lng: -120.84,
    cost: "14.1 Million",
    slug: "energy-substation-upgrade",
    summary: "EPC delivery for critical utility infrastructure and grid reliability.",
  },
  {
    id: "santa-barbara",
    name: "Historic Courthouse Restoration",
    location: "Santa Barbara, CA",
    type: "Commercial",
    region: "West Coast",
    lat: 34.4208,
    lng: -119.6982,
    cost: "21.6 Million",
    slug: "historic-courthouse-restoration",
    summary: "Landmark restoration with modern life-safety systems concealed in place.",
  },
  {
    id: "oxnard",
    name: "Industrial Warehouse Complex",
    location: "Oxnard, CA",
    type: "Industrial",
    region: "West Coast",
    lat: 34.1975,
    lng: -119.1771,
    cost: "27.3 Million",
    slug: "industrial-warehouse-complex",
    summary: "Ground-up logistics facility delivered through design-build.",
  },
  {
    id: "yosemite",
    name: "Yosemite Facilities Upgrade",
    location: "Yosemite, CA",
    type: "Federal",
    region: "West Coast",
    lat: 37.8651,
    lng: -119.5383,
    summary: "National Parks follow-on work supporting visitor and operations facilities.",
  },
  {
    id: "sf-federal",
    name: "Bay Area Federal Support",
    location: "San Francisco, CA",
    type: "Federal",
    region: "West Coast",
    lat: 37.7749,
    lng: -122.4194,
    summary: "Federal facilities work across the Bay Area campus network.",
  },
  {
    id: "las-vegas",
    name: "Southwest Utility Build",
    location: "Las Vegas, NV",
    type: "Energy",
    region: "West Coast",
    lat: 36.1699,
    lng: -115.1398,
    summary: "Energy infrastructure supporting regional utility capacity.",
  },
  {
    id: "phoenix",
    name: "Desert Industrial Campus",
    location: "Phoenix, AZ",
    type: "Industrial",
    region: "Elsewhere",
    lat: 33.4484,
    lng: -112.074,
    summary: "Industrial shell and site work for a commercial logistics client.",
  },
  {
    id: "denver",
    name: "Mountain Region Civic Works",
    location: "Denver, CO",
    type: "Municipal",
    region: "Elsewhere",
    lat: 39.7392,
    lng: -104.9903,
    summary: "Municipal public works delivered for growing Front Range communities.",
  },
  {
    id: "dallas",
    name: "Texas Commercial Fit-Out",
    location: "Dallas, TX",
    type: "Commercial",
    region: "Elsewhere",
    lat: 32.7767,
    lng: -96.797,
    summary: "Commercial renovation supporting multi-tenant occupancy.",
  },
  {
    id: "chicago",
    name: "Midwest Federal Renovation",
    location: "Chicago, IL",
    type: "Federal",
    region: "Elsewhere",
    lat: 41.8781,
    lng: -87.6298,
    summary: "Federal renovation with elevated security and compliance requirements.",
  },
  {
    id: "atlanta",
    name: "Southeast Municipal Center",
    location: "Atlanta, GA",
    type: "Municipal",
    region: "East Coast",
    lat: 33.749,
    lng: -84.388,
    summary: "Civic facility modernization for municipal operations.",
  },
  {
    id: "dc",
    name: "Capital Region Federal Work",
    location: "Washington, DC",
    type: "Federal",
    region: "East Coast",
    lat: 38.9072,
    lng: -77.0369,
    summary: "Federal project support across the capital region.",
  },
  {
    id: "nyc",
    name: "Northeast Federal Cluster",
    location: "New York, NY",
    type: "Federal",
    region: "East Coast",
    lat: 40.7128,
    lng: -74.006,
    summary: "Federal facility upgrades across the New York metro area.",
  },
  {
    id: "boston",
    name: "New England Energy Support",
    location: "Boston, MA",
    type: "Energy",
    region: "East Coast",
    lat: 42.3601,
    lng: -71.0589,
    summary: "Utility and energy infrastructure coordination in New England.",
  },
  {
    id: "hawaii",
    name: "Pacific Federal Facilities",
    location: "Honolulu, HI",
    type: "Federal",
    region: "Elsewhere",
    lat: 21.3069,
    lng: -157.8583,
    summary: "Federal facilities work supporting Pacific operations.",
  },
  {
    id: "anchorage",
    name: "Alaska Federal Operations Hub",
    location: "Anchorage, AK",
    type: "Federal",
    region: "Alaska",
    lat: 61.2181,
    lng: -149.9003,
    summary: "Remote federal facilities support and infrastructure upgrades.",
  },
];

export const mapFilterOptions = [
  "Nationwide",
  "West Coast",
  "East Coast",
  "Elsewhere",
  "Alaska",
] as const;

export type MapFilter = (typeof mapFilterOptions)[number];

export function filterMapLocations(
  filter: MapFilter,
): MapLocation[] {
  if (filter === "Nationwide") return mapLocations;
  return mapLocations.filter((loc) => loc.region === filter);
}
