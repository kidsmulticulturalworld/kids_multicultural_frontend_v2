import AuthBackground from "@/components/sections/auth/AuthBackground";
import CheckoutContent from "@/components/sections/auth/CheckoutContent";

export const metadata = {
  title: "Checkout | Kids Multicultural World",
  description:
    "Complete your payment to finalize your enrollment at Kids Multicultural World.",
};

export default function CheckoutPage() {
  return (
    <AuthBackground>
      <CheckoutContent />
    </AuthBackground>
  );
}
