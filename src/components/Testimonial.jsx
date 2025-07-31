import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Raj Gilda",
    title: "Co-founder",
    company: "Lend A Hand India",
    image: "https://centreforevaluation.com/wp-content/uploads/2025/07/raj-gilda.jpeg",
    logo: "https://centreforevaluation.com/wp-content/uploads/2025/07/LAHI-logo.png",
    feedback:
      "Unnati C4E has been an outstanding partner in strengthening our programs through evidence, insight, and strategic thinking. Their work across our school internship evaluation study, multi-state impact assessment, and support on key strategic initiatives has been marked by rigour, responsiveness, and deep contextual understanding. They bring clarity to complexity and have added significant value to our work on skill education.",
  },
  {
    name: "RP Dhingra",
    title: "Former Director - Projects, Directorate General of Training (DGT)",
    company: "Ministry of Skill Development & Entrepreneurship (MSDE)",
    image: "/assets/rp.png",
    logo: "https://centreforevaluation.com/wp-content/uploads/2025/07/Govt.-of-NCT-of-Delhi-logo.png",
    feedback:
      "During my years as Director – Projects at MSDE, I greatly valued Kunal’s exceptional analytical skills and his ability to distill complex information, particularly his deep knowledge of the education and skilling domain. His calm and composed approach always brought clarity to our collaborations. I am confident that Unnati C4E will thrive under his leadership. Experts like Kunal and the Unnati C4E team are vital for advancing evidence-based development, and the entire ecosystem stands to benefit immensely from their work. I wish them all the very best.",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Heading */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl mt-10 md:text-6xl font-semibold tracking-tight text-[#1e256e] leading-snug">
            Client <br /> Testimonials
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className={`md:w-2/3 bg-white border border-gray-200 shadow-lg rounded-2xl p-6 md:p-10 transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Client Image & Details */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover shadow-md"
              />
              <p className="mt-4 font-semibold text-[#1e256e] text-lg">
                {testimonial.name}
              </p>
              <p className="text-base text-gray-600 max-w-xs leading-snug">
                {testimonial.title}
              </p>
              <p className="text-base font-semibold text-[#1848a0] mt-1">
                {testimonial.company}
              </p>
              <img
                src={testimonial.logo}
                alt="Client Logo"
                className="w-32 mt-4 object-contain"
              />
            </div>

            {/* Feedback Section */}
            <div className="relative text-center md:text-left flex-1">
              {/* Left Quote */}
              <FaQuoteLeft className="text-[#ffd300] text-3xl absolute -top-4 -left-4 md:-top-6 md:-left-6" />

              <p className="text-gray-700 italic leading-relaxed text-base md:text-lg px-4">
                {testimonial.feedback}
              </p>

              {/* Right Quote */}
              <FaQuoteRight className="text-[#ffd300] text-3xl absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
