"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    {
      id: "a77s",
      name: "Astra 77-S (A77-S)",
      title: "Persistent Surveillance & Intelligence Gathering",
      description:
        "Our flagship long-endurance UAV, engineered for covert, deep-penetration missions. The A77-S achieves 24-hour persistent flight time and features low-observable acoustic and thermal signatures. Built to withstand extreme conditions for mission reliability.",
      image: "/p1.jpg",
      features: [
        "24-hour endurance",
        "Low-observable acoustic & thermal",
      ],
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

  return (
    <section
      id="products"
      className="relative px-8 py-24 bg-gradient-to-b from-charcoal/95 to-charcoal/85 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-3 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-orange-500 ">Systems</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Precision-engineered UAV platforms built for every mission profile.
        </motion.p>

    {/* Product Grid */}
    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
      {products.map((p) => (
        <motion.div key={p.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <ProductCard product={p} />
        </motion.div>
      ))}
    </motion.div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accentOrange "></div>
    </section>
  );
}
