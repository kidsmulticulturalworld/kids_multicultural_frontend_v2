import { Suspense } from "react";
import AuthBackground from "@/components/sections/auth/AuthBackground";
import EventAuthForm from "@/components/sections/events/EventAuthForm";

export const metadata = {
  title: "Event Checkout - Login or Sign Up | Kids Multicultural World",
  description:
    "Login, create an account, or continue as guest to complete your event ticket purchase.",
};

export default function EventCheckoutAuthPage() {
  return (
    <AuthBackground>
      <Suspense>
        <EventAuthForm />
      </Suspense>
    </AuthBackground>
  );
}
