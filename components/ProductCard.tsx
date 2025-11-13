"use client";

import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";

type Product = {
  id: string;
  title: string;
  name: string;
  description: string;
  image?: string;
  features?: string[];
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { title, name, description, image, features } = product;
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({   // stores tranformations
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0,
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {   // when mouse is hovered
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setTransform({
      rotateY: (px - 0.5) * 6,
      rotateX: -(py - 0.5) * 6,
      translateX: (px - 0.5) * 5,
      translateY: (py - 0.5) * 5,
    });
  };

  const handleLeave = () =>   // resets the transformations
    setTransform({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative rounded-md p-6 min-h-[400px] flex flex-col justify-between overflow-hidden bg-[rgba(20,20,20,0.6)] backdrop-blur-md border border-gray-700/60 hover:border-amber-600 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,123,0,0.25)]"
      whileHover={{ scale: 1.02 }}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translate3d(${transform.translateX}px, ${transform.translateY}px, 0)`,
      }}
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

      {/* Image */}
      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-5">
        {image ? (
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={`${name} image`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover rounded-lg"
            />
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No image
          </div>
        )}
      </div>

      {/* Titles */}
      <div>
        <h3 className="text-xl font-semibold text-white tracking-wide leading-tight">
          {name}
        </h3>
        <p className="text-sm bg-gradient-to-r from-orange-400 to-amber-500 line-clamp-1 bg-clip-text text-transparent font-medium mt-1">
          {title}
        </p>
        <p className="mt-3 text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>

      {/* Features */}
      <motion.div
        className="mt-4 flex flex-wrap gap-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
        }}
        transition={{ delay: 0.5, ease: "easeOut" }}
      >
        {features?.map((f, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-200 border border-gray-600/50 hover:border-orange-400/60 transition-colors"
            transition={{ delay: 0.5, ease: "easeOut" }}
          >
            {f}
          </motion.span>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <div className="mt-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition"
        >
          Request Specs →
        </a>
      </div>
    </motion.div>
  );
}
