import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Maximize Revenue. Minimize Hassle. Focus on Patient Care.
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90">
              Professional medical billing services that increase revenue by up to 25% while reducing your administrative burden. Let us handle the billing so you can focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  Get Free Audit ($500 Value)
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  Schedule Consultation
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="flex flex-col items-center text-center">
                <Shield className="w-10 h-10 mb-2" />
                <span className="text-sm font-semibold">HIPAA Certified</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-10 h-10 mb-2" />
                <span className="text-sm font-semibold">15+ Years</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 mb-2" />
                <span className="text-sm font-semibold">500+ Practices</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-10 h-10 mb-2" />
                <span className="text-sm font-semibold">98% Retention</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Professional medical provider with stethoscope" 
              className="rounded-2xl shadow-strong w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
