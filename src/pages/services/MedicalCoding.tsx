import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Target, FileCheck, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const MedicalCoding = () => {
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
    "Inaccurate coding leading to claim denials",
    "Compliance risks and audit vulnerabilities",
    "Coding staff shortages and turnover",
    "Keeping up with ICD-10, CPT, and HCPCS updates",
    "Revenue loss from undercoding or overcoding"
  ];

  const benefits = [
    "AAPC and AHIMA certified coding professionals",
    "98% coding accuracy rate",
    "Comprehensive ICD-10, CPT, and HCPCS expertise",
    "Regular coding audits and compliance reviews",
    "Specialty-specific coding knowledge",
    "Real-time coding support and consultation",
    "DRG optimization for hospital coding",
    "Ongoing coder education and training"
  ];

  const steps = [
    { title: "Chart Review", description: "Thorough review of medical documentation and clinical notes" },
    { title: "Code Assignment", description: "Assign accurate ICD-10, CPT, and HCPCS codes" },
    { title: "Compliance Check", description: "Verify coding compliance with payer guidelines" },
    { title: "Quality Assurance", description: "Multi-level review to ensure coding accuracy" },
    { title: "Documentation Query", description: "Request clarification from providers when needed" },
    { title: "Continuous Improvement", description: "Regular audits and feedback to optimize coding" }
  ];

  const faqs = [
    {
      question: "What certifications do your medical coders hold?",
      answer: "All our coders are certified by AAPC (CPC, COC) or AHIMA (CCS, CCA) and maintain their credentials through ongoing education. Many also hold specialty-specific certifications such as CIC (Interventional Cardiology) or CPMA (Practice Management)."
    },
    {
      question: "How do you ensure coding accuracy?",
      answer: "We implement a multi-level quality assurance process including peer review, random audits, and regular feedback sessions. Our coding accuracy rate consistently exceeds 98%, well above industry standards."
    },
    {
      question: "Can you handle specialty-specific coding?",
      answer: "Yes, we have coders with expertise across all major specialties including cardiology, orthopedics, gastroenterology, oncology, and more. We match your practice with coders experienced in your specific specialty."
    },
    {
      question: "How quickly can you code medical charts?",
      answer: "Our standard turnaround is 24-48 hours for outpatient coding and 48-72 hours for inpatient coding. We also offer same-day coding for urgent cases at no additional charge."
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medical Coding Services</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Expert medical coding from certified professionals who ensure accuracy, compliance, and maximum reimbursement for every patient encounter.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Your Free Coding Audit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is Medical Coding */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is Medical Coding?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Medical coding is the transformation of healthcare diagnoses, procedures, medical services, and equipment into universal medical alphanumeric codes. These codes (ICD-10, CPT, HCPCS) are derived from physician documentation, including medical charts, lab results, and radiology reports.
              </p>
              <p className="text-lg text-muted-foreground">
                Accurate medical coding is essential for proper reimbursement, compliance, and data analytics. Our certified coding specialists ensure every service is coded correctly to maximize revenue while maintaining full compliance with payer requirements and regulatory standards.
              </p>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Common Coding Challenges We Solve
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
                Key Benefits of Our Medical Coding Services
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
                Our Medical Coding Process
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
                Proven Coding Excellence
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-primary-light p-8 rounded-xl">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Coding Accuracy Rate</div>
                </div>
                <div className="bg-secondary-light p-8 rounded-xl">
                  <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-secondary mb-2">15-20%</div>
                  <div className="text-muted-foreground">Revenue Improvement</div>
                </div>
                <div className="bg-primary-light p-8 rounded-xl">
                  <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Certified Coders</div>
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
                Ready to Improve Your Coding Accuracy?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get your free coding audit and discover opportunities to optimize your revenue capture.
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

export default MedicalCoding;
