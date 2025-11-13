"use client"

import { motion } from "framer-motion";

interface HighlightProps {
    text: string;
    idx: number
  }

export default function Highlight({ text, idx }: HighlightProps) {
  // Split text into descriptor and slogan
  const [descriptor, slogan] = text.split("|").map(str => str.trim());

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5, ease: "easeOut" } },
      }}
      className="p-6 bg-charcoal/50 border border-gray-700/50 text-center relative overflow-hidden rounded-sm transition-colors duration-300 group hover:border-accentOrange hover:shadow-lg"
    >
      {/* Animated Orange Corner/Flare */}
      <span className="absolute top-0 right-0 w-1 h-12 bg-accentOrange opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

      {/* Number */}
      <span className="text-6xl sm:text-7xl font-black text-accentOrange mb-4 block">
        0{idx + 1}
      </span>

      {/* Descriptor */}
      <h3 className="text-white uppercase font-bold tracking-widest mb-1">
        {descriptor}
      </h3>

      {/* Slogan */}
      <p className="text-lg text-gray-400 font-inter">{slogan}</p>
    </motion.div>
  );
}
