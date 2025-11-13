"use client"

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative mt-8 px-6 md:px-12 py-24 bg-gradient-to-b from-charcoal/95 to-charcoal/80 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ top: '15%', left: '10%' }} />
        <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ top: '40%', left: '80%' }} />
        <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ top: '70%', left: '25%' }} />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-poppins">
          Engineered for the <span className="text-orange-500">Decisive Moment</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          VyomGarud designs and deploys{" "}
          <span className="text-white font-semibold">cutting-edge, military-grade UAV systems</span> 
          with unmatched precision and <span className="text-orange-500">futuristic design</span>. Our drones combine
          stealth, durability, and advanced AI to dominate any mission scenario.
        </p>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accentOrange "></div>
    </section>
  );
}
