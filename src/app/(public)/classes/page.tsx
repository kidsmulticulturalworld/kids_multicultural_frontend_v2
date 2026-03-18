import ClassesHero from "@/components/sections/classes/ClassesHero";
import ClassesTestimonial from "@/components/sections/classes/ClassesTestimonial";
import ClassCards from "@/components/sections/classes/ClassCards";
import PressPartners from "@/components/sections/PressPartners";
import GetInvolved from "@/components/sections/GetInvolved";

export default function ClassesPage() {
  return (
    <>
      <ClassesHero />
      <ClassesTestimonial />
      <ClassCards />
      <PressPartners className="bg-[#E2F0FD]" />
      <GetInvolved />
    </>
  );
}
