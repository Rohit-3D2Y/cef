import { Building2, Handshake, Scale, Globe, Home, Network } from "lucide-react"

const partners = [
  {
    icon: Building2,
    label: "Government",
    bgColor: "bg-[#2B2B6C]",
    textColor: "text-sky-300",
  },
  {
    icon: Handshake,
    label: "Multilateral and bilateral agencies",
    bgColor: "bg-[#4597CB]",
    textColor: "text-gray-800",
  },
  {
    icon: Scale,
    label: "Financial institutions",
    bgColor: "bg-[#2B2B6C]",
    textColor: "text-sky-300",
  },
  {
    icon: Globe,
    label: "Financial institutions, Donors and Philanthropists",
    bgColor: "bg-[#4597CB]",
    textColor: "text-gray-800",
  },
  {
    icon: Home,
    label: "Non-Profit Organisations",
    bgColor: "bg-[#2B2B6C]",
    textColor: "text-sky-300",
  },
  {
    icon: Network,
    label: "CSR arms and Corporates",
    bgColor: "bg-[#4597CB]",
    textColor: "text-gray-800",
  },
]

export default function PartnerSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B6C] mb-4">Who we work with?</h2>
          <p className="text-2xl md:text-3xl font-light text-slate-400">Our Partners</p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon
            return (
              <div
                key={index}
                className={`${partner.bgColor} rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Icon Circle */}
                <div className="bg-yellow-400 rounded-full p-3 flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-black" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <div className="flex-1">
                  <h3 className={`${partner.textColor} font-medium text-lg leading-tight hover:text-white`}>{partner.label}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
