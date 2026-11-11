"use client";

import { useEffect, useState } from "react";
import MediaImage from "@/components/ui/MediaImage";
import type { Contestant } from "./eventsData";
import VoteModal from "./VoteModal";
import { getInitials, hasProfilePhoto } from "@/lib/profile-photo";

function ContestantAvatar({
  name,
  image,
  className,
}: {
  name: string;
  image: string;
  className?: string;
}) {
  if (hasProfilePhoto(image)) {
    return (
      <MediaImage
        src={image}
        alt={name}
        fill
        className={className}
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 280px"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#1a2744]">
      <span className="text-white/90 text-4xl md:text-5xl font-bold tracking-wide">
        {getInitials(name)}
      </span>
    </div>
  );
}

export default function ContestantsGrid({
  contestants,
  contestId,
}: {
  contestants: Contestant[];
  contestId?: string;
}) {
  const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);
  const [previewContestant, setPreviewContestant] = useState<Contestant | null>(null);

  useEffect(() => {
    if (!previewContestant) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewContestant(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [previewContestant]);

  return (
    <>
      <h2 className="text-black font-semibold text-2xl md:text-[32px] mb-6 md:mb-8">
        Contestants
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {contestants.map((contestant) => (
          <div
            key={contestant.id}
            className="flex flex-col overflow-hidden bg-white rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
          >
            {/* Contestant photo — click to preview full image */}
            <button
              type="button"
              onClick={() =>
                hasProfilePhoto(contestant.image)
                  ? setPreviewContestant(contestant)
                  : undefined
              }
              className={`relative aspect-[4/3] block w-full overflow-hidden border-b-[6px] border-[#3491E8] ${
                hasProfilePhoto(contestant.image)
                  ? "cursor-zoom-in"
                  : "cursor-default"
              }`}
              aria-label={
                hasProfilePhoto(contestant.image)
                  ? `View full photo of ${contestant.name}`
                  : `Profile for ${contestant.name}`
              }
            >
              <ContestantAvatar
                name={contestant.name}
                image={contestant.image}
                className="object-cover"
              />
            </button>

            <div className="flex flex-col flex-1 p-3 md:p-4">
              <p className="text-[#1E1E1E] text-sm md:text-base font-semibold mb-3 break-words">
                {contestant.name}
              </p>

              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="text-xs md:text-sm text-[#1E1E1E]">
                  Votes: <span className="font-semibold">{contestant.totalVotes}</span>
                </span>
                <button
                  onClick={() => setSelectedContestant(contestant)}
                  className="bg-[#3491E8] hover:bg-[#2563EB] text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-[3px] transition-colors cursor-pointer"
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image preview modal */}
      {previewContestant && hasProfilePhoto(previewContestant.image) && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 p-4 md:p-8"
          onClick={() => setPreviewContestant(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo of ${previewContestant.name}`}
        >
          <button
            type="button"
            onClick={() => setPreviewContestant(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-3xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <MediaImage
                src={previewContestant.image}
                alt={previewContestant.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <p className="mt-4 text-white text-lg font-semibold text-center">
              {previewContestant.name}
            </p>
          </div>
        </div>
      )}

      {/* Vote Modal */}
      <VoteModal
        isOpen={!!selectedContestant}
        onClose={() => setSelectedContestant(null)}
        contestant={selectedContestant}
        contestId={contestId}
        pricePerVote={selectedContestant?.votePrice ?? 1}
      />
    </>
  );
}
