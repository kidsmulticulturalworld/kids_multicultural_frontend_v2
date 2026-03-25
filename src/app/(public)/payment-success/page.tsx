import AuthBackground from "@/components/sections/auth/AuthBackground";
import PaymentSuccessCard from "@/components/sections/auth/PaymentSuccessCard";

export const metadata = {
  title: "Payment Successful | Kids Multicultural World",
  description:
    "Your payment was successful. You are now enrolled at Kids Multicultural World.",
};

export default function PaymentSuccessPage() {
  return (
    <AuthBackground>
      <PaymentSuccessCard />
    </AuthBackground>
  );
}
