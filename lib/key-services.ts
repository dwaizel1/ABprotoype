export type KeyServiceAccordionItem = {
  title: string;
  body: string;
};

export type KeyService = {
  slug: string;
  title: string;
  paragraphs: string[];
  items: KeyServiceAccordionItem[];
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function withLorem(titles: string[]): KeyServiceAccordionItem[] {
  return titles.map((title) => ({ title, body: lorem }));
}

export const keyServices: KeyService[] = [
  {
    slug: "design-build",
    title: "Design Build",
    paragraphs: [
      "Design Build puts one accountable team in charge from first concept through completion. Planning, design, and construction move together under a single point of contact—so scope, budget, and schedule stay aligned, decisions happen faster, and you always know who owns the outcome.",
    ],
    items: withLorem([
      "EPC: 360 Full Response (Planning, Engineering, Materials, Construction, Operations)",
      "Design Build: Single point of contact from initial concept to completion.",
      "Contract Options: GMP, NTE or Open Book",
      "Expand & Upgrade Existing Facilities",
      "Construct New Assets",
      "Capital Improvements",
      "Design Engineering",
      "Planning & Coordination",
      "Cost Control",
      "Procurement & Expediting",
      "Construction & Construction Management",
      "Quality Control & Quality Assurance",
      "Commissioning",
      "Startup & Training",
    ]),
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    paragraphs: [
      "We use our total project lifecycle approach with industrial, commercial and private clients to take their projects from the early stages of preplanning and infrastructure development through construction and site turnover. We serve as the single point of contact for the owner(s), managing every aspect of the project from start to finish.",
      "In addition to construction management services, we offer a full range of general contracting services. We specialize in piping and plant shutdowns/turnarounds, as well as mechanical, civil and electrical construction.",
    ],
    items: withLorem([
      "Mixed-use Developments",
      "Franchise Expansion",
      "Municipalities",
      "Campuses",
      "Science & Technology Buildings",
      "Laboratories",
      "Healthcare Facilities",
      "Retail",
      "Tenant Improvements",
      "Restaurants",
      "Essential Facilities",
      "Police/Sheriff's Stations",
      "Fire Stations",
    ]),
  },
  {
    slug: "historical-restoration",
    title: "Historical Restoration",
    paragraphs: [
      "We're proud to have partnered with many communities to bring sites of historic or national significance back to their original (or improved) glory. The decision to repair, restore or reconstruct an historic building is driven by different factors, including the condition of the property, its proposed use, and local code and zoning requirements.",
      "We work closely with clients to understand their interests, source authentic, period-specific fixtures or replicas, remove hazardous or outdated materials, and carefully reconstruct the facility, all while preserving its historic integrity.",
    ],
    items: withLorem([
      "Site Assessments",
      "Seismic Retrofitting",
      "Environmental Remediation",
      "Pipeline Removal",
      "Reclamation",
      "Structure and Facility Demolition",
      "Expanding Square Footage",
      "Raising Ceilings",
      "Upgrading Plumbing",
      "Adding HVAC or New Electrical",
    ]),
  },
  {
    slug: "operations-maintenance",
    title: "Operations & Maintenance",
    paragraphs: [
      "Anderson Burton helps our clients protect their capital investments and achieve peak efficiency by managing the operations and maintenance responsibilities of their properties. Our experience designing and building complex facilities across a swath of industries gives us a deep understanding of the infrastructure (water supply, roads), the systems (HVAC, electrical, data) and the structural components (windows, materials management, landscaping) and how to keep them operating smoothly for decades to come.",
      "We work for clients in the energy sector, federal agencies, industrial manufacturers and more, regardless of location. Our expertise includes facilities management, engineering, maintenance programming and implementation, space planning, design and construction, and a full range of materials management services.",
    ],
    items: withLorem([
      "Facilities Management & Operations",
      "Development & Maintenance of Systems",
      "Transportation Operations (e.g., parking)",
      "Processing Facilities",
      "Staffing Services (e.g., security)",
      "Repairs & Renovation (e.g., seismic retrofits)",
      "Predictive and Preventive Maintenance",
      "Health & Safety Services",
      "Building & Equipment Maintenance (e.g., solar panels)",
      "Energy Management",
      "Risk Management",
      "Quality Assurance",
      "Materials Management",
      "Field Support Services",
      "Logistics",
    ]),
  },
];

export function getKeyServiceSlugs(): string[] {
  return keyServices.map((s) => s.slug);
}
