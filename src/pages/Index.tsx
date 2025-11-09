import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ValuePropositions from "@/components/home/ValuePropositions";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsBar from "@/components/home/StatsBar";
import Specialties from "@/components/home/Specialties";
import Testimonials from "@/components/home/Testimonials";
import FreeAuditCTA from "@/components/home/FreeAuditCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValuePropositions />
        <ServicesGrid />
        <HowItWorks />
        <WhyChooseUs />
        <StatsBar />
        <Specialties />
        <Testimonials />
        <FreeAuditCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
