import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="order-2 md:order-1 max-w-lg mx-auto md:max-w-full md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1f2937] leading-tight mb-6">
              Start with a plan <br className="hidden sm:inline" />
              and finish with results
            </h1>

            {/* Body Copy (Lorem Ipsum) */}
            <p className="text-lg text-gray-500 mb-8 max-w-md">
              We are a forward-thinking technology company committed to
              delivering innovative digital solutions that transform businesses
              worldwide.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mb-4"
            >
              Get started for free
            </button>

            {/* Trial Note/Checklist Item */}
            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>No credit card needed, free 14-day trial</span>
            </div>
          </div>
          <div className="order-1 md:order-2 relative w-full aspect-4/3 max-w-lg mx-auto md:max-w-full md:mx-0">
            <Image
              src="/banner.png"
              alt="Man smiling while looking at a laptop with charts"
              layout="fill"
              objectFit="contain"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
