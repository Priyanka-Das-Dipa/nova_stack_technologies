import { Service } from "../types/service.type";

interface Props {
  service: Service;
}

export const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {service.title}
      </h3>

      <p className="text-gray-600 text-[15px] leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};