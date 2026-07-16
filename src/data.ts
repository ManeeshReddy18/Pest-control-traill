import { Service, Testimonial, Industry, Feature, Step, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'termite',
    title: 'Termite Control',
    description: 'Advanced liquid barriers and baiting systems to eliminate sub-terranean colonies and prevent structural damage.',
    detailedBenefits: [
      'Thermal imaging inspection to find hidden nesting sites',
      'Environmentally friendly liquid soil barriers',
      'Continuous baiting monitoring systems',
      '5-Year transferable structure warranty'
    ],
    iconName: 'ShieldAlert',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    basePrice: 299
  },
  {
    id: 'cockroach',
    title: 'Cockroach Control',
    description: 'Complete flushing agent and growth-regulator baits to wipe out German and American cockroach infestations.',
    detailedBenefits: [
      'Targeted crack and crevice micro-gel application',
      'Insect Growth Regulators (IGR) to break breeding cycles',
      'Organic allergen flushing agents',
      'Sanitation and food-source sealing guidance'
    ],
    iconName: 'Bug',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    basePrice: 149
  },
  {
    id: 'bedbug',
    title: 'Bed Bug Treatment',
    description: 'Rapid thermal heat remediation combined with target eco-treatments for guaranteed 100% eradication in 1-day.',
    detailedBenefits: [
      'Non-toxic heat chamber technology Option',
      'Targeted mattress and box-spring encasements',
      'Safe botanical extract spray application',
      '90-Day sleep-tight performance guarantee'
    ],
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    basePrice: 349
  },
  {
    id: 'rodent',
    title: 'Rodent Control',
    description: 'Complete exclusion sealing, safe multi-catch trapping, and clean-up of mice and rat runways.',
    detailedBenefits: [
      'Comprehensive property entry-point mapping',
      'Heavy-duty copper mesh and steel-wool sealing',
      'Tamper-proof, child/pet safe baiting stations',
      'Sanitization and pheromone odor neutralizers'
    ],
    iconName: 'Activity',
    imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80',
    basePrice: 179
  },
  {
    id: 'mosquito',
    title: 'Mosquito Control',
    description: 'Barrier sprays and micro-encapsulated yard treatments targeting foliage breeding pools to reclaim your yard.',
    detailedBenefits: [
      'All-natural garlic & cedarwood oil barriers',
      'Standing water larvicide treatment disks',
      'Foliage spray targeting underside of leaves',
      'Scheduled monthly summer maintenance programs'
    ],
    iconName: 'Wind',
    imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80',
    basePrice: 129
  },
  {
    id: 'ant',
    title: 'Ant Control',
    description: 'Systemic colony-transfer baits that target Argentine, Carpenter, and Fire ant queens directly.',
    detailedBenefits: [
      'External perimeter protective band treatments',
      'Carpenter ant wood nest micro-drilling extraction',
      'Interior gel-baiting targeting major columns',
      'Underground fire ant mound deep drench'
    ],
    iconName: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=80',
    basePrice: 119
  },
  {
    id: 'spider',
    title: 'Spider Control',
    description: 'Precision de-webbing of eaves, combined with specialized perimeter micro-crystal barrier sprays.',
    detailedBenefits: [
      'High-reach telescopic brushing of web structures',
      'Specialized contact treatment for crawl spaces',
      'Elimination of secondary insect food sources',
      'Black widow and Brown Recluse targeted treatments'
    ],
    iconName: 'Fingerprint',
    imageUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=600&q=80',
    basePrice: 125
  },
  {
    id: 'commercial',
    title: 'Commercial Pest Control',
    description: 'Custom, fully documented Integrated Pest Management (IPM) aligning with strict health department audits.',
    detailedBenefits: [
      'EPA and USDA compliant digital logging portals',
      'Discreet off-hours servicing options',
      'Customized perimeter shields for high-risk spaces',
      'Free employee pest awareness training modules'
    ],
    iconName: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    basePrice: 499
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'certified',
    title: 'Certified & Experienced',
    description: 'Every technician is fully licensed, background-checked, and undergoes 100+ hours of continuous yearly training.',
    iconName: 'Award'
  },
  {
    id: 'eco',
    title: 'Eco-Friendly & Safe',
    description: 'We prioritize premium botanical, green, and EPA-certified treatments that are 100% safe for kids and pets.',
    iconName: 'Leaf'
  },
  {
    id: 'pricing',
    title: 'Transparent Pricing',
    description: 'Upfront, binding quotes with no hidden surcharges. Receive affordable payments with flexible recurring discounts.',
    iconName: 'DollarSign'
  },
  {
    id: 'emergency',
    title: 'Emergency Response',
    description: 'Encountered an urgent wasp swarm or rodent sighting? Get rapid, prioritized technician dispatching within 2 hours.',
    iconName: 'AlertTriangle'
  },
  {
    id: 'protection',
    title: 'Long-Term Prevention',
    description: 'We don’t just spray and leave. Our smart barrier methodology seals entry cracks to keep pests out for good.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'warranty',
    title: 'Guaranteed Warranty',
    description: 'If pests return between our quarterly or scheduled maintenance visits, we will return and retreat for 100% free.',
    iconName: 'CheckCircle2'
  }
];

