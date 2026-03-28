import AuthBackground from "@/components/sections/auth/AuthBackground";
import VoteSuccessCard from "@/components/sections/events/VoteSuccessCard";

export const metadata = {
  title: "Vote Successful | Kids Multicultural World",
  description:
    "Your vote has been sent successfully to your candidate.",
};

export default function VoteSuccessPage() {
  return (
    <AuthBackground>
      <VoteSuccessCard />
    </AuthBackground>
  );
}
