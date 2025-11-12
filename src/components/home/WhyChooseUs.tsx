import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, Users, DollarSign, TrendingUp, Shield, Brain } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // 3D tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const xRotation = ((clientY - top) / height - 0.5) * 10;
      const yRotation = ((clientX - left) / width - 0.5) * -10;
      
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
  const reasons = [
    {
      icon: Users,
      title: "Multi-Specialty Expertise",
      description: "Deep knowledge across all medical specialties with specialty-specific billing experts."
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "State-of-the-art billing software and seamless EHR integration for maximum efficiency."
    },
    {
      icon: Award,
      title: "Certified Team",
      description: "AAPC and AHIMA certified coders and billing specialists with ongoing education."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, percentage-based pricing with no hidden fees or long-term contracts."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "18% average revenue increase with 99.5% accuracy rate and reduced denials."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Fully compliant with HIPAA regulations and rigorous data security protocols."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
            Why Healthcare Providers Choose OZMED Medical Billing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Combining cutting-edge AI technology with certified medical billing specialists for superior revenue cycle management and claim accuracy.
          </p>
        </div>

        {/* AI + Human Expertise Highlight Box */}
        <div className="max-w-5xl mx-auto mb-16" style={{
          animation: isVisible ? 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}>
          <Card className="border-2 border-cta shadow-2xl bg-gradient-to-br from-background to-cta/5 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cta/10 to-secondary/10 rounded-full blur-3xl"></div>
            
            <CardContent className="p-10 lg:p-12 relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cta to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Brain className="w-7 h-7 text-background" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Where Smart Technology Meets Human Touch
                  </h3>
                  <div className="inline-block px-4 py-1 bg-cta/10 text-cta rounded-full text-sm font-semibold">
                    Technology That Empowers, Not Replaces
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Think of it this way: our AI is like having a tireless assistant who never misses a detail, processing millions of claims while you sleep. But when insurance companies push back or a tricky coding situation pops up? That's where our experienced billing specialists step in—people who know how to negotiate, advocate, and think on their feet. You're not choosing between technology and expertise. You're getting both, working together to maximize every dollar you've earned. It's the best of both worlds: lightning-fast automation for the routine stuff, and real human intelligence when the situation demands it. Because at the end of the day, your revenue deserves more than just software—it deserves a team that actually cares about getting you paid.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Cards and Image Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: 6 Cards in 3 rows */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-background/95 backdrop-blur-sm overflow-hidden relative hover:border-primary/60"
                  style={{
                    animation: isVisible ? `fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards` : 'none',
                    opacity: isVisible ? 1 : 0,
                    boxShadow: '0 0 25px rgba(148, 191, 62, 0.3)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    boxShadow: '0 0 40px rgba(148, 191, 62, 0.6), inset 0 0 30px rgba(148, 191, 62, 0.2)'
                  }}></div>
                  
                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors duration-300">{reason.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right: Image */}
          <div className="relative" style={{
            animation: isVisible ? 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' : 'none',
            opacity: isVisible ? 1 : 0
          }}>
            <div 
              ref={imageRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src={teamImage} 
                alt="Medical billing specialists and healthcare professionals collaborating with AI-powered billing software" 
                className="w-full"
                loading="lazy"
                width="800"
                height="600"
              />
              
              {/* Glassmorphic overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-lg rounded-2xl p-6 border border-primary/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cta to-secondary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">HIPAA Certified</div>
                    <div className="text-sm text-muted-foreground">100% Compliant & Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
