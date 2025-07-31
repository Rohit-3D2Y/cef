import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Raj Gilda",
    title: "Co-founder, Lend A Hand India",
    image: "https://centreforevaluation.com/wp-content/uploads/2025/07/raj-gilda.jpeg",
    logo: "https://centreforevaluation.com/wp-content/uploads/2025/07/LAHI-logo.png",
    feedback:
      "Unnati C4E has been an outstanding partner in strengthening our programs through evidence, insight, and strategic thinking. Their work across our school internship evaluation study, multi-state impact assessment, and support on key strategic initiatives has been marked by rigour, responsiveness, and deep contextual understanding. They bring clarity to complexity and have added significant value to our work on skill education.",
  },
  {
    name: "RP Dhingra",
    title:
      "Former Director - Projects, Directorate General of Training (DGT),<br /> Ministry of Skill Development & Entrepreneurship (MSDE)",
    image: "/assets/rp.png",
    logo: "https://centreforevaluation.com/wp-content/uploads/2025/07/Govt.-of-NCT-of-Delhi-logo.png",
    feedback:
      "During my years as Director – Projects at MSDE, I greatly valued Kunal’s exceptional analytical skills and his ability to distill complex information, particularly his deep knowledge of the education and skilling domain. His calm and composed approach always brought clarity to our collaborations. I am confident that Unnati C4E will thrive under his leadership. Experts like Kunal and the Unnati C4E team are vital for advancing evidence-based development, and the entire ecosystem stands to benefit immensely from their work. I wish them all the very best.",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-change every 6 seconds with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="py-16 px-6 bg-white">
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
            
            {/* Client Image & Name */}
            <div className="flex flex-col items-center md:items-center text-center md:text-left">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="max-w-[200px] h-auto rounded-md object-contain shadow-md"
              />
              <p
  className="mt-4 font-semibold text-[#1e256e] text-sm md:text-base text-center md:text-left leading-snug max-w-xs md:max-w-sm"
  dangerouslySetInnerHTML={{
    __html: `— ${testimonial.name}, ${testimonial.title}`,
  }}
></p>
 <img
                src={testimonial.logo}
                alt="Client Logo"
                className="w-48 mt-6 object-contain mx-auto md:mx-0"
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
