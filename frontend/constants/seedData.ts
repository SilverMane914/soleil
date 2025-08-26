// Seed data for Wyndham Soleil Hotel application

export interface RoomType {
  id: number;
  name: string;
  image: string;
  overview: string;
  keyFeatures: string[];
}

export interface RoomDetail {
  id: string;
  name: string;
  overview: {
    cityView: string;
    oceanView: string;
  };
  keyFeatures: {
    bedType: string;
    view: string;
    occupancy: string;
    roomSize: string;
    checkInOut: string;
  };
  amenities: string[];
  images: string[];
  recommendations: RoomType[];
}

export interface HotelInfo {
  totalRooms: number;
  roomBreakdown: {
    deluxe: number;
    premier: number;
    juniorSuites: number;
    deluxeSuites: number;
    presidentialSuite: number;
  };
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

// Room Types Data
export const ROOM_TYPES: RoomType[] = [
  {
    id: 1,
    name: "Deluxe Studio",
    image: "/accom-room-1.png",
    overview: "35 City View | 55 - 60 sqm\n23 Partial Ocean View | 55 - 60 sqm",
    keyFeatures: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
  },
  {
    id: 2,
    name: "One Bedroom Family Suite",
    image: "/accom-room-1.png",
    overview: "11 City View | 86 - 90 sqm\n10 Partial Ocean View | 86 - 90 sqm",
    keyFeatures: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
  },
  {
    id: 3,
    name: "One Bedroom Deluxe Family Suite",
    image: "/accom-room-1.png",
    overview: "11 City View | 86 - 90 sqm\n10 Partial Ocean View | 86 - 90 sqm",
    keyFeatures: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
  },
  {
    id: 4,
    name: "Two Bedrooms Family Suite",
    image: "/accom-room-1.png",
    overview:
      "City View | 20 King Bed | 27 Twin Bed | 39 - 43 sqm\nPartial Ocean View | 15 King Bed | 36 - 38 sqm\nOcean View | 43 King Bed | 38 Twin Bed | 39 - 45 sqm",
    keyFeatures: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
  },
  {
    id: 5,
    name: "Two Bedrooms Deluxe Family Suite",
    image: "/accom-room-1.png",
    overview:
      "20 Partial Ocean View | 91 - 118 sqm\n8 Ocean View | 91 - 118 sqm",
    keyFeatures: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
  },
  {
    id: 6,
    name: "Two Bedrooms Deluxe Family Suite",
    image: "/accom-room-1.png",
    overview: "11 Ocean View | 91 sqm",
    keyFeatures: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
  },
];

// Room Detail Data
export const ROOM_DETAILS: Record<string, RoomDetail> = {
  "1": {
    id: "1",
    name: "2 Bedroom Deluxe Family Suite",
    overview: {
      cityView: "20 Partial Ocean View | 91 - 118 sqm",
      oceanView: "8 Ocean View | 91 - 118 sqm",
    },
    keyFeatures: {
      bedType: "King",
      view: "River",
      occupancy: "3 People",
      roomSize: "148 ㎡",
      checkInOut: "14:00 / 12:00",
    },
    amenities: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
    images: [
      "/accom-room-1.png",
      "/about-1.jpg",
      "/about-2.jpg",
      "/about-3.jpg",
      "/img-srv-1.jpg",
      "/img-srv-2.jpg",
    ],
    recommendations: [
      {
        id: 2,
        name: "One Bedroom Family Suite",
        image: "/accom-room-1.png",
        overview:
          "11 City View | 86 - 90 sqm\n10 Partial Ocean View | 86 - 90 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
      {
        id: 4,
        name: "Two Bedrooms Family Suite",
        image: "/accom-room-1.png",
        overview:
          "City View | 20 King Bed | 27 Twin Bed | 39 - 43 sqm\nPartial Ocean View | 15 King Bed | 36 - 38 sqm\nOcean View | 43 King Bed | 38 Twin Bed | 39 - 45 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
    ],
  },
  "2": {
    id: "2",
    name: "One Bedroom Family Suite",
    overview: {
      cityView: "11 City View | 86 - 90 sqm",
      oceanView: "10 Partial Ocean View | 86 - 90 sqm",
    },
    keyFeatures: {
      bedType: "King",
      view: "City/Partial Ocean",
      occupancy: "3 People",
      roomSize: "86-90 ㎡",
      checkInOut: "14:00 / 12:00",
    },
    amenities: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
    images: [
      "/accom-room-1.png",
      "/about-1.jpg",
      "/about-2.jpg",
      "/about-3.jpg",
      "/bg-srv.jpg",
      "/img-srv-1.jpg",
    ],
    recommendations: [
      {
        id: 1,
        name: "Deluxe Studio",
        image: "/accom-room-1.png",
        overview:
          "35 City View | 55 - 60 sqm\n23 Partial Ocean View | 55 - 60 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
      {
        id: 3,
        name: "One Bedroom Deluxe Family Suite",
        image: "/accom-room-1.png",
        overview:
          "11 City View | 86 - 90 sqm\n10 Partial Ocean View | 86 - 90 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
    ],
  },
  "3": {
    id: "3",
    name: "One Bedroom Deluxe Family Suite",
    overview: {
      cityView: "11 City View | 86 - 90 sqm",
      oceanView: "10 Partial Ocean View | 86 - 90 sqm",
    },
    keyFeatures: {
      bedType: "King",
      view: "City/Partial Ocean",
      occupancy: "3 People",
      roomSize: "86-90 ㎡",
      checkInOut: "14:00 / 12:00",
    },
    amenities: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
    images: [
      "/accom-room-1.png",
      "/about-1.jpg",
      "/about-2.jpg",
      "/about-3.jpg",
      "/img-srv-2.jpg",
      "/bg-srv.jpg",
    ],
    recommendations: [
      {
        id: 2,
        name: "One Bedroom Family Suite",
        image: "/accom-room-1.png",
        overview:
          "11 City View | 86 - 90 sqm\n10 Partial Ocean View | 86 - 90 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
      {
        id: 5,
        name: "Two Bedrooms Deluxe Family Suite",
        image: "/accom-room-1.png",
        overview:
          "20 Partial Ocean View | 91 - 118 sqm\n8 Ocean View | 91 - 118 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
    ],
  },
  "4": {
    id: "4",
    name: "Two Bedrooms Family Suite",
    overview: {
      cityView: "City View | 20 King Bed | 27 Twin Bed | 39 - 43 sqm",
      oceanView:
        "Partial Ocean View | 15 King Bed | 36 - 38 sqm\nOcean View | 43 King Bed | 38 Twin Bed | 39 - 45 sqm",
    },
    keyFeatures: {
      bedType: "King/Twin",
      view: "City/Partial Ocean/Ocean",
      occupancy: "4 People",
      roomSize: "39-45 ㎡",
      checkInOut: "14:00 / 12:00",
    },
    amenities: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
    images: [
      "/accom-room-1.png",
      "/about-1.jpg",
      "/about-2.jpg",
      "/about-3.jpg",
      "/img-srv-1.jpg",
      "/img-srv-2.jpg",
    ],
    recommendations: [
      {
        id: 1,
        name: "Deluxe Studio",
        image: "/accom-room-1.png",
        overview:
          "35 City View | 55 - 60 sqm\n23 Partial Ocean View | 55 - 60 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
      {
        id: 6,
        name: "Two Bedrooms Deluxe Family Suite",
        image: "/accom-room-1.png",
        overview: "11 Ocean View | 91 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
    ],
  },
  "5": {
    id: "5",
    name: "Two Bedrooms Deluxe Family Suite",
    overview: {
      cityView: "20 Partial Ocean View | 91 - 118 sqm",
      oceanView: "8 Ocean View | 91 - 118 sqm",
    },
    keyFeatures: {
      bedType: "King",
      view: "Partial Ocean/Ocean",
      occupancy: "4 People",
      roomSize: "91-118 ㎡",
      checkInOut: "14:00 / 12:00",
    },
    amenities: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
    images: [
      "/accom-room-1.png",
      "/about-1.jpg",
      "/about-2.jpg",
      "/about-3.jpg",
      "/bg-srv.jpg",
      "/img-srv-1.jpg",
    ],
    recommendations: [
      {
        id: 3,
        name: "One Bedroom Deluxe Family Suite",
        image: "/accom-room-1.png",
        overview:
          "11 City View | 86 - 90 sqm\n10 Partial Ocean View | 86 - 90 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
      {
        id: 6,
        name: "Two Bedrooms Deluxe Family Suite",
        image: "/accom-room-1.png",
        overview: "11 Ocean View | 91 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
    ],
  },
  "6": {
    id: "6",
    name: "Two Bedrooms Deluxe Family Suite",
    overview: {
      cityView: "",
      oceanView: "11 Ocean View | 91 sqm",
    },
    keyFeatures: {
      bedType: "King",
      view: "Ocean",
      occupancy: "4 People",
      roomSize: "91 ㎡",
      checkInOut: "14:00 / 12:00",
    },
    amenities: [
      "Large balcony",
      "Flat screen HDTV",
      "Well-equipped kitchenette",
      "Private bathroom with rain shower",
      "Free Wi-Fi",
      "In-room safe",
      "Refrigerator",
      "Coffee/Tea maker",
    ],
    images: [
      "/accom-room-1.png",
      "/about-1.jpg",
      "/about-2.jpg",
      "/about-3.jpg",
      "/img-srv-2.jpg",
      "/bg-srv.jpg",
    ],
    recommendations: [
      {
        id: 4,
        name: "Two Bedrooms Family Suite",
        image: "/accom-room-1.png",
        overview:
          "City View | 20 King Bed | 27 Twin Bed | 39 - 43 sqm\nPartial Ocean View | 15 King Bed | 36 - 38 sqm\nOcean View | 43 King Bed | 38 Twin Bed | 39 - 45 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
      {
        id: 5,
        name: "Two Bedrooms Deluxe Family Suite",
        image: "/accom-room-1.png",
        overview:
          "20 Partial Ocean View | 91 - 118 sqm\n8 Ocean View | 91 - 118 sqm",
        keyFeatures: [
          "Large balcony",
          "Flat screen HDTV",
          "Well-equipped kitchenette",
          "Private bathroom with rain shower",
          "Free Wi-Fi",
          "In-room safe",
          "Refrigerator",
          "Coffee/Tea maker",
        ],
      },
    ],
  },
};

// Hotel Information
export const HOTEL_INFO: HotelInfo = {
  totalRooms: 112,
  roomBreakdown: {
    deluxe: 45,
    premier: 56,
    juniorSuites: 5,
    deluxeSuites: 5,
    presidentialSuite: 1,
  },
  description:
    "Soliel Hotel has 112 rooms, including 45 Deluxe rooms at 28sq m2, 56 Premier at 28sq m2 with balcony, 5 Junior suites at 60sq m2 and 5 Deluxe suites at 72sq m2, 01 Presidential suite at 450sq m2",
};

// Navigation Data
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "ACCOMMODATION", href: "/accommodation" },
  { label: "SERVICE & AMENITIES", href: "/services" },
];

// Footer Data
export const FOOTER_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Service & Amenities", href: "/services" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", href: "#" },
  { platform: "Facebook", href: "#" },
];

export const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
];

export const CONTACT_INFO: ContactInfo = {
  address: "194 Vo Nguyen Giap, Phuoc My, Son Tra, Da Nang, Vietnam",
  phone: "+84236 365 8386",
  email: "soleil.hotel@gmail.com",
};

// About Page Data
export const ABOUT_CONTENT = {
  welcomeTitle: "Welcome to\nSoliel",
  description:
    "Soliel is Hanoi's new stylish Upper Mid-Scale International hotel. A contemporary urban hotel for the discerning business or leisure traveler, located in one of Hanoi's fastest developing districts. Only a few minutes from the National Convention Center, the National Museum, My Dinh sport complex. Approximately 40 minutes from Noi Bai International Airport, 20 minutes to down town and a short walk to the Van Phuc Silk Village. The hotel also offers guests a well-equipped fitness centre including a spa, sauna and an indoor heated pool.",
  images: {
    panorama: "/about-1.jpg",
    exterior: "/about-2.jpg",
    interior: "/about-3.jpg",
  },
};

// Common Amenities
export const COMMON_AMENITIES = [
  "Large balcony",
  "Flat screen HDTV",
  "Well-equipped kitchenette",
  "Private bathroom with rain shower",
  "Free Wi-Fi",
  "In-room safe",
  "Refrigerator",
  "Coffee/Tea maker",
];

// Filter Options
export const FILTER_OPTIONS = {
  roomType: "ROOM TYPE",
  bedType: "BED TYPE",
};

// Booking Form Data
export const BOOKING_FORM = {
  title: "Plan Your Getaway Today",
  fields: {
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Number of guests",
  },
  buttonText: "Book your stay",
  guestOptions: [
    { value: 1, label: "1 Guest" },
    { value: 2, label: "2 Guests" },
    { value: 3, label: "3 Guests" },
    { value: 4, label: "4 Guests" },
    { value: 5, label: "5 Guests" },
    { value: 6, label: "6 Guests" },
  ],
  defaultValues: {
    checkIn: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
    checkOut: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    guests: 2,
  },
  dateFormat: "MMM dd, yyyy",
  minDate: new Date(),
  maxDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
};

// Service & Amenities Data
export interface ServiceAmenity {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "service" | "amenity";
}

export const SERVICE_AMENITIES: ServiceAmenity[] = [
  // Services (25 items)
  {
    id: 1,
    title: "Meeting Venues",
    description:
      "Professional meeting and conference facilities with state-of-the-art equipment, perfect for business events and corporate gatherings.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 2,
    title: "F&B Outlets",
    description:
      "Multiple dining options featuring international cuisine, local specialties, and premium beverages in elegant settings.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  {
    id: 3,
    title: "Concierge Service",
    description:
      "24/7 personalized assistance for reservations, transportation, tours, and local recommendations to enhance your stay.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 4,
    title: "Room Service",
    description:
      "Round-the-clock in-room dining with a diverse menu of local and international dishes delivered to your doorstep.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  {
    id: 5,
    title: "Spa & Wellness",
    description:
      "Luxurious spa treatments, massage therapy, and wellness programs designed to rejuvenate mind and body.",
    image: "/bg-srv.jpg",
    category: "service",
  },
  {
    id: 6,
    title: "Business Center",
    description:
      "Fully equipped business facilities with computers, printers, and meeting rooms for professional needs.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 7,
    title: "Laundry Service",
    description:
      "Professional dry cleaning and laundry services with same-day turnaround for your convenience.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  {
    id: 8,
    title: "Airport Transfer",
    description:
      "Reliable airport pickup and drop-off service with professional drivers and comfortable vehicles.",
    image: "/bg-srv.jpg",
    category: "service",
  },
  {
    id: 9,
    title: "Tour Booking",
    description:
      "Curated local tours and excursions to explore Hanoi's rich culture, history, and attractions.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 10,
    title: "Car Rental",
    description:
      "Premium vehicle rental service with chauffeur options for business and leisure travel needs.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  {
    id: 11,
    title: "Event Planning",
    description:
      "Professional event coordination for weddings, corporate functions, and special celebrations.",
    image: "/bg-srv.jpg",
    category: "service",
  },
  {
    id: 12,
    title: "Photography Service",
    description:
      "Professional photography for events, portraits, and capturing memorable moments during your stay.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 13,
    title: "Translation Service",
    description:
      "Multi-language interpretation and translation support for international guests and business meetings.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  {
    id: 14,
    title: "Currency Exchange",
    description:
      "Convenient currency exchange service with competitive rates for international travelers.",
    image: "/bg-srv.jpg",
    category: "service",
  },
  {
    id: 15,
    title: "Medical Assistance",
    description:
      "24/7 medical support and coordination with local healthcare providers for guest safety.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 16,
    title: "Pet Care Service",
    description:
      "Pet-friendly accommodations with specialized care and amenities for traveling companions.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  {
    id: 17,
    title: "VIP Treatment",
    description:
      "Exclusive VIP services including priority check-in, dedicated concierge, and premium amenities.",
    image: "/bg-srv.jpg",
    category: "service",
  },
  {
    id: 18,
    title: "Technology Support",
    description:
      "IT assistance and technical support for all digital needs during your business or leisure stay.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 19,
    title: "Cultural Activities",
    description:
      "Traditional Vietnamese cultural experiences including cooking classes, art workshops, and performances.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  {
    id: 20,
    title: "Fitness Training",
    description:
      "Personal training sessions and fitness consultations with certified professionals.",
    image: "/bg-srv.jpg",
    category: "service",
  },
  {
    id: 21,
    title: "Nutrition Consultation",
    description:
      "Dietary advice and meal planning services tailored to your health and wellness goals.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 22,
    title: "Shopping Assistance",
    description:
      "Personal shopping guidance and recommendations for local markets, boutiques, and shopping districts.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  {
    id: 23,
    title: "Security Service",
    description:
      "24/7 security monitoring and personal safety services ensuring a secure environment for all guests.",
    image: "/bg-srv.jpg",
    category: "service",
  },
  {
    id: 24,
    title: "Emergency Support",
    description:
      "Immediate emergency response and crisis management support for guest safety and well-being.",
    image: "/img-srv-1.jpg",
    category: "service",
  },
  {
    id: 25,
    title: "Sustainability Programs",
    description:
      "Eco-friendly initiatives and green practices supporting environmental conservation and responsible tourism.",
    image: "/img-srv-2.jpg",
    category: "service",
  },
  // Amenities (25 items)
  {
    id: 26,
    title: "Swimming Pool",
    description:
      "Heated indoor swimming pool with temperature control and comfortable lounging areas for relaxation.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
  {
    id: 27,
    title: "GYM",
    description:
      "Fully equipped fitness center with modern cardio and strength training equipment for all fitness levels.",
    image: "/img-srv-1.jpg",
    category: "amenity",
  },
  {
    id: 28,
    title: "Kid's Club",
    description:
      "Dedicated children's entertainment area with supervised activities, games, and educational programs.",
    image: "/img-srv-2.jpg",
    category: "amenity",
  },
  {
    id: 29,
    title: "Private Lounge",
    description:
      "Exclusive lounge area with premium seating, refreshments, and business facilities for VIP guests.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
  {
    id: 30,
    title: "Rooftop Garden",
    description:
      "Beautiful rooftop garden with panoramic city views, perfect for relaxation and outdoor dining.",
    image: "/img-srv-1.jpg",
    category: "amenity",
  },
  {
    id: 31,
    title: "Library",
    description:
      "Quiet reading space with extensive collection of books, magazines, and digital reading materials.",
    image: "/img-srv-2.jpg",
    category: "amenity",
  },
  {
    id: 32,
    title: "Game Room",
    description:
      "Entertainment area featuring board games, video games, and interactive activities for all ages.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
  {
    id: 33,
    title: "Outdoor Terrace",
    description:
      "Spacious outdoor terrace with comfortable seating and stunning views of the surrounding landscape.",
    image: "/img-srv-1.jpg",
    category: "amenity",
  },
  {
    id: 34,
    title: "Meditation Room",
    description:
      "Peaceful meditation space with calming ambiance for mindfulness and spiritual wellness practices.",
    image: "/img-srv-2.jpg",
    category: "amenity",
  },
  {
    id: 35,
    title: "Art Gallery",
    description:
      "Curated art exhibitions featuring local and international artists, enhancing the cultural experience.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
  {
    id: 36,
    title: "Music Room",
    description:
      "Soundproof music room with instruments and audio equipment for musical enjoyment and practice.",
    image: "/img-srv-1.jpg",
    category: "amenity",
  },
  {
    id: 37,
    title: "Wine Cellar",
    description:
      "Premium wine storage and tasting room with expert sommelier services and exclusive wine selections.",
    image: "/img-srv-2.jpg",
    category: "amenity",
  },
  {
    id: 38,
    title: "Cigar Lounge",
    description:
      "Sophisticated cigar lounge with premium selections, comfortable seating, and expert recommendations.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
  {
    id: 39,
    title: "Pet Park",
    description:
      "Dedicated outdoor area for pets with play equipment and comfortable spaces for exercise and relaxation.",
    image: "/img-srv-1.jpg",
    category: "amenity",
  },
  {
    id: 40,
    title: "Bicycle Rental",
    description:
      "Quality bicycles available for rent to explore the local area and enjoy scenic cycling routes.",
    image: "/img-srv-2.jpg",
    category: "amenity",
  },
  {
    id: 41,
    title: "Tennis Court",
    description:
      "Professional tennis court with equipment rental and coaching services for tennis enthusiasts.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
  {
    id: 42,
    title: "Yoga Studio",
    description:
      "Dedicated yoga space with mats, props, and scheduled classes for all skill levels.",
    image: "/img-srv-1.jpg",
    category: "amenity",
  },
  {
    id: 43,
    title: "Sauna",
    description:
      "Traditional sauna facilities for relaxation and wellness with temperature and humidity control.",
    image: "/img-srv-2.jpg",
    category: "amenity",
  },
  {
    id: 44,
    title: "Steam Room",
    description:
      "Modern steam room with aromatherapy options for detoxification and respiratory health benefits.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
  {
    id: 45,
    title: "Hot Tub",
    description:
      "Relaxing hot tub with therapeutic jets and temperature control for ultimate relaxation.",
    image: "/img-srv-1.jpg",
    category: "amenity",
  },
  {
    id: 46,
    title: "Golf Simulator",
    description:
      "Indoor golf simulation with professional equipment and various course options for golf enthusiasts.",
    image: "/img-srv-2.jpg",
    category: "amenity",
  },
  {
    id: 47,
    title: "Cinema Room",
    description:
      "Private cinema with comfortable seating and state-of-the-art audio-visual equipment for movie enjoyment.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
  {
    id: 48,
    title: "Conference Hall",
    description:
      "Large conference facility with advanced presentation equipment and flexible seating arrangements.",
    image: "/img-srv-1.jpg",
    category: "amenity",
  },
  {
    id: 49,
    title: "Exhibition Space",
    description:
      "Versatile exhibition area for events, trade shows, and cultural displays with modern facilities.",
    image: "/img-srv-2.jpg",
    category: "amenity",
  },
  {
    id: 50,
    title: "Prayer Room",
    description:
      "Multi-faith prayer room providing a peaceful space for spiritual reflection and religious practices.",
    image: "/bg-srv.jpg",
    category: "amenity",
  },
];

// Home Page Data
export interface FeaturedRoom {
  id: number;
  name: string;
  description: string;
  image: string;
  size: string;
  guests?: string;
}

export const HOME_CONTENT = {
  hero: {
    title: "SOLEIL HOTEL",
    subtitle: "Room & Dining package\nOnly from VND 1.760.000/ 01 person/night",
    scrollText: "SCROLL TO DISCOVER",
  },
  welcome: {
    title: "Welcome to\nSoleil",
    description:
      "Soliel is Hanoi's new stylish Upper Mid-Scale International hotel. A contemporary urban hotel for the discerning business or leisure traveler, located in one of Hanoi's fastest developing districts. Only a few minutes from the National Convention Center, the National Museum, My Dinh sport complex. Approximately 40 minutes from Noi Bai International Airport, 20 minutes to down town and a short walk to the Van Phuc Silk Village. The hotel also offers guests a well-equipped fitness centre including a spa, sauna and an indoor heated pool.",
    buttonText: "Explore our HOTEL",
  },
  featuredRooms: [
    {
      id: 1,
      name: "Deluxe Family Suite",
      description: "50m2, 1 Bedroom",
      image: "/accom-room-1.png",
      size: "50m2, 1 Bedroom",
    },
    {
      id: 2,
      name: "Family Suite",
      description: "30m2, 2 Bedroom",
      image: "/accom-room-1.png",
      size: "30m2, 2 Bedroom",
    },
    {
      id: 3,
      name: "Deluxe Studio",
      description: "50m2, up to 3 guests",
      image: "/accom-room-1.png",
      size: "50m2, up to 3 guests",
    },
    {
      id: 4,
      name: "Deluxe Family Suite",
      description: "50m2, 2 Bedroom",
      image: "/accom-room-1.png",
      size: "50m2, 2 Bedroom",
    },
  ],
  meetingServices: {
    title: "Ballroom/\nMeeting",
    description:
      "Our meeting services provide full conference facilities with our dedicated and experienced staff will make sure all the essentials for a successful event are handled with attention to every little detail.",
    image: "/img-srv-1.jpg",
  },
  serviceAmenities: {
    title: "Service &\nAmenities",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    featuredItems: [
      {
        id: 1,
        title: "Meeting Venues",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard.",
        image: "/img-srv-1.jpg",
      },
      {
        id: 2,
        title: "F&B Outlets",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard.",
        image: "/img-srv-2.jpg",
      },
      {
        id: 3,
        title: "Swimming Pool",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard.",
        image: "/bg-srv.jpg",
      },
    ],
  },
  decorativeImages: {
    leftColumn: "/img-srv-1.jpg",
    centerImage: "/img-srv-2.jpg",
    rightColumn: "/bg-srv.jpg",
  },
};
