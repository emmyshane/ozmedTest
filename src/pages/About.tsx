import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Shield, TrendingUp } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every claim, every interaction, and every outcome for our clients."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with complete transparency, honesty, and ethical billing practices."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We view our clients as partners, working together to achieve their practice goals."
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "We focus on measurable results that directly impact your practice's financial health."
    }
  ];

  const team = [
    {
      name: "Jennifer Martinez",
      role: "CEO & Founder",
      credentials: "CPC, MBA",
      bio: "20+ years of medical billing experience with expertise in revenue cycle optimization."
    },
    {
      name: "Dr. Robert Chen",
      role: "Chief Medical Advisor",
      credentials: "MD, FACP",
      bio: "Former practicing physician bringing clinical perspective to billing operations."
    },
    {
      name: "Sarah Thompson",
      role: "VP of Operations",
      credentials: "CCS, RHIA",
      bio: "15+ years managing large-scale medical billing operations across multiple specialties."
    }
  ];

  const certifications = [
    "HIPAA Certified Organization",
    "AAPC Corporate Partner",
    "AHIMA Organizational Member",
    "SOC 2 Type II Compliant",
    "Medicare Provider Certified"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">About MedBill Pro</h1>
              <p className="text-xl text-primary-foreground/90">
                Your trusted partner in medical billing and revenue cycle management since 2008.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                To empower healthcare providers to focus on patient care by delivering exceptional medical billing services that maximize revenue, ensure compliance, and provide peace of mind.
              </p>

              <div className="bg-section-bg p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
                <p className="text-muted-foreground mb-4">
                  MedBill Pro was founded in 2008 by Jennifer Martinez, a certified professional coder who recognized the overwhelming burden medical billing placed on healthcare providers. After working in various medical practices and witnessing firsthand how billing complexities took physicians away from patient care, she assembled a team of billing experts dedicated to solving this problem.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small billing service for family practices has grown into a comprehensive revenue cycle management company serving over 500 practices across 12 medical specialties. Our success is built on a simple principle: when your practice succeeds financially, you can provide better care to your patients.
                </p>
                <p className="text-muted-foreground">
                  Today, we combine cutting-edge technology with human expertise to deliver billing services that are accurate, efficient, and tailored to each specialty's unique needs. Our team of certified coders, billing specialists, and account managers work tirelessly to ensure our clients receive every dollar they've earned.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="border-border shadow-soft text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Our Leadership Team
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {team.map((member, index) => (
                  <Card key={index} className="border-border shadow-medium">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-primary-light rounded-full mx-auto mb-4"></div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <div className="text-primary font-semibold mb-1">{member.role}</div>
                      <div className="text-sm text-muted-foreground mb-4">{member.credentials}</div>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="MedBill Pro team collaboration" 
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
                By The Numbers
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-primary-foreground/80">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-primary-foreground/80">Practices Served</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="text-primary-foreground/80">Client Retention Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">$500M+</div>
                  <div className="text-primary-foreground/80">Revenue Collected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Certifications & Compliance
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-border shadow-soft">
                    <CardContent className="p-6 flex items-center">
                      <Shield className="w-8 h-8 text-secondary mr-4 flex-shrink-0" />
                      <span className="text-foreground font-semibold">{cert}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
