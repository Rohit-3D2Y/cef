import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  // Scroll to section with offset for sticky navbar
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Adjust based on your navbar height
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      smoothScrollTo(targetPosition, 800); // 800ms = slower & smoother
      setMenuOpen(false);
    }
  };

  const smoothScrollTo = (targetY, duration = 600) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startY, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };


  const navLinks = [
    "About Us",
    "Our Services",
    "Our Work",
    "Partners",
    "Testimonials",       
    "Contact",
  ];

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
          <a href="#">
            <img
              src="/assets/logo11.png"
              alt="Unnati C4E"
              className="h-16 md:h-14 w-auto rounded-xl shadow-md"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-8 text-md font-medium">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() =>
                    scrollToSection(item.replace(/\s+/g, "").toLowerCase())
                  }
                  className="hover:text-[#ffd300] transition-colors duration-300"
                >
                  {item}
                </button>
              </li>
            ))}
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
              {navLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    scrollToSection(item.replace(/\s+/g, "").toLowerCase())
                  }
                  className="block text-lg text-white hover:text-[#ffd300] transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
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

          {/* Rotating Words */}
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
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-[#ffd300] text-[#292d6a] font-bold text-lg rounded-full shadow-lg hover:bg-[#f0c200] transition-all duration-300"
            >
              Get in Touch Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingCarousel;
