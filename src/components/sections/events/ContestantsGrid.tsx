"use client";

import { useState } from "react";
import Image from "next/image";
import type { Contestant } from "./eventsData";
import VoteModal from "./VoteModal";

export default function ContestantsGrid({
  contestants,
}: {
  contestants: Contestant[];
}) {
  const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {contestants.map((contestant) => (
          <div
            key={contestant.id}
            className="relative overflow-hidden"
            style={{
              borderRadius: "16px",
              border: "3px solid rgba(150, 170, 180, 0.35)",
            }}
          >
            {/* Contestant photo */}
            <div className="relative aspect-square">
              <Image
                src={contestant.image}
                alt={contestant.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 280px"
              />

              {/* Glassmorphism bar — inset from edges */}
              <div
                className="absolute z-10"
                style={{
                  bottom: "3px",
                  left: "3px",
                  right: "3px",
                  borderRadius: "12px",
                  background: "rgba(0, 0, 0, 0.55)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  padding: "10px 10px 8px",
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
          </div>
        ))}
      </div>

      {/* Vote Modal */}
      <VoteModal
        isOpen={!!selectedContestant}
        onClose={() => setSelectedContestant(null)}
        contestantName={selectedContestant?.name ?? ""}
        totalVotes={selectedContestant?.totalVotes ?? 0}
      />
    </>
  );
}
