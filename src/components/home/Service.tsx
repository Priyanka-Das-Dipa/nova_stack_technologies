import { services } from "../data/service";
import { ServiceCard } from "./ServiceCard";

export default function Service() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Services
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            We provide high-quality support designed to help you achieve your
            goals effortlessly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
