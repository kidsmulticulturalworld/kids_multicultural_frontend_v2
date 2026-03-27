import AuthBackground from "@/components/sections/auth/AuthBackground";
import EventPaymentContent from "@/components/sections/events/EventPaymentContent";

export const metadata = {
  title: "Event Payment | Kids Multicultural World",
  description:
    "Complete payment for your event tickets at Kids Multicultural World.",
};

export default function EventPaymentPage() {
  return (
    <AuthBackground>
      <EventPaymentContent />
    </AuthBackground>
  );
}
