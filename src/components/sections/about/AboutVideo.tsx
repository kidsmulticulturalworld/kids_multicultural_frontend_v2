import Image from "next/image";

export default function AboutVideo() {
  return (
    <section className="relative bg-white py-12 lg:py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-10">
        {/* Video thumbnail with play button */}
        <button
          className="relative block w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          aria-label="Play video"
        >
          <Image
            src="/about-us.svg"
            alt="Kids Multicultural World video"
            width={1100}
            height={620}
            className="w-full h-auto object-cover"
            loading="lazy"
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-md group-hover:bg-white group-hover:scale-110 transition-all duration-200">
              <svg
                className="w-6 h-6 lg:w-7 lg:h-7 text-gray-700 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* ── Decorative striped circle — bottom right ── */}
      <div className="absolute -bottom-8 -right-6 lg:-bottom-10 lg:-right-8 w-40 lg:w-[240px] pointer-events-none z-0">
        <Image
          src="/about-us-striped-circle.svg"
          alt=""
          width={168}
          height={251}
          className="w-full h-auto -scale-x-100"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </section>
  );
}
