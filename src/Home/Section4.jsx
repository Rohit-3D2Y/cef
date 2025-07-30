export default function Component() {
  const stats = [
    {
      number: "7+",
      caption: "Projects Executed",
    },
    {
      number: "13+",
      caption: "Sectors and Geographies",
    },
    {
      number: "5+",
      caption: "Partners and Clients",
    },
    {
      number: "10Lakh+",
      caption: "Beneficiaries Targeted",
    },
  ]

  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: "#2B2B6C" }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">{stat.number}</div>
              <div className="text-white text-lg md:text-xl font-medium">{stat.caption}</div>

              {/* Vertical divider - only show on desktop and not after last item */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-gray-300 opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
