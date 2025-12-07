"use client";

import React from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonials } from "../data/testimonial";
import { TestimonialCard } from "./TestimonialCard";
const TestimonialCarousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="pt-8">
        <ul className="m-0 p-0 flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-indigo-500 transition-colors cursor-pointer"></div>
    ),
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Our Happy Customers
          </h2>
          <p className="mt-3 text-xl text-gray-500 max-w-2xl mx-auto">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;