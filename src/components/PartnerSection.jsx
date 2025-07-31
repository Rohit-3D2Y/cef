import React from "react";
import { Building, Globe, Handshake, Landmark, Scale, Users } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Government",
      icon: <Landmark size={28} className="text-[#292d6a]" />,
      color: "bg-[#1e256e]",
    },
    {
      name: "Multilateral and bilateral agencies",
      icon: <Handshake size={28} className="text-[#292d6a]" />,
      color: "bg-[#2196f3]",
    },
    {
      name: "Academic institutions",
      icon: <Scale size={28} className="text-[#292d6a]" />,
      color: "bg-[#1e256e]",
    },
    {
      name: "Financial institutions, Donors and Philanthropists",
      icon: <Globe size={28} className="text-[#292d6a]" />,
      color: "bg-[#2196f3]",
    },
    {
      name: "Non-Profit Organisations",
      icon: <Users size={28} className="text-[#292d6a]" />,
      color: "bg-[#1e256e]",
    },
    {
      name: "CSR arms and Corporates",
      icon: <Building size={28} className="text-[#292d6a]" />,
      color: "bg-[#2196f3]",
    },
  ];

  return (
    <section id="partners" className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#292d6a]">
          Who we work with?
        </h2>
        <p className="text-gray-600 mt-2 mb-10 text-lg">Our Partners</p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`${partner.color} rounded-lg shadow-lg flex items-center px-6 py-6 text-left hover:scale-105 transition-transform duration-300`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 bg-[#ffd300] rounded-full mr-4">
                {partner.icon}
              </div>
              {/* Text */}
              <p className="text-white font-medium text-base md:text-lg">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
