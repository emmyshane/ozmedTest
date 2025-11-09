import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    message: ""
  });

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
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90">
                Get in touch with our team. We're here to answer your questions and help your practice succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="john.smith@practice.com"
                    />
                  </div>
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
                    <label htmlFor="practice" className="block text-sm font-medium text-foreground mb-2">
                      Practice Name
                    </label>
                    <Input
                      id="practice"
                      name="practice"
                      type="text"
                      value={formData.practice}
                      onChange={handleChange}
                      placeholder="Smith Family Practice"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
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
                    />
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service. We'll never share your information.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Have questions about our services? Our team is ready to help you optimize your medical billing and increase your revenue.
                  </p>
                </div>

                <Card className="border-border shadow-medium">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Phone</div>
                        <a href="tel:1-800-555-0123" className="text-muted-foreground hover:text-primary transition-colors">
                          1-800-555-0123
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 8am-6pm EST</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Email</div>
                        <a href="mailto:info@medbillpro.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@medbillpro.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Address</div>
                        <p className="text-muted-foreground">
                          123 Healthcare Boulevard, Suite 500<br />
                          Medical City, MC 12345<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Business Hours</div>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                          Saturday: 9:00 AM - 2:00 PM EST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-medium bg-primary-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Prefer a Free Audit?</h3>
                    <p className="text-muted-foreground mb-4">
                      Get a comprehensive analysis of your billing practices with actionable recommendations.
                    </p>
                    <a href="/free-audit">
                      <Button variant="cta" className="w-full">
                        Request Free Audit
                      </Button>
                    </a>
                  </CardContent>
                </Card>
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
