import Image from "next/image";
import { magazineData } from "./magazineData";

export default function MagazineGrid() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {magazineData.map((item, index) => (
            <div key={item.id} className="flex flex-col bg-gray-100 p-4 pb-5">
              {/* Cover image */}
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

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-heading mb-1.5 px-4">
                {item.title}
              </h3>

              {/* Description */}
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
