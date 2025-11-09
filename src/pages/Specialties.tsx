import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, Heart, Sparkles, Baby, Bone, Brain, 
  Building2, FlaskConical, Ambulance, Users, Activity, Pill
} from "lucide-react";

const Specialties = () => {
  const specialties = [
    {
      icon: Stethoscope,
      name: "Primary Care",
      description: "Family medicine, internal medicine, and general practice billing with expertise in preventive care, chronic care management, and Medicare wellness visits.",
      link: "/specialties/primary-care"
    },
    {
      icon: Heart,
      name: "Cardiology",
      description: "Specialized billing for diagnostic testing, interventional procedures, and cardiac imaging with in-depth knowledge of complex cardiovascular codes.",
      link: "/specialties/cardiology"
    },
    {
      icon: Sparkles,
      name: "Dermatology",
      description: "Expert billing for medical and cosmetic dermatology including procedures, biopsies, and surgical services with proper modifiers and documentation.",
      link: "/specialties/dermatology"
    },
    {
      icon: Baby,
      name: "Pediatrics",
      description: "Comprehensive pediatric billing including well-child visits, immunizations, and specialized care with expertise in EPSDT and VFC programs.",
      link: "/specialties/pediatrics"
    },
    {
      icon: Bone,
      name: "Orthopedics",
      description: "Specialized orthopedic billing for surgeries, procedures, and imaging with expertise in complex surgical codes and ASC billing.",
      link: "/specialties/orthopedics"
    },
    {
      icon: Brain,
      name: "Mental Health",
      description: "Behavioral health billing for psychiatry, psychology, and counseling with expertise in psychotherapy codes and documentation requirements.",
      link: "/specialties/mental-health"
    },
    {
      icon: Building2,
      name: "Surgery Centers",
      description: "ASC billing expertise including facility and professional fees with comprehensive knowledge of surgical procedures and anesthesia billing.",
      link: "/specialties/surgery-centers"
    },
    {
      icon: FlaskConical,
      name: "Labs",
      description: "Laboratory billing services including pathology, clinical lab, and diagnostic testing with expertise in panel codes and proper ordering.",
      link: "/specialties/labs"
    },
    {
      icon: Ambulance,
      name: "Urgent Care",
      description: "Fast-paced urgent care billing with expertise in E/M levels, procedures, and X-ray billing with quick turnaround times.",
      link: "/specialties/urgent-care"
    },
    {
      icon: Users,
      name: "Multi-Specialty",
      description: "Comprehensive billing for multi-specialty practices with expertise across various specialties and complex workflow management.",
      link: "/specialties/multi-specialty"
    },
    {
      icon: Activity,
      name: "Physical Therapy",
      description: "PT/OT billing expertise including therapy codes, time-based billing, and functional reporting with compliance focus.",
      link: "/specialties/physical-therapy"
    },
    {
      icon: Pill,
      name: "Gastroenterology",
      description: "GI billing including endoscopy procedures, colonoscopies, and diagnostic services with expertise in bundling and modifiers.",
      link: "/specialties/gastroenterology"
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medical Billing by Specialty</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Specialized billing expertise tailored to your medical specialty. We understand the unique coding requirements, documentation needs, and payer rules for each specialty.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Specialty-Specific Free Audit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Specialty Matters */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Specialty-Specific Billing Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Each medical specialty has unique billing requirements, codes, and challenges. Our specialty-focused approach ensures your practice receives maximum reimbursement while maintaining compliance.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background p-6 rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Specialty-Specific CPT Codes We Handle</div>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-secondary mb-2">12+</div>
                  <div className="text-muted-foreground">Medical Specialties Served</div>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
                  <div className="text-muted-foreground">Specialty Coding Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Our Specialty Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <Link key={index} to={specialty.link}>
                  <Card className="border-border shadow-medium hover:shadow-strong hover:border-primary transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                        <specialty.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{specialty.name}</h3>
                      <p className="text-muted-foreground">{specialty.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Find Billing Experts for Your Specialty
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get connected with billing specialists who understand your specialty's unique requirements.
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

export default Specialties;
