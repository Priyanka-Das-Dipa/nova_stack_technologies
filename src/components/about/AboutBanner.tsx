import Image from "next/image";

export default function AboutBanner() {
  return (
    <>
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="mx-auto px-4 sm:px-10 ">
          <div className="mb-6 md:mb-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              OUR STORY
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              Building the Future of Technology, Together
            </p>
          </div>

          {/* --- Story and Who We Are Section --- */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-20 lg:space-x-12">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src="/teamwork.jpg"
                alt="Three people working together on a computer"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01]"
              />
            </div>

            {/* Text Block */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                WHO WE ARE
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are a forward-thinking technology company committed to
                delivering innovative <br /> digital solutions that transform
                businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- Mission & Vision Section --- */}
      <div className="flex flex-col md:flex-row justify-center gap-10 my-12 md:my-28 px-4 sm:px-0">
        {/* Mission Card */}
        <div className="w-full md:w-1/2 lg:w-5/12 p-12 border-2 border-blue-500 rounded-xl shadow-md transition duration-300 hover:shadow-xl hover:border-blue-600 relative ">
          <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full border-2 border-blue-500">
            {/* Rocket Icon (Placeholder for an actual SVG/icon component) */}
            <div className="w-6 h-6 text-blue-600" aria-hidden="true">
              🚀
            </div>
          </div>
          <div className="pt-4 text-center">
            <h3 className="text-xl font-bold text-gray-900 uppercase mb-2">
              MISSION
            </h3>
            <p className="text-sm text-gray-600">
              To empower businesses through intelligent, scalable, and modern
              technology solutions.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="w-full md:w-1/2 lg:w-5/12 p-12 border-2 border-teal-400 rounded-xl shadow-md transition duration-300 hover:shadow-xl hover:border-teal-500 relative">
          <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full border-2 border-teal-400">
            {/* Globe Icon (Placeholder for an actual SVG/icon component) */}
            <div className="w-6 h-6 text-teal-500" aria-hidden="true">
              🌐
            </div>
          </div>
          <div className="pt-4 text-center">
            <h3 className="text-xl font-bold text-gray-900 uppercase mb-2">
              VISION
            </h3>
            <p className="text-sm text-gray-600">
              To be a global leader in digital innovation, shaping the future of
              technology for generations to come.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
