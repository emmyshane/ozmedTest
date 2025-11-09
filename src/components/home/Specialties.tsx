import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, Heart, Sparkles, Baby, Bone, Brain, 
  Building2, FlaskConical, Ambulance, Users, Activity, Pill
} from "lucide-react";

const Specialties = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Specialties We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert billing solutions tailored to your medical specialty with deep understanding of specialty-specific codes and requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Link key={index} to={specialty.link}>
              <Card className="border-border shadow-soft hover:shadow-medium hover:border-primary transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-3">
                    <specialty.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{specialty.name}</h3>
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
