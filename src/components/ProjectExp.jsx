import React, { useState, useEffect } from "react";

const StatsSection = () => {
  const stats = [
    { number: 7, label: "Projects", suffix: "" },
    { number: 4, label: "Sectors", suffix: "" },
    { number: 8, label: "Geographies", suffix: "" },
    { number: 5, label: "Partners and Clients", suffix: "" },
    { number: 1000000, label: "Beneficiaries Targeted", suffix: "+" },
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset numbers to 0 first, then start animation
            setAnimatedNumbers(stats.map(() => 0));
            setIsVisible(true);
          } else {
            // Reset when section leaves viewport
            setIsVisible(false);
            setAnimatedNumbers(stats.map(() => 0));
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully visible
      }
    );

    const sectionElement = document.getElementById('stats-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateNumbers = () => {
      stats.forEach((stat, index) => {
        const duration = 800; // Faster: 0.8 seconds
        const steps = 80; // More steps for faster, smoother animation
        const increment = stat.number / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          // Add randomness to make numbers flash more dramatically
          const randomMultiplier = currentStep < steps * 0.7 ? Math.random() * 3 : 1;
          const currentValue = Math.min(increment * currentStep * randomMultiplier, stat.number);
          
          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = currentValue;
            return newNumbers;
          });

          if (currentStep >= steps) {
            // Ensure final number is exact
            setAnimatedNumbers(prev => {
              const newNumbers = [...prev];
              newNumbers[index] = stat.number;
              return newNumbers;
            });
            clearInterval(interval);
          }
        }, duration / steps);
      });
    };

    animateNumbers();
  }, [isVisible]);

  const formatNumber = (num, index) => {
    if (index === 4) { // Beneficiaries (10 Lakh+)
      if (num >= 1000000) {
        return "10 Lakh";
      } else if (num >= 100000) {
        return `${Math.floor(num / 100000)} Lakh`;
      } else {
        return Math.floor(num).toLocaleString();
      }
    }
    return Math.floor(num).toString();
  };

  return (
    <section id="stats-section" className="bg-[#1e256e] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-white relative">
            <div className="overflow-hidden">
              <h3 className="text-4xl md:text-5xl font-bold text-[#ffd300] transition-all duration-1000 ease-out transform">
                {formatNumber(animatedNumbers[idx], idx)}{stats[idx].suffix}
              </h3>
            </div>
            <p className="mt-3 text-base md:text-lg font-medium leading-relaxed">
              {stat.label}
            </p>
            {idx < stats.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-400/40"></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;