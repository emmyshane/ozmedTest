import { Shield, Award, Lock, CheckCircle2, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TrustSignals = () => {
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

  const trustBadges = [
    {
      icon: Shield,
      title: "HIPAA Certified",
      description: "100% compliant with all HIPAA regulations",
      gradient: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Lock,
      title: "Secure & Encrypted",
      description: "Bank-level 256-bit SSL encryption",
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      icon: Award,
      title: "AAPC/AHIMA Certified",
      description: "Certified professional medical coders",
      gradient: "from-purple-100 to-violet-100",
      iconColor: "text-purple-600"
    },
    {
      icon: CheckCircle2,
      title: "98% Claim Accuracy",
      description: "Industry-leading accuracy rate",
      gradient: "from-amber-100 to-orange-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Users,
      title: "500+ Practices Served",
      description: "Trusted by healthcare providers nationwide",
      gradient: "from-rose-100 to-pink-100",
      iconColor: "text-rose-600"
    },
    {
      icon: TrendingUp,
      title: "98% Client Retention",
      description: "Long-term partnerships built on results",
      gradient: "from-indigo-100 to-blue-100",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-accent/10 via-background to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Trusted & Certified Medical Billing Partner</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-leading certifications and security compliance ensuring the highest standards in medical billing services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: isVisible ? `scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s forwards` : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="relative h-full bg-background rounded-2xl border border-border/50 hover:border-secondary/50 transition-all duration-300 p-6 text-center">
                {/* Icon */}
                <div className="mb-3 flex justify-center">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${badge.gradient} rounded-xl blur-md opacity-50`}></div>
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${badge.gradient} rounded-xl flex items-center justify-center`}>
                      <badge.icon className={`w-7 h-7 ${badge.iconColor}`} strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {badge.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-snug">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional compliance text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            OZMED Healthcare Services maintains the highest standards of data security and healthcare compliance. 
            Our systems are regularly audited and certified to ensure your practice and patient data remain protected 
            at all times. We comply with all federal and state healthcare regulations including HIPAA, HITECH, and SOC 2.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
