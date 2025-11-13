"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";

export default function Highlights() {   // demo data
  const bullets = [
    "Built for Extremes | Engineered for zero downtime in extreme operational environments.",
    "Secure Link | End-to-end data link security and proprietary anti-jamming protocols.",
    "Pinpoint Accuracy | Autonomous navigation and sensor systems deliver real-time locations.",
  ];

  return (
    <section
      id="highlights"
      className="relative px-8 py-24 bg-charcoal overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accentOrange rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Diagonal lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#FF7F00"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-4xl sm:text-5xl font-montserrat uppercase tracking-widest font-black text-white">
          VYOMGARUD CORE ADVANTAGE
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
            hidden: {},
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {bullets.map((b, idx) => (
            <Highlight key={idx} text={b} idx={idx} />
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accentOrange" />
    </section>
  );
}
