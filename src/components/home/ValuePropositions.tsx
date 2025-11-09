import { TrendingUp, Clock, Target, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValuePropositions = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Boost your practice revenue by up to 25% with our expert billing services and denial management.",
      stat: "25% Average Increase"
    },
    {
      icon: Clock,
      title: "Reduce Admin Burden",
      description: "Save 20+ hours weekly by letting our team handle all billing operations and insurance follow-ups.",
      stat: "20+ Hours Saved"
    },
    {
      icon: Target,
      title: "Minimize Errors",
      description: "Achieve 99.5% accuracy with our certified coders and comprehensive quality assurance process.",
      stat: "99.5% Accuracy"
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description: "Get dedicated account management and 24/7 support from our experienced billing specialists.",
      stat: "Dedicated Manager"
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Medical Billing Services?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Focus on patient care while we handle the complexities of medical billing and revenue cycle management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground mb-4">{value.description}</p>
                <div className="text-lg font-semibold text-secondary">{value.stat}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
