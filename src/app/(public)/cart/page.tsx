import AuthBackground from "@/components/sections/auth/AuthBackground";
import CartContent from "@/components/sections/cart/CartContent";

export const metadata = {
  title: "Your Cart | Kids Multicultural World",
  description:
    "Review your cart and complete your order for Kids Multicultural World merchandise.",
};

export default function CartPage() {
  return (
    <AuthBackground>
      <CartContent />
    </AuthBackground>
  );
}
