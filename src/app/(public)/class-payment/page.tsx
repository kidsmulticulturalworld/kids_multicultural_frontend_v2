import AuthBackground from "@/components/sections/auth/AuthBackground";
import ClassPaymentContent from "@/components/sections/auth/ClassPaymentContent";

export const metadata = {
  title: "Class Payment | Kids Multicultural World",
  description:
    "Complete payment for your class enrollment at Kids Multicultural World.",
};

export default function ClassPaymentPage() {
  return (
    <AuthBackground>
      <ClassPaymentContent />
    </AuthBackground>
  );
}
