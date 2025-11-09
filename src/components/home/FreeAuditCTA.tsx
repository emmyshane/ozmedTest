import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import revenueImage from "@/assets/revenue-growth.jpg";

const FreeAuditCTA = () => {
  const includes = [
    "Complete AR analysis and aging report",
    "Denial pattern identification and solutions",
    "Coding accuracy assessment",
    "Revenue opportunity report with specific recommendations",
    "Benchmark comparison against industry standards",
    "30-minute consultation with billing expert"
  ];

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-cta text-cta-foreground px-4 py-2 rounded-full text-sm font-semibold">
              $500 VALUE - FREE
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold">
              Get Your Free Billing Audit Today
            </h2>
            
            <p className="text-xl text-primary-foreground/90">
              Discover hidden revenue opportunities and identify areas for improvement with our comprehensive billing audit. No cost, no obligation.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              {includes.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 text-secondary" />
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/free-audit">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Request Your Free Audit
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={revenueImage} 
              alt="Revenue growth chart showing upward trends" 
              className="rounded-2xl shadow-strong w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAuditCTA;
