import { Link } from "react-router";

export default function Component() {
  const categories = [
    { name: "All Posts", active: true },
    { name: "Entrepreneurship", active: false },
    { name: "Leadership", active: false },
    { name: "Management", active: false },
    { name: "Marketing", active: false },
    { name: "Technology", active: false },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "How to Create a Business Plan That Drives",
      description: "But why smiling man her imagine married. Chiefly can man her out believe manners cottage...",
      image: "https://i.pinimg.com/736x/07/75/96/07759682b1aaf4c20c37fd580daa5c5d.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "5 Mistakes That Are Holding Your Business Back",
      description: "But why smiling man her imagine married. Chiefly can man her out believe manners cottage...",
      image: "https://i.pinimg.com/1200x/c1/bd/cd/c1bdcd2c6f2ac51d7a18126d232e9bcd.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Why Customer Retention Matters More",
      description: "But why smiling man her imagine married. Chiefly can man her out believe manners cottage...",
      image: "https://i.pinimg.com/736x/0e/13/84/0e138451e5dc226d175177a1cb302715.jpg",
      link: "#",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-sky-500 text-sm font-medium uppercase tracking-wide mb-4">WHAT DOES OUR WORK LOOK LIKE?</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">Our Work</h2>
      </div>


      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video relative">
              <img src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover h-80 w-96" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center">
      </div>
    </section>
  )
}
