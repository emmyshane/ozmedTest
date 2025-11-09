import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Target, FileText, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FreeAudit = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceName: "",
    practiceType: "",
    providers: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Audit Request Received!",
      description: "Our team will contact you within 24 hours to schedule your free billing audit.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      practiceName: "",
      practiceType: "",
      providers: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const includes = [
    {
      icon: FileText,
      title: "Complete AR Analysis",
      description: "Detailed review of your accounts receivable aging and collection patterns"
    },
    {
      icon: Target,
      title: "Denial Pattern Identification",
      description: "Analysis of your claim denials with specific solutions to reduce future denials"
    },
    {
      icon: CheckCircle2,
      title: "Coding Accuracy Assessment",
      description: "Review of your coding practices to ensure maximum reimbursement"
    },
    {
      icon: TrendingUp,
      title: "Revenue Opportunity Report",
      description: "Identification of uncaptured revenue and optimization opportunities"
    },
    {
      icon: BarChart,
      title: "Benchmark Comparison",
      description: "How your practice compares to industry standards and best practices"
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
              <div className="inline-block bg-cta text-cta-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                $500 VALUE - COMPLETELY FREE
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get Your Free Billing Audit</h1>
              <p className="text-xl text-primary-foreground/90">
                Discover hidden revenue opportunities and identify areas for improvement. No cost, no obligation, no sales pressure.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                What's Included in Your Free Audit
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {includes.map((item, index) => (
                  <Card key={index} className="border-border shadow-medium">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
                <Card className="border-border shadow-medium bg-secondary-light">
                  <CardContent className="p-6 flex items-center justify-center flex-col text-center h-full">
                    <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">30-Minute Expert Consultation</h3>
                    <p className="text-muted-foreground">Review findings with a billing specialist and get answers to all your questions</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Get This */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Who Should Request This Audit?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Practices experiencing cash flow challenges",
                  "High claim denial rates (above 5%)",
                  "Delayed payments from insurance companies",
                  "Uncertainty about coding accuracy",
                  "Growing accounts receivable balances",
                  "Considering switching billing companies",
                  "New practices setting up billing",
                  "Practices adding new services or specialties"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Audit Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Request Your Free Audit
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will contact you within 24 hours to schedule your audit.
                </p>
              </div>

              <Card className="border-border shadow-strong">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@practice.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="practiceName" className="block text-sm font-medium text-foreground mb-2">
                          Practice Name *
                        </label>
                        <Input
                          id="practiceName"
                          name="practiceName"
                          type="text"
                          required
                          value={formData.practiceName}
                          onChange={handleChange}
                          placeholder="Smith Family Practice"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="practiceType" className="block text-sm font-medium text-foreground mb-2">
                          Practice Type/Specialty *
                        </label>
                        <Select
                          value={formData.practiceType}
                          onValueChange={(value) => setFormData({ ...formData, practiceType: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select specialty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="primary-care">Primary Care</SelectItem>
                            <SelectItem value="cardiology">Cardiology</SelectItem>
                            <SelectItem value="dermatology">Dermatology</SelectItem>
                            <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            <SelectItem value="orthopedics">Orthopedics</SelectItem>
                            <SelectItem value="mental-health">Mental Health</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="providers" className="block text-sm font-medium text-foreground mb-2">
                          Number of Providers *
                        </label>
                        <Select
                          value={formData.providers}
                          onValueChange={(value) => setFormData({ ...formData, providers: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Provider</SelectItem>
                            <SelectItem value="2-5">2-5 Providers</SelectItem>
                            <SelectItem value="6-10">6-10 Providers</SelectItem>
                            <SelectItem value="11+">11+ Providers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full text-lg py-6">
                      Request Free Audit ($500 Value)
                    </Button>

                    <div className="bg-primary-light p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Your privacy is protected:</strong> We never share your information with third parties. This audit is completely free with no obligation to use our services.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Preview */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                What Our Audits Have Uncovered
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background p-8 rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-cta mb-2">$127K</div>
                  <div className="text-muted-foreground">Average uncaptured revenue identified per practice</div>
                </div>
                <div className="bg-background p-8 rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-secondary mb-2">23%</div>
                  <div className="text-muted-foreground">Average improvement in collection rate</div>
                </div>
                <div className="bg-background p-8 rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-primary mb-2">47%</div>
                  <div className="text-muted-foreground">Average reduction in claim denials</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreeAudit;
