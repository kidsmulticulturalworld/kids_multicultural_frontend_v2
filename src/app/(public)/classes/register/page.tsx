import RegistrationHero from "@/components/sections/registration/RegistrationHero";
import AuditionInfo from "@/components/sections/registration/AuditionInfo";
import RegistrationForm from "@/components/sections/registration/RegistrationForm";
import PressPartners from "@/components/sections/PressPartners";

export default function RegisterPage() {
  return (
    <>
      <RegistrationHero />
      <AuditionInfo />
      <RegistrationForm />
      <PressPartners className="bg-[#E2F0FD]" />
    </>
  );
}
