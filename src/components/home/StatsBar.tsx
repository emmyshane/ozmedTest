import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Activity } from "lucide-react";

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    { 
      value: 98, 
      suffix: "%", 
      label: "Clean Claim Rate", 
      icon: Award
    },
    { 
      value: 18, 
      suffix: "%", 
      label: "Avg Revenue Increase", 
      icon: TrendingUp
    },
    { 
      value: 500, 
      suffix: "+", 
      label: "Healthcare Providers Trust Us", 
      icon: Users
    },
    { 
      value: 24, 
      suffix: "/7", 
      label: "AI-Powered Monitoring", 
      icon: Activity
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.round(increment * currentStep), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index} 
                className="text-center group cursor-pointer relative"
                style={{ 
                  animation: isVisible ? `fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Simple container */}
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/15 transition-all duration-300">
                      <Icon className="w-8 h-8" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-5xl lg:text-6xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">
                    {counts[index]}{stat.suffix}
                  </div>
                  
                  {/* Label */}
                  <div className="text-primary-foreground/80 text-sm lg:text-base font-medium group-hover:text-primary-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
