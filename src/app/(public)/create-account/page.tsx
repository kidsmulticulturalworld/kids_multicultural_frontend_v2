import { Suspense } from "react";
import AuthBackground from "@/components/sections/auth/AuthBackground";
import CreateAccountForm from "@/components/sections/auth/CreateAccountForm";

export const metadata = {
  title: "Create Account | Kids Multicultural World",
  description:
    "Create an account to manage your enrollments and get updates from Kids Multicultural World.",
};

export default function CreateAccountPage() {
  return (
    <AuthBackground>
      <Suspense>
        <CreateAccountForm />
      </Suspense>
    </AuthBackground>
  );
}
