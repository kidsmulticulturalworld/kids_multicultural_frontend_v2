"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { magazineService } from "@/lib/api/services";
import { parseMagazineListResponse } from "@/lib/api/data-mappers";

export default function MagazineGrid() {
  const { data: raw, isLoading, isError } = useQuery({
    queryKey: ["magazine-view"],
    queryFn: () => magazineService.getMagazines(),
  });

  const items = parseMagazineListResponse(raw);

  if (isLoading) {
    return (
      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
          <p className="text-sm text-gray-500">Loading magazines\u2026</p>
        </div>
      </section>
    );
  }

  if (isError || items.length === 0) {
    return (
      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
          <p className="text-sm text-gray-500">
            No magazines to show right now. Please check back soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={item.id} className="flex flex-col bg-gray-100 p-4 pb-5">
              <div className="overflow-hidden mb-4">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </div>

              <h3 className="text-base md:text-lg font-bold text-heading mb-1.5 px-4">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed px-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
