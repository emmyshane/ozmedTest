import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Users, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const FrontOfficeManagement = () => {
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
    "High staff turnover and training costs",
    "Missed appointment opportunities",
    "Poor patient communication and satisfaction",
    "Inefficient scheduling leading to gaps",
    "Overwhelmed front desk staff"
  ];

  const benefits = [
    "Professional, HIPAA-trained staff",
    "24/7 phone answering and support",
    "Average 95% appointment fill rate",
    "Bilingual support (English/Spanish)",
    "Reduced no-show rates by up to 40%",
    "Comprehensive patient intake management",
    "Insurance verification at scheduling",
    "Seamless EHR integration"
  ];

  const steps = [
    { title: "Call Answering", description: "Professional greeting and patient inquiry handling" },
    { title: "Appointment Scheduling", description: "Efficient scheduling with real-time EHR access" },
    { title: "Insurance Verification", description: "Verify coverage before appointment date" },
    { title: "Patient Registration", description: "Complete demographic and insurance information" },
    { title: "Appointment Reminders", description: "Automated reminders via call, text, or email" },
    { title: "Follow-up Coordination", description: "Schedule follow-ups and coordinate referrals" }
  ];

  const faqs = [
    {
      question: "How do your virtual receptionists integrate with our practice?",
      answer: "Our team seamlessly integrates with your EHR system and practice management software. We undergo comprehensive training on your protocols, ensuring patients experience the same quality service as an in-house receptionist."
    },
    {
      question: "What hours of coverage do you provide?",
      answer: "We offer flexible coverage options from standard business hours to 24/7 support. Our most popular option is extended hours (7 AM - 7 PM) which captures appointments before and after traditional office hours."
    },
    {
      question: "Can you handle specialty-specific scheduling requirements?",
      answer: "Absolutely. We train our team on specialty-specific scheduling protocols, including procedure times, prep requirements, and specialized equipment needs. This ensures optimal scheduling for procedures and consultations."
    },
    {
      question: "How do you reduce no-show rates?",
      answer: "We implement a multi-touch reminder system including automated calls, texts, and emails at optimal intervals. We also confirm insurance eligibility before appointments, reducing cancellations due to coverage issues."
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Front Office Management Services</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional front office support that enhances patient experience, optimizes scheduling, and allows your in-house staff to focus on in-person patient care.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Your Free Practice Assessment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is Front Office Management */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is Front Office Management?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Front office management encompasses all patient-facing administrative tasks that create the first impression of your practice. This includes call answering, appointment scheduling, patient registration, insurance verification, and patient communication.
              </p>
              <p className="text-lg text-muted-foreground">
                Our front office management services provide you with a dedicated team of professional, trained staff who handle these critical tasks with excellence. Whether you need full coverage or after-hours support, we ensure every patient interaction reflects the quality care your practice provides.
              </p>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Common Front Office Challenges We Solve
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
                Key Benefits of Our Front Office Services
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
                Our Front Office Management Process
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
                Proven Front Office Excellence
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-primary-light p-8 rounded-xl">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Call Answer Rate</div>
                </div>
                <div className="bg-secondary-light p-8 rounded-xl">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                  <div className="text-muted-foreground">Schedule Fill Rate</div>
                </div>
                <div className="bg-primary-light p-8 rounded-xl">
                  <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-muted-foreground">No-Show Reduction</div>
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
                Ready to Enhance Your Patient Experience?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get a free practice assessment and see how our front office services can transform your operations.
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

export default FrontOfficeManagement;
