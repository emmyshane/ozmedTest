import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FileText, TrendingUp, Code, UserCheck, Briefcase, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Medical Billing Services",
      description: "End-to-end billing solutions from claim submission to payment posting. We handle insurance verification, claims management, denial resolution, and patient billing to maximize your revenue.",
      benefits: [
        "99.5% first-pass claim acceptance",
        "24-48 hour claim submission",
        "Comprehensive denial management",
        "Patient statement generation"
      ],
      link: "/services/medical-billing"
    },
    {
      icon: Code,
      title: "Medical Coding Services",
      description: "Expert ICD-10, CPT, and HCPCS coding by certified professionals. We ensure accuracy, compliance, and proper reimbursement for all services rendered.",
      benefits: [
        "AAPC/AHIMA certified coders",
        "98% coding accuracy rate",
        "Specialty-specific expertise",
        "Compliance audits"
      ],
      link: "/services/medical-coding"
    },
    {
      icon: UserCheck,
      title: "Medical Credentialing Services",
      description: "Complete provider credentialing and payer enrollment services. We handle all paperwork and follow-up to get you enrolled and billing quickly.",
      benefits: [
        "45-60 day average timeline",
        "100% application accuracy",
        "CAQH profile management",
        "Re-credentialing services"
      ],
      link: "/services/credentialing"
    },
    {
      icon: Briefcase,
      title: "Front Office Management",
      description: "Professional front office support that enhances patient experience, optimizes scheduling, and allows your staff to focus on in-person patient care.",
      benefits: [
        "24/7 phone answering",
        "95% appointment fill rate",
        "Bilingual support",
        "Insurance verification"
      ],
      link: "/services/front-office"
    },
    {
      icon: TrendingUp,
      title: "RCM Services",
      description: "Complete revenue cycle solutions that optimize every step from patient registration to final payment, maximizing cash flow and reducing administrative burden.",
      benefits: [
        "End-to-end RCM solutions",
        "30% reduction in AR days",
        "98% clean claim rate",
        "Comprehensive analytics"
      ],
      link: "/services/rcm"
    },
    {
      icon: Award,
      title: "PCMH Services",
      description: "Expert guidance to achieve and maintain NCQA Patient-Centered Medical Home recognition, transforming your practice and unlocking enhanced reimbursement.",
      benefits: [
        "NCQA PCMH expertise",
        "Gap analysis & roadmap",
        "Quality measure tracking",
        "Ongoing support"
      ],
      link: "/services/pcmh"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Medical Billing Services</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Comprehensive billing and practice management solutions designed to increase your revenue, reduce administrative burden, and help you focus on patient care.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Free Billing Audit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-border shadow-medium hover:shadow-strong transition-all duration-300 flex flex-col">
                  <CardContent className="p-8 flex-grow">
                    <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start text-sm">
                          <span className="text-secondary mr-2 mt-1">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-8 pt-0">
                    <Link to={service.link} className="w-full">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Why Choose OZMED Healthcare Services?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background p-8 rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Years Experience</div>
                  <p className="text-muted-foreground">Serving healthcare providers nationwide</p>
                </div>
                <div className="bg-background p-8 rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Practices Served</div>
                  <p className="text-muted-foreground">From solo practitioners to multi-location clinics</p>
                </div>
                <div className="bg-background p-8 rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Client Retention</div>
                  <p className="text-muted-foreground">Providers trust us year after year</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Improve Your Practice Revenue?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Schedule a free consultation to discuss how our services can benefit your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/free-audit">
                  <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                    Get Free Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
