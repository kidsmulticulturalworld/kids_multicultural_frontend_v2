import Image from "next/image";

export default function MagazineCTA() {
  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      {/* Full-width divider */}
      <div className="border-t border-gray-200 mb-14 md:mb-18 lg:mb-24" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-10">
        {/* Outer light blue frame */}
        <div className="bg-[#ACD6FF] rounded-[24px] lg:rounded-[32px] p-5 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-3 md:gap-4 lg:gap-5 min-h-[280px] md:min-h-[320px] lg:min-h-[400px]">
            {/* Left — Dark card */}
            <div className="bg-[#0D0D0D] rounded-[20px] lg:rounded-[28px] p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-white text-2xl md:text-3xl lg:text-[36px] lg:leading-tight mb-6 md:mb-8">
                  Get featured in our upcoming magazines
                </h2>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
                  <span className="inline-block bg-[#333333] text-white text-sm px-4 py-2 rounded-full">
                    Cultural stories
                  </span>
                  <span className="inline-block bg-[#333333] text-white text-sm px-4 py-2 rounded-full">
                    Kid Spotlights
                  </span>
                </div>
              </div>

              {/* Get Started button */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition-colors self-start"
              >
                Get Started
                <Image
                  src="/dashboard/icons/arrow-white-blue-background.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Right — Blue area with magazine collage */}
            <div className="relative bg-[#3B9AE8] rounded-[20px] lg:rounded-[28px] flex items-center justify-center min-h-[300px] md:min-h-[350px]">
              <Image
                src="/magazine-cta/stacked-image.svg"
                alt="Magazine covers"
                width={704}
                height={371}
                className="w-[90%] md:w-[85%] lg:w-[90%] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
