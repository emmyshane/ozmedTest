import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Calendar, Tag } from "lucide-react";

const Resources = () => {
  const articles = [
    {
      category: "Billing Tips",
      title: "10 Ways to Reduce Medical Billing Denials",
      excerpt: "Learn the most common reasons for claim denials and proven strategies to prevent them before submission.",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      category: "Coding Updates",
      title: "2024 CPT Code Changes You Need to Know",
      excerpt: "Stay compliant with the latest CPT code updates and understand how they impact your specialty billing.",
      date: "March 10, 2024",
      readTime: "8 min read"
    },
    {
      category: "Practice Management",
      title: "Maximizing Revenue Cycle Performance",
      excerpt: "Key performance indicators every practice should track to optimize their revenue cycle management.",
      date: "March 5, 2024",
      readTime: "6 min read"
    },
    {
      category: "Compliance",
      title: "HIPAA Compliance in Medical Billing",
      excerpt: "Essential HIPAA requirements for billing operations and how to ensure your practice stays compliant.",
      date: "February 28, 2024",
      readTime: "7 min read"
    },
    {
      category: "Billing Tips",
      title: "Understanding Medicare Reimbursement Rates",
      excerpt: "A comprehensive guide to Medicare fee schedules and strategies to maximize reimbursement.",
      date: "February 20, 2024",
      readTime: "10 min read"
    },
    {
      category: "Practice Management",
      title: "When to Outsource Your Medical Billing",
      excerpt: "Key indicators that it's time to consider outsourcing your billing and how to make the transition.",
      date: "February 15, 2024",
      readTime: "5 min read"
    },
    {
      category: "Coding Updates",
      title: "Chronic Care Management Billing Guide",
      excerpt: "Step-by-step guide to documenting and billing for CCM services to capture this revenue opportunity.",
      date: "February 10, 2024",
      readTime: "9 min read"
    },
    {
      category: "Compliance",
      title: "Avoiding Common E/M Documentation Errors",
      excerpt: "Common documentation mistakes that lead to denials and how to ensure proper E/M level support.",
      date: "February 5, 2024",
      readTime: "6 min read"
    },
    {
      category: "Billing Tips",
      title: "Streamlining Insurance Verification",
      excerpt: "Best practices for efficient eligibility verification to prevent claim rejections and delays.",
      date: "January 28, 2024",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "Billing Tips", "Coding Updates", "Compliance", "Practice Management"];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Resources & Insights</h1>
              <p className="text-xl text-primary-foreground/90">
                Expert guidance on medical billing, coding, compliance, and practice management.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="border-border shadow-medium hover:shadow-strong transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{article.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Stay Informed
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest medical billing tips, coding updates, and industry insights delivered to your inbox monthly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
