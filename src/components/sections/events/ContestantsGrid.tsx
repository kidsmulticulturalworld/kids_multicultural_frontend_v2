"use client";

import { useEffect, useState } from "react";
import MediaImage from "@/components/ui/MediaImage";
import type { Contestant } from "./eventsData";
import VoteModal from "./VoteModal";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {contestants.map((contestant) => (
          <div
            key={contestant.id}
            className="flex flex-col overflow-hidden"
            style={{
              borderRadius: "16px",
              border: "3px solid rgba(150, 170, 180, 0.35)",
              background: "rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* Contestant photo — click to preview full image */}
            <button
              type="button"
              onClick={() => setPreviewContestant(contestant)}
              className="relative aspect-square block w-full cursor-zoom-in group"
              aria-label={`View full photo of ${contestant.name}`}
            >
              <MediaImage
                src={contestant.image}
                alt={contestant.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 280px"
              />
            </button>

            {/* Glassmorphism info bar — below the photo so nothing is covered */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.55)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                padding: "10px 10px 10px",
              }}
            >
              {/* Name */}
              <p className="text-white text-base md:text-lg font-semibold mb-2">
                {contestant.name}
              </p>

              {/* Votes + Vote button */}
              <div
                className="flex items-center justify-between"
                style={{
                  background: "rgba(0, 0, 0, 0.45)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  borderRadius: "8px",
                  padding: "6px 4px 6px 12px",
                }}
              >
                <div
                  className="flex items-center gap-2"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "6px",
                    padding: "4px 6px 4px 10px",
                  }}
                >
                  <span className="text-xs md:text-sm text-white/80">Total Votes:</span>
                  <span
                    className="text-sm md:text-base font-bold text-white"
                    style={{
                      background: "rgba(255, 255, 255, 0.12)",
                      borderRadius: "5px",
                      padding: "2px 8px",
                    }}
                  >
                    {contestant.totalVotes}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedContestant(contestant)}
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold transition-colors cursor-pointer"
                  style={{
                    borderRadius: "8px",
                    padding: "6px 16px",
                    fontSize: "13px",
                  }}
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image preview modal */}
      {previewContestant && (
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
