export default function OurTeam() {
  const teamMembers = [
    {
      name: "KUNAL DATT",
      designation: "Founder and CEO",
      image: "/assets/founder.jpg",
      bgColor: "bg-[#1e256e]",
      description:
        "MBA from the University of London, with certificates in Education Policy Reform from the International Academy for Leadership, Fredrick-Naumann-Stiftung, Germany; Services Management & Business Strategy from IIM-Kozhikode; and Public Finance and Public Private Partnerships from University of Birmingham. Over 2 decades experience in research and the development sector, of which a decade with the World Bank leading multi-million dollar projects, influencing public policy and driving policy-influencing research.",
    },
    {
      name: "HIRDESH CHOPRA",
      designation: "Principal Implementation Specialist",
      image: "/assets/Hirdesh.jpg",
      bgColor: "bg-[#1e256e]",
      description:
        "Chartered Accountant with a B.Com (Hons) from SRCC and advanced certifications in procurement, municipal finance, and ERP systems. Offers 40+ years of experience leading financial system deployments, procurement, and team coordination for WHO, ADB, and World Bank projects.",
    },
    {
      name: "SAKSHI KABRA",
      designation: "Senior Associate - Research, Implementation and Partnerships",
      image: "/assets/Sakshi Kabra.jpg",
      bgColor: "bg-[#ffd300]",
      description:
        "M.A. in Education & Technology (TISS), M.A. in Sociology (IGNOU), B.El.Ed. (Gargi College, DU). Brings 5+ years of experience in education and research, mixed-method evaluations, training teachers, and driving business development/ partnership initiatives and designed the social science learning principles and curriculum development in the World Bank CHALK Project.",
    },
    {
      name: "ANKUR SHARMA",
      designation: "Field Manager",
      image: "/assets/Ankur Sharma.jpg",
      bgColor: "bg-[#1e256e]",
      description:
        "B.Sc. in Agriculture and D.El.Ed with training in community facilitation, backed by 10+ years in agriculture, education, and rural development. Experienced in leading field operations, managing teams, and implementing programs with organizations like IDinsight, IFMR, and J-PAL.",
    },
    {
      name: "KRISHNANGI NEGI",
      designation: "HR & Admin Manager",
      image: "/assets/Krishnangi Negi.jpg",
      bgColor: "bg-[#ffd300]",
      description:
        "PGDM in Human Resources, an M.Com, and a B.Com, with professional training in HR best practices. Brings 7+ years of experience managing end-to-end HR operations, streamlining processes, and enhancing employee experience across the lifecycle.",
    },
  ]

  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1e256e] leading-tight">
            The{" "}
            <span className="bg-[#ffd300] px-2 py-1 text-[#1e256e]">Minds</span> Behind Our Purpose
          </h2>
        </div>

        {/* Team Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full md:w-96">
              {/* Image Section */}
              <div className={`${member.bgColor} p-0 relative`}>
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x500/e5e7eb/6b7280?text=Person";
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-white">
                {/* Name and Icon Section */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Network Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/assets/logo1.png" 
                        className="w-12 h-12" 
                        alt="Company Logo"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/48x48/1e256e/ffffff?text=Logo";
                        }}
                      />
                    </div>
                  </div>

                  {/* Name and Designation */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1e256e] mb-1 leading-tight">{member.name}</h3>
                    <p className="text-gray-600 text-sm font-medium mb-2">{member.designation}</p>
                    {/* Separator Line */}
                    <div className="w-full h-px bg-gray-300 mb-3"></div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-xs text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full"></div>
          {teamMembers.slice(3).map((member, index) => (
            <div key={index + 3} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full md:w-96">
              {/* Image Section */}
              <div className={`${member.bgColor} p-0 relative`}>
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x500/e5e7eb/6b7280?text=Person";
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-white">
                {/* Name and Icon Section */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Network Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/assets/logo1.png" 
                        className="w-12 h-12" 
                        alt="Company Logo"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/48x48/1e256e/ffffff?text=Logo";
                        }}
                      />
                    </div>
                  </div>

                  {/* Name and Designation */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1e256e] mb-1 leading-tight">{member.name}</h3>
                    <p className="text-gray-600 text-sm font-medium mb-2">{member.designation}</p>
                    {/* Separator Line */}
                    <div className="w-full h-px bg-gray-300 mb-3"></div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-xs text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}