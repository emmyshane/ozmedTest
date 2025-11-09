import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";

const PrimaryCare = () => {
  const challenges = [
    "High patient volume with diverse billing codes",
    "Complex insurance verification requirements",
    "Frequent preventive care billing updates",
    "Chronic care management documentation",
    "Medicare wellness visit coding",
    "Prior authorization requirements"
  ];

  const services = [
    "Preventive care billing (annual exams, immunizations)",
    "Chronic care management (CCM) billing",
    "Medicare wellness visits (AWV, IPPE)",
    "E/M level optimization",
    "Lab and diagnostic test billing",
    "Telemedicine billing"
  ];

  const commonCodes = [
    { code: "99213", description: "Established patient, moderate complexity" },
    { code: "99214", description: "Established patient, high complexity" },
    { code: "99396", description: "Preventive visit, age 40-64" },
    { code: "G0438", description: "Annual wellness visit" },
    { code: "99490", description: "Chronic care management, 20 minutes" },
    { code: "G0444", description: "Depression screening" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Primary Care Medical Billing</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Specialized billing services for family medicine, internal medicine, and general practice. We understand the unique challenges of primary care billing.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Your Free Primary Care Billing Audit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Unique Challenges */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Primary Care Billing Challenges
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Primary care practices face unique billing complexities that require specialized expertise and attention to detail.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="border-border shadow-soft">
                    <CardContent className="p-6 flex items-start">
                      <AlertCircle className="w-6 h-6 text-cta mr-3 flex-shrink-0 mt-1" />
                      <span className="text-foreground">{challenge}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Our Primary Care Billing Expertise
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Our team of certified coders specializes in primary care billing, ensuring accurate coding and maximum reimbursement for your practice.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
                Primary Care Results
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-primary-light p-8 rounded-xl">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">22%</div>
                  <div className="text-muted-foreground">Average Revenue Increase for Primary Care Practices</div>
                </div>
                <div className="bg-secondary-light p-8 rounded-xl">
                  <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-secondary mb-2">97%</div>
                  <div className="text-muted-foreground">First-Pass Claim Acceptance Rate</div>
                </div>
                <div className="bg-primary-light p-8 rounded-xl">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">35%</div>
                  <div className="text-muted-foreground">Reduction in Claim Denials</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Codes */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Common Primary Care CPT Codes We Handle
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {commonCodes.map((item, index) => (
                  <Card key={index} className="border-border shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xl font-bold text-primary mb-2">{item.code}</div>
                          <div className="text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Optimize Your Primary Care Billing?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Let our primary care billing experts help you maximize revenue and reduce administrative burden.
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

export default PrimaryCare;
