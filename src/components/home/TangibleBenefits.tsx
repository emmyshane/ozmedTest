import { TrendingUp, DollarSign, Clock, Shield, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const TangibleBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const benefits = [
    {
      icon: TrendingUp,
      stat: "98%",
      title: "Clean Claim Submission Rate",
      description: "Predictive technology drastically reduces errors and accelerates payment cycles"
    },
    {
      icon: DollarSign,
      stat: "↓ 40%",
      title: "Reduced Operating Costs",
      description: "Automation lowers administrative overhead, freeing staff for high-value tasks"
    },
    {
      icon: Clock,
      stat: "2x Faster",
      title: "Accelerated Revenue Cycle",
      description: "AI shortens time from claim submission to final payment"
    },
    {
      icon: Shield,
      stat: "",
      title: "Constant Compliance",
      description: "Systems continuously updated with latest payer rules and regulatory changes"
    },
    {
      icon: BarChart3,
      stat: "",
      title: "Predictive Financial Insight",
      description: "AI-driven analytics forecast revenue and identify optimization opportunities"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cta rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
            Measurable Results for Your Practice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Experience tangible improvements in your revenue cycle with AI-powered automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className={`border-none shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-background overflow-hidden relative ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{
                  animation: isVisible ? `fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-cta to-secondary group-hover:w-full transition-all duration-500"></div>

                <CardContent className="p-8 relative z-10 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-cta/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md">
                    <Icon className="w-8 h-8 text-cta transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Stat */}
                  {benefit.stat && (
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                      {benefit.stat}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-secondary to-cta group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TangibleBenefits;
