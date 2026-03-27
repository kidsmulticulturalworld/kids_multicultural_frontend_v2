import AuthBackground from "@/components/sections/auth/AuthBackground";
import EventPaymentSuccessCard from "@/components/sections/events/EventPaymentSuccessCard";

export const metadata = {
  title: "Payment Successful | Kids Multicultural World",
  description:
    "Your event ticket payment was successful. Your tickets have been confirmed.",
};

export default function EventPaymentSuccessPage() {
  return (
    <AuthBackground>
      <EventPaymentSuccessCard />
    </AuthBackground>
  );
}
