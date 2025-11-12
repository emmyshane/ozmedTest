import { ClipboardCheck, Settings, Activity, LineChart, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Free Consultation & Audit",
      description: "We analyze your current billing process and identify revenue opportunities at no cost to you. We assess how AI can optimize your current workflow.",
      timeline: "Week 1"
    },
    {
      icon: Settings,
      title: "Customized Implementation",
      description: "Seamless integration of our AI-powered billing platform with your practice management system and EHR.",
      timeline: "Weeks 2-4"
    },
    {
      icon: Activity,
      title: "AI-Driven Claims Management",
      description: "Our AI processes claims with predictive analytics, intelligent coding, and real-time verification—catching errors before submission.",
      timeline: "Ongoing"
    },
    {
      icon: LineChart,
      title: "Continuous Optimization",
      description: "Machine Learning continuously improves accuracy while our specialists handle complex cases and provide strategic insights.",
      timeline: "Monthly+"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(176, 25%, 54%) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-secondary/10 rounded-full text-primary font-semibold text-sm border border-secondary/20">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">How Our Medical Billing Services Work</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven, four-step process to transform your medical billing, reduce denials, and boost practice revenue with AI-powered revenue cycle management.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Simple connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5">
            <div 
              className="absolute top-0 left-[12.5%] right-[12.5%] h-full bg-secondary/30 rounded-full transition-all duration-1000"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left'
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => {
              return (
                <div 
                  key={index} 
                  className="relative"
                  style={{
                    animation: isVisible ? `fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s forwards` : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Step card */}
                  <div className="relative bg-background rounded-2xl p-6 border border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 h-full group">
                    {/* Number badge */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-cta rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/15 transition-colors duration-300">
                        <step.icon className="w-7 h-7 text-secondary" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Timeline badge */}
                    <div className="flex justify-center mb-3">
                      <div className="px-3 py-1 bg-cta/10 text-cta rounded-full text-xs font-bold">
                        {step.timeline}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground text-center mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-3 z-20">
                      <ArrowRight 
                        className="w-6 h-6 text-secondary/40"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${index * 0.15 + 0.3}s`
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
