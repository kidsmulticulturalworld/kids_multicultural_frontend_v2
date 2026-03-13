import Image from "next/image";
import type { ClassData } from "./classesData";

interface ClassCardProps {
  data: ClassData;
}

export default function ClassCard({ data }: ClassCardProps) {
  const textSide = (
    <div className="flex flex-col p-4 md:p-5 lg:p-6 h-full">
      <div className="bg-white rounded-2xl lg:rounded-3xl border border-gray-100 p-5 md:p-6 lg:p-8 flex-1 flex flex-col justify-center">
        {/* Title */}
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-heading mb-3">
          {data.title} ({data.ageRange}):
        </h3>

        {/* Description */}
        <p className="text-sm md:text-sm lg:text-base text-black leading-relaxed mb-5 whitespace-pre-line">
          {data.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-5">
          <span className="text-sm font-semibold text-heading">Price:</span>
          <span className="text-2xl lg:text-3xl font-bold text-primary">
            ${data.price}
          </span>
          <span className="text-sm text-gray-500">/month</span>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-[#3491E8] text-white text-sm font-semibold px-5 py-3.5 rounded-lg hover:bg-[#2b7ed4] transition-colors w-full md:w-auto md:self-start"
        >
          Enroll for this program
          <Image
            src="/dashboard/icons/arrow.svg"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );

  const imageSide = (
    <div className="relative pt-6 px-3 pb-3 md:pt-7 md:px-4 md:pb-4 lg:pt-8 lg:px-5 lg:pb-5">
      {/* Badge — SVG asset if available, otherwise generated pill */}
      <div className="absolute top-6 left-3 md:top-7 md:left-4 lg:top-8 lg:left-5 z-10">
        {data.badgeImage ? (
          <Image
            src={data.badgeImage}
            alt={data.badgeLabel}
            width={264}
            height={60}
            className="w-40 md:w-[200px] lg:w-60 h-auto"
          />
        ) : (
          <span
            className="inline-block px-5 py-1.5 rounded-full text-sm md:text-base font-semibold whitespace-nowrap"
            style={{
              backgroundColor: data.badgeColor,
              color: data.badgeTextColor,
            }}
          >
            {data.badgeLabel}
          </span>
        )}
      </div>

      {/* Image — fills the container, no border */}
      <Image
        src={data.image}
        alt={data.title}
        width={600}
        height={500}
        className="w-full h-auto lg:h-full object-cover rounded-xl lg:rounded-2xl"
        sizes="(max-width: 768px) 90vw, 500px"
      />
    </div>
  );

  return (
    <div
      id={data.id}
      className="rounded-[28px] lg:rounded-4xl overflow-hidden scroll-mt-24"
      style={{ backgroundColor: data.cardBg }}
    >
      <div
        className={`grid grid-cols-1 lg:min-h-[500px] ${
          data.reversed
            ? "lg:grid-cols-[58fr_42fr]"
            : "lg:grid-cols-[42fr_58fr]"
        }`}
      >
        {/* Mobile/Tablet: always text first, image second. Desktop: respect reversed */}
        <div className={`${data.reversed ? "lg:order-2" : ""}`}>
          {textSide}
        </div>
        <div className={`${data.reversed ? "lg:order-1" : ""}`}>
          {imageSide}
        </div>
      </div>
    </div>
  );
}
