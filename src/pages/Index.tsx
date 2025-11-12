import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ValuePropositions from "@/components/home/ValuePropositions";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import TangibleBenefits from "@/components/home/TangibleBenefits";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsBar from "@/components/home/StatsBar";
import Testimonials from "@/components/home/Testimonials";
import TrustSignals from "@/components/home/TrustSignals";
import FAQ from "@/components/home/FAQ";
import FreeAuditCTA from "@/components/home/FreeAuditCTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add FAQ Schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is medical billing and revenue cycle management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for healthcare services. Revenue Cycle Management (RCM) encompasses the entire financial process, from patient registration and appointment scheduling to final payment, including claim submission, denial management, payment posting, and account reconciliation."
          }
        },
        {
          "@type": "Question",
          "name": "How can AI-powered medical billing increase my practice revenue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI-powered medical billing services increase revenue by reducing claim denials through intelligent error detection (98% accuracy), optimizing coding for maximum reimbursement, accelerating payment cycles, and identifying underpayments. On average, practices see a 25% revenue increase within the first six months."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValuePropositions />
        <ServicesGrid />
        <HowItWorks />
        <TangibleBenefits />
        <WhyChooseUs />
        <StatsBar />
        <TrustSignals />
        <Testimonials />
        <FAQ />
        <FreeAuditCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
