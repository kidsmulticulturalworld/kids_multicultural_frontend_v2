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

/** Legacy static catalog — the shop UI loads `shop_view` via `parseShopListResponse`. */
export const products: Product[] = [];
