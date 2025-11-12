import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import revenueImage from "@/assets/revenue-growth.jpg";
import { useEffect, useRef } from "react";

const FreeAuditCTA = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3D tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const xRotation = ((clientY - top) / height - 0.5) * 8;
      const yRotation = ((clientX - left) / width - 0.5) * -8;
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    };

    const image = imageRef.current;
    if (image) {
      image.addEventListener('mousemove', handleMouseMove);
      image.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (image) {
        image.removeEventListener('mousemove', handleMouseMove);
        image.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  const includes = [
    "Complete AR analysis and aging report",
    "Denial pattern identification and solutions",
    "Coding accuracy assessment",
    "Revenue opportunity report with specific recommendations",
    "Benchmark comparison against industry standards",
    "30-minute consultation with billing expert"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cta rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse">
              <Sparkles className="w-4 h-4" />
              $500 VALUE - FREE
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Get Your Free Medical Billing Audit - Uncover Revenue Opportunities
            </h2>
            
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Discover how our AI-powered medical billing platform can transform your revenue cycle with predictive analytics, intelligent medical coding, and automated HIPAA compliance. Identify hidden revenue opportunities with a comprehensive billing audit. No cost, no obligation.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                What's Included:
              </h3>
              {includes.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start group"
                  style={{
                    animation: `fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  <CheckCircle2 className="w-7 h-7 mr-4 flex-shrink-0 text-cta group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-primary-foreground/90 text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/free-audit">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-10 py-7 group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Your Free Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cta to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>

          {/* Image with 3D effect */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div 
              ref={imageRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src={revenueImage} 
                alt="Medical billing revenue growth chart showing 25% increase in practice revenue through AI-powered billing services" 
                className="w-full"
                loading="lazy"
                width="800"
                height="600"
              />
              
              {/* Glassmorphic overlay */}
              <div className="absolute top-8 left-8 bg-background/90 backdrop-blur-md rounded-2xl p-6 border border-cta/20 shadow-xl">
                <div className="text-3xl font-bold text-primary mb-1">25%</div>
                <div className="text-sm text-muted-foreground">Avg Revenue Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAuditCTA;
