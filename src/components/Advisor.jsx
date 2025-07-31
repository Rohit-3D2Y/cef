import React from "react";

const MentorAdvisors = () => {
  const logos = [
    "/assets/ad4.png", // Mentor
    "/assets/ad3.png", // Advisor 1
    "/assets/ad1.png", // Advisor 2
    "/assets/ad2.png", // Advisor 3
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 px-6 mt-20">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight   rounded-full text-center mb-5 text-[#292d6a]">
       <span className="bg-[#ffd300] py-2 px-4 rounded-2xl"> Our Advisory Board</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-8">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-white rounded-xl p-2 transition-all duration-300"
          >
            <img
              src={logo}
              alt={`Advisor ${idx + 1}`}
              className="w-40 h-40 md:w-80 md:h-80 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MentorAdvisors;
