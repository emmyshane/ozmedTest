import { ClipboardCheck, Settings, Activity, LineChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Free Consultation & Audit",
      description: "We analyze your current billing process and identify revenue opportunities at no cost to you.",
      timeline: "Week 1"
    },
    {
      icon: Settings,
      title: "Customized Implementation",
      description: "Our team sets up your account, integrates with your systems, and trains your staff.",
      timeline: "Weeks 2-4"
    },
    {
      icon: Activity,
      title: "Active Management",
      description: "We handle all billing operations, from claims submission to payment posting and denials.",
      timeline: "Ongoing"
    },
    {
      icon: LineChart,
      title: "Continuous Optimization",
      description: "Regular reporting, performance analysis, and process improvements to maximize your revenue.",
      timeline: "Monthly+"
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple, proven process to transform your medical billing and boost your revenue.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-light transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  
                  <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="text-sm font-semibold text-secondary text-center mb-2">
                    {step.timeline}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground text-center mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
