import TestimonialCarousel from "../components/home/TestimonialCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBanner from "../components/home/HomeBanner";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <TestimonialCarousel/>
    </div>
  );
}
