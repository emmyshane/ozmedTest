import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MedicalBilling = () => {
  const problems = [
    "Delayed payments affecting cash flow",
    "High claim denial rates",
    "Time-consuming manual billing processes",
    "Difficulty tracking claims status",
    "Lack of billing expertise in-house"
  ];

  const benefits = [
    "99.5% first-pass claim acceptance rate",
    "Average 95% collection rate on submitted claims",
    "Claims submitted within 24-48 hours",
    "Real-time claims tracking and status updates",
    "Dedicated billing specialists for your practice",
    "Transparent monthly reporting and analytics",
    "Seamless EHR integration",
    "Reduced administrative overhead"
  ];

  const steps = [
    { title: "Patient Check-In", description: "Verify insurance eligibility and coverage" },
    { title: "Service Documentation", description: "Accurate coding of procedures and diagnoses" },
    { title: "Claims Submission", description: "Electronic submission to insurance carriers" },
    { title: "Payment Posting", description: "Track and post payments to patient accounts" },
    { title: "Denial Management", description: "Appeal denied claims and resubmit" },
    { title: "Patient Statements", description: "Generate and send patient billing statements" }
  ];

  const faqs = [
    {
      question: "How long does it take to start the billing service?",
      answer: "We can typically have your practice up and running within 2-4 weeks. This includes system integration, staff training, and a smooth transition from your current billing process."
    },
    {
      question: "Do I need to change my current EHR system?",
      answer: "No, we integrate with all major EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, and many others. Our team will ensure seamless integration with your existing workflow."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is based on a percentage of collections, typically ranging from 4-8% depending on your practice size and specialty. This aligns our success with yours—we only succeed when you get paid."
    },
    {
      question: "How do you handle denied claims?",
      answer: "We have a dedicated denial management team that analyzes every denial, identifies the root cause, and takes immediate action to appeal and resubmit. Our goal is to maximize your reimbursement on every claim."
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medical Billing Services</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Comprehensive medical billing solutions that maximize revenue, reduce denials, and free up your time to focus on patient care.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Your Free Billing Audit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is Medical Billing */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is Medical Billing?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for services rendered by healthcare providers. It involves translating healthcare services into billing claims, submitting them to insurance payers, and ensuring proper reimbursement.
              </p>
              <p className="text-lg text-muted-foreground">
                Our medical billing services handle the entire revenue cycle from patient registration to final payment, ensuring maximum reimbursement and minimal administrative burden for your practice.
              </p>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Common Billing Challenges We Solve
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {problems.map((problem, index) => (
                  <Card key={index} className="border-border shadow-soft">
                    <CardContent className="p-6 flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                      <span className="text-foreground">{problem}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Key Benefits of Our Medical Billing Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Our Medical Billing Process
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-primary shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results & ROI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Proven Results & ROI
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-primary-light p-8 rounded-xl">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">18-25%</div>
                  <div className="text-muted-foreground">Average Revenue Increase</div>
                </div>
                <div className="bg-secondary-light p-8 rounded-xl">
                  <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-secondary mb-2">20+</div>
                  <div className="text-muted-foreground">Hours Saved Weekly</div>
                </div>
                <div className="bg-primary-light p-8 rounded-xl">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
                  <div className="text-muted-foreground">Claim Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border-border rounded-lg px-6 shadow-soft">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Medical Billing?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get your free billing audit and discover how much revenue you could be capturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/free-audit">
                  <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                    Get Free Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                    Contact Us
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

export default MedicalBilling;
