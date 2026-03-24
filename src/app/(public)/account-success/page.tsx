import { Suspense } from "react";
import AuthBackground from "@/components/sections/auth/AuthBackground";
import AccountSuccessCard from "@/components/sections/auth/AccountSuccessCard";

export const metadata = {
  title: "Account Created | Kids Multicultural World",
  description:
    "Your account has been created successfully. Proceed to payment to complete your enrollment.",
};

export default function AccountSuccessPage() {
  return (
    <AuthBackground>
      <Suspense>
        <AccountSuccessCard />
      </Suspense>
    </AuthBackground>
  );
}
