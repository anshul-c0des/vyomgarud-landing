"use client"

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center px-8">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/hero.mp4"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-xl"
      >
        <h1 className="text-5xl font-bold font-poppins mb-4">
          VyomGarud
        </h1>
        <p className="text-xl mb-6">
          Futuristic, Military-Grade UAV Systems
        </p>
        <button className="bg-accentOrange px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
