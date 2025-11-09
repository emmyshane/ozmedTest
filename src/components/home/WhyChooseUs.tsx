import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, Users, DollarSign, TrendingUp, Shield } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const WhyChooseUs = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Healthcare Providers Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience, expertise, and results that help your practice thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img 
              src={teamImage} 
              alt="Healthcare team collaborating with tablets" 
              className="rounded-2xl shadow-strong w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
