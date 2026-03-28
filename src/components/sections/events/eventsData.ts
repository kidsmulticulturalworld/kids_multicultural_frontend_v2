export interface TicketType {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  inclusions: string[];
}

export interface ActivityHighlight {
  title: string;
  description: string;
  color: "peach" | "mint" | "blue";
}

export interface EventDetail {
  id: string;
  title: string;
  image: string;
  date: string;
  fullDate: string;
  time: string;
  location: string;
  price: string;
  description: string;
  highlights: ActivityHighlight[];
  tickets: TicketType[];
}

export interface EventItem {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  price: string;
}

const defaultTickets: TicketType[] = [
  {
    id: "child",
    name: "Child Tickets",
    subtitle: "For children aged 4-12",
    price: 129.99,
    inclusions: [
      "Access to all interactive stations",
      "Craft materials for take-home projects",
      "Cultural passport with stamps",
      "Snack voucher",
    ],
  },
  {
    id: "adult",
    name: "Adult Tickets",
    subtitle: "For parents and guardians",
    price: 129.99,
    inclusions: [
      "Access to all interactive stations",
      "Complimentary welcome drink",
      "Event program guide",
      "Priority seating for performances",
    ],
  },
  {
    id: "family",
    name: "Family Pack",
    subtitle: "Best value for family",
    price: 129.99,
    inclusions: [
      "2 adult + 2 child tickets",
      "Access to all interactive stations",
      "Family craft activity pack",
      "Meal vouchers for the whole family",
    ],
  },
];

