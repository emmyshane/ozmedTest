import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, UserCheck, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const MedicalCredentialing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const integrationLogos = [
    "/sliding/advanced-md.png",
    "/sliding/athena.png",
    "/sliding/brightree.png",
    "/sliding/carecloud.png",
    "/sliding/chirotouch.png",
    "/sliding/curemd.png",
    "/sliding/digi-dms.png",
    "/sliding/dr-chrono.png",
    "/sliding/eclinical-works.png",
    "/sliding/ehi.png",
    "/sliding/epic.png",
    "/sliding/ethomas.png",
    "/sliding/health-fusion.png",
    "/sliding/in-sync.png",
    "/sliding/intergy.png",
    "/sliding/kareo.png",
    "/sliding/luminello.png",
    "/sliding/md-land.png",
    "/sliding/office-ally.png",
    "/sliding/rxnt.png",
    "/sliding/simple-practice.png",
    "/sliding/valant.png"
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % integrationLogos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? integrationLogos.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % integrationLogos.length);
  };

  const getVisibleLogos = () => {
    const visible = [];
    for (let i = 0; i < 7; i++) {
      const index = (currentSlide + i) % integrationLogos.length;
      visible.push({ src: integrationLogos[index], key: `${index}-${i}` });
    }
    return visible;
  };

  // Create extended array for infinite loop effect
  const extendedLogos = [...integrationLogos, ...integrationLogos, ...integrationLogos];

  const problems = [
    "Lengthy credentialing delays affecting revenue",
    "Complex application processes and paperwork",
    "Difficulty tracking credentialing status",
    "Re-credentialing deadlines missed",
    "Incomplete applications causing rejections"
  ];

  const benefits = [
    "Average 45-60 day credentialing timeline",
    "100% application accuracy and completion",
    "Dedicated credentialing specialists",
    "Proactive re-credentialing management",
    "Real-time status tracking and updates",
    "CAQH profile management and maintenance",
    "Primary source verification",
    "Complete payer enrollment support"
  ];

  const steps = [
    { title: "Initial Assessment", description: "Review provider credentials, licenses, and requirements" },
    { title: "Application Preparation", description: "Complete credentialing applications for all payers" },
    { title: "Document Verification", description: "Primary source verification of all credentials" },
    { title: "Submission & Follow-up", description: "Submit applications and track status daily" },
    { title: "Contract Negotiation", description: "Negotiate favorable contract terms with payers" },
    { title: "Ongoing Monitoring", description: "Track expiration dates and manage re-credentialing" }
  ];

  const faqs = [
    {
      question: "How long does the credentialing process take?",
      answer: "While payers typically require 90-120 days, we've streamlined our process to achieve average timelines of 45-60 days through proactive follow-up and complete, accurate applications on the first submission."
    },
    {
      question: "What do I need to provide for credentialing?",
      answer: "We'll need your medical license, DEA certificate, malpractice insurance, board certifications, CV, and education credentials. We'll provide you with a comprehensive checklist and guide you through the entire process."
    },
    {
      question: "Do you handle CAQH profile management?",
      answer: "Yes, we create and maintain your CAQH profile, ensuring all information is current and accurate. We monitor for attestation deadlines and handle re-attestations to prevent any gaps in coverage."
    },
    {
      question: "What happens if my application is rejected?",
      answer: "Application rejections are rare due to our thorough review process, but if one occurs, we immediately identify the issue, gather additional documentation, and resubmit at no additional cost to you."
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medical Credentialing Services</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Fast, accurate credentialing and enrollment services that get you contracted with insurance payers quickly so you can start seeing patients and generating revenue.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Started with Credentialing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is Medical Credentialing */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is Medical Credentialing?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Medical credentialing is the process of verifying a healthcare provider's qualifications, including education, training, licensure, and professional history. It's required by insurance companies before they'll allow you to join their network and submit claims for reimbursement.
              </p>
              <p className="text-lg text-muted-foreground">
                Our credentialing services handle the entire process from start to finish, including initial credentialing, payer enrollment, contract negotiation, CAQH management, and ongoing re-credentialing. We ensure you're credentialed with all relevant payers quickly and maintain your status without interruption.
              </p>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Common Credentialing Challenges We Solve
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
                Key Benefits of Our Credentialing Services
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

        {/* EHR Integration Slider */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative px-16">
                {/* Left Arrow */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary/80 transition-colors duration-300"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-12 h-12" />
                </button>

                {/* Slider Container */}
                <div className="overflow-hidden">
                  <div 
                    className="flex items-center gap-6 transition-transform duration-700 ease-in-out"
                    style={{ 
                      transform: `translateX(calc(-${currentSlide} * (14.2857% + 24px)))`,
                      willChange: 'transform'
                    }}
                  >
                    {extendedLogos.map((logo, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ width: '14.2857%', minWidth: '120px', minHeight: '120px' }}
                      >
                        <img
                          src={logo}
                          alt={`Integration ${(index % integrationLogos.length) + 1}`}
                          className="max-w-full max-h-20 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary/80 transition-colors duration-300"
                  aria-label="Next"
                >
                  <ChevronRight className="w-12 h-12" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Our Credentialing Process
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
                Credentialing Excellence
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-primary-light p-8 rounded-xl">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">45-60</div>
                  <div className="text-muted-foreground">Days Average Timeline</div>
                </div>
                <div className="bg-secondary-light p-8 rounded-xl">
                  <UserCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-muted-foreground">Application Accuracy</div>
                </div>
                <div className="bg-primary-light p-8 rounded-xl">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Providers Credentialed</div>
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
                Ready to Streamline Your Credentialing?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Let us handle the paperwork so you can focus on patient care. Get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/free-audit">
                  <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                    Get Started
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

export default MedicalCredentialing;
