import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LandingCarousel = () => {
  const images = [
    "/assets/bg1.jpg",
    "/assets/bg2.jpg",
    "/assets/bg3.jpg",
    "/assets/bg4.jpg",
    "/assets/bg5.jpg",
  ];

  const words = ["High-Quality Data", "Tailored M&E Solutions", "Strategic Insights"];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  // Background carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, [images.length]);

  // Word rotation logic
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500); // word changes every 2.5s
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
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text Section */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Driving Impact Through
          </h1>

          {/* Rotating words */}
          <div className="h-16 mt-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="block text-2xl md:text-4xl font-semibold text-[#ffd300]"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCarousel;