export const eventDetails: Record<string, EventDetail> = {
  "featured-upcoming": {
    id: "featured-upcoming",
    title: "Walk the runway! Experience cultural dances.",
    image: "/events-ongoing-image.jpg",
    date: "Friday, May 23, 2025",
    fullDate: "Friday, May 23, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Victoria Boulevard, Ireland",
    price: "$200",
    description:
      "Join us for a day of multicultural exploration! Kids will experience traditions, crafts, music, and food from countries around the world through interactive stations and performances. Perfect for families with children ages 4-12 who want to expand their global awareness in a fun, engaging environment.",
    highlights: [
      {
        title: "Interactive Learning",
        description:
          "Hands-on activities for children to explore different cultures.",
        color: "peach",
      },
      {
        title: "Cultural Performances",
        description:
          "Live music, dance, and storytelling from around the world.",
        color: "mint",
      },
      {
        title: "Family Activities",
        description:
          "Create lasting memories with fun challenges for the whole family.",
        color: "blue",
      },
    ],
    tickets: defaultTickets,
  },
  "event-1": {
    id: "event-1",
    title: "Global Kids Festival: Around the World in a Day",
    image: "/events-ongoing-image.jpg",
    date: "Saturday, June 15, 2025",
    fullDate: "Saturday, June 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Cultural Heritage Center, 123 Main Street",
    price: "$129.99",
    description:
      "Join us for a day of multicultural exploration! Kids will experience traditions, crafts, music, and food from countries around the world through interactive stations and performances. Perfect for families with children ages 4-12 who want to expand their global awareness in a fun, engaging environment.",
    highlights: [
      {
        title: "Interactive Learning",
        description:
          "Hands-on activities for children to explore different cultures.",
        color: "peach",
      },
      {
        title: "Cultural Performances",
        description:
          "Live music, dance, and storytelling from around the world.",
        color: "mint",
      },
      {
        title: "Family Activities",
        description:
          "Create lasting memories with fun challenges for the whole family.",
        color: "blue",
      },
    ],
    tickets: defaultTickets,
  },
  "event-2": {
    id: "event-2",
    title: "Walk the runway! Experience cultural dances.",
    image: "/events-ongoing-image.jpg",
    date: "Friday, May 23, 2025",
    fullDate: "Friday, May 23, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
    description:
      "Join us for a day of multicultural exploration! Kids will experience traditions, crafts, music, and food from countries around the world through interactive stations and performances. Perfect for families with children ages 4-12 who want to expand their global awareness in a fun, engaging environment.",
    highlights: [
      {
        title: "Interactive Learning",
        description:
          "Hands-on activities for children to explore different cultures.",
        color: "peach",
      },
      {
        title: "Cultural Performances",
        description:
          "Live music, dance, and storytelling from around the world.",
        color: "mint",
      },
      {
        title: "Family Activities",
        description:
          "Create lasting memories with fun challenges for the whole family.",
        color: "blue",
      },
    ],
    tickets: defaultTickets,
  },
  "event-3": {
    id: "event-3",
    title: "Walk the runway! Experience cultural dances.",
    image: "/events-ongoing-image.jpg",
    date: "Friday, May 23, 2025",
    fullDate: "Friday, May 23, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
    description:
      "Join us for a day of multicultural exploration! Kids will experience traditions, crafts, music, and food from countries around the world through interactive stations and performances. Perfect for families with children ages 4-12 who want to expand their global awareness in a fun, engaging environment.",
    highlights: [
      {
        title: "Interactive Learning",
        description:
          "Hands-on activities for children to explore different cultures.",
        color: "peach",
      },
      {
        title: "Cultural Performances",
        description:
          "Live music, dance, and storytelling from around the world.",
        color: "mint",
      },
      {
        title: "Family Activities",
        description:
          "Create lasting memories with fun challenges for the whole family.",
        color: "blue",
      },
    ],
    tickets: defaultTickets,
  },
  "event-4": {
    id: "event-4",
    title: "Walk the runway! Experience cultural dances.",
    image: "/events-ongoing-image.jpg",
    date: "Friday, May 23, 2025",
    fullDate: "Friday, May 23, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
    description:
      "Join us for a day of multicultural exploration! Kids will experience traditions, crafts, music, and food from countries around the world through interactive stations and performances. Perfect for families with children ages 4-12 who want to expand their global awareness in a fun, engaging environment.",
    highlights: [
      {
        title: "Interactive Learning",
        description:
          "Hands-on activities for children to explore different cultures.",
        color: "peach",
      },
      {
        title: "Cultural Performances",
        description:
          "Live music, dance, and storytelling from around the world.",
        color: "mint",
      },
      {
        title: "Family Activities",
        description:
          "Create lasting memories with fun challenges for the whole family.",
        color: "blue",
      },
    ],
    tickets: defaultTickets,
  },
  "event-5": {
    id: "event-5",
    title: "Walk the runway! Experience cultural dances.",
    image: "/events-ongoing-image.jpg",
    date: "Friday, May 23, 2025",
    fullDate: "Friday, May 23, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
    description:
      "Join us for a day of multicultural exploration! Kids will experience traditions, crafts, music, and food from countries around the world through interactive stations and performances. Perfect for families with children ages 4-12 who want to expand their global awareness in a fun, engaging environment.",
    highlights: [
      {
        title: "Interactive Learning",
        description:
          "Hands-on activities for children to explore different cultures.",
        color: "peach",
      },
      {
        title: "Cultural Performances",
        description:
          "Live music, dance, and storytelling from around the world.",
        color: "mint",
      },
      {
        title: "Family Activities",
        description:
          "Create lasting memories with fun challenges for the whole family.",
        color: "blue",
      },
    ],
    tickets: defaultTickets,
  },
  "event-6": {
    id: "event-6",
    title: "Walk the runway! Experience cultural dances.",
    image: "/events-ongoing-image.jpg",
    date: "Friday, May 23, 2025",
    fullDate: "Friday, May 23, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
    description:
      "Join us for a day of multicultural exploration! Kids will experience traditions, crafts, music, and food from countries around the world through interactive stations and performances. Perfect for families with children ages 4-12 who want to expand their global awareness in a fun, engaging environment.",
    highlights: [
      {
        title: "Interactive Learning",
        description:
          "Hands-on activities for children to explore different cultures.",
        color: "peach",
      },
      {
        title: "Cultural Performances",
        description:
          "Live music, dance, and storytelling from around the world.",
        color: "mint",
      },
      {
        title: "Family Activities",
        description:
          "Create lasting memories with fun challenges for the whole family.",
        color: "blue",
      },
    ],
    tickets: defaultTickets,
  },
};

export interface ContestDetail {
  id: string;
  title: string;
  image: string;
  dateRange: string;
  location: string;
  contestantCount: number;
  prizes: string[];
  disclaimer: string;
  votesOrg: string;
  deadline: string;
}

export interface Contestant {
  id: string;
  name: string;
  image: string;
  totalVotes: number;
}

