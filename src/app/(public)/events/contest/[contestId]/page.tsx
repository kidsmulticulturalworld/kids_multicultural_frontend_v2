"use client";

import { useMemo } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { contestService } from "@/lib/api/services";
import {
  mapContestDetailFromApi,
  mapContestantRows,
  unwrapContestResponse,
} from "@/lib/api/data-mappers";
import ContestInfo from "@/components/sections/events/ContestInfo";
import ContestantsGrid from "@/components/sections/events/ContestantsGrid";

export default function ContestDetailPage() {
  const params = useParams();
  const contestId = typeof params?.contestId === "string" ? params.contestId : "";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["contest-detail", contestId],
    queryFn: () => contestService.getContest(contestId),
    enabled: Boolean(contestId),
  });

  const { contest, contestants } = useMemo(() => {
    if (!data) {
      return { contest: null, contestants: [] as ReturnType<typeof mapContestantRows> };
    }
    const { detail, contestants: rows } = unwrapContestResponse(data);
    const c = mapContestDetailFromApi(detail);
    const list = mapContestantRows(rows);
    const withCount =
      c.contestantCount > 0 ? c : { ...c, contestantCount: list.length };
    return { contest: withCount, contestants: list };
  }, [data]);

  if (!contestId) {
    notFound();
  }

  if (isLoading) {
    return (
      <section className="bg-white py-16 px-6">
        <p className="text-center text-gray-500 text-sm">Loading contest\u2026</p>
      </section>
    );
  }

  if (isError || !contest) {
    notFound();
  }

  return (
    <section className="bg-white py-6 md:py-10 lg:py-14">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
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
