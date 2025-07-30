import cl1 from './Images/cl1.png'
import cl2 from './Images/cl2.png'
import cl3 from './Images/cl3.png'
import cl4 from './Images/cl4.png'
import cl5 from './Images/cl5.png'


export default function ClientShowcase() {
  const clients = [
    {
      name: "The World Bank",
      logo: cl1,
      alt: "The World Bank logo",
    },
    {
      name: "Government of the National Capital Territory of Delhi",
      logo: cl2,
      alt: "Government of Delhi logo",
    },
    {
      name: "Lend A Hand India",
      logo: cl3,
      alt: "Lend A Hand India logo",
    },
    {
      name: "Swapnopuron Welfare Society",
      logo: cl4,
      alt: "Swapnopuron Welfare Society logo",
    },
    {
      name: "Aurang Foundation",
      logo: cl5,
      alt: "Aurang Foundation logo",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500">Our Clients</h2>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 transition-all duration-300 ease-in-out hover:scale-110 hover:grayscale-0 grayscale-0 "
              style={{
                filter: "grayscale(0%)",
              }}
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.alt}
                width={200}
                height={80}
                className="h-16 md:h-40 w-auto object-contain transition-all duration-300"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container > div:last-child > div:hover {
          filter: grayscale(30%) !important;
        }
        .container > div:last-child > div {
          filter: grayscale(0%) !important;
        }
      `}</style>
    </section>
  )
}
