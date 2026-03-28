import { notFound } from "next/navigation";
import Image from "next/image";
import {
  contestDetails,
  contestants,
} from "@/components/sections/events/eventsData";
import ContestInfo from "@/components/sections/events/ContestInfo";
import ContestantsGrid from "@/components/sections/events/ContestantsGrid";

interface ContestDetailPageProps {
  params: Promise<{ contestId: string }>;
}

export default async function ContestDetailPage({
  params,
}: ContestDetailPageProps) {
  const { contestId } = await params;
  const contest = contestDetails[contestId];

  if (!contest) {
    notFound();
  }

  return (
    <section className="bg-white py-6 md:py-10 lg:py-14">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        {/* ── Hero Image ── */}
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-10 border border-gray-200">
          <Image
            src={contest.image}
            alt={contest.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />
        </div>

        <ContestInfo contest={contest} />
        <ContestantsGrid contestants={contestants} />
      </div>
    </section>
  );
}
