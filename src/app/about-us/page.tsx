import OurTeam from "@/src/components/about/OurTeam";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto my-24 px-4">
      <div className="mb-5">
        <h1 className="text-2xl md:text-5xl font-bold text-center py-5">
          About NovaStack Technologies
        </h1>
        <p className="text-lg md:text-xl font-medium text-center pb-10">
          We are a forward-thinking technology company committed to delivering
          innovative <br /> digital solutions that transform businesses worldwide.
        </p>
      </div>
      <OurTeam/>
    </div>
  );
}
