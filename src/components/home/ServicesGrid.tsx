import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Code, UserCheck, DollarSign, Settings } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: FileText,
      title: "Medical Billing Services",
      benefits: [
        "Claims submission and tracking",
        "Payment posting and reconciliation",
        "Denial management and appeals"
      ],
      link: "/services/medical-billing"
    },
    {
      icon: TrendingUp,
      title: "Revenue Cycle Management",
      benefits: [
        "End-to-end RCM solutions",
        "Performance analytics and reporting",
        "Process optimization strategies"
      ],
      link: "/services/revenue-cycle"
    },
    {
      icon: Code,
      title: "Medical Coding & Compliance",
      benefits: [
        "ICD-10 and CPT coding",
        "Compliance audits",
        "Documentation improvement"
      ],
      link: "/services/medical-coding"
    },
    {
      icon: UserCheck,
      title: "Credentialing & Enrollment",
      benefits: [
        "Provider enrollment with payers",
        "CAQH profile management",
        "Ongoing re-credentialing"
      ],
      link: "/services/credentialing"
    },
    {
      icon: DollarSign,
      title: "AR Management",
      benefits: [
        "Outstanding claims follow-up",
        "Patient collections",
        "Aging reports and analysis"
      ],
      link: "/services/ar-management"
    },
    {
      icon: Settings,
      title: "Practice Management",
      benefits: [
        "Workflow optimization",
        "Staff training and support",
        "Technology integration"
      ],
      link: "/services/practice-management"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Medical Billing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From claims submission to revenue optimization, we provide complete billing solutions tailored to your practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="text-secondary mr-2 mt-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to={service.link} className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
