// Shared constants for Javi Air Conditioning

export const BUSINESS_INFO = {
  name: "Javi Air Conditioning",
  shortName: "Javi Air",
  principal: "Javier Lima",
  phone: "(844) 941-5284",
  phoneRaw: "8449415284",
  license: "FL Certified Contractor #CAC1821100",
  address: {
    city: "Miami",
    state: "FL",
    region: "Florida",
  },
  rating: {
    score: 5.0,
    reviewsCount: 142,
    source: "Google Reviews",
  },
  pillars: [
    {
      title: "5.0 Google Rated",
      description: "Unmatched reliability and craftsmanship backed by perfect customer reviews.",
      icon: "Star",
    },
    {
      title: "Honest Sales",
      description: "Direct answers. Clean diagnostic inspections. Transparent contracts without exaggerated sales pitches.",
      icon: "ShieldCheck",
    },
    {
      title: "Deep Diagnostic Approach",
      description: "We don't skip to the quick fix. We isolate variables to pinpoint efficiency problems and underlying air contaminants.",
      icon: "Activity",
    },
    {
      title: "Breathe Clean Air",
      description: "Whole-home advanced air filtration specialized for allergy support in damp climates.",
      icon: "Wind",
    }
  ]
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  iconName: "Wind" | "Wrench" | "ShieldCheck" | "Activity" | "FlameKindling" | "Sparkles";
  badge?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "installation",
    title: "Central A/C Installation",
    shortDescription: "Ultra-high efficiency modern cooling systems sized precisely for your home's thermal load.",
    longDescription: "Deploy the latest, state-of-the-art HVAC systems designed for the unique challenges of the Florida heat. Our certified experts measure room layouts and humidity dynamics to provide energy-saving cooling solutions that lower bills and keep temperatures crisp.",
    benefits: [
      "Custom load calculations to match system size",
      "Up to 10-Year parts and compressor warranties",
      "SEER2 high-efficiency setups saving up to 40% on bills",
      "Honest, flat-rate pricing with zero hidden fees"
    ],
    iconName: "Sparkles",
    badge: "Most Impactful"
  },
  {
    id: "repair",
    title: "Rapid HVAC Repair & Diagnostic",
    shortDescription: "Fast, clinical troubleshooting that stops hot air in its tracks. Available when you need us.",
    longDescription: "When your system stalls or blows warm air, Javi Air stands ready. We carry a wide array of high-quality OEM parts right in our rapid response vehicle, ensuring we resolve compressor failures, motor burns, or logic board errors during our initial diagnostic visit.",
    benefits: [
      "No-excuses diagnostics with transparent explanations",
      "Fully stocked dispatch vehicles for same-day resolution",
      "Expert calibration of thermal sensors and pressures",
      "Fully licensed, bonded, and certified FL technicians"
    ],
    iconName: "Wrench",
    badge: "Rapid Response"
  },
  {
    id: "maintenance",
    title: "Precision Maintenance Plans",
    shortDescription: "Seasonal tune-ups to eliminate coil restriction, extend lifespan, and prevent sudden breakdowns.",
    longDescription: "A healthy system needs preventative care. Our systematic tune-ups include deep coil cleanings, electrical terminal security checks, condenser fan balance, drain line clearing, and detailed pressure readings to preserve optimal coefficient of performance.",
    benefits: [
      "Deep chemical flush of condensate drain lines",
      "Full static pressure testing and blower optimization",
      "Tightening and coating of critical electrical points",
      "Ensures continuous compliance with manufacturer warranty"
    ],
    iconName: "ShieldCheck",
  },
  {
    id: "air-quality",
    title: "Whole-Home Air Filtration",
    shortDescription: "Allergy and pathogen solutions built for Florida's high humidity. Breathe clinic-level air.",
    longDescription: "Because cooling is only half the battle, Javi Air specialises in indoor air hygiene. We design multi-stage purification schemes leveraging high-efficiency particulate air (HEPA) screens, UV germicidal lamps, and integrated dehumidification to eliminate pollen, mold, dust mites, and dander.",
    benefits: [
      "Hospital-grade whole-home HEPA filtration",
      "UV-C light arrays placed inside coils to kill bio-growth",
      "Humidity balancing controllers for optimal throat relief",
      "Dramatically lowers airborne allergens and lingering odors"
    ],
    iconName: "Wind",
    badge: "Allergy Specialist"
  },
  {
    id: "heat-pump",
    title: "Energy Efficient Heat Pumps",
    shortDescription: "Versatile, dual-mode solutions designed for both extreme summer cooling and crisp winter heating.",
    longDescription: "Heat pumps offer a sophisticated single-system solution to regulate both Florida's high temperatures and chilly winter spells. They transfer heat instead of burning fuel, achieving superior heat indices with a fraction of the electricity drawn of standard heaters.",
    benefits: [
      "Reversing valve installation for heating & cooling",
      "Outstanding green footprint with low carbon profile",
      "Ideal replacement layout for standard furnace systems",
      "Silent design with heavy-duty acoustic insulation wrappers"
    ],
    iconName: "Activity",
  }
];
