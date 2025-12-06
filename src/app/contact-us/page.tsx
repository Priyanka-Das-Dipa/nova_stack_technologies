import ContactForm from "@/src/components/contact/ContactForm";

export default function ContactUsPage() {
  return (
    <div className="container mx-auto my-24  px-4">
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center py-5">Get in Touch With Us</h1>
        <p className="text-lg md:text-xl font-medium text-center pb-10">
          Have questions or need support? We&rsquo;re here to help. Fill out the form
          below, and our team will get back to you shortly.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
