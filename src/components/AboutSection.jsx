import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src="/assets/block (2).jpg"
              alt="Classroom"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/assets/skilling.jpg"
              alt="Girl Studying"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <img
            src="/assets/block (1).jpg"
            alt="Children Smiling"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1848a0] mb-2">
            About Our Company
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
            At the nexus of <span className="text-[#ffd300]">Evidence</span>, <span className="text-[#ffd300]">Strategy</span> and <span className="text-[#ffd300]">Execution</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
           Unnati C4E - Centre for Evaluation, reflects our core mission. It incorporates 'Unnati ', the Sanskrit word for Progress , signifying the positive change we aim to facilitate. We partner with clients across the full development cycle – supporting effective design, sound implementation, and rigorous evaluation of initiatives addressing key challenges. Our foundation as a 'Centre for Evaluation' ensures this comprehensive work is grounded in solid evidence, aligning directly with our motto: 'Driving Impact Through Evidence-Based Insights'.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
