interface KidCardProps {
  name: string;
  age: number;
  image: string;
  id: string;
  onViewProfile?: () => void;
}

const SCALLOP_PATH =
  "M22.6208 3.27441C25.7555 0.241889 30.7302 0.24189 33.8649 3.27441C35.2141 4.57954 37.0903 5.18868 38.9489 4.92578C43.2674 4.31497 47.292 7.23929 48.0456 11.5352C48.3699 13.3841 49.5299 14.9795 51.1882 15.8594C55.0408 17.9036 56.578 22.6354 54.6628 26.5537C53.8384 28.2402 53.8384 30.2129 54.6628 31.8994C56.578 35.8177 55.0408 40.5496 51.1882 42.5938C49.5299 43.4736 48.3699 45.069 48.0456 46.918C47.292 51.2138 43.2674 54.1382 38.9489 53.5273C37.0903 53.2644 35.2141 53.8736 33.8649 55.1787C30.7302 58.2112 25.7555 58.2112 22.6208 55.1787C21.2716 53.8736 19.3955 53.2645 17.5368 53.5273C13.2183 54.1382 9.19371 51.2138 8.44012 46.918C8.11579 45.069 6.9558 43.4736 5.29755 42.5938C1.44491 40.5496 -0.0923247 35.8177 1.82294 31.8994C2.64734 30.2129 2.64734 28.2402 1.82294 26.5537C-0.0923258 22.6354 1.44491 17.9036 5.29755 15.8594C6.9558 14.9795 8.11579 13.3841 8.44012 11.5352C9.19371 7.23929 13.2183 4.31497 17.5368 4.92578C19.3955 5.18868 21.2716 4.57954 22.6208 3.27441Z";

export default function KidCard({ name, age, image, id, onViewProfile }: KidCardProps) {
  const gradientId = `kid-gradient-${id}`;
  const clipId = `kid-scallop-clip-${id}`;

  return (
    <div className="flex flex-col items-center w-full max-w-[300px]">
      {/* Scalloped frame with image */}
      <div className="relative w-full aspect-[300/310]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="-2 -2 60 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="28.2429"
              y1="-0.773438"
              x2="28.2429"
              y2="59.2266"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0EC1B8" />
              <stop offset="0.485577" stopColor="#BF12BF" />
              <stop offset="1" stopColor="#15BC3C" />
            </linearGradient>
            <clipPath id={clipId}>
              <path d={SCALLOP_PATH} />
            </clipPath>
          </defs>
          {/* Kid image clipped to scallop shape */}
          <image
            href={image}
            x="0"
            y="0"
            width="56"
            height="58"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${clipId})`}
          />
          {/* Gradient border stroke */}
          <path
            d={SCALLOP_PATH}
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Age badge */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#3491E8] text-white text-xs sm:text-sm font-bold px-3 sm:px-5 py-1 sm:py-1.5 rounded-full border-2 border-white shadow-sm">
          AGE: {age}
        </div>
      </div>

      {/* Name */}
      <p className="mt-2 sm:mt-3 text-sm sm:text-base font-bold text-gray-900 text-center">
        {name}
      </p>

      {/* View full profile button */}
      <button
        type="button"
        onClick={onViewProfile}
        className="mt-2 px-6 py-2 bg-[#3491E8] hover:bg-[#2a7bd4] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
      >
        View full profile
      </button>
    </div>
  );
}
