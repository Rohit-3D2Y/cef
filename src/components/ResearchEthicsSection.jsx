import { FileText, Lock, Globe, Settings, BarChart3, PenTool } from "lucide-react"

export default function ResearchEthicsSection() {
  const pillars = [
    {
      title: "Informed Consent",
      description: "Voluntary, transparent participation",
      icon: FileText,
      bgColor: "bg-[#003087]",
    },
    {
      title: "Confidentiality",
      description: "Anonymised data & secure handling",
      icon: Lock,
      bgColor: "bg-[#0070C0]",
    },
    {
      title: "Cultural Sensitivity",
      description: "Contextual-awareness, respectful engagement",
      icon: Globe,
      bgColor: "bg-[#1A1A5E]",
    },
    {
      title: "Data Integrity",
      description: "Methodological rigour in tools & collection",
      icon: Settings,
      bgColor: "bg-[#0070C0]",
    },
    {
      title: "Honest Reporting",
      description: "Evidence-based, bias-free insights",
      icon: BarChart3,
      bgColor: "bg-[#1A1A5E]",
    },
    {
      title: "Responsible Writing",
      description: "Attribution, transparency, accuracy",
      icon: PenTool,
      bgColor: "bg-[#0070C0]",
    },
  ]

  return (
    <section className="w-full py-5 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#292d6a] tracking-tight mb-4">
            Research Ethics &<br />
            Institutional Integrity
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 font-normal">
            Our commitment to{" "}
            <span className="font-semibold text-yellow-400">Rigour</span>,{" "}
            <span className="font-semibold text-yellow-400">Responsibility</span>, and{" "}
            <span className="font-semibold text-yellow-400">Respect</span>
          </p>
        </div>

        {/* Six Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 px-4">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <div
                key={index}
                className={`${pillar.bgColor} rounded-[35px] p-8 relative overflow-visible min-h-[150px] flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-white font-semibold tracking-tight text-xl md:text-3xl mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-white/90 text-base md:text-xl leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Yellow circular icon - overlaying the card */}
                <div className="absolute -bottom-3 -right-3">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg ">
                    <IconComponent className="w-7 h-7 text-gray-900" strokeWidth={2} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Highlight Banner */}
        <div className="bg-yellow-400 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg md:text-2xl font-semibold tracking-tight text-[#2926da] leading-relaxed">
            At Unnati C4E, we believe the way we work is as important as what we deliver -{" "}
            <br className="hidden md:block" />
            <span className="text-[#1A1A5E] font-bold">
              embedding ethics and integrity to build trust, ensure accountability, and strengthen development practice.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}