export const STEPS: Step[] = [
  {
    id: 'step1',
    stepNumber: 1,
    title: 'Book Inspection',
    description: 'Use our instant online quote builder, or speak to our 24/7 care operators to lock in your preferred timeslot.',
    iconName: 'Calendar'
  },
  {
    id: 'step2',
    stepNumber: 2,
    title: 'Property Inspection',
    description: 'A licensed inspector scans your foundation, crawl spaces, and attic using thermal imagers and humidity meters.',
    iconName: 'Search'
  },
  {
    id: 'step3',
    stepNumber: 3,
    title: 'Professional Treatment',
    description: 'Using targeted eco-friendly baits and barriers, we systematically neutralize pest colonies at their core source.',
    iconName: 'Award'
  },
  {
    id: 'step4',
    stepNumber: 4,
    title: 'Follow-Up & Prevention',
    description: 'Our team seals entry points, establishes a continuous perimeter shield, and schedules periodic wellness audits.',
    iconName: 'ShieldCheck'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'homes',
    name: 'Residential Homes',
    description: 'Custom, seasonal pest defense plans tailored to protect your immediate family, lawn, and structure.',
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'apartments',
    name: 'Apartments',
    description: 'Coordinated multi-unit block treatments that arrest horizontal infestations before they cross walls.',
    iconName: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'offices',
    name: 'Offices',
    description: 'Low-odor, high-efficiency weekend maintenance to keep commercial environments clean and compliant.',
    iconName: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    description: 'Hyper-hygienic kitchen defenses meeting stringent health audits and maintaining food-prep integrity.',
    iconName: 'Utensils',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hotels',
    name: 'Hotels',
    description: 'Discreet, localized treatments ensuring immediate guest comfort and flawless room turnarounds.',
    iconName: 'Hotel',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'warehouses',
    name: 'Warehouses',
    description: 'Large-scale, perimeter-focused baiting programs keeping supply lines clean and inventory intact.',
    iconName: 'Warehouse',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hospitals',
    name: 'Hospitals',
    description: 'Sterile, allergen-free sanitization protocols tailored for high-sensitivity medical care areas.',
    iconName: 'Hospital',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d3b3f998de66?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'schools',
    name: 'Schools',
    description: 'Strict organic, chemical-free methods for classrooms and playgrounds to guarantee child safety.',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Are your pest control treatments safe for my children and pets?',
    answer: 'Absolutely. Our highest priority is the safety of your family. We use green, botanically-derived solutions and EPA-registered products formulated to target pest-specific biology. Once treated areas have dried (typically 30-45 minutes), they are completely safe for pets and children to roam freely.',
    category: 'safety'
  },
  {
    id: 'faq2',
    question: 'How much does a standard residential pest control inspection cost?',
    answer: 'A comprehensive, thermal-guided pest inspection starts at $79. However, if you book a treatment service with Eco Shield, the inspection fee is 100% waived! You can get an instant transparent price estimate online using our quote builder above.',
    category: 'pricing'
  },
  {
    id: 'faq3',
    question: 'What kind of warranties or service guarantees do you offer?',
    answer: 'We provide a 100% Satisfaction Guarantee. For standard treatments, we offer a 90-day warrantied coverage. For heavy-duty termite and foundation barriers, we offer up to a 5-year transferable structure warranty. If pests return during your coverage period, we retreat your property for 100% free.',
    category: 'warranties'
  },
  {
    id: 'faq4',
    question: 'How should I prepare my house before the pest technician arrives?',
    answer: 'For general treatments, please ensure floor boundaries and baseboards are clear of toys and clothing, and pets are temporarily secured in a non-treated room. For kitchen infestations, we recommend storing open food containers in the refrigerator or sealed boxes. Your booking confirmation email will contain a custom preparation checklist tailored to your selected service.',
    category: 'preparation'
  },
  {
    id: 'faq5',
    question: 'How long does a typical treatment session take, and do I need to leave?',
    answer: 'A standard residential treatment takes between 45 and 90 minutes depending on the size of your home. In 90% of cases, you do NOT need to leave your home during the treatment, as our formulas are low-odor and targeted. For specific heavy-duty bed bug heat treatments or termite soil drenches, we might advise staying clear of the active perimeter for 2-3 hours.',
    category: 'general'
  },
  {
    id: 'faq6',
    question: 'Do you offer same-day emergency services?',
    answer: 'Yes! We have standby teams specifically allocated for same-day emergency pest dispatching. If you call before 2:00 PM, we guarantee a technician will arrive at your property on the very same day. Simply check the "Emergency Servicing" checkbox in our booking form or call our emergency hotline directly.',
    category: 'general'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Homeowner, Maplewood',
    review: 'Eco Shield was a lifesaver! We had a terrible spider and ant problem in our basement. The technician was incredibly polite, explained everything, and used child-safe treatments. Haven\'t seen a single bug in 4 months. Highly recommend!',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    date: 'July 2, 2026'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Restaurant Manager, Bistro 81',
    review: 'In the food business, pest control is non-negotiable. Eco Shield created a custom IPM logbook for us, sealed our loading dock, and serviced us after-hours. Health inspections have been flawless ever since. Impeccable service.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    date: 'June 18, 2026'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Property Manager, Apex Apartments',
    review: 'Managing 120 units means constant pest reports. Since partnering with Eco Shield, tenant complaints dropped by 85%. Their multi-unit block barrier treatments actually work, and their digital dashboard makes scheduling super easy.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    date: 'May 24, 2026'
  }
];
