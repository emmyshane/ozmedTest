import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Heart, Award, ClipboardCheck, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const PCMHServices = () => {
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
    "Complex PCMH recognition requirements",
    "Lack of resources for PCMH transformation",
    "Difficulty implementing care coordination",
    "Insufficient quality reporting capabilities",
    "Challenges maintaining PCMH recognition"
  ];

  const benefits = [
    "NCQA PCMH recognition expertise",
    "Comprehensive gap analysis and roadmap",
    "Care coordination workflow implementation",
    "Population health management tools",
    "Quality measure tracking and reporting",
    "Patient engagement strategies",
    "Annual reporting and re-recognition support",
    "Increased reimbursement opportunities"
  ];

  const steps = [
    { title: "PCMH Assessment", description: "Evaluate current state against NCQA PCMH standards" },
    { title: "Gap Analysis", description: "Identify areas needing improvement for recognition" },
    { title: "Implementation Plan", description: "Develop customized roadmap to PCMH recognition" },
    { title: "Workflow Design", description: "Implement care coordination and team-based care" },
    { title: "Quality Reporting", description: "Set up systems for quality measure tracking" },
    { title: "Recognition & Maintenance", description: "Guide through application and ongoing compliance" }
  ];

  const faqs = [
    {
      question: "What is PCMH recognition and why does it matter?",
      answer: "Patient-Centered Medical Home (PCMH) is a care delivery model that emphasizes coordinated, comprehensive care. NCQA PCMH recognition can lead to increased reimbursement from payers, improved patient outcomes, better care coordination, and enhanced practice reputation."
    },
    {
      question: "How long does it take to achieve PCMH recognition?",
      answer: "The timeline varies based on your current capabilities, but typically ranges from 6-12 months. We provide a detailed roadmap after our initial assessment and work at a pace that fits your practice's capacity for change."
    },
    {
      question: "Do we need to change our EHR system?",
      answer: "No, PCMH recognition doesn't require a specific EHR. However, your EHR must support certain functionalities like care plan documentation, quality measure reporting, and patient portal access. We help optimize your existing system."
    },
    {
      question: "What ongoing support do you provide after recognition?",
      answer: "We provide continuous support including annual reporting assistance, quality measure tracking, workflow optimization, and preparation for re-recognition every three years. We ensure your practice maintains and enhances its PCMH capabilities."
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">PCMH Recognition Services</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Expert guidance to achieve and maintain NCQA Patient-Centered Medical Home recognition, transforming your practice and unlocking enhanced reimbursement opportunities.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Your Free PCMH Assessment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is PCMH */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is PCMH?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Patient-Centered Medical Home (PCMH) is a model of care that strengthens the relationship between patients and their primary care providers. Recognized by the National Committee for Quality Assurance (NCQA), PCMH practices deliver coordinated, comprehensive, and team-based care that puts patients at the center.
              </p>
              <p className="text-lg text-muted-foreground">
                Our PCMH services guide you through the entire recognition process and beyond. We help transform your practice operations, implement evidence-based care coordination, develop quality improvement processes, and achieve NCQA recognition. The result is better patient outcomes, improved practice efficiency, and enhanced financial performance.
              </p>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Common PCMH Challenges We Solve
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
                Key Benefits of Our PCMH Services
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
                Our PCMH Recognition Process
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
                PCMH Recognition Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-primary-light p-8 rounded-xl">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Practices Recognized</div>
                </div>
                <div className="bg-secondary-light p-8 rounded-xl">
                  <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-secondary mb-2">25%</div>
                  <div className="text-muted-foreground">Quality Improvement</div>
                </div>
                <div className="bg-primary-light p-8 rounded-xl">
                  <ClipboardCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">15-20%</div>
                  <div className="text-muted-foreground">Revenue Increase</div>
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
                Ready to Achieve PCMH Recognition?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get your free PCMH readiness assessment and learn how we can guide your practice to recognition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/free-audit">
                  <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                    Get Free Assessment
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

export default PCMHServices;
