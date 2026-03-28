"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  contestantName: string;
  totalVotes: number;
}

export default function VoteModal({
  isOpen,
  onClose,
  contestantName,
  totalVotes,
}: VoteModalProps) {
  const router = useRouter();
  const [voteCount, setVoteCount] = useState(5);
  const pricePerVote = 1;

  if (!isOpen) return null;

  const total = voteCount * pricePerVote;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
        <div
          className="bg-white w-full md:max-w-[620px] max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-2xl p-6 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              Vote for {contestantName}
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4 4L12 12"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Contestant's Total Votes */}
          <div
            className="flex items-center justify-between rounded-xl p-4 md:p-5 mb-5"
            style={{ border: "1px solid #77777733" }}
          >
            <span className="text-base text-[#1E1E1E]">
              Contestant&apos;s Total Votes:
            </span>
            <span className="text-2xl md:text-3xl font-bold text-black">
              {totalVotes}
            </span>
          </div>

          {/* Select number of votes */}
          <div
            className="rounded-xl p-4 md:p-5 mb-5"
            style={{ border: "1px solid #77777733" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-base text-[#1E1E1E]">
                Select number of votes to send:
              </span>

              {/* Counter */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setVoteCount((prev) => Math.max(1, prev - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[#1E1E1E] hover:border-gray-400 transition-colors cursor-pointer"
                  aria-label="Decrease votes"
                >
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                    <path
                      d="M1 1H11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <span className="text-lg font-bold text-black w-6 text-center">
                  {voteCount}
                </span>
                <button
                  onClick={() => setVoteCount((prev) => prev + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[#1E1E1E] hover:border-gray-400 transition-colors cursor-pointer"
                  aria-label="Increase votes"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1V11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1 6H11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-sm text-[#1E1E1E]/70 leading-relaxed">
              Each vote costs just{" "}
              <span className="text-[#4CAF50] font-medium">
                ${pricePerVote}
              </span>
              , and you can vote as many times as possible for your candidate
            </p>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-base md:text-lg font-bold text-black">
              Total
            </span>
            <span className="text-xl md:text-2xl font-bold text-[#3491E8]">
              ${total}
            </span>
          </div>

          {/* Send Vote button */}
          <button
            onClick={() => {
              onClose();
              router.push("/events/vote-payment");
            }}
            className="w-full text-center text-white font-semibold text-base md:text-lg py-4 rounded-xl hover:opacity-90 transition-opacity cursor-pointer mb-5"
            style={{ background: "#3491E8" }}
          >
            Send Vote
          </button>

          {/* Disclaimer */}
          <div
            className="rounded-xl p-4 md:p-5"
            style={{ background: "#C1DEF820" }}
          >
            <p className="text-sm text-[#1E1E1E]/70 leading-relaxed mb-3">
              No Refunds, no portion of any vote fees or payments of any kind
              whatsoever previously provided to Kids Multicultural World shall
              be owed or be repayable to Purchaser or Voters.
            </p>
            <p className="text-sm text-[#1E1E1E]/70 leading-relaxed">
              All votes go towards{" "}
              <span className="font-bold text-[#1E1E1E]">
                AMERICA NATION MULTICULTURAL WORLD FOUNDATION ORG.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
