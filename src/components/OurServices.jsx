import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Primary Data Collection & Field Research",
    description:
      "Designing and executing mixed-method research studies across diverse geographies, with our understanding of cultural and contextual nuances",
    icon: "/assets/research.png",
  },
  {
    title: "Advisory",
    description:
      "Building MEL/MEAL frameworks, SROI evalution, KAP study designs, feasibility studies, dipstick evalutions, ecnomic analysis, indicators and learning systems to track porgress and recommed solutions with accountability",
    icon: "/assets/advise.png",
  },
  {
    title: "Data Analytics & M&E Reporting",
    description:
      "Applying advanced analytics to convert raw data into compelling narratives, dashboards and actionable insights",
    icon: "/assets/analytics.png",
  },
  {
    title: "Project Implementation",
    description:
      "Creating strategic M&E frameworks in collaboration with stakeholders, ensuring they are data-driven, context-sensitive and execution-ready for on-ground implementation",
    icon: "/assets/project.png",
  },
];

export default function WhatWeDo() {
  return (
    <section id="ourservices" className="bg-gradient-to-br from-white to-gray-50 py-20 px-6 md:px-12 tracking-tighter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-5xl font-semibold tracking-tighter text-[#1e256e]"
          >
            What we provide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg lg:text-3xl font-semibold tracking-tighter text-gray-600"
          >
            We Support Your Development
            <br />
            Journey from Design to Evaluation
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffd300] text-[#1e256e] px-6 py-3 rounded-lg font-semibold tracking-tighter hover:bg-[#e6be00] transition"
          >
            Learn More
          </motion.button>
        </div>

        {/* Right Flip Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <FlipCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ title, description, icon }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full min-h-[14rem] md:min-h-[16rem] perspective"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        onClick={() => setFlipped(!flipped)}
        onMouseEnter={() => window.innerWidth > 768 && setFlipped(true)}
        onMouseLeave={() => window.innerWidth > 768 && setFlipped(false)}
        className="relative w-full h-full transition-transform duration-[800ms] transform-style preserve-3d cursor-pointer"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center px-4 py-6 transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.img
            src={icon}
            alt={title}
            className="h-20 w-20 mb-3"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <h3 className="text-sm md:text-base font-semibold text-center text-[#1e256e] px-2">
            {title}
          </h3>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-[#1e256e] text-white rounded-xl px-4 py-6 transform rotateY-180 flex items-start text-sm md:text-base text-center leading-snug overflow-y-auto"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="max-h-full text-2xl">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}


