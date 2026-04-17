import AuthBackground from "@/components/sections/auth/AuthBackground";
import SetNewPasswordForm from "@/components/sections/auth/SetNewPasswordForm";

export const metadata = {
  title: "Set new password | Kids Multicultural World",
  description: "Choose a new password for your Kids Multicultural World account.",
};

export default function ResetPasswordTokenPage() {
  return (
    <AuthBackground>
      <SetNewPasswordForm />
    </AuthBackground>
  );
}
