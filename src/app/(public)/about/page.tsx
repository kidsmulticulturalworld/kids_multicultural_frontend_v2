import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import PressPartners from "@/components/sections/PressPartners";
import AboutVideo from "@/components/sections/about/AboutVideo";
import GetInvolved from "@/components/sections/GetInvolved";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <PressPartners className="bg-[#E2F0FD]" />
      <AboutVideo />
      <GetInvolved />
    </>
  );
}