export const contestDetails: Record<string, ContestDetail> = {
  "contest-1": {
    id: "contest-1",
    title: "Cutest Kids USA 2025",
    image: "/events-ongoing-image.jpg",
    dateRange: "Saturday, June 15, 2025 -Friday, Aug 22, 2025",
    location: "Online",
    contestantCount: 20,
    prizes: [
      "1st Place Winner Package",
      "Front Cover -Magazine Feature ⭐⭐⭐⭐⭐",
      "America Nation Ambassador at your State of residence (You will receive crown & Sash with mentorship for 1year) ⭐⭐⭐⭐⭐",
      "Automatic free Model Entry to upcoming Fashion Shows as Vip lead on the runway shows⭐⭐⭐⭐",
      "2 Free copy of magazine",
    ],
    disclaimer:
      "No Refunds, no portion of any vote fees or payments of any kind whatsoever previously provided to Kids Multicultural World shall be owed or be repayable to Purchaser or Voters.",
    votesOrg: "AMERICA NATION MULTICULTURAL WORLD FOUNDATION ORG.",
    deadline: "2025-08-22T23:59:59",
  },
  "contest-2": {
    id: "contest-2",
    title: "Cutest Kids USA 2025 Cutest Kids USA 2025",
    image: "/events-ongoing-image.jpg",
    dateRange: "Saturday, June 15, 2025 -Friday, Aug 22, 2025",
    location: "Online",
    contestantCount: 20,
    prizes: [
      "1st Place Winner Package",
      "Front Cover -Magazine Feature ⭐⭐⭐⭐⭐",
      "America Nation Ambassador at your State of residence (You will receive crown & Sash with mentorship for 1year) ⭐⭐⭐⭐⭐",
      "Automatic free Model Entry to upcoming Fashion Shows as Vip lead on the runway shows⭐⭐⭐⭐",
      "2 Free copy of magazine",
    ],
    disclaimer:
      "No Refunds, no portion of any vote fees or payments of any kind whatsoever previously provided to Kids Multicultural World shall be owed or be repayable to Purchaser or Voters.",
    votesOrg: "AMERICA NATION MULTICULTURAL WORLD FOUNDATION ORG.",
    deadline: "2025-08-22T23:59:59",
  },
  "contest-3": {
    id: "contest-3",
    title: "US Cutest Kids May 2025 US Cutest Kids May 2025",
    image: "/events-ongoing-image.jpg",
    dateRange: "Saturday, June 15, 2025 -Friday, Aug 22, 2025",
    location: "Online",
    contestantCount: 20,
    prizes: [
      "1st Place Winner Package",
      "Front Cover -Magazine Feature ⭐⭐⭐⭐⭐",
      "America Nation Ambassador at your State of residence (You will receive crown & Sash with mentorship for 1year) ⭐⭐⭐⭐⭐",
      "Automatic free Model Entry to upcoming Fashion Shows as Vip lead on the runway shows⭐⭐⭐⭐",
      "2 Free copy of magazine",
    ],
    disclaimer:
      "No Refunds, no portion of any vote fees or payments of any kind whatsoever previously provided to Kids Multicultural World shall be owed or be repayable to Purchaser or Voters.",
    votesOrg: "AMERICA NATION MULTICULTURAL WORLD FOUNDATION ORG.",
    deadline: "2025-08-22T23:59:59",
  },
};

const mockContestant: Omit<Contestant, "id"> = {
  name: "Mivaan Rana",
  image: "/to-vote-for.jpg",
  totalVotes: 25,
};

export const contestants: Contestant[] = Array.from({ length: 16 }, (_, i) => ({
  id: `contestant-${i + 1}`,
  ...mockContestant,
}));

export const ongoingContests: EventItem[] = [
  {
    id: "contest-1",
    title: "US Cutest Kids May 2025",
    image: "/upcoming-frontline-image.svg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
  },
  {
    id: "contest-2",
    title: "Cutest Kids USA 2025 Cutest Kids USA 2025",
    image: "/upcoming-frontline-image.svg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
  },
  {
    id: "contest-3",
    title: "US Cutest Kids May 2025 US Cutest Kids May 2025",
    image: "/upcoming-frontline-image.svg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
  },
];

export const upcomingEvents: EventItem[] = [
  {
    id: "event-1",
    title: "Global Kids Festival: Around the World in a Day",
    image: "/upcoming-frontline-image.svg",
    date: "Sat, June 15th, 10AM",
    location: "Cultural Heritage Center, 123 Main Street",
    price: "$129.99",
  },
  {
    id: "event-2",
    title: "Walk the runway! Experience cultural dances.",
    image: "/upcoming-frontline-image.svg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
  },
  {
    id: "event-3",
    title: "Walk the runway! Experience cultural dances.",
    image: "/upcoming-frontline-image.svg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
  },
  {
    id: "event-4",
    title: "Walk the runway! Experience cultural dances.",
    image: "/upcoming-frontline-image.svg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
  },
  {
    id: "event-5",
    title: "Walk the runway! Experience cultural dances.",
    image: "/upcoming-frontline-image.svg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
  },
  {
    id: "event-6",
    title: "Walk the runway! Experience cultural dances.",
    image: "/upcoming-frontline-image.svg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$50",
  },
];
