import TestimonialCarousel from "../components/home/TestimonialCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBanner from "../components/home/HomeBanner";
import Service from "../components/home/Service";
import FAQSection from "../components/home/FAQSection";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <TestimonialCarousel/>
      <Service/>
      <FAQSection />
    </div>
  );
}
