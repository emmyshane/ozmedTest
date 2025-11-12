import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  const faqs = [
    {
      question: "What is medical billing and revenue cycle management?",
      answer: "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for healthcare services. Revenue Cycle Management (RCM) encompasses the entire financial process, from patient registration and appointment scheduling to final payment, including claim submission, denial management, payment posting, and account reconciliation."
    },
    {
      question: "How can AI-powered medical billing increase my practice revenue?",
      answer: "Our AI-powered medical billing services increase revenue by reducing claim denials through intelligent error detection (98% accuracy), optimizing coding for maximum reimbursement, accelerating payment cycles, and identifying underpayments. On average, practices see a 25% revenue increase within the first six months by capturing previously missed charges and reducing accounts receivable days by 30%."
    },
    {
      question: "What makes OZMED Healthcare Services different from other medical billing companies?",
      answer: "OZMED combines cutting-edge AI technology with experienced medical billing specialists. Our AI systems process claims 24/7 with 98% accuracy, while our AAPC/AHIMA certified coders handle complex cases. We offer specialized expertise in 35+ medical specialties, transparent reporting, dedicated account managers, and a proven track record of reducing denials by 40% and increasing collections by 25%."
    },
    {
      question: "How long does it take to implement your medical billing services?",
      answer: "Our implementation process typically takes 2-4 weeks. Week 1 includes a free consultation and billing audit to identify revenue opportunities. Weeks 2-4 involve seamless integration with your practice management system and EHR. Our AI platform begins processing claims immediately after setup, with continuous optimization through machine learning."
    },
    {
      question: "Is my patient data secure and HIPAA compliant?",
      answer: "Absolutely. OZMED Healthcare Services is fully HIPAA compliant with enterprise-level security measures. We use encrypted data transmission, secure cloud storage, multi-factor authentication, regular security audits, and comprehensive staff training. Our systems meet all federal and state healthcare data protection requirements, ensuring complete patient privacy and practice security."
    },
    {
      question: "What specialties do you provide medical billing services for?",
      answer: "We provide specialized medical billing services for 35+ medical specialties including Cardiology, Dermatology, Gastroenterology, Neurology, Pediatrics, OB/GYN, Orthopedics, Pain Management, Primary Care, Urgent Care, Mental Health, Physical Therapy, and many more. Each specialty has unique billing requirements, and our certified coders have specific expertise in your field."
    },
    {
      question: "How much do medical billing services cost?",
      answer: "Our pricing is transparent and performance-based, typically ranging from 4-8% of collected revenue. Unlike fixed-fee models, you only pay when we successfully collect payments for your practice. We offer a free billing audit to assess your current revenue cycle and provide a customized quote. Most practices find they save money while increasing revenue through reduced denials and faster payments."
    },
    {
      question: "What is your claim acceptance rate and how do you handle denials?",
      answer: "Our AI-powered system achieves a 98% first-pass claim acceptance rate, significantly higher than the industry average of 75-80%. For denied claims, we have a dedicated denial management team that analyzes root causes, submits appeals with supporting documentation, and implements process improvements to prevent future denials. Our average denial overturn rate is 65%, recovering significant revenue for our clients."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(176, 25%, 54%) 1px, transparent 1px), linear-gradient(90deg, hsl(176, 25%, 54%) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full text-primary font-semibold text-sm border border-secondary/30 animate-bounce-in">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Medical Billing FAQs</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our AI-powered medical billing services and revenue cycle management.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group"
              style={{
                animation: isVisible ? `fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards` : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="bg-background rounded-2xl border-2 border-border/50 hover:border-secondary/50 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-300 group-hover:bg-accent/5"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg lg:text-xl font-bold text-foreground pr-8 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-secondary transition-transform duration-300 group-hover:scale-110" />
                    ) : (
                      <Plus className="w-6 h-6 text-secondary transition-transform duration-300 group-hover:scale-110" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-muted-foreground leading-relaxed text-base lg:text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions about our medical billing services?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Our Billing Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
