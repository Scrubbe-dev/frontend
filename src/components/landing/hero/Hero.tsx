import Image from "next/image";
import BackgroundAnimation from "./BackgroundAnimation";

const Hero: React.FC = () => {
  return (
    <section className="w-full mx-auto relative bg-[#d6f2ff] h-auto max-h-[650px] flex flex-col overflow-hidden">
      {/* Background Animation - positioned absolutely to cover the section */}
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation />
      </div>

      {/* Content container with flex layout to push image to bottom */}
      <article className="flex flex-col container mx-auto px-4 pt-12 relative z-10">
        {/* Text content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Built for Scale, Trained for
            <br />
            <span className="text-blue-600 ml-2">Speed</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm sm:text-base md:text-lg">
            Scrubbe uses Large Language Models to explain risks, power
            fraud-aware authentication, and automate response all built for
            modern digital teams securing users at scale
          </p>

          <div className="flex space-x-4 mb-8">
            {/* Primary Button */}
            <button className="text-sm sm:text-base bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md border border-blue-600 hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Start Free Trial
            </button>

            {/* Secondary Button */}
            <button className="text-sm sm:text-base  text-blue-600 px-3 py-2 sm:px-4 sm:py-2 rounded-md border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200">
              See Demo
            </button>
          </div>
        </div>

        {/* Image container that sticks to bottom */}
        <div className="mt-auto w-full max-w-4xl mx-auto px-2 sm:px-0">
          <div className="shadow-2xl rounded-xl overflow-hidden">
            <Image
              src="hero-image.svg"
              alt="Scrubbe Dashboard Preview"
              width={507}
              height={342}
              quality={90}
              layout="responsive"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
