export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "hoodies" | "t-shirts" | "bonnets";
  size: string[];
}

export const categories = ["All", "Hoodies", "T-Shirts", "Bonnets"] as const;

export const sizeOptions = ["Baby", "Toddler", "Kid", "Teen", "Adult"] as const;

export const priceFilters = ["Under $20", "Under $50"] as const;

export const products: Product[] = [
  {
    id: "product-1",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Kid", "Teen", "Adult"],
  },
  {
    id: "product-2",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Baby", "Toddler", "Kid"],
  },
  {
    id: "product-3",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Teen", "Adult"],
  },
  {
    id: "product-4",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Kid", "Teen"],
  },
  {
    id: "product-5",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Toddler", "Kid", "Teen"],
  },
  {
    id: "product-6",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Baby", "Kid"],
  },
  {
    id: "product-7",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Teen", "Adult"],
  },
  {
    id: "product-8",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Kid", "Teen", "Adult"],
  },
  {
    id: "product-9",
    name: "Official KM World Hoodie",
    price: 45,
    image: "/dashboard/shopping-image.svg",
    category: "hoodies",
    size: ["Baby", "Toddler"],
  },
];
