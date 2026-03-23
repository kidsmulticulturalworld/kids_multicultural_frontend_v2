import Image from "next/image";

export default function RegistrationHero() {
  return (
    <section className="bg-white pt-6 sm:pt-8 md:pt-12 lg:pt-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 lg:px-10">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/registration-audition-image.svg"
            alt="Kids Multicultural World audition group photo"
            width={1280}
            height={500}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
