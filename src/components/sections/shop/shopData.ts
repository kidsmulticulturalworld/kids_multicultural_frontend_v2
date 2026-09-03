export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  /** Slug used for filtering, e.g. "t-shirts" */
  category: string;
  size: string[];
}

const CATEGORY_LABELS: Record<string, string> = {
  "t-shirts": "T-Shirts",
  hoodies: "Hoodies",
  bonnets: "Bonnets",
  other: "Other",
};

/** Display order when multiple known categories are present */
const CATEGORY_ORDER = ["t-shirts", "hoodies", "bonnets", "other"] as const;

export function categoryLabel(slug: string): string {
  if (CATEGORY_LABELS[slug]) return CATEGORY_LABELS[slug];
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export type ShopCategoryTab = { id: string; label: string };

/** Build filter tabs from products actually in the catalog (plus All). */
export function getShopCategories(products: Product[]): ShopCategoryTab[] {
  const present = new Set(
    products.map((p) => p.category).filter(Boolean)
  );

  const tabs: ShopCategoryTab[] = [{ id: "all", label: "All" }];

  for (const id of CATEGORY_ORDER) {
    if (present.has(id)) {
      tabs.push({ id, label: categoryLabel(id) });
      present.delete(id);
    }
  }

  for (const id of [...present].sort()) {
    tabs.push({ id, label: categoryLabel(id) });
  }

  return tabs;
}

export const sizeOptions = ["Baby", "Toddler", "Kid", "Teen", "Adult"] as const;

export const priceFilters = ["Under $20", "Under $50"] as const;

/** Legacy static catalog — the shop UI loads `shop_view` via `parseShopListResponse`. */
export const products: Product[] = [];
