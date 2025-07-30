import { useState, useEffect } from "react"
import img1 from './Images/test1.png'
import img2 from './Images/test2.png'


const testimonials = [
  {
    id: 1,
    text: "Unnati C4E has been an outstanding partner in strengthening our programs through evidence, insight, and strategic thinking. Their work across our school internship evaluation study, multi-state impact assessment, and support on key strategic initiatives has been marked by rigour, responsiveness, and deep contextual understanding. They bring clarity to complexity and have added significant value to our work on skill education.",
    name: "Raj Gilda",
    position: "Co-founder, Lend A Hand India",
    image: img1,
    orgLogo: "/placeholder.svg?height=60&width=200",
  },
  {
    id: 2,
    text: "Working with Unnati C4E has transformed how we approach program evaluation and strategic planning. Their data-driven insights and comprehensive analysis have enabled us to make more informed decisions and significantly improve our impact measurement capabilities.",
    name: "Priya Sharma",
    position: "Director of Programs, Education First",
    image: img2,
    orgLogo: "/placeholder.svg?height=60&width=200",
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,0 50,20 T100,20 L100,100 L0,100 Z" fill="currentColor" />
          <path d="M0,40 Q25,20 50,40 T100,40 L100,100 L0,100 Z" fill="currentColor" />
          <path d="M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Title and Subtitle */}
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600 font-inter">TESTIMONIAL</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-inter leading-tight">
                Client
                <br />
                Feedback
              </h2>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="relative">
            <div className="border border-gray-200 rounded-2xl shadow-lg bg-white">
              <div className="p-8">
                <div className="space-y-6">
                  {/* Person Info - Image at top */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={80}
                        height={80}
                        className="rounded-xl object-cover"
                      />
                    </div>

                    {/* Name and Position */}
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 font-inter">— {testimonials[currentIndex].name}</p>
                      <p className="text-sm text-gray-600 font-inter">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed font-inter text-center">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
