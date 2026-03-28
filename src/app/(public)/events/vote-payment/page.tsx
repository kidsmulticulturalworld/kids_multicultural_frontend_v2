import AuthBackground from "@/components/sections/auth/AuthBackground";
import VotePaymentContent from "@/components/sections/events/VotePaymentContent";

export const metadata = {
  title: "Vote Payment | Kids Multicultural World",
  description:
    "Complete payment for your votes at Kids Multicultural World.",
};

export default function VotePaymentPage() {
  return (
    <AuthBackground>
      <VotePaymentContent />
    </AuthBackground>
  );
}
