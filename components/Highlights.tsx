"use client"

import { motion } from "framer-motion";
import Highlight from "./Highlight";

export default function Highlights() {
  const bullets = [
    "Built for Extremes | Unrivaled Reliability",
    "Secure Link | Unbreakable Communication",
    "Pinpoint Accuracy | Absolute Positioning",
  ];

  return (
    <section id="highlights" className="px-8 py-24 bg-charcoal">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-montserrat uppercase tracking-widest font-black text-white">
          VYOMGARUD CORE ADVANTAGE
        </h2>

        {/* Staggered Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
            hidden: {},
          }}
        >
          {bullets.map((b, idx) => (
            <Highlight key={idx} text={b} idx={idx} />
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accentOrange "></div>
    </section>
  );
}
