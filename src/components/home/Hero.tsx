import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, Users, ArrowRight, Star, Mail, Phone, Building } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-hero text-primary-foreground overflow-hidden min-h-screen flex items-center -mt-24 pt-24"
      style={{
        backgroundImage: 'url(/slider1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced animated gradient overlay with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-secondary/20"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/40 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Mouse-following spotlight effect */}
      <div 
        className="absolute w-96 h-96 bg-radial-gradient from-white/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          opacity: 0.3
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Enhanced Content Section */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-up">
            {/* Clean Tagline */}
              
            
            {/* Elegant Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-white/90">
                Maximize Revenue with
              </span>
              <br />
              <span className="bg-gradient-to-r from-cta to-secondary bg-clip-text text-transparent font-medium">
                AI-Powered Billing
              </span>
            </h1>
            
            {/* Refined Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-xl lg:max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Transform your medical practice with cutting-edge AI technology that reduces claim denials by <span className="text-white font-medium">85%</span> and accelerates payments by <span className="text-white font-medium">3x</span>. Trusted by 500+ healthcare providers.
            </p>
            {/* Clean Benefits List */}
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 group">
                <div className="w-6 h-6 bg-gradient-to-br from-cta to-secondary rounded-full flex items-center justify-center transition-transform duration-300">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-base text-white/80 group-hover:text-white transition-colors duration-300">Reduce claim denials by <span className="text-white font-medium">85%</span></span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center transition-transform duration-300">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-base text-white/80 group-hover:text-white transition-colors duration-300">Accelerate payments by <span className="text-white font-medium">3x</span></span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-6 h-6 bg-gradient-to-br from-accent to-cta rounded-full flex items-center justify-center transition-transform duration-300">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-base text-white/80 group-hover:text-white transition-colors duration-300">Boost revenue by <span className="text-white font-medium">40%</span> on average</span>
              </div>
            </div>
            
            {/* Refined CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/free-audit" className="group">
                <Button variant="cta" size="lg" className="w-full sm:w-auto text-lg px-10 py-6 transition-all duration-300 hover:scale-105 group relative overflow-hidden font-medium tracking-wide bg-gradient-to-r from-cta to-secondary border-0">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Medical Billing Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </Link>
              <Link to="/contact" className="group">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10 py-6 transition-all duration-300 hover:scale-105 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-medium tracking-wide">
                  <span className="relative z-10 flex items-center gap-2">
                    Speak with Expert
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Subtle Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">24/7 Support</span>
              </div>
            </div>

            {/* Elegant Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                <Shield className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300 mb-2" />
                <span className="text-xs text-white/70 group-hover:text-white">HIPAA Certified</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                <Award className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300 mb-2" />
                <span className="text-xs text-white/70 group-hover:text-white">15+ Years</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                <Users className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300 mb-2" />
                <span className="text-xs text-white/70 group-hover:text-white">500+ Practices</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                <CheckCircle2 className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300 mb-2" />
                <span className="text-xs text-white/70 group-hover:text-white">98% Retention</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-2xl border border-white/20 max-w-md mx-auto">
              <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-primary mb-1">Get Your Free Audit</h2>
                <p className="text-xs text-gray-600">Fill out the form below and we'll contact you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-gray-700 font-medium text-xs">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-gray-300 focus:border-primary focus:ring-primary h-8 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-gray-700 font-medium text-xs">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-8 bg-white border-gray-300 focus:border-primary focus:ring-primary h-8 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-gray-700 font-medium text-xs">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="pl-8 bg-white border-gray-300 focus:border-primary focus:ring-primary h-8 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="practiceName" className="text-gray-700 font-medium text-xs">Practice Name</Label>
                  <div className="relative">
                    <Building className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="practiceName"
                      name="practiceName"
                      type="text"
                      placeholder="Your Practice Name"
                      value={formData.practiceName}
                      onChange={handleInputChange}
                      className="pl-8 bg-white border-gray-300 focus:border-primary focus:ring-primary h-8 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message" className="text-gray-700 font-medium text-xs">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your billing challenges..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="bg-white border-gray-300 focus:border-primary focus:ring-primary resize-none text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cta to-secondary hover:from-cta/90 hover:to-secondary/90 text-white font-semibold py-4 text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Request Free Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-[10px] text-gray-500 text-center mt-2">
                  We respect your privacy. Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
