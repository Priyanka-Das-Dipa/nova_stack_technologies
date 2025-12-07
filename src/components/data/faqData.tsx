export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide personalized guidance, expert recommendations, and a smooth experience to help you reach your goals confidently.",
  },
  {
    id: 2,
    question: "Is this platform beginner-friendly?",
    answer:
      "Absolutely! Everything is designed to be simple, intuitive, and accessible for users at all levels.",
  },
  {
    id: 3,
    question: "How quickly can I get assistance?",
    answer:
      "Support is provided instantly in most cases, ensuring a fast and seamless workflow whenever you need help.",
  },
  {
    id: 4,
    question: "Can I get personalized suggestions?",
    answer:
      "Yes! All recommendations are tailored to your unique needs, preferences, and goals.",
  },
];