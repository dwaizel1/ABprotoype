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
    id: "new-cuyama",
    name: "New Cuyama Fire Station",
    location: "New Cuyama, CA",
    type: "Municipal",
    region: "West Coast",
    lat: 34.9353,
    lng: -119.689,
    slug: "new-cuyama-fire-station",
    summary: "Joint fire and sheriff station for the County of Santa Barbara.",
  },
  {
    id: "harris-slo",
    name: "Harris Building",
    location: "San Luis Obispo, CA",
    type: "Commercial",
    region: "West Coast",
    lat: 35.2365,
    lng: -120.6385,
    slug: "harris-building",
    summary: "Two-story administration building with a cantilevered glass upper floor.",
  },
  {
    id: "kennecott",
    name: "Kennecott Mine Structures and Utilities",
    location: "Wrangell–St. Elias National Park, AK",
    type: "Federal",
    region: "Alaska",
    lat: 61.4862,
    lng: -142.8867,
    slug: "kennecott-mine-structures",
    summary: "Repairs to historic mine structures and utilities for the National Park Service.",
  },
  {
    id: "yosemite",
    name: "Ahwahnee Hotel",
    location: "Yosemite National Park, CA",
    type: "Federal",
    region: "West Coast",
    lat: 37.746,
    lng: -119.5751,
    slug: "ahwahnee-hotel",
    summary: "Critical hazard corrections and rehab at a National Historic Landmark hotel.",
  },
  {
    id: "los-banos",
    name: "Los Banos Parking Lot",
    location: "Los Banos, CA",
    type: "Energy",
    region: "West Coast",
    lat: 37.0583,
    lng: -120.8499,
    slug: "los-banos-parking-lot",
    summary: "Solar carport over a parking lot in California's Central Valley.",
  },
  {
    id: "comanche-peak",
    name: "Comanche Peak Nuclear Power Plant",
    location: "Glen Rose, TX",
    type: "Energy",
    region: "Elsewhere",
    lat: 32.2985,
    lng: -97.7853,
    slug: "comanche-peak-nuclear-power-plant",
    summary: "Work at an operating two-unit nuclear generating station.",
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
    id: "uss-maine",
    name: "USS Maine Memorial",
    location: "Arlington National Cemetery, VA",
    type: "Federal",
    region: "East Coast",
    lat: 38.8783,
    lng: -77.0687,
    slug: "uss-maine-memorial",
    summary: "Restoration of the USS Maine mast memorial.",
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
