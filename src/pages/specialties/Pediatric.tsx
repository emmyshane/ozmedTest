import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Pediatric = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const integrationLogos = ["/sliding/advanced-md.png","/sliding/athena.png","/sliding/brightree.png","/sliding/carecloud.png","/sliding/chirotouch.png","/sliding/curemd.png","/sliding/digi-dms.png","/sliding/dr-chrono.png","/sliding/eclinical-works.png","/sliding/ehi.png","/sliding/epic.png","/sliding/ethomas.png","/sliding/health-fusion.png","/sliding/in-sync.png","/sliding/intergy.png","/sliding/kareo.png","/sliding/luminello.png","/sliding/md-land.png","/sliding/office-ally.png","/sliding/rxnt.png","/sliding/simple-practice.png","/sliding/valant.png"];
  useEffect(() => {const interval = setInterval(() => {setCurrentSlide((prev) => (prev + 1) % integrationLogos.length);}, 3000);return () => clearInterval(interval);}, []);
  const handlePrevSlide = () => {setCurrentSlide((prev) => (prev - 1 + integrationLogos.length) % integrationLogos.length);};
  const handleNextSlide = () => {setCurrentSlide((prev) => (prev + 1) % integrationLogos.length);};
  const extendedLogos = [...integrationLogos, ...integrationLogos, ...integrationLogos];
  const challenges = [
    "Complex coding and documentation requirements",
    "Insurance authorization and verification",
    "Specialty-specific billing regulations",
    "Multiple modifier requirements",
    "Prior authorization management",
    "Denial management and appeals"
  ];

  const services = [
    "Specialty-specific E/M coding",
    "Procedure and treatment billing",
    "Diagnostic testing billing",
    "Insurance verification and authorization",
    "Denial management and appeals",
    "Revenue cycle optimization"
  ];

  const commonCodes = [
    { code: "99213", description: "Office visit, established patient, moderate" },
    { code: "99214", description: "Office visit, established patient, high complexity" },
    { code: "99203", description: "Office visit, new patient, low complexity" },
    { code: "99204", description: "Office visit, new patient, moderate" },
    { code: "99205", description: "Office visit, new patient, high complexity" },
    { code: "99215", description: "Office visit, established patient, high complexity" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Pediatric Medical Billing</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Expert billing for pediatric practices. Specialized in well-child visits, immunizations, and pediatric E/M coding.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Your Free Billing Audit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Billing Challenges
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Specialized billing expertise ensures proper documentation and maximum reimbursement for your practice.
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

        {/* EHR Integration Slider */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative px-16">
                <button onClick={handlePrevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary/80 transition-colors duration-300" aria-label="Previous"><ChevronLeft className="w-12 h-12" /></button>
                <div className="overflow-hidden"><div className="flex items-center gap-6 transition-transform duration-700 ease-in-out" style={{ transform: `translateX(calc(-${currentSlide} * (14.2857% + 24px)))`, willChange: 'transform' }}>{extendedLogos.map((logo, index) => (<div key={index} className="flex-shrink-0 flex items-center justify-center" style={{ width: '14.2857%', minWidth: '120px', minHeight: '120px' }}><img src={logo} alt={`Integration ${(index % integrationLogos.length) + 1}`} className="w-full h-auto object-contain" /></div>))}</div></div>
                <button onClick={handleNextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary/80 transition-colors duration-300" aria-label="Next"><ChevronRight className="w-12 h-12" /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Our Billing Expertise
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Our certified coders specialize in your practice area, ensuring accurate coding and maximum reimbursement.
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

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
                Billing Results
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-primary-light p-8 rounded-xl">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">25%</div>
                  <div className="text-muted-foreground">Revenue Increase</div>
                </div>
                <div className="bg-secondary-light p-8 rounded-xl">
                  <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-secondary mb-2">97%</div>
                  <div className="text-muted-foreground">Clean Claim Rate</div>
                </div>
                <div className="bg-primary-light p-8 rounded-xl">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">35%</div>
                  <div className="text-muted-foreground">Denial Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Common CPT Codes We Handle
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

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Optimize Your Billing?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Let our billing experts maximize your revenue and streamline your billing process.
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

export default Pediatric;
