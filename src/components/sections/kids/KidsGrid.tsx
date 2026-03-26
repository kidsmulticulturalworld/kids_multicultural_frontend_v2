"use client";

import { useState } from "react";
import KidCard from "./KidCard";
import KidModal from "./KidModal";
import type { Kid } from "./kidsData";

interface KidsGridProps {
  kids: Kid[];
  perPage?: number;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];

    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    // Pages around current
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1 mt-12">
      {getPageNumbers().map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="w-9 h-9 flex items-center justify-center text-sm text-gray-500"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${
              currentPage === page
                ? "bg-[#3491E8] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-current={currentPage === page ? "page" : undefined}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        )
      )}
    </nav>
  );
}

export default function KidsGrid({ kids, perPage = 18 }: KidsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKid, setSelectedKid] = useState<Kid | null>(null);
  const totalPages = Math.ceil(kids.length / perPage);

  const startIdx = (currentPage - 1) * perPage;
  const currentKids = kids.slice(startIdx, startIdx + perPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:gap-x-8 lg:gap-y-10 justify-items-center px-4 sm:px-0">
        {currentKids.map((kid) => (
          <KidCard
            key={kid.id}
            id={kid.id}
            name={kid.name}
            age={kid.age}
            image={kid.image}
            onViewProfile={() => setSelectedKid(kid)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {selectedKid && (
        <KidModal kid={selectedKid} onClose={() => setSelectedKid(null)} />
      )}
    </div>
  );
}
