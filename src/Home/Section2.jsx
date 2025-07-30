import { Edit3, Code, BarChart3, Calendar } from "lucide-react"

export default function WhatWeDoSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">What we do?</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We Support Your Development Journey from Design to Evaluation
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 hover:shadow-lg">
              Learn More
            </button>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Top Left Card */}
            <div className="flip-card h-48">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flex flex-col items-center justify-center h-full space-y-3 shadow-2xl">
                    <Edit3 className="w-8 h-8 text-blue-600" />
                    <h3 className="text-sm font-semibold text-center text-gray-800 leading-tight">
                      Primary Data Collection
                    </h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flex items-center justify-center h-full p-4 bg-blue-600 rounded-lg shadow-2xl">
                    <p className="text-sm text-white text-center leading-relaxed ">
                      Comprehensive field research and primary data collection to gather authentic insights and evidence
                      for informed decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right Card */}
            <div className="flip-card h-48">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flex flex-col items-center justify-center h-full space-y-3 shadow-2xl">
                    <Code className="w-8 h-8 text-blue-600" />
                    <h3 className="text-sm font-semibold text-center text-gray-800">Advisory</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flex items-center justify-center h-full p-4 bg-blue-600 rounded-lg shadow-2xl">
                    <p className="text-sm text-white text-center leading-relaxed">
                      Creating strategic M&E frameworks in collaboration with stakeholders, ensuring they are
                      data-driven, context-sensitive, and execution-ready for on-ground implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="flip-card h-48">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flex flex-col items-center justify-center h-full space-y-3 shadow-2xl">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                    <h3 className="text-sm font-semibold text-center text-gray-800">Data Analytics & M&E Reporting</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flex items-center justify-center h-full p-4 bg-blue-600 rounded-lg shadow-2xl">
                    <p className="text-sm text-white text-center leading-relaxed">
                      Advanced analytics and comprehensive monitoring & evaluation reporting to track impact, measure
                      performance, and generate actionable insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Card - Special Blue Card */}
            <div className="flip-card h-48">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-blue-50 ">
                  <div className="flex items-center justify-center h-full p-4 bg-blue-600 rounded-lg shadow-2xl">
                    <p className="text-sm text-white leading-relaxed font-medium">
                      Creating strategic M&E frameworks in collaboration with stakeholders, ensuring they are
                      data-driven, context-sensitive, and execution-ready for on-ground implementation.
                    </p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flex flex-col items-center justify-center h-full space-y-3 shadow-2xl">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <h3 className="text-sm font-semibold text-center text-gray-800">Project Implementation</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .flip-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  )
}
