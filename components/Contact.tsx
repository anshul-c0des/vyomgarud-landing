import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-300 mb-8">
          Reach out for inquiries or demo requests.
        </p>
        <Button className="bg-accentOrange hover:scale-105">Get in Touch</Button>
      </div>
    </section>
  );
}
