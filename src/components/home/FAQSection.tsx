import { faqs } from "../data/faqData";
import { FAQItem } from "./FAQItem";

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Find answers to the questions we hear the most from our users.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;