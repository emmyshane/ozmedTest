import { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Award, Users, Shield, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every claim, every interaction, and every outcome for our clients.",
      gradient: "from-amber-400 to-orange-400"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with complete transparency, honesty, and ethical billing practices.",
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We view our clients as partners, working together to achieve their practice goals.",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "We focus on measurable results that directly impact your practice's financial health.",
      gradient: "from-rose-400 to-pink-400"
    }
  ];

  const stats = [
    { value: 15, suffix: "+", label: "Years in Business" },
    { value: 500, suffix: "+", label: "Practices Served" },
    { value: 98, suffix: "%", label: "Client Retention Rate" },
    { value: 500, suffix: "M+", label: "Revenue Collected", prefix: "$" }
  ];

  const certifications = [
    {
      category: "AAPC (American Academy of Professional Coders)",
      items: [
        "Certified Professional Biller (CPB)",
        "Certified Professional Coder (CPC)"
      ]
    },
    {
      category: "AHIMA (American Health Information Management Association)",
      items: [
        "Certified Coding Associate (CCA)",
        "Certified Coding Specialist (CCS)"
      ]
    },
    {
      category: "AMBA (American Medical Billing Association)",
      items: [
        "Certified Medical Reimbursement Specialist (CMRS)",
        "Certified Medical Billing Specialist (CMBS)"
      ]
    },
    {
      category: "Additional Credentials",
      items: [
        "HIPAA Privacy & Security Training",
        "Compliance or Auditing Certification",
        "Membership in Healthcare Billing & Management Association (HBMA)"
      ]
    },
    {
      category: "Organizational Certifications",
      items: [
        "HIPAA Certified Organization",
        "AAPC Corporate Partner",
        "AHIMA Organizational Member",
        "SOC 2 Type II Compliant",
        "Medicare Provider Certified"
      ]
    }
  ];

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && counts[0] === 0) {
          const duration = 2000;
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
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [counts]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative text-primary-foreground py-24 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/banner-bg.png)' }}>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/60"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
                About OZMED Healthcare Services
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 animate-fade-up stagger-1">
                Your trusted partner in medical billing and revenue cycle management.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Story */}
        <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, hsl(176, 25%, 54%) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span className="gradient-text">Our Mission</span>
                </h2>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  To empower healthcare providers to focus on patient care by delivering exceptional medical billing services that maximize revenue, ensure compliance, and provide peace of mind.
                </p>
              </div>

              <div className="relative bg-background rounded-3xl p-8 lg:p-12 border-2 border-border/50 hover:border-secondary/50 transition-all duration-500 group overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-cta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-cta flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    Our Story
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      OZMED Healthcare Services is a comprehensive revenue cycle management company dedicated to solving the billing complexities that healthcare providers face. Our team of certified billing experts works to ensure practices can focus on what matters most—delivering quality patient care.
                    </p>
                    <p>
                      We've grown to serve over 500 practices across 12 medical specialties. Our success is built on a simple principle: when your practice succeeds financially, you can provide better care to your patients.
                    </p>
                    <p>
                      Today, we combine cutting-edge technology with human expertise to deliver billing services that are accurate, efficient, and tailored to each specialty's unique needs. Our team of certified coders, billing specialists, and account managers work tirelessly to ensure our clients receive every dollar they've earned.
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span className="gradient-text">Our Core Values</span>
                </h2>
                <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const isHovered = hoveredValue === index;
                  
                  return (
                    <div
                      key={index}
                      className="group relative"
                      style={{
                        animation: isVisible ? `scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s forwards` : 'none',
                        opacity: isVisible ? 1 : 0
                      }}
                      onMouseEnter={() => setHoveredValue(index)}
                      onMouseLeave={() => setHoveredValue(null)}
                    >
                      <div className="relative h-full bg-background rounded-2xl p-8 border border-border/50 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 text-center">
                        {/* Icon */}
                        <div className="mb-6 flex justify-center">
                          <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className={`relative w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {value.description}
                        </p>

                        {/* Floating particles */}
                        {isHovered && (
                          <>
                            <div className={`absolute -top-2 -right-2 w-3 h-3 rounded-full bg-gradient-to-r ${value.gradient} animate-wave`} style={{ animationDelay: '0s' }}></div>
                            <div className={`absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-gradient-to-r ${value.gradient} animate-wave`} style={{ animationDelay: '0.5s' }}></div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        

        {/* Stats */}
        <section ref={statsRef} className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
          {/* Simple background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
                By The Numbers
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const isHovered = hoveredStat === index;
                  
                  return (
                    <div 
                      key={index}
                      className="text-center group cursor-pointer"
                      style={{
                        animation: counts[0] > 0 ? `fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards` : 'none',
                        opacity: counts[0] > 0 ? 1 : 0
                      }}
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                    >
                      <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                        <div className="text-5xl lg:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                          {stat.prefix || ''}{counts[index]}{stat.suffix}
                        </div>
                        <div className="text-primary-foreground/80 text-sm lg:text-base font-medium group-hover:text-primary-foreground transition-colors duration-300">
                          {stat.label}
                        </div>

                        {/* Floating particles */}
                        {isHovered && (
                          <>
                            <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-white/50 animate-wave" style={{ animationDelay: '0s' }}></div>
                            <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-white/50 animate-wave" style={{ animationDelay: '0.5s' }}></div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span className="gradient-text">Certifications & Compliance</span>
                </h2>
                <p className="text-lg text-muted-foreground">Trusted credentials and industry-leading standards</p>
              </div>
              
              <div className="space-y-12">
                {certifications.map((certGroup, groupIndex) => (
                  <div 
                    key={groupIndex}
                    className="animate-fade-up"
                    style={{ animationDelay: `${groupIndex * 0.1}s` }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-cta flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {certGroup.category}
                      </h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {certGroup.items.map((cert, index) => (
                        <div 
                          key={index}
                          className="group relative bg-background rounded-xl p-5 border border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                              <CheckCircle className="w-5 h-5 text-secondary" strokeWidth={2} />
                            </div>
                            <span className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                              {cert}
                            </span>
                          </div>

                          {/* Bottom accent */}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-cta group-hover:w-full transition-all duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
