import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "7", label: "Projects" },
    { number: "4", label: "Sectors" },
    { number: "8", label: "Geographies" },
    { number: "5", label: "Partners and Clients" },
    { number: "10 Lakh+", label: "Beneficiaries Targeted" },
  ];

  return (
    <section className="bg-[#1e256e] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-white relative">
            <h3 className="text-3xl md:text-4xl font-bold text-[#ffd300]">
              {stat.number}
            </h3>
            <p className="mt-2 text-sm md:text-base">{stat.label}</p>
            {idx < stats.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-px bg-gray-400/40"></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
