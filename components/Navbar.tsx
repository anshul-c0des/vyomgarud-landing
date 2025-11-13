"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 px-8 py-4 flex justify-between items-center backdrop-blur-md transition-colors ${
        scrolled ? "bg-charcoal/90 shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold font-poppins text-white">VyomGarud</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <a href="#about" className="hover:text-accentOrange transition">About</a>
        <a href="#products" className="hover:text-accentOrange transition">Products</a>
        <a href="#highlights" className="hover:text-accentOrange transition">Why Us</a>
        <a href="#contact" className="hover:text-accentOrange transition">Contact</a>
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        <Button className="bg-accentOrange hover:scale-105 hover:shadow-lg">
          Get Started
        </Button>
      </div>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        <button className="text-gray-300">☰</button>
      </div>
    </motion.nav>
  );
}
