import { Brain, Shield, Zap, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ValuePropositions = () => {
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
  
  const values = [
    {
      icon: Brain,
      title: "NLP-Powered Coding",
      description: "Natural Language Processing reads clinical documentation and suggests the most accurate CPT, ICD-10, and HCPCS codes—minimizing errors and preventing denials.",
      stat: "Intelligent Medical Coding",
      color: "from-blue-400/20 to-purple-400/20",
      iconColor: "text-blue-500",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      icon: Shield,
      title: "Predictive Analytics",
      description: "Machine Learning analyzes millions of claims to predict denials before submission, flagging errors for immediate correction and maximizing clean claim rates.",
      stat: "Predictive Denial Prevention",
      color: "from-green-400/20 to-emerald-400/20",
      iconColor: "text-green-500",
      glowColor: "rgba(34, 197, 94, 0.3)"
    },
    {
      icon: Zap,
      title: "Real-Time Eligibility Check",
      description: "AI-driven tools verify patient insurance, benefits, and authorization requirements instantly—eliminating denials due to coverage issues.",
      stat: "Real-Time Verification",
      color: "from-yellow-400/20 to-orange-400/20",
      iconColor: "text-yellow-500",
      glowColor: "rgba(234, 179, 8, 0.3)"
    },
    {
      icon: Eye,
      title: "Compliance Monitoring",
      description: "Continuously monitors billing data for suspicious patterns and anomalies, protecting your practice's financial integrity and ensuring regulatory adherence.",
      stat: "Fraud Detection",
      color: "from-teal-400/20 to-cyan-400/20",
      iconColor: "text-teal-500",
      glowColor: "rgba(20, 184, 166, 0.3)"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-secondary/30 to-cta/30 blob"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-cta/30 to-primary/30 blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 to-secondary/20 blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-secondary/20 to-cta/20 rounded-full text-primary font-semibold text-sm border border-secondary/30 animate-bounce-in">
              AI-Powered Excellence
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Our AI Advantage</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Harness the power of artificial intelligence to transform your medical billing operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: isVisible ? `scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s forwards` : 'none',
                opacity: isVisible ? 1 : 0
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Floating container with glassmorphism */}
              <div className="relative p-8 rounded-3xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl overflow-hidden h-full flex flex-col">
                {/* Animated gradient background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.5s ease-out'
                  }}
                ></div>

                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    boxShadow: hoveredIndex === index ? `0 0 60px ${value.glowColor}, inset 0 0 30px ${value.glowColor}` : 'none'
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with morphing background */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-morph`}></div>
                      <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-background to-accent/30 flex items-center justify-center border border-border/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <value.icon className={`w-12 h-12 ${value.iconColor} transition-all duration-500 group-hover:scale-110`} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title with gradient on hover */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center transition-all duration-300 group-hover:scale-105">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-center mb-6 flex-grow">
                    {value.description}
                  </p>

                  {/* Badge with wave animation */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="px-5 py-2.5 bg-gradient-to-r from-secondary/10 to-cta/10 rounded-full border border-secondary/30 group-hover:border-secondary/60 transition-all duration-500">
                        <span className="text-sm font-bold bg-gradient-to-r from-secondary to-cta bg-clip-text text-transparent">
                          {value.stat}
                        </span>
                      </div>
                      {/* Animated underline */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-secondary to-cta transition-all duration-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cta/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating particles on hover */}
              {hoveredIndex === index && (
                <>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cta rounded-full animate-wave" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-wave" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 -right-3 w-2 h-2 bg-accent rounded-full animate-wave" style={{ animationDelay: '1s' }}></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
