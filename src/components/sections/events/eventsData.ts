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
