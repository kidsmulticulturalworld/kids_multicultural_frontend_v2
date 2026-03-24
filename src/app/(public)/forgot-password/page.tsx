import AuthBackground from "@/components/sections/auth/AuthBackground";
import ResetPasswordForm from "@/components/sections/auth/ResetPasswordForm";

export const metadata = {
  title: "Reset Password | Kids Multicultural World",
  description:
    "Reset your Kids Multicultural World account password.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthBackground>
      <ResetPasswordForm />
    </AuthBackground>
  );
}
