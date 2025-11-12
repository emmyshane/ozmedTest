import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, DollarSign, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const RCMServices = () => {
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
    "Fragmented revenue cycle processes",
    "Cash flow inconsistencies and delays",
    "High AR days and aging balances",
    "Lack of revenue cycle visibility",
    "Revenue leakage at multiple touchpoints"
  ];

  const benefits = [
    "End-to-end revenue cycle management",
    "Average 30% reduction in AR days",
    "98% clean claim rate",
    "Comprehensive analytics and reporting",
    "Proactive denial prevention strategies",
    "Complete charge capture optimization",
    "Patient payment plan management",
    "Dedicated RCM team for your practice"
  ];

  const steps = [
    { title: "Patient Access", description: "Insurance verification, eligibility, and authorization" },
    { title: "Charge Capture", description: "Complete and accurate documentation of services" },
    { title: "Claims Management", description: "Coding, scrubbing, and electronic submission" },
    { title: "Payment Posting", description: "Timely posting of all payments and adjustments" },
    { title: "AR Management", description: "Aggressive follow-up on outstanding claims" },
    { title: "Analytics & Optimization", description: "Continuous process improvement and reporting" }
  ];

  const faqs = [
    {
      question: "What does end-to-end RCM include?",
      answer: "Our comprehensive RCM service covers the entire revenue cycle from patient scheduling through final payment collection. This includes eligibility verification, authorization, coding, billing, payment posting, denial management, AR follow-up, and patient collections."
    },
    {
      question: "How do you improve our revenue cycle performance?",
      answer: "We implement best practices across all revenue cycle touchpoints, use advanced analytics to identify bottlenecks, proactively manage denials, optimize charge capture, and provide detailed reporting so you can make data-driven decisions."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we integrate seamlessly with all major EHR and practice management systems. Our team is experienced with Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, and many others."
    },
    {
      question: "How do you measure RCM success?",
      answer: "We track key performance indicators including days in AR, collection rate, clean claim rate, denial rate, and net collection percentage. You'll receive detailed monthly reports with actionable insights and trends."
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Revenue Cycle Management Services</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Complete revenue cycle solutions that optimize every step from patient registration to final payment, maximizing cash flow and reducing administrative burden.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Your Free RCM Analysis
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is RCM */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is Revenue Cycle Management?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Revenue Cycle Management (RCM) is the financial process that healthcare practices use to track patient care from registration and appointment scheduling to the final payment of a balance. It encompasses all administrative and clinical functions that contribute to the capture, management, and collection of patient service revenue.
              </p>
              <p className="text-lg text-muted-foreground">
                Our comprehensive RCM services manage your entire revenue cycle with advanced technology and expert staff, ensuring maximum reimbursement, optimal cash flow, and complete transparency. We handle everything from front-end patient access through back-end collections and reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Common RCM Challenges We Solve
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
                Key Benefits of Our RCM Services
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
                Our Revenue Cycle Management Process
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
                Proven RCM Results
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-primary-light p-8 rounded-xl">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <div className="text-muted-foreground">Reduction in AR Days</div>
                </div>
                <div className="bg-secondary-light p-8 rounded-xl">
                  <DollarSign className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-secondary mb-2">20-25%</div>
                  <div className="text-muted-foreground">Revenue Increase</div>
                </div>
                <div className="bg-primary-light p-8 rounded-xl">
                  <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Clean Claim Rate</div>
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
                Ready to Optimize Your Revenue Cycle?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get your free RCM analysis and discover opportunities to improve cash flow and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/free-audit">
                  <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                    Get Free Analysis
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

export default RCMServices;
