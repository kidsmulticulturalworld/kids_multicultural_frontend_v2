import AuthBackground from "@/components/sections/auth/AuthBackground";
import EventGuestCheckoutContent from "@/components/sections/events/EventGuestCheckoutContent";

export const metadata = {
  title: "Guest Checkout | Kids Multicultural World",
  description:
    "Complete your event ticket purchase as a guest at Kids Multicultural World.",
};

export default function EventGuestCheckoutPage() {
  return (
    <AuthBackground>
      <EventGuestCheckoutContent />
    </AuthBackground>
  );
}
