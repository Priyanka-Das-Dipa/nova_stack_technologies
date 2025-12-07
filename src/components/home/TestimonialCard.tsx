import Image from "next/image";
import React from "react";
import { Testimonial } from "../types/testimonial.type";

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  // Padding for the card content + margin to separate slides in the carousel
  <div className="p-4 sm:p-6 md:p-8 m-2">
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full transition duration-300 hover:shadow-xl">
      {/* Quote Icon */}
      <span className="text-4xl font-serif text-gray-300 opacity-70 mb-4 inline-block transform -translate-y-2">
        &ldquo;
      </span>
      {/* Quote Text */}
      <p className="text-gray-700 leading-relaxed flex-grow text-[15px]">
        {testimonial.quote}
      </p>

      {/* Separator */}
      <div className="w-full h-px bg-gray-100 my-6"></div>

      {/* Customer Info */}
      <div className="flex items-center mt-auto">
        {/* Avatar */}
        <Image
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          width={500}
          height={500}
          className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-indigo-100"
        />
        {/* Name and Title */}
        <div>
          <p className="font-semibold text-gray-900 text-base">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-500">
            {testimonial.socialHandle || testimonial.title}
          </p>
        </div>
      </div>
    </div>
  </div>
);
