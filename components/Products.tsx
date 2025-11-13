"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
  const [windowDimensions, setWindowDimensions] = useState({   // tract current dimensions of window
    width: 0,
    height: 0,
  });

  const products = [   // demo data
    {
      id: "a77s",
      name: "Astra 77-S (A77-S)",
      title: "Persistent Surveillance & Intelligence Gathering",
      description:
        "Our flagship long-endurance UAV, engineered for covert, deep-penetration missions. The A77-S achieves 24-hour persistent flight time and features low-observable acoustic and thermal signatures. Built to withstand extreme conditions for mission reliability.",
      image: "/p1.jpg",
      features: ["24-hour endurance", "Low-observable acoustic & thermal"],
    },
    {
      id: "garudx1",
      name: "Garud-X1 'Vigilance'",
      title: "High-Speed, Modular Tactical Deployment",
      description:
        "A high-speed, multi-role tactical UAV for rapid deployment and payload versatility. G-X1 features an open-architecture bay for quick-swap sensor/strike modules, advanced flight control for aggressive maneuverability and precision target lock.",
      image: "/p2.jpg",
      features: ["High-speed deployment", "Modular payload bay"],
    },
    {
      id: "orion",
      name: "ORION Swarm Unit",
      title: "AI-Driven, Collaborative Autonomous System",
      description:
        "Not just a drone, but a node in an intelligent swarm network. ORION operates with proprietary AI for real-time collaborative decision-making, dynamic obstacle avoidance, and collective sensor fusion—reducing operator load drastically.",
      image: "/p3.jpg",
      features: ["Swarm Artificial Intelligence", "Collective sensor fusion"],
    },
  ];

  // Function to generate random positions for initial placement
  const randomPosition = () => ({
    x: Math.random() * windowDimensions.width,
    y: Math.random() * windowDimensions.height,
  });

  // Function to generate a new random position for animation
  const randomTarget = () => ({
    x: Math.random() * windowDimensions.width,
    y: Math.random() * windowDimensions.height,
  });

  const dotCount = 15;

  // Track window size after component mounts
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial window dimensions
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="products"
      className="relative px-8 py-24 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Moving Dots */}
        {Array.from({ length: dotCount }).map((_, i) => {
          const startPos = randomPosition();
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-500 rounded-full"
              style={{ left: startPos.x, top: startPos.y }}
              animate={{
                x: [
                  0,
                  windowDimensions.width - startPos.x,
                  0,
                  windowDimensions.width - startPos.x,
                ],
                y: [
                  0,
                  windowDimensions.height - startPos.y,
                  windowDimensions.height - startPos.y,
                  0,
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20 + Math.random() * 20,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Animated Diagonal Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="animatedLines"
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
                strokeOpacity="0.1"
                strokeWidth="1"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="40 40"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#animatedLines)" />
        </svg>

        {/* Subtle Noise Texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Section Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-3 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Our <span className="text-orange-500">Systems</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Precision-engineered UAV platforms built for every mission profile.
        </motion.p>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          {products.map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.7, ease: "easeOut" }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accentOrange"></div>
    </section>
  );
}
