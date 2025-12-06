import AboutBanner from "@/src/components/about/AboutBanner";
import OurTeam from "@/src/components/about/OurTeam";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto my-20 sm:px-4">
      <AboutBanner />
      <OurTeam />
    </div>
  );
}
