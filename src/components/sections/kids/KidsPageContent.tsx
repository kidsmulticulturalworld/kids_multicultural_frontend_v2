"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import KidsGrid from "@/components/sections/kids/KidsGrid";
import { userService } from "@/lib/api/services";
import { parseKidsViewResponse } from "@/lib/api/data-mappers";

export default function KidsPageContent() {
  const [apiPage, setApiPage] = useState(1);

  const { data: raw, isLoading, isError } = useQuery({
    queryKey: ["kids-view", apiPage],
    queryFn: () => userService.getKidsView({ page: apiPage }),
  });

  const { kids, page, pages } = parseKidsViewResponse(raw);

  if (isLoading && kids.length === 0) {
    return (
      <p className="text-center text-sm text-gray-500 py-12">Loading members\u2026</p>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-sm text-red-600 py-12">
        We couldn\u2019t load this directory. Please try again later.
      </p>
    );
  }

  if (kids.length === 0) {
    return (
      <p className="text-center text-sm text-gray-500 py-12">
        No members to show yet.
      </p>
    );
  }

  return (
    <KidsGrid
      kids={kids}
      pagination={{
        page,
        totalPages: pages,
        onPageChange: (p) => {
          setApiPage(p);
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
      }}
    />
  );
}
