export default function OurTeam() {
  const teamMembers = [
    {
      name: "HIRDESH CHOPRA",
      designation: "Principal Implementation Specialist",
      image: "/assets/Hirdesh.png",
      bgColor: "bg-[#1e256e]",
      description:
        "Chartered Accountant with a B.Com (Hons) from SRCC and advanced certifications in procurement, municipal finance, and ERP systems. Offers 40+ years of experience leading financial system deployments, procurement, and team coordination for WHO, ADB, and World Bank projects.",
    },
    {
      name: "SAKSHI KABRA",
      designation: "Senior Associate - Research, Implementation and Partnerships",
      image: "/assets/Sakshi_Kabra.png",
      bgColor: "bg-[#ffd300]",
      description:
        "M.A. in Education & Technology (TISS), M.A. in Sociology (IGNOU), B.El.Ed. (Gargi College, DU). Brings 5+ years of experience in education and research, mixed-method evaluations, training teachers, and driving business development/ partnership initiatives and designed the social science learning principles and curriculum development in the World Bank CHALK Project.",
    },
    {
      name: "ANKUR SHARMA",
      designation: "Field Manager",
      image: "/assets/Ankur_Sharma.png",
      bgColor: "bg-[#1e256e]",
      description:
        "B.Sc. in Agriculture and D.El.Ed with training in community facilitation, backed by 10+ years in agriculture, education, and rural development. Experienced in leading field operations, managing teams, and implementing programs with organizations like IDinsight, IFMR, and J-PAL.",
    },
    {
      name: "KRISHNANGI NEGI",
      designation: "HR & Admin Manager",
      image: "/assets/Krishnangi Negi.png",
      bgColor: "bg-[#ffd300]",
      description:
        "PGDM in Human Resources, an M.Com, and a B.Com, with professional training in HR best practices. Brings 7+ years of experience managing end-to-end HR operations, streamlining processes, and enhancing employee experience across the lifecycle.",
    },
  ]

  return (
    <section className="w-full py-16 px-6 bg-gray-50 tracking-tighter">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1e256e] leading-tight">
            The{" "}
            <span className="bg-[#ffd300] px-2 py-1 text-[#1e256e]">Minds</span> Behind Our Purpose
          </h2>
        </div>

        {/* Team Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto font-semibold text-xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full md:w-72"
            >
              {/* Image Section with alternating bg color */}
              <div
                className={`p-6 flex items-center justify-center ${index % 2 === 0 ? "bg-[#1e256e]" : "bg-[#dce3f5]"
                  }`}
              >
                <div className="relative overflow-hidden -mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-60 object-cover rounded-sm"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x500/e5e7eb/6b7280?text=Person";
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-white">
                {/* Name and Icon Section */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Name and Designation */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1e256e] mb-1 leading-tight flex items-center gap-3">
                      <img
                        src="/assets/networkImage.png" 
                        alt="icon"
                        className="w-8 h-8 object-contain font-bold" 
                      />
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-semibold mb-2">
                      {member.designation}
                    </p>
                    {/* Separator Line */}
                    <div className="w-full h-px bg-gray-300 mb-3"></div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>

  )
}