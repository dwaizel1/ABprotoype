export type CatalogProject = {
  title: string;
  description: string;
  type: "Federal" | "Municipal" | "Energy" | "Commercial" | "Industrial";
};

export type CatalogGroup = {
  category: string;
  projects: CatalogProject[];
};

/** Text-only portfolio entries from the screened project register (no images). */
export const catalogGroups: CatalogGroup[] = [
  {
    "category": "National parks and historic sites",
    "projects": [
      {
        "title": "Correct Critical Hazards and Rehab The Ahwahnee Hotel",
        "description": "Yosemite NP · National Historic Landmark",
        "type": "Federal"
      },
      {
        "title": "Rehabilitate Curry Village Cabins, Phases 1 and 3",
        "description": "Yosemite NP",
        "type": "Federal"
      },
      {
        "title": "Rehab Ansel Adams Gallery, Buildings 902 & 904",
        "description": "Yosemite NP",
        "type": "Federal"
      },
      {
        "title": "Yosemite Administration Building",
        "description": "Yosemite Village",
        "type": "Federal"
      },
      {
        "title": "Repair Historic Kennecott Mine Structures and Utilities",
        "description": "Wrangell–St. Elias NP, Alaska",
        "type": "Federal"
      },
      {
        "title": "USS Maine Memorial Restoration",
        "description": "Arlington National Cemetery",
        "type": "Federal"
      },
      {
        "title": "Preservation and Repair of Bellefield Roof",
        "description": "Vanderbilt Mansion NHS, Hyde Park NY",
        "type": "Federal"
      },
      {
        "title": "Repair Failing Porch at Peter Strauss Ranch",
        "description": "Santa Monica Mountains NRA",
        "type": "Federal"
      },
      {
        "title": "Repair 2 Casemates, Fort Tompkins Gate",
        "description": "Fort Wadsworth, Staten Island",
        "type": "Federal"
      },
      {
        "title": "Building 102 Rehab, Sandy Hook · Repair Building 219, Riis Landing",
        "description": "Gateway National Recreation Area, NY/NJ",
        "type": "Federal"
      },
      {
        "title": "Haleakalā Parking Areas · Rebuild Covered Bridge Walkways",
        "description": "Haleakalā NP, Kīpahulu District, Maui",
        "type": "Federal"
      },
      {
        "title": "Improve Pinnacles Campground Water System",
        "description": "Pinnacles NP",
        "type": "Federal"
      },
      {
        "title": "Bayside Trail Repair",
        "description": "Cabrillo National Monument, San Diego",
        "type": "Federal"
      },
      {
        "title": "Fencing at Point Reyes",
        "description": "Point Reyes National Seashore",
        "type": "Federal"
      },
      {
        "title": "Walking Box Ranch",
        "description": "Southern Nevada · BLM historic ranch",
        "type": "Federal"
      },
      {
        "title": "APLIC Theater Improvements",
        "description": "Alaska Public Lands Information Center, Anchorage",
        "type": "Federal"
      },
      {
        "title": "Long Horn Ranger Station reroof · History House repairs · Reline Vaults Lassen",
        "description": "Smaller NPS jobs, same license story",
        "type": "Federal"
      }
    ]
  },
  {
    "category": "Utility and public infrastructure",
    "projects": [
      {
        "title": "SCE EV Charging Infrastructure Program",
        "description": "Southern California Edison · 20+ substations and service centers, 2021–present",
        "type": "Energy"
      },
      {
        "title": "SCE Training Academy, Phase 1",
        "description": "Corona, CA · open",
        "type": "Energy"
      },
      {
        "title": "SCE Kernville, Bishop and Blythe Service Centers",
        "description": "Lake Isabella · Bishop · Blythe, CA",
        "type": "Energy"
      },
      {
        "title": "SLO Transit EV Infrastructure",
        "description": "City of San Luis Obispo · public agency, easiest permission",
        "type": "Municipal"
      },
      {
        "title": "DWR EV Charging Station Infrastructure",
        "description": "California Dept. of Water Resources",
        "type": "Municipal"
      },
      {
        "title": "SoCalGas EV Infrastructure, SLO and Bakersfield",
        "description": "Open",
        "type": "Energy"
      },
      {
        "title": "Sumac Communications Tower Solar PV & Battery Backup",
        "description": "Rainbow Municipal Water District · Fallbrook, CA",
        "type": "Municipal"
      },
      {
        "title": "LS Power STATCON Buildings, Orchard and Fern Sites",
        "description": "Siemens Energy",
        "type": "Energy"
      }
    ]
  },
  {
    "category": "Commercial, civic and community",
    "projects": [
      {
        "title": "Shakespeare Center of Los Angeles",
        "description": "1238 W. 1st Street, LA · open · strongest name recognition in the file",
        "type": "Commercial"
      },
      {
        "title": "New Cuyama Fire Station",
        "description": "County of Santa Barbara · joint fire and sheriff station",
        "type": "Municipal"
      },
      {
        "title": "UCSB San Clemente Villages renovation · Artificial Flume Facility B.7950",
        "description": "UC Regents, Santa Barbara",
        "type": "Municipal"
      },
      {
        "title": "Goodwill Renovation, Salinas",
        "description": "Goodwill Central Coast",
        "type": "Municipal"
      },
      {
        "title": "SLO Promenade Demolition and Shell",
        "description": "Madonna Road, San Luis Obispo",
        "type": "Commercial"
      },
      {
        "title": "Harris Administration Building",
        "description": "1025 Farmhouse Lane, San Luis Obispo",
        "type": "Commercial"
      },
      {
        "title": "Grevino Winery",
        "description": "Santa Maria, CA",
        "type": "Commercial"
      },
      {
        "title": "Doc Burnstein's Ice Cream Lab, tenant improvement",
        "description": "Arroyo Grande, CA",
        "type": "Commercial"
      },
      {
        "title": "CenCal Health, Peach Street",
        "description": "San Luis Obispo, CA",
        "type": "Commercial"
      },
      {
        "title": "Farmhouse Corner Market",
        "description": "San Luis Obispo County",
        "type": "Commercial"
      },
      {
        "title": "Grace Bible Church Canopy Project",
        "description": "Arroyo Grande, CA",
        "type": "Commercial"
      },
      {
        "title": "Del Monte Foods roof repair and new peeler foundation",
        "description": "Del Monte Foods, Inc.",
        "type": "Industrial"
      },
      {
        "title": "McGrath Selma Storage Facility",
        "description": "Selma, CA · McGrath RentCorp",
        "type": "Industrial"
      }
    ]
  }
];
