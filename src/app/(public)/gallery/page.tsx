import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery",
  description: "Moments from Kids Multicultural World events and community.",
};

const shots = [
  { src: "/to-vote-for.jpg", caption: "Runway smiles" },
  { src: "/dance-class-registration.svg", caption: "Dance & shine" },
  { src: "/ongoing-contest-image.svg", caption: "Contest energy" },
  { src: "/registration-audition-image.svg", caption: "Audition day" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-[#E8F4FF] to-[#F5F0FF]">
      <div className="max-w-[1100px] mx-auto px-5 py-12 lg:py-16">
        <p className="text-center text-sm font-semibold text-[#3491E8] tracking-wide uppercase mb-2">
          Smile folder
        </p>
        <h1 className="font-display text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3F66] mb-3">
          Our colorful gallery
        </h1>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10 text-sm sm:text-base">
          A peek at shows, classes, and big grins from our community. New photos
          land here after each season!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {shots.map((item) => (
            <figure
              key={item.src}
              className="group rounded-3xl overflow-hidden border-4 border-white shadow-lg bg-white rotate-0 hover:-rotate-1 transition-transform duration-300"
            >
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-center text-sm font-medium text-[#1F3F66]">
                {item.caption} ✨
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-full bg-[#3491E8] text-white font-semibold px-8 py-3 text-sm hover:bg-[#2b7ed0] transition-colors"
          >
            See upcoming events
          </Link>
        </div>
      </div>
    </div>
  );
}
