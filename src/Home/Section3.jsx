import { useEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - First on mobile, second on desktop */}
          <div
            className={`space-y-6 order-1 lg:order-2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wider uppercase text-blue-900">About Our Company</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Discover Our Path to Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a mission-driven team delivering high-quality data, tailored monitoring and evaluation (M&E)
                solutions, and strategic advisory services. By combining rigorous methods with deep sectoral insight, we
                help organizations make informed decisions, drive impact, and achieve sustainable development goals.
              </p>
            </div>

            {/* Bullet Points with Custom Yellow Arrow Icons */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Delivering high-quality data and analysis</p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Providing tailored M&E solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Offering strategic advisory services</p>
              </div>
            </div>
          </div>

          {/* Image Grid - Second on mobile, first on desktop */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 h-fit">
              {/* Top Row - Two Images */}
              <div className="space-y-4">
                {/* First Image - Office Discussion */}
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img
                    src="https://i.pinimg.com/1200x/10/f0/d5/10f0d5f4617221eb0534fcd949fc4e0b.jpg"
                    alt="Office discussion and training session"
                    width={280}
                    height={280}
                    className="w-auto h-64 object-cover"
                  />
                </div>

                {/* Bottom Image - Students Reading (Left-aligned under first image) */}
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img
                    src="https://i.pinimg.com/736x/44/27/76/4427762451e6666735a39daa3e620284.jpg"
                    alt="School students reading and discussing"
                    width={280}
                    height={200}
                    className="w-auto h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Second Image - Classroom Children */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="https://i.pinimg.com/736x/4d/dd/cf/4dddcfc826925d62934cefdb6e331fd4.jpg"
                  alt="Classroom of smiling school children"
                  width={280}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
