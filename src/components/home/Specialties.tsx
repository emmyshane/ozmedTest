import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, Heart, Sparkles, Baby, Bone, Brain, 
  Building2, FlaskConical, Ambulance, Users, Activity, Pill
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Specialties = () => {
  const [isVisible, setIsVisible] = useState(false);
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
  const specialties = [
    { icon: Stethoscope, name: "Primary Care", link: "/specialties/primary-care" },
    { icon: Heart, name: "Cardiology", link: "/specialties/cardiology" },
    { icon: Sparkles, name: "Dermatology", link: "/specialties/dermatology" },
    { icon: Baby, name: "Pediatrics", link: "/specialties/pediatrics" },
    { icon: Bone, name: "Orthopedics", link: "/specialties/orthopedics" },
    { icon: Brain, name: "Mental Health", link: "/specialties/mental-health" },
    { icon: Building2, name: "Surgery Centers", link: "/specialties/surgery-centers" },
    { icon: FlaskConical, name: "Labs", link: "/specialties/labs" },
    { icon: Ambulance, name: "Urgent Care", link: "/specialties/urgent-care" },
    { icon: Users, name: "Multi-Specialty", link: "/specialties/multi-specialty" },
    { icon: Activity, name: "Physical Therapy", link: "/specialties/physical-therapy" },
    { icon: Pill, name: "Gastroenterology", link: "/specialties/gastroenterology" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
            Specialties We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Expert billing solutions tailored to your medical specialty with deep understanding of specialty-specific codes and requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Link key={index} to={specialty.link}>
              <Card 
                className="border-none shadow-md hover:shadow-2xl hover:border-primary transition-all duration-500 cursor-pointer h-full group overflow-hidden relative bg-background"
                style={{
                  animation: isVisible ? `fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-secondary to-cta group-hover:w-full transition-all duration-500"></div>

                <CardContent className="p-6 text-center relative z-10 group-hover:transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-md">
                    <specialty.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{specialty.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
