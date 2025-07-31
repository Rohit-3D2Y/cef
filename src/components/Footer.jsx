import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowRight,
} from "lucide-react";

// Smooth Scroll Function
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = 80; // Navbar offset
    const targetPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    smoothScrollTo(targetPosition, 800);
  }
};

const smoothScrollTo = (targetY, duration = 600) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startY, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

const Footer = () => {
  const quickLinks = [
    { name: "About Us" },
    { name: "Our Clients" },
    { name: "Our Work" },
    { name: "Partners" },
    { name: "Contact Us" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#linkedin",
      color: "hover:text-blue-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden mt-10">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 rounded-full opacity-10 -ml-24 -mb-24"></div>

      <div className="relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-gray-700"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl dm-sans font-semibold tracking-tight mb-4">
                Transform your <span className="text-yellow-500">Impact Intervention</span> with Us!
              </h3>
              <p className="text-gray-300 text-base sm:text-lg mb-8">
                We generate evidence-based insights and design adaptive systems that help programs deliver sustainable and scalable impact efficiently.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl dm-sans font-semibold tracking-tight text-yellow-500 mb-4">
                Unnati C4E
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-yellow-500" />
                  <span>N204, Greater Kailash 1, New Delhi - 110048</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-yellow-500" />
                  <span>+91 84472 72248</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-yellow-500" />
                  <span>contactus@unnatic4e.com</span>
                </div>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() =>
                        scrollToSection(link.name.replace(/\s+/g, "").toLowerCase())
                      }
                      className="text-left w-full text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
