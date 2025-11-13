import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-8 py-16 sm:py-24 bg-bg-dark border-t-2 border-accentOrange"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side - Text */}
        <div className="text-center lg:text-left">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest font-black text-white mb-4">
            INITIATE MISSION DIALOGUE
          </h2>

          <p className="text-base sm:text-lg text-gray-400 font-inter mb-8 lg:mb-12">
            Contact our team of specialists today to discuss how VyomGarud systems can be integrated into your operation. All inquiries are strictly confidential.
          </p>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-4 sm:space-y-6">
          {/* Two-column Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 sm:p-4 bg-charcoal border border-gray-700/50 focus:ring-1 focus:ring-accentOrange focus:border-accentOrange text-white rounded-sm w-full"
            />
            <input
              type="email"
              placeholder="Organization Email"
              className="p-3 sm:p-4 bg-charcoal border border-gray-700/50 focus:ring-1 focus:ring-accentOrange focus:border-accentOrange text-white rounded-sm w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Organization / Agency"
              className="p-3 sm:p-4 bg-charcoal border border-gray-700/50 focus:ring-1 focus:ring-accentOrange focus:border-accentOrange text-white rounded-sm w-full"
            />
            <input
              type="text"
              placeholder="Mission Subject"
              className="p-3 sm:p-4 bg-charcoal border border-gray-700/50 focus:ring-1 focus:ring-accentOrange focus:border-accentOrange text-white rounded-sm w-full"
            />
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Briefing Request / Operational Requirements (Confidential)"
            rows={5}
            className="p-3 sm:p-4 w-full bg-charcoal border border-gray-700/50 focus:ring-1 focus:ring-accentOrange focus:border-accentOrange text-white resize-none rounded-sm"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 sm:py-4 text-lg sm:text-xl font-bold uppercase tracking-widest bg-accentOrange hover:bg-accentOrange/90 rounded-none transition-transform duration-300 hover:scale-[1.01]"
          >
            SUBMIT BRIEFING
          </Button>
        </form>
      </div>
    </section>
  );
}
