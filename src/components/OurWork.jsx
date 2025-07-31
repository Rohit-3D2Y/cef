import React, { useState } from "react";

const OurWork = () => {
  const categories = [
    "All Posts",
    "Field Research and Evaluation",
    "Policy Design and Systems Reform",
    "Advisory and Evaluation Systems",
    "Framework Design and Program Development",
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
  ];

  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredPosts =
    activeCategory === "All Posts"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1e256e] text-center mb-6">
          Our Work
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
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

                {/* PDF Download Button */}
                <a
                  href={post.pdf}
                  download
                  className="mt-4 inline-block text-[#1e256e] font-medium hover:text-[#ffd300] transition-colors"
                >
                  Read More ↓
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
