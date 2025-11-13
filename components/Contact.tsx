import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Mission?</h2>
        <p className="text-gray-300 mb-8">
        Contact our team of specialists today to discuss how VyomGarud systems can be integrated into your operation. All inquiries are strictly confidential.
        </p>
        <Button className="bg-accentOrange hover:scale-105">Initiate Contact</Button>
      </div>
    </section>
  );
}
