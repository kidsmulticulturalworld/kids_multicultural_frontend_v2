import type { CartItem } from "@/stores/useCartStore";

/** Backend `calculate_Price`: line totals + $6 shipping. */
export function expectedShopCheckoutTotalCents(items: CartItem[]): number {
  const subtotal = items.reduce(
    (s, i) => s + i.price * i.quantity,
    0
  );
  return Math.round((subtotal + 6) * 100) / 100;
}

/** Payload `items` for `/api/checkout` type `shop`. */
export function cartToCheckoutItems(items: CartItem[]) {
  return items.map((i) => ({
    id: i.id,
    counter: i.quantity,
    name: i.name,
    size: i.size ?? "One size",
    color: i.color ?? "Default",
  }));
}
