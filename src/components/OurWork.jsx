import { link } from "framer-motion/client";
import React, { useState } from "react";

const OurWork = () => {
  const categories = [
    "All Posts",
    "Field Research and Evaluation",
    "Policy Design and Systems Reform",
    "Advisory and Evaluation Systems",
    "Framework Design and Program Development",
    "Impact Insights",
  ];

  const posts = [
    {
      id: 1,
      category: "Framework Design and Program Development",
      image: "/assets/block (1).jpg",
      title:
        "Implementation and Support for a food production training program in select schools in H.P & Chandigarh",
      description:
        "Served as the implementation strategy partner, co-developing the rollout plan, infrastructure blueprint,and capacity-building model for a skill-based food processing program.",
      pdf: "/assets/frame1.pdf",
    },
    {
      id: 2,
      category: "Policy Design and Systems Reform",
      image: "/assets/client (4).png",
      title:
        "Skills Strengthening for Industrial Value Enhancement (STRIVE) – A World Bank- Supported National Vocational Reform Program",
      description:
        "End-to-end implementation support, fund disbursement oversight, and systemic reform execution for India’s $318M national skilling initiative under the World Bank.",
      pdf: "/assets/policy2.pdf",
    },
    {
      id: 3,
      category: "Advisory and Evaluation Systems",
      image: "/assets/client (3).png",
      title: "Strategic Advisory for Swapnopuron, Sundarbans",
      description:
        "Impact Assessment of Swapnopuron Welfare Society’s Education and Community Interventions",
      pdf: "/assets/adviosy1.pdf",
    },
    {
      id: 4,
      category: "Advisory and Evaluation Systems",
      image: "/assets/impact.png",
      title:
        "Impact Evaluation of School-Based Vocational Education Intervention Catalyst Program – in Delhi, Maharashtra, Gujarat, and Jharkhand",
      description:
        "Design and execution of a 4-state mixed-methods impact evaluation, leveraging LAHI’s large-scale student datasets to assess vocational training outcomes across Delhi, Maharashtra, Gujarat, and Jharkhand.",
      pdf: "/assets/adviosy2.pdf",
    },
    {
      id: 5,
      category: "Field Research and Evaluation",
      image: "/assets/client (2).png",
      title: "School Internship Verification under NSQF in Delhi",
      description:
        "End-to-end field data collection to ascertain the impact of skill training on children in sr. secondary school and verify internships in organizations.",
      pdf: "/assets/field1.pdf",
    },
    {
      id: 6,
      category: "Policy Design and Systems Reform",
      image: "/assets/client (1).png",
      title:
        "Scheme Design and Institutional Architecture for MSDE’s new ITI upgradation scheme",
      description:
        "Drafted comprehensive scheme guidelines for transforming 1,000 ITIs under a hub-and-spoke model, including: Institutional and governance arrangements, Financial model (INR 60,000 Cr outlay), Performance-based funding, and M&E frameworks.",
      pdf: "/assets/policy1.pdf",
    },
    {
      id: 7,
      category: "Field Research and Evaluation",
      image: "/assets/Skill.jpg",
      title: "RCT Impact Evaluation: Increased Access to Information",
      description:
        "Supported the design of the intervention, supervised end-to-end data collection, and overall RCT to evaluate how reducing information barriers via the MEET app improved outcomes for female vocational graduates.",
      pdf: "/assets/field2.pdf",
    },
    {
      id: 8,
      category: "Policy Design and Systems Reform",
      image: "/assets/policyy3.png",
      title:
        "Gender Study to Identify Barriers supported by World Bank STRIVEProject",
      description:
        "Led a national mixed-methods study to identify barriers to women’s participation in ITIs,apprenticeships, and jobs, and proposed actionable strategies for a more inclusive skillingecosystem",
      pdf: "/assets/policy3.pdf",
    },
    {
      id: 9,
      category: "Policy Design and Systems Reform",
      image: "/assets/policyy4.png",
      title:
        "Tracer Study 2012",
      description:
        "Led the national end-term tracer study under the World Bank’s VTIP, evaluating labor market outcomes and institutional performance of ITIs toinform future skilling policies.",
      pdf: "/assets/policy4.pdf",
    },
    {
      id: 10,
      category: "Policy Design and Systems Reform",
      image: "/assets/policyy5.png",
      title:
        "RCT Impact Evaluation Safety Intervention",
      description:
        "Led the end-to-end design and execution of a large-scale Randomized Control Trial (RCT) baseline study. This study assessed the imapct of gender-based violence on women's mobility, vocational training access, and labor market aspirations.",
      pdf: "/assets/policy5.pdf",
    },
    {
      id: 11,
      category: "Policy Design and Systems Reform",
      image: "/assets/policyy6.png",
      title:
        "Tracer Study 2022",
      description:
        "Led the design and execution of a tech-enabled pilot tracer study covering 18,500+ ITI graduates to track employment outcomes and support a scalable methodology for India’s TVET system",
      pdf: "/assets/policy6.pdf",
    },
     {
      id: 12,
      category: "Impact Insights",
      image: "/assets/impactt.png",
      title:
        "Learnings from the pilot industry apprenticeship initiative scheme.",
      description:
        "To set up a proof of concept for a skills training modality which a) satisfies the skilled manpower needs of Micro, Small and Medium Enterprises (MSME) firms; b) establishes a scalable mechanism that is able to skill India’s youth at speed. ",
      pdf: "/assets/impact1.pdf",
    },
    {
      id: 13,
      category: "Impact Insights",
      image: "/assets/impactt1.jpg",
      title:
        "Tracer Studies for Evidence-Based Decisions",
      description:
        "Tracer studies involve tracking the career paths and educational outcomes of graduates, providing invaluable insights into the effectiveness of educational programs and institutions. By collecting and analyzing data on employment rates, salary levels, skill utilization, and further education, these studies offer a comprehensive understanding of how well educational offerings align with labor market demands and societal needs.",
        link: "https://g.co/gemini/share/035749683fb2",
      // pdf: "/assets/impact1.pdf",
    },
    {
      id: 14,
      category: "Impact Insights",
      image: "/assets/impactt2.jpg",
      title:
        "Skilling Up India’s Youth with Support from Industry",
      description:
        "Facilitating job-seeking youth to acquire relevant skills for the emerging needs of India’s rapidly growing industries and tourism is critical and extremely complex. With funding from the World Bank Skills Strengthening for Industrial Value Enhancement (STRIVE) project, the Ministry of Skills Development & Entrepreneurship (MSDE) has piloted a new apprenticeship promotion modality, the Industry Apprenticeship Initiative (IAI). The grant mechanism operates through Industry Clusters (ICs). The approach shows results and promise for scaling-up.",
      pdf: "/assets/impact3.pdf",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredPosts =
    activeCategory === "All Posts"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section id="ourwork" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1e256e] text-center mb-6">
          Our Work
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.slice(0, 4).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-[#ffd300] text-[#1e256e] shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-[#ffd300] hover:text-[#1e256e]"
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="w-full"></div>
          {categories.slice(4).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-[#ffd300] text-[#1e256e] shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-[#ffd300] hover:text-[#1e256e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1e256e]">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{post.description}</p>

                {/* PDF Download Button or Link */}
                {post.link ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[#1e256e] font-medium hover:text-[#ffd300] transition-colors"
                  >
                    Read More ↓
                  </a>
                ) : (
                  <a
                    href={post.pdf}
                    download
                    className="mt-4 inline-block text-[#1e256e] font-medium hover:text-[#ffd300] transition-colors"
                  >
                    Read More ↓
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
