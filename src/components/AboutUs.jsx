import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="p-5 py-10">
      {/* Purpose Section */}
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-xl bg-[#292d6a] text-white py-2 px-4 rounded-2xl">
          Our Purpose
        </h1>
        <h1 className="font-semibold tracking-tighter text-[#292d6a] text-3xl md:text-5xl text-center">
          Making Development <span className="bg-[#ffd300] px-4 py-1 rounded-2xl">Smarter</span> <h1 className="mt-4">through Data, Design, and Delivery.</h1>
        </h1>
      </div>

      {/* Our Values */}
      <div className="mt-12 text-center max-w-7xl mx-auto bg-[#292d6a] text-white rounded-3xl py-10">
     
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-lightbulb text-3xl md:text-5xl text-[#ffd300]  mb-2"></i>
            <h3 className="font-semibold text-xl">Integrity</h3>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-bullseye text-3xl md:text-5xl text-[#ffd300]  mb-2"></i>
            <h3 className="font-semibold text-xl">Client Focus</h3>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-arrow-up-right-dots text-3xl md:text-5xl text-[#ffd300]  mb-2"></i>
            <h3 className="font-semibold text-xl">Excellence</h3>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-asterisk text-3xl md:text-5xl text-[#ffd300]   mb-2"></i>
            <h3 className="font-semibold text-xl">Innovation</h3>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-handshake text-3xl md:text-5xl text-[#ffd300]  mb-2"></i>
            <h3 className="font-semibold text-xl">Collaboration</h3>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-users text-3xl md:text-5xl text-[#ffd300]  mb-2"></i>
            <h3 className="font-semibold text-xl">Teamwork</h3>
          </div>
        </div>
      </div>

     {/* Vision & Mission Section */}
<section className="py-5 px-5 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
    
    {/* Vision Box */}
    <div className="bg-[#1848a0] text-white rounded-2xl shadow-lg p-8 flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4">
        <i className="fa-regular fa-eye text-3xl text-[#ffd300]"></i>
        <h2 className="text-2xl md:text-3xl font-semibold">Our Vision</h2>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-gray-200">
        “A world where development is driven by data, designed with intent,
        and delivered with impact.”
      </p>
    </div>

    {/* Mission Box */}
    <div className="bg-[#1848a0] text-white rounded-2xl shadow-lg p-8 flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4">
        <i className="fa-regular fa-rectangle-list text-3xl text-[#ffd300]"></i>
        <h2 className="text-2xl md:text-3xl font-semibold">Our Mission</h2>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-gray-200">
        To enable our clients to make smarter decisions by turning field data
        into actionable insights and supporting the design and delivery of
        effective, efficient programs.
      </p>
    </div>

  </div>
</section>

    </div>
  );
};

export default AboutUs;
