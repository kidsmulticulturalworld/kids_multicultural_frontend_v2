import Image from "next/image";

export default function ClassesTestimonial() {
  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-24 lg:py-32">
      {/* ── Decorative striped circles ── */}
      <Image
        src="/testimonials/striped-circle-left.svg"
        alt=""
        width={222}
        height={331}
        className="absolute top-0 left-0 h-full w-auto pointer-events-none"
        aria-hidden="true"
      />
      <Image
        src="/testimonials/striped-circle-right-big.svg"
        alt=""
        width={192}
        height={225}
        className="absolute bottom-8 lg:bottom-12 right-0 w-[100px] md:w-[140px] lg:w-48 pointer-events-none"
        aria-hidden="true"
      />
      <Image
        src="/testimonials/striped-circle-right-small.svg"
        alt=""
        width={102}
        height={119}
        className="absolute top-0 right-0 w-[60px] md:w-[80px] lg:w-[102px] pointer-events-none"
        aria-hidden="true"
      />
      <Image
        src="/testimonials/striped-circle-bottom.svg"
        alt=""
        width={139}
        height={85}
        className="absolute bottom-0 right-36 lg:right-52 w-[80px] md:w-[100px] lg:w-[139px] pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="flex flex-row items-center gap-6 md:gap-12 lg:gap-16">
          {/* Scalloped photo frame — separated image + frame */}
          <div className="relative shrink-0 w-[140px] h-[139px] md:w-[200px] md:h-[199px] lg:w-[232px] lg:h-[231px]">
            {/* Swappable photo clipped to scalloped shape */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 232 231"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <clipPath id="scallop-clip">
                  <path d="M105.816 8.88599C109.937 1.03793 121.174 1.03794 125.295 8.88599L125.967 10.1653C127.562 13.2031 131.673 13.7683 134.028 11.2737L135.021 10.2229C141.106 3.77776 151.925 6.80908 153.776 15.4778L154.078 16.8909C154.795 20.2466 158.601 21.8999 161.543 20.1331L162.781 19.3889C170.38 14.8248 179.98 20.6633 179.424 29.51L179.333 30.9524C179.118 34.3767 182.337 36.9957 185.646 36.0881L187.039 35.7053C195.588 33.3604 203.257 41.5722 200.334 49.9407L199.857 51.3049C198.726 54.5444 201.12 57.9346 204.551 57.9534L205.995 57.9612C214.859 58.0096 220.029 67.9855 214.957 75.2551L214.13 76.4407C212.166 79.2547 213.556 83.1649 216.855 84.1086L218.244 84.5061C226.766 86.9442 229.052 97.9448 222.207 103.576L221.091 104.494C218.441 106.674 218.725 110.815 221.646 112.614L222.877 113.371C230.425 118.018 229.659 129.228 221.548 132.804L220.226 133.387C217.086 134.771 216.242 138.834 218.57 141.355L219.551 142.416C225.566 148.928 221.802 159.515 213.027 160.77L211.598 160.974C208.201 161.46 206.292 165.144 207.854 168.199L208.511 169.487C212.546 177.379 206.066 186.559 197.278 185.4L195.846 185.21C192.444 184.762 189.611 187.795 190.291 191.158L190.577 192.574C192.333 201.263 183.617 208.354 175.468 204.866L174.14 204.298C170.985 202.948 167.439 205.105 167.187 208.527L167.08 209.968C166.427 218.808 156.121 223.284 149.215 217.728L148.089 216.822C145.415 214.671 141.419 215.791 140.252 219.018L139.761 220.376C136.747 228.712 125.616 230.242 120.465 223.029L119.625 221.853C117.631 219.06 113.48 219.06 111.486 221.853L110.646 223.029C105.495 230.242 94.3646 228.712 91.3506 220.376L90.8594 219.018C89.6927 215.791 85.696 214.671 83.0225 216.822L81.8965 217.728C74.99 223.284 64.6846 218.808 64.0312 209.968L63.9248 208.527C63.6719 205.105 60.1263 202.948 56.9717 204.298L55.6436 204.866C47.494 208.354 38.7781 201.263 40.5342 192.574L40.8203 191.158C41.5001 187.795 38.6674 184.762 35.2656 185.21L33.833 185.4C25.0449 186.559 18.5655 177.379 22.6006 169.487L23.2578 168.199C24.8196 165.144 22.9104 161.46 19.5137 160.974L18.084 160.77C9.30906 159.515 5.54582 148.928 11.5605 142.416L12.541 141.355C14.8693 138.834 14.0254 134.771 10.8857 133.387L9.56348 132.804C1.45249 129.228 0.685858 118.018 8.23438 113.371L9.46484 112.614C12.3866 110.815 12.6693 106.674 10.0195 104.494V104.493L8.9043 103.576C2.05892 97.9448 4.34486 86.9442 12.8672 84.5061L14.2559 84.1086C17.5549 83.1649 18.9449 79.2547 16.9814 76.4407L16.1543 75.2551C11.0826 67.9855 16.2523 58.0096 25.1162 57.9612L26.5605 57.9534C29.9918 57.9346 32.3853 54.5444 31.2539 51.3049L30.7773 49.9407C27.8546 41.5722 35.5238 33.3604 44.0723 35.7053L45.4658 36.0881C48.7747 36.9957 51.9935 34.3767 51.7783 30.9524L51.6875 29.51C51.1309 20.6633 60.7313 14.8248 68.3301 19.3889L69.5684 20.1331C72.5099 21.8999 76.3168 20.2466 77.0332 16.8909L77.335 15.4778C79.1859 6.80907 90.0053 3.77777 96.0908 10.2229L97.083 11.2737C99.4388 13.7683 103.549 13.2031 105.145 10.1653L105.816 8.88599Z" />
                </clipPath>
              </defs>
              <image
                href="/to-vote-for.jpg"
                width="232"
                height="231"
                clipPath="url(#scallop-clip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>

            {/* Gradient scalloped border frame overlay */}
            <Image
              src="/testimonials/testimonial-scalloped-frame.svg"
              alt=""
              width={232}
              height={231}
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Quote + attribution */}
          <div className="flex-1 text-left">
            <blockquote className="text-base md:text-2xl lg:text-[28px] font-bold text-heading leading-snug mb-4 md:mb-6">
              &ldquo;Since joining Kids Multicultural World, my daughter Mia
              lights up every room she walks into! She now models with so much
              pride!&rdquo;
            </blockquote>

            <p className="text-sm md:text-base lg:text-lg">
              <span className="text-primary font-semibold">– Sophia A.,</span>{" "}
              <span className="text-body">(Parent)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
