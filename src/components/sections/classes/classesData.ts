export interface ClassData {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badgeLabel: string;
  badgeImage?: string;
  badgeColor: string;
  badgeTextColor: string;
  cardBg: string;
  reversed: boolean;
}

export const classesData: ClassData[] = [
  {
    id: "modeling",
    title: "Modeling Class",
    ageRange: "Age 1yr to 17 years",
    description:
      "Modeling Ethics, Runway Modeling, Commercial Modeling and High Editorial, Pose and Confident building Class.\nTaught by two successful working models, this course is a must-have guide filled with useful tips and hints for all upcoming & professional models.",
    price: 165,
    badgeLabel: "Modeling Class",
    badgeImage: "/modeling-class-frame.svg",
    image: "/modelling-class.jpg",
    badgeColor: "#ACD6FF",
    badgeTextColor: "#1E3A5F", // dark navy
    cardBg: "#ACD6FF",
    reversed: false,
  },
  {
    id: "acting",
    title: "Acting Class",
    ageRange: "Age 5yrs to 17 years",
    description:
      "We teach beginners & upcoming actors- How to Prepare for an Audition, Read & deliver scripts and self presentation. Our Courses Are Designed for All Levels of Experience.",
    price: 165,
    badgeLabel: "Acting Class",
    badgeImage: "/acting-class-pill-frame.svg",
    image: "/Acting-actual-image.svg",
    badgeColor: "#91FFCB",
    badgeTextColor: "#1E3A5F",
    cardBg: "#91FFCB",
    reversed: true,
  },
  {
    id: "life-skills",
    title: "Life Skills Class",
    ageRange: "Age 1yr to 17 years",
    description:
      "Life skills mentorship: Twice a week guidance, 30mins prep talk and business ideas building, rebranding and rebuilding self esteem.",
    price: 120,
    badgeLabel: "Life Skills Class",
    badgeImage: "/life-skill-pill-frame.svg",
    image: "/life-skill-actual-image.jpg",
    badgeColor: "#FCCFBD",
    badgeTextColor: "#1E3A5F",
    cardBg: "#FCCFBD",
    reversed: false,
  },
];
