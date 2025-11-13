"use client"

import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ProductCard({ title, description, icon }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-charcoal/90 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}
