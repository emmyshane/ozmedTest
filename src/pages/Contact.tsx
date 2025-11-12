import { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "1-800-555-0123",
      subtext: "Mon-Fri, 8am-6pm EST",
      link: "tel:1-800-555-0123",
      gradient: "from-amber-400 to-green-400"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ozmedhealthcare.com",
      subtext: "We respond within 24 hours",
      link: "mailto:info@ozmedhealthcare.com",
      gradient: "from-amber-400 to-green-400"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "1309 COFFEEN AVE STE 1200",
      subtext: "Sheridan WY 82801",
      link: null,
      gradient: "from-amber-400 to-green-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM EST",
      subtext: "Saturday: 9:00 AM - 2:00 PM EST",
      link: null,
      gradient: "from-amber-400 to-green-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", practice: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative text-primary-foreground py-24 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/banner2-bg.png)' }}>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/60"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 animate-bounce-in">
                <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/20">
                  <Send className="w-4 h-4 inline-block mr-2" />
                  We're Here to Help
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 animate-fade-up stagger-1">
                Get in touch with our team. We're here to answer your questions and help your practice succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, hsl(176, 25%, 54%) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div 
                className="animate-slide-in-left"
                style={{ animationDelay: isVisible ? '0s' : '' }}
              >
                <div className="relative bg-background rounded-3xl p-8 lg:p-10 border-2 border-border/50 hover:border-secondary/50 transition-all duration-500 group overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-cta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 flex items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-cta flex items-center justify-center mr-4">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="group/input">
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
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
                          className="border-2 border-border/50 focus:border-secondary transition-colors duration-300"
                        />
                      </div>
                      
                      <div className="group/input">
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.smith@practice.com"
                          className="border-2 border-border/50 focus:border-secondary transition-colors duration-300"
                        />
                      </div>
                      
                      <div className="group/input">
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
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
                          className="border-2 border-border/50 focus:border-secondary transition-colors duration-300"
                        />
                      </div>
                      
                      <div className="group/input">
                        <label htmlFor="practice" className="block text-sm font-semibold text-foreground mb-2">
                          Practice Name
                        </label>
                        <Input
                          id="practice"
                          name="practice"
                          type="text"
                          value={formData.practice}
                          onChange={handleChange}
                          placeholder="Smith Family Practice"
                          className="border-2 border-border/50 focus:border-secondary transition-colors duration-300"
                        />
                      </div>
                      
                      <div className="group/input">
                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your practice and billing needs..."
                          rows={6}
                          className="border-2 border-border/50 focus:border-secondary transition-colors duration-300 resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="cta" 
                        size="lg" 
                        className="w-full group/btn relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                      
                      <p className="text-sm text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </form>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Contact Information */}
              <div 
                className="space-y-6 animate-slide-in-right"
                style={{ animationDelay: isVisible ? '0.2s' : '' }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                    <span className="gradient-text">Get in Touch</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Have questions about our services? Our team is ready to help you optimize your medical billing and increase your revenue.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => {
                    const isHovered = hoveredContact === index;
                    
                    return (
                      <div
                        key={index}
                        className="group relative"
                        style={{
                          animation: isVisible ? `scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${(index + 2) * 0.1}s forwards` : 'none',
                          opacity: isVisible ? 1 : 0
                        }}
                        onMouseEnter={() => setHoveredContact(index)}
                        onMouseLeave={() => setHoveredContact(null)}
                      >
                        <div className="relative bg-background rounded-2xl p-6 border border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start">
                            {/* Icon */}
                            <div className="relative mr-4 flex-shrink-0">
                              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                              <div className={`relative w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <info.icon className="w-6 h-6 text-white" strokeWidth={2} />
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-grow">
                              <div className="font-bold text-foreground mb-1 text-lg">
                                {info.title}
                              </div>
                              {info.link ? (
                                <a 
                                  href={info.link} 
                                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                                >
                                  {info.content}
                                </a>
                              ) : (
                                <div className="text-muted-foreground font-medium">
                                  {info.content}
                                </div>
                              )}
                              <p className="text-sm text-muted-foreground/80 mt-1">
                                {info.subtext}
                              </p>
                            </div>
                          </div>

                          {/* Bottom accent */}
                          <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${info.gradient} group-hover:w-full transition-all duration-500`}></div>

                          {/* Floating particles */}
                          {isHovered && (
                            <>
                              <div className={`absolute -top-2 -right-2 w-3 h-3 rounded-full bg-gradient-to-r ${info.gradient} animate-wave`} style={{ animationDelay: '0s' }}></div>
                              <div className={`absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-gradient-to-r ${info.gradient} animate-wave`} style={{ animationDelay: '0.5s' }}></div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Free Audit CTA */}
                <div 
                  className="relative mt-8 bg-gradient-to-br from-secondary/10 to-cta/10 rounded-2xl p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 group overflow-hidden"
                  style={{
                    animation: isVisible ? `bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards` : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-cta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cta to-secondary flex items-center justify-center mr-3">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Prefer a Free Audit?</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Get a comprehensive analysis of your billing practices with actionable recommendations.
                    </p>
                    <a href="/free-audit">
                      <Button variant="cta" className="w-full group/cta">
                        <span className="flex items-center justify-center">
                          Request Free Audit
                          <Sparkles className="w-4 h-4 ml-2 group-hover/cta:rotate-12 transition-transform duration-300" />
                        </span>
                      </Button>
                    </a>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cta/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

export default Contact;
