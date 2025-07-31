import React from "react";

const Client = () => {
  const logos = [
    "/assets/c1.png", // Client 1
    "/assets/c2.png", // Client 2
    "/assets/c3.png", // Client 3
    "/assets/c4.png", // Client 4
    "/assets/c5.png", // Client 5
  ];

  return (
    <section id="ourclients" className="relative bg-gradient-to-b from-white to-gray-50 px-6 mt-20">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight   rounded-full text-center mb-5 text-[#292d6a]">
       <span className="bg-[#ffd300] py-2 px-4 rounded-2xl"> Our Clients</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-gradient-to-b from-white to-gray-50 rounded-xl p-2 transition-all duration-300"
          >
            <img
              src={logo}
              alt={`Client ${idx + 1}`}
              className="w-28 h-28 md:w-40 md:h-40 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
