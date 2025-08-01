import React, { useState } from "react";

export default function FounderMessageBlock() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column - Image */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/assets/founder.jpg"
            alt="Founder"
            className="w-80 md:w-96 rounded-xl shadow-lg border-4 border-white"
          />
          <p className="mt-6 text-center md:text-left font-medium text-lg text-[#292d6a]">
            <span className="block font-semibold text-3xl md:text-4xl text-[#1848a0]">
              Kunal Datt
            </span>
            Founder & CEO <br /> Unnati C4E - Centre for Evaluation
          </p>
        </div>

        {/* Right Column - Message */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-[#292d6a]">
            From the Founder's Desk
          </h2>

          {/* Main Quote (Always Visible) */}
          <p className="relative text-gray-700 text-lg md:text-xl italic leading-relaxed">
            <span className="text-6xl md:text-7xl font-serif text-[#ffd300] absolute -left-10 -top-4">
              “
            </span>
            At grassroots research to global programs, I have seen data turn
            ideas into impact. At{" "}
            <span className="text-[#1848a0] font-semibold">
              Unnati C4E - Centre for Evaluation
            </span>
            , we turn evidence into insight as true progress demands both rigour
            and purpose. When our name is on a report, it’s your guarantee of
            integrity, relevance, and real-world change.
            <span className="text-6xl md:text-7xl font-serif text-[#ffd300] absolute -right-90 -bottom-12">
              ”
            </span>
          </p>

          {/* Expanded Full Message (Toggle) */}
          {showFullMessage && (
            <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                At Unnati - Centre for Evaluation (C4E), we are driven by one
                guiding principle: quality matters most. In an era where
                development efforts are expanding and evolving rapidly, we
                believe the next leap forward depends not just on more action,
                but on smarter and evidence-driven action.
              </p>
              <p>
                Unnati means progress, and we see progress not just as outputs
                or numbers, but as meaningful, measurable outcomes that improve
                lives. As a Centre for Evaluation, we go beyond traditional M&E.
                Our approach is to embed evaluative thinking and evidence use
                across the full lifecycle of a program—from design and
                implementation to assessment and scaling.
              </p>
              <p>
                Our goal is simple but ambitious: to help organizations use
                evidence as the bedrock of every decision they make. This means
                two things:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Making global evidence accessible and relevant.</li>
                <li>
                  Delivering high-quality, context-sensitive data that uncovers
                  fresh insights.
                </li>
              </ul>
              <p>
                As we continue to grow, we remain committed to our core belief:
                that when we align intent with insight, and action with
                evidence, development becomes not just more efficient—but truly
                transformative.
              </p>
              <p className="font-semibold text-[#1848a0]">
                – Kunal Datt <br /> Founder & CEO, Unnati – Centre for
                Evaluation (C4E)
              </p>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setShowFullMessage(!showFullMessage)}
            className="mt-6 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            style={{
              backgroundColor: "#ffd300",
              color: "#292d6a",
            }}
          >
            {showFullMessage ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}
