import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Code, UserCheck, Briefcase, Award, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ServicesGrid = () => {
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
      { threshold: 0.15 }
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
  
  const services = [
    {
      icon: FileText,
      title: "Medical Billing Services",
      benefits: [
        "Claims submission and tracking",
        "Payment posting and reconciliation",
        "Denial management and appeals"
      ],
      link: "/services/medical-billing",
      aiEnhanced: true,
      gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
      iconBg: "from-violet-100 to-purple-100",
      iconColor: "text-violet-600"
    },
    {
      icon: Code,
      title: "Medical Coding Services",
      benefits: [
        "AAPC/AHIMA certified coders",
        "ICD-10, CPT, and HCPCS coding",
        "98% coding accuracy rate"
      ],
      link: "/services/medical-coding",
      aiEnhanced: true,
      gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
      iconBg: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600"
    },
    {
      icon: UserCheck,
      title: "Medical Credentialing Services",
      benefits: [
        "Fast 45-60 day credentialing",
        "CAQH profile management",
        "100% application accuracy"
      ],
      link: "/services/credentialing",
      aiEnhanced: false,
      gradient: "from-emerald-500/10 via-green-500/10 to-lime-500/10",
      iconBg: "from-emerald-100 to-green-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Briefcase,
      title: "Front Office Management",
      benefits: [
        "24/7 phone answering",
        "95% appointment fill rate",
        "Professional bilingual support"
      ],
      link: "/services/front-office",
      aiEnhanced: false,
      gradient: "from-amber-500/10 via-orange-500/10 to-red-500/10",
      iconBg: "from-amber-100 to-orange-100",
      iconColor: "text-amber-600"
    },
    {
      icon: TrendingUp,
      title: "RCM Services",
      benefits: [
        "End-to-end revenue cycle",
        "30% reduction in AR days",
        "Comprehensive analytics"
      ],
      link: "/services/rcm",
      aiEnhanced: true,
      gradient: "from-rose-500/10 via-pink-500/10 to-fuchsia-500/10",
      iconBg: "from-rose-100 to-pink-100",
      iconColor: "text-rose-600"
    },
    {
      icon: Award,
      title: "PCMH Services",
      benefits: [
        "NCQA PCMH recognition",
        "Care coordination workflows",
        "Quality measure tracking"
      ],
      link: "/services/pcmh",
      aiEnhanced: false,
      gradient: "from-indigo-500/10 via-blue-500/10 to-sky-500/10",
      iconBg: "from-indigo-100 to-blue-100",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-background relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(176, 25%, 54%) 1px, transparent 1px), linear-gradient(90deg, hsl(176, 25%, 54%) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-semibold text-sm border border-primary/20 animate-scale-in">
              Comprehensive Solutions
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Comprehensive Medical Billing Services</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-up stagger-1">
            From AI-powered claims submission to complete revenue optimization, we provide comprehensive medical billing solutions tailored to your practice. Our services include medical coding, credentialing, and revenue cycle management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: isVisible ? `rotate-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s forwards` : 'none',
                opacity: isVisible ? 1 : 0
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main container with depth effect */}
              <div className="relative h-full bg-background rounded-3xl border-2 border-border/50 hover:border-secondary/50 transition-all duration-500 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>

                {/* Content wrapper */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* AI Badge */}
                  {service.aiEnhanced && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cta to-secondary blur-md opacity-50 animate-pulse"></div>
                        <div className="relative bg-gradient-to-r from-cta to-secondary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Sparkles className="w-3 h-3 animate-wave" />
                          AI-Enhanced
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Icon with floating animation */}
                  <div className="mb-6 flex justify-start relative z-10">
                    <div className="relative group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                      {/* Glow background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      {/* Icon container */}
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12`}>
                        <service.icon className={`w-10 h-10 ${service.iconColor} transition-all duration-500 group-hover:scale-110`} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Benefits list */}
                  <ul className="space-y-3 mb-8 flex-grow relative z-10">
                    {service.benefits.map((benefit, idx) => (
                      <li 
                        key={idx} 
                        className="text-muted-foreground flex items-start transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span className="w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-cta flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-white text-xs font-bold group-hover:scale-110 transition-transform duration-300">✓</span>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="relative z-10">
                    <Link to={service.link} className="block">
                      <Button 
                        variant="outline" 
                        className="w-full relative overflow-hidden group/btn border-2 hover:border-primary transition-all duration-300 py-6"
                      >
                        {/* Button gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        
                        <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-primary-foreground transition-colors duration-300 font-semibold">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cta/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating shadow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/20 to-cta/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-110"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
