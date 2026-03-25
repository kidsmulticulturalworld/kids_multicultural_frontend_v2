import AuthBackground from "@/components/sections/auth/AuthBackground";
import OrderConfirmationCard from "@/components/sections/auth/OrderConfirmationCard";

export const metadata = {
  title: "Order Confirmed | Kids Multicultural World",
  description:
    "Your order has been confirmed. We will send a confirmation email shortly.",
};

export default function OrderConfirmationPage() {
  return (
    <AuthBackground>
      <OrderConfirmationCard />
    </AuthBackground>
  );
}
