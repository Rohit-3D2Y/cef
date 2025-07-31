import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // For hamburger icon

const LandingCarousel = () => {
  const images = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
  ];

  const words = [
    "High-Quality Data",
    "Tailored M&E Solutions",
    "Strategic Insights",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Background carousel logic
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  // Word rotation logic
  useEffect(() => {
    const wordInterval = setInterval(
      () => setCurrentWord((prev) => (prev + 1) % words.length),
      2500
    );
    return () => clearInterval(wordInterval);
  }, [words.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            Unnati C4E
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {["About Us", "Our Services", "Our Work", "Insights", "Careers", "Contact"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                    className="hover:text-[#ffd300] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 space-y-4 text-center"
            >
              {["About Us", "Our Services", "Our Work", "Insights", "Careers", "Contact"].map(
                (item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                    className="block text-lg text-white hover:text-[#ffd300] transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight text-white leading-snug drop-shadow-lg">
            Driving Impact Through
          </h1>

          {/* Rotating words */}
          <div className="h-16 mt-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="block text-4xl md:text-5xl font-semibold text-[#ffd300]"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-[#ffd300] text-[#292d6a] font-bold text-lg rounded-full shadow-lg hover:bg-[#f0c200] transition-all duration-300"
            >
              Get in Touch Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingCarousel;
