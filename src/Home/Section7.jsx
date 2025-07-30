

import { useState } from "react"


const mentorsData = [
  {
    id: "1",
    organization: "CENTRE FOR CIVIL SOCIETY",
    name: "Dr. Parth J Shah",
    description:
      "Co-Founder and Director, Indian School of Public Policy and Founder-President, Centre for Civil Society",
    logoColor: "bg-orange-600",
  },
]

const advisorsData = [
  {
    id: "1",
    organization: "TATA INSTITUTE OF SOCIAL SCIENCES (TISS, MUMBAI)",
    name: "Dr. Anusha Ramanathan",
    description: "Professor at CETE, School of Education, Tata Institute of Social Sciences",
    logoColor: "bg-green-700",
    logoText: "TISS",
  },
  {
    id: "2",
    organization: "INDIAN INSTITUTE OF MANAGEMENT (IIM, INDORE)",
    name: "Prof. DL Sunder",
    description: "Professor of Strategic Management",
    logoColor: "bg-blue-900",
    logoText: "IIM",
  },
  {
    id: "3",
    organization: "UNIVERSITY OF LONDON",
    name: "Prof. Ravinder Barn",
    description:
      "Professor of Social Policy and Head of Dept. of Law & Criminology at Royal Holloway, University of London",
    logoColor: "bg-red-700",
    logoText: "UFL",
  },
  {
    id: "4",
    organization: "STANFORD UNIVERSITY",
    name: "Prof. Sarah Johnson",
    description: "Professor of Educational Psychology and Director of Learning Innovation Lab",
    logoColor: "bg-purple-700",
    logoText: "SU",
  },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState("mentor")
  const currentData = activeTab === "mentor" ? mentorsData : advisorsData

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            Standing On The Shoulders Of Giants
          </h2>

          {/* Dynamic Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("mentor")}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === "mentor" ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              Our Mentor
            </button>
            <button
              onClick={() => setActiveTab("advisors")}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === "advisors"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              Our Advisors
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentData.map((person, index) => (
            <div
              key={person.id}
              className="bg-yellow-300 rounded-2xl p-6 h-full flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 ${person.logoColor} rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-12`}
                >
                  {person.logoText ? (
                    <div className="text-white font-bold text-xs">{person.logoText}</div>
                  ) : (
                    <div className="w-8 h-8 bg-white rounded-sm"></div>
                  )}
                </div>
              </div>
              <h3 className="text-blue-800 font-bold text-sm uppercase text-center mb-3 leading-tight">
                {person.organization}
              </h3>
              <h4 className="text-black font-bold text-lg text-center mb-3">{person.name}</h4>
              <p className="text-black text-sm text-center leading-relaxed">{person.description}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Counter */}
        <div className="text-center mt-8">
          <p className="text-white/80 text-sm">
            Showing {currentData.length} {activeTab === "mentor" ? "mentor" : "advisors"}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
