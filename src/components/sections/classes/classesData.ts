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
    ageRange: "Ages 1–17 Years",
    description:
      "Runway training, posing, confidence building, stage presence, and fashion modeling in a fun and empowering multicultural environment.\nStudents learn professional modeling skills while building confidence and leadership to shine on the global stage.",
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
    ageRange: "Ages 5–17 Years",
    description:
      "Students learn audition preparation, slating, script reading, self-presentation, and on-camera confidence in a fun and supportive environment.",
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
    title: "Life Skills & Kids Entrepreneurship ",
    ageRange: "Ages 5–17 Years",
    description:
      "Mentorship focused on confidence building, positive mindset, leadership, business ideas, branding, and entrepreneurship. Students learn life skills that inspire creativity, self-esteem, and future success.",
    price: 200,
    badgeLabel: "Life Skills Class",
    badgeImage: "/life-skill-pill-frame.svg",
    image: "/life-skill-actual-image.jpg",
    badgeColor: "#FCCFBD",
    badgeTextColor: "#1E3A5F",
    cardBg: "#FCCFBD",
    reversed: false,
  },
];
