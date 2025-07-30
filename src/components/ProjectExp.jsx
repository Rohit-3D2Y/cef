import React from "react";

const ProjectExperience = () => {
  const data = [
    { number: 19, label: "Governments" },
    { number: 11, label: "Multilateral / Bilateral" },
    { number: 4, label: "NGOs" },
    { number: 1, label: "CSR Arms" },
    { number: 9, label: "Corporates" },
  ];

  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-6xl mx-auto rounded-2xl shadow-xl overflow-hidden relative">
        {/* Background overlay with pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#292d6a] to-[#1848a0]">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/graphy-dark.png')",
              backgroundSize: "cover",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 text-center text-white">
          {/* Left Title */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-[#292d6a] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide leading-snug text-[#ffd300]">
              Project <br /> Experience
            </h2>
          </div>

          {/* Stats */}
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/30"
            >
              <span className="text-[#ffd300] text-4xl md:text-5xl font-extrabold drop-shadow-sm">
                {item.number}
              </span>
              <span className="mt-2 text-sm md:text-base font-medium text-gray-100">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;
