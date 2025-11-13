"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const animatedLines = [
  "Sub-meter accuracy.",
  "Unbreakable data link.",
  "Autonomy where human intervention ends.",
];
const headingWords = ["ABSOLUTE ", "AIR", "DOMINANCE."];
export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const controls = useAnimation();

  // Typing effect for subtext lines
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const line = animatedLines[currentLine];
    let i = 0;

    const type = () => {
      if (i <= line.length) {
        setDisplayedText(line.slice(0, i));
        i++;
        timeout = setTimeout(type, 75);
      } else {
        // Pause before next line
        timeout = setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % animatedLines.length);
        }, 1500);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [currentLine]);

  useEffect(() => {
    if (wordIndex < headingWords.length) {
      const timeout = setTimeout(() => {
        controls.start({ opacity: 1, y: 0 });
        setWordIndex(wordIndex + 1);
      }, 400); // delay between words
      return () => clearTimeout(timeout);
    }
  }, [wordIndex, controls]);

  
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center px-6 sm:px-8 overflow-hidden bg-charcoal"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/hero3.mp4"
      />

      {/* Top & Bottom Fade */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-charcoal" />

       {/* Content */}
       <div className="relative z-20 text-center max-w-3xl flex flex-col items-center gap-6">
        {/* H1 with word-by-word effect */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-tight flex flex-wrap justify-center gap-2">
          {headingWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={wordIndex > idx ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={`
                ${word === "DOMINANCE." ? "text-accentOrange glow" : ""}
                ${word === "AIR" ? "ml-4" : ""} // extra spacing before AIR
              `}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Animated Subtext */}
        <p className="text-lg mt-4 sm:text-xl md:text-2xl font-mono text-accentOrange min-h-[2rem]">
          {displayedText}
          <span className="blinking-cursor">|</span>
        </p>

        {/* CTA Button */}
        <button className="mt-8 px-8 py-3 bg-transparent border-2 border-white text-white font-semibold  transition-transform transform hover:scale-105 hover:shadow-[0_0_50px_5px_rgba(255,165,0,0.7)] hover:bg-gradient-to-r hover:from-[#ffb164] hover:to-[#fe8827] hover:border-transparent">
          EXPLORE SYSTEMS
        </button>
      </div>
      {/* Blinking cursor styling */}
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          background-color: currentColor;
          animation: blink 1s steps(1) infinite;
          margin-left: 1px;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
        .glow{
          text-shadow: 0 0 8px #ff7f00, 0 0 16px #ff7f00, 0 0 24px #ff7f00;
        }
      `}</style>
    </section>
  );
}
