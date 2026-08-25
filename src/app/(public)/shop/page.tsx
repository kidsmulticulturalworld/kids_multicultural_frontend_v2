import ShopHero from "@/components/sections/shop/ShopHero";
import ShopBanner from "@/components/sections/shop/ShopBanner";
import ShopProducts from "@/components/sections/shop/ShopProducts";
import { shopService } from "@/lib/api/services";
import { parseShopListResponse } from "@/lib/api/data-mappers";
import type { Product } from "@/components/sections/shop/shopData";

export default async function ShopPage() {
  let products: Product[] = [];
  try {
    const shopRaw = await shopService.getShopItems();
    products = parseShopListResponse(shopRaw);
  } catch {
    products = [];
  }

  return (
    <>
      <ShopHero />
      <ShopBanner />
      <ShopProducts products={products} />
    </>
  );
}
