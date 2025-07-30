import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectExperience from "./ProjectExp";

export default function FounderMessageBlock() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const bottomImageVariants = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-12 md:py-20">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="flex flex-col items-center">
            <motion.img
              src="/assets/founder.jpg"
              alt="Founder"
              className="w-96 rounded-xl shadow-lg border-4 border-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={bottomImageVariants}
              whileHover={{ scale: 1.02 }}
            />
            <motion.p
              className="mt-6 text-center font-medium text-lg"
              style={{ color: "#292d6a" }}
              variants={textVariants}
            >
              <span className="font-semibold tracking-tight text-4xl text-[#1848a0]">Kunal Datt</span> <br />
              Founder & CEO, Unnati C4E - Centre for Evaluation
            </motion.p>
          </div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
            className="space-y-6"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight"
              style={{ color: "#292d6a" }}
              variants={textVariants}
            >
              From the Founder's Desk
            </motion.h2>

            {/* Main Quote */}
            <motion.p
              className="text-gray-700 text-xl mt-20 italic leading-relaxed relative"
              variants={textVariants}
            >
              <span className="text-9xl font-serif text-[#ffd300] absolute -left-20 -top-4">
                “
              </span>
              At{" "}
              <span
                style={{ color: "#1848a0", fontWeight: "600" }}
              >
                
              </span>
              , From grassroots research to global programs, I have seen data turn ideas into impact. At<span className="text-[#1848a0]"> Unnati C4E - Centre for Evaluation</span>, we turn evidence into insight as true progress demands both rigour and purpose. When our name is on a report, it’s your guarantee of integrity, relevance, and real-world change.
              <span className="text-9xl font-serif text-[#ffd300] absolute left-[290px] ">
                ”
              </span>
            </motion.p>

            {/* Expanded Full Message */}
            {showFullMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-gray-700 text-base leading-relaxed space-y-4"
              >
                <p>
                  At Unnati - Centre for Evaluation (C4E), we are driven by one
                  guiding principle: quality matters most. In an era where
                  development efforts are expanding rapidly, we believe the next
                  leap forward depends on smarter, evidence-driven action.
                </p>
                <p>
                  Unnati means progress, not just as numbers but as meaningful
                  outcomes that improve lives. We embed evaluative thinking and
                  evidence use across the full program lifecycle — from design
                  and implementation to scaling.
                </p>
                <p>
                  Our goal: to help organizations use evidence as the bedrock of
                  every decision. This means making global evidence accessible
                  and delivering high-quality, context-sensitive insights.
                </p>
                <p>
                  Alongside this, we provide strategic advisory and
                  implementation support, always grounded in rigorous data and a
                  deep understanding of realities on the ground.
                </p>
                <p>
                  We aim to make The Centre for Evaluation a mark of credibility
                  — reflecting the highest standards of integrity, rigour, and
                  relevance.
                </p>
                <p>
                  When intent aligns with insight, and action with evidence,
                  development becomes not just efficient, but truly
                  transformative.
                </p>
              </motion.div>
            )}

            {/* Read More Button */}
            <motion.button
              onClick={() => setShowFullMessage(!showFullMessage)}
              className="mt-10 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              style={{
                backgroundColor: "#ffd300",
                color: "#292d6a",
              }}
            >
              {showFullMessage ? "Read Less" : "Read More"}
            </motion.button>
          </motion.div>
        </div>
      </section>
      <ProjectExperience />
    </>
  );
}
