import { Suspense } from "react";
import AuthBackground from "@/components/sections/auth/AuthBackground";
import LoginForm from "@/components/sections/auth/LoginForm";

export const metadata = {
  title: "Sign In | Kids Multicultural World",
  description:
    "Sign in to your Kids Multicultural World account to manage enrollments and updates.",
};

export default function LoginPage() {
  return (
    <AuthBackground>
      <Suspense>
        <LoginForm />
      </Suspense>
    </AuthBackground>
  );
}
