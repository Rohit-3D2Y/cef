import { Mail, Phone, ArrowRight, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const formData = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      };

      // Simulated API request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setFormStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <p className="text-sm text-[#1848a0] uppercase font-semibold mb-2 tracking-wider">
              We're here to help you
            </p>
            <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#292d6a" }}>
              <span style={{ color: "#ffd300" }}>Get</span> in touch with Us!
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Partnering with organizations to deliver evidence-based strategies, actionable insights, and sustainable development outcomes through rigorous data and evaluation frameworks.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid gap-4">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-[#f9faff] rounded-xl border border-[#e0e3f7] hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: "#ffd300" }}>
                <Mail className="w-5 h-5" style={{ color: "#292d6a" }} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email us</p>
                <p className="text-base font-semibold" style={{ color: "#292d6a" }}>
                contactus@unnatic4e.com 
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-[#f9faff] rounded-xl border border-[#e0e3f7] hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: "#ffd300" }}>
                <Phone className="w-5 h-5" style={{ color: "#292d6a" }} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us</p>
                <p className="text-base font-semibold" style={{ color: "#292d6a" }}>
                 84472 72248
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-[#f9faff] rounded-xl border border-[#e0e3f7] hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: "#ffd300" }}>
                <MapPin className="w-5 h-5" style={{ color: "#292d6a" }} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Visit</p>
                <p className="text-base font-semibold" style={{ color: "#292d6a" }}>
                  N204, Greater Kailash 1, New Delhi - 110048
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl p-6 border border-[#e0e3f7] shadow-lg relative">
          <div className="text-center mb-6">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl mb-3" style={{ backgroundColor: "#ffd300" }}>
              <Send className="w-6 h-6" style={{ color: "#292d6a" }} />
            </div>
            <h3 className="text-xl font-semibold" style={{ color: "#292d6a" }}>
              Get in Touch
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1848a0] focus:outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1848a0] focus:outline-none"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1848a0] focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1848a0] focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1848a0] focus:outline-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              style={{ backgroundColor: formStatus === "sending" ? "#10b981" : "#292d6a" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1848a0")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = formStatus === "sending" ? "#10b981" : "#292d6a")
              }
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
              <ArrowRight className="w-4 h-4" />
            </button>

            {formStatus === "success" && (
              <p className="text-green-600 text-center mt-2">Message sent successfully!</p>
            )}
            {formStatus === "error" && (
              <p className="text-red-600 text-center mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
