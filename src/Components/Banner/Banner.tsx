
import bannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-8 lg:gap-16">

        {/* Left - Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">

          {/* Heading */}
          <h1 className="leading-tight">
            <span className="text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
              Build Your Ideal
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#7C3AED] via-[#D81B7E] to-[#FF5722] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#475569] sm:text-base md:mx-0 lg:text-lg">
            Explore frontend, backend, database, and tooling options, <br />
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex justify-center gap-3 md:justify-start">
            <button className="rounded-xl bg-gradient-to-r from-[#EC4899] to-[#F97316] px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 sm:px-6 sm:text-base">
              Explore Technologies
            </button>

            <button className="rounded-xl border border-gray-400 px-4 py-3 text-sm font-semibold text-[#374151] transition duration-300 hover:scale-105 sm:px-6 sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Right - Banner Image */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <img
            src={bannerImg}
            alt="Development stack illustration"
            className="w-full max-w-sm object-contain sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

