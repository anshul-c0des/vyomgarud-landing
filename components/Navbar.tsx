"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 px-6 sm:px-8 py-4 flex justify-between items-center backdrop-blur-sm transition-colors duration-300 ${
          scrolled ? "bg-charcoal/90 shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold font-poppins text-white">
          VyomGarud
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {["about", "products", "highlights", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-accentOrange transition-colors duration-300 uppercase tracking-wide"
            >
              {link === "highlights" ? "Why Us" : link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="bg-accentOrange hover:scale-105 hover:shadow-lg transition-transform duration-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-300 text-2xl focus:outline-none"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-64 h-full bg-charcoal/95 backdrop-blur-md shadow-lg z-40 flex flex-col p-6 space-y-6"
          >
            {["about", "products", "highlights", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMobileOpen(false)}
                className="text-white mt-12 text-lg uppercase font-semibold hover:text-accentOrange transition-colors duration-300"
              >
                {link === "highlights" ? "Why Us" : link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
            <Button
              className="bg-accentOrange mt-auto hover:scale-105 hover:shadow-lg w-full"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
