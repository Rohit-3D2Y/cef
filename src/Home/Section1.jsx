import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import img from './Images/group.png'

const rotatingPhrases = ["Tailored M&E Solutions", "Data-Driven Results", "Impactful Evaluations"]

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[700px] bg-white overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg
          className="absolute left-0 top-0 h-[700px] w-1/2"
          viewBox="0 0 400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C100 100 200 200 300 150C350 125 400 100 400 200V800H0V0Z"
            fill="url(#wave-gradient)"
            opacity="0.1"
          />
          <path
            d="M0 100C150 200 250 150 350 200C375 210 400 220 400 300V800H0V100Z"
            fill="url(#wave-gradient)"
            opacity="0.05"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-800">Driving Impact Through</span>
              </h1>

              <div className="h-16 md:h-20 flex items-center">
                <h2
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {rotatingPhrases[currentPhraseIndex]}
                </h2>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Partnering with organizations to deliver evidence-based strategies, actionable insights, and sustainable
              development outcomes through rigorous data and evaluation frameworks.
            </p>

            <div className="pt-4">
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group inline-flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Side - Visual Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Yellow Circle Background */}
              <div className="absolute -top-8 -right-8 lg:right-10 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]  bg-yellow-400 rounded-full opacity-90 -z-10"></div>

              {/* Main Image */}
             <div className="relative z-10">
                <img
                  src={img}
                  alt="Diverse group of young people using laptops and phones"
                  width={500}
                  height={500}
                  className="object-cover h-[400px] w-auto mx-auto translate-y-20"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Wave Pattern for Mobile */}
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <svg className="w-full h-24" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50C100 20 200 80 300 50C350 35 400 20 400 100H0V50Z"
            fill="url(#mobile-wave-gradient)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="mobile-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
