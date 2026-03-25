import Image from "next/image";

export default function AuditionInfo() {
  return (
    <section className="bg-white py-0">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          {/* ── Left column ── */}
          <div className="lg:w-1/2 lg:-mt-20 relative z-10">
            {/* Light card — overlaps hero, contains heading + description only */}
            <div className="bg-[#F5F8FC] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 mb-5 md:mb-8">
              <h2 className="font-display text-[#3491E8] text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight mb-4 md:mb-5">
                The Audition
              </h2>

              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4">
                <p>
                  We believe every child talents deserved to be highlighted. Our
                  goal is to unite a diverse Nation of kids globally. Taking Kids
                  Talent to the next level through Unity Fashion Shows, Magazine
                  features, Modeling, Acting Classes and Mentorship sections for
                  Kids ages 0 to 17 years old.
                </p>
                <p>
                  We look forward to meeting all models who will be auditioning
                  for Kids Multicultural World.
                </p>
              </div>
            </div>

            {/* Dancers photo — outside the card */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/dance-class-registration.svg"
                alt="Kids performing dance and acrobatics"
                width={560}
                height={370}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>

          {/* ── Right column — requirements on white bg ── */}
          <div className="lg:w-1/2 pt-2 md:pt-4 lg:pt-8">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
              Requirements:
            </h3>

            <ol className="list-decimal list-outside pl-5 text-sm md:text-base text-gray-700 leading-relaxed space-y-2 sm:space-y-3 mb-6 md:mb-8">
              <li>
                Age: Children between the ages of 0months to 17 years old are
                welcome to apply.
              </li>
              <li>
                Appearance: There is no specific height, size, or race that&apos;s a
                requirement, as we do not discriminate and we are looking for
                children of all shapes and sizes.
              </li>
              <li>
                Experience: Prior modeling experience is not required. We welcome
                children from all backgrounds.
              </li>
            </ol>

            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
              What to expect after registration:
            </h3>

            <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
              <p>
                Once application is submitted, you will be prompted to fulfill
                and pay a non refundable registration fee ($50).
              </p>
              <p>
                An email will be sent out to confirm your registration &amp;
                orientation details if accepted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
