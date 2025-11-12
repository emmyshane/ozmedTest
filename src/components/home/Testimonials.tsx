import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

    // Add Review Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Dr. Sarah Johnson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Switching to OZMED Healthcare Services was the best decision for our practice. Our revenue increased by 22% in the first six months, and we've saved countless hours on billing."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Dr. Michael Chen"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "As a cardiologist, our billing is complex with procedures and diagnostics. OZMED Healthcare Services's expertise in cardiology billing has been invaluable. Denial rates dropped by 40%."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Dr. Emily Rodriguez"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "OZMED Healthcare Services allowed me to focus on my young patients instead of worrying about insurance claims. Their dedicated account manager is always available."
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      credentials: "",
      practice: "",
      quote: "Switching to OZMED Healthcare Services was the best decision for our practice. Our revenue increased by 22% in the first six months, and we've saved countless hours on billing. Their team is professional, responsive, and truly understands family medicine billing.",
      rating: 5,
      gradient: "from-rose-400 to-pink-400",
      bgGradient: "from-rose-50 to-pink-50"
    },
    {
      name: "Dr. Michael Chen",
      credentials: "",
      practice: "",
      quote: "As a cardiologist, our billing is complex with procedures and diagnostics. OZMED Healthcare Services's expertise in cardiology billing has been invaluable. Denial rates dropped by 40%, and we finally have clear visibility into our revenue cycle.",
      rating: 5,
      gradient: "from-blue-400 to-indigo-400",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      name: "Dr. Emily Rodriguez",
      credentials: "",
      practice: "",
      quote: "OZMED Healthcare Services allowed me to focus on my young patients instead of worrying about insurance claims. Their dedicated account manager is always available, and the monthly reports help us make informed business decisions. Highly recommended!",
      rating: 5,
      gradient: "from-emerald-400 to-teal-400",
      bgGradient: "from-emerald-50 to-teal-50"
    }
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-br from-accent/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-secondary/40 to-cta/40 blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cta/40 to-primary/40 blob" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full text-primary font-semibold text-sm border border-secondary/30 animate-bounce-in">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Join hundreds of satisfied healthcare providers who trust us with their medical billing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: isVisible ? `scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main card container */}
                <div className="relative h-full bg-background rounded-3xl border-2 border-border/50 hover:border-secondary/50 transition-all duration-500 overflow-hidden p-8">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Large decorative quote */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Quote className="w-32 h-32 text-primary" strokeWidth={1} />
                  </div>

                  {/* Verified badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className={`relative px-3 py-1.5 bg-gradient-to-r ${testimonial.gradient} text-white rounded-full text-xs font-bold flex items-center gap-1 shadow-lg`}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Star rating */}
                    <div className="flex gap-1 mb-6 mt-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-6 h-6 fill-amber-400 text-amber-400 transition-all duration-300 group-hover:scale-110`}
                          style={{
                            animation: isVisible ? `bounce-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${(index * 0.2) + (i * 0.1)}s forwards` : 'none',
                            opacity: isVisible ? 1 : 0
                          }}
                        />
                      ))}
                    </div>

                    {/* Quote text */}
                    <div className="relative mb-6 flex-grow">
                      <p className="text-muted-foreground italic leading-relaxed text-base relative z-10">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author section */}
                    <div className="relative pt-6 border-t-2 border-border/30 group-hover:border-secondary/30 transition-colors duration-500">
                      <div className={`absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${testimonial.gradient} transition-all duration-500`}></div>
                      
                      <div className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating glow shadow */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110`}></div>

                {/* Floating particles on hover */}
                {isHovered && (
                  <>
                    <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${testimonial.gradient} animate-wave`} style={{ animationDelay: '0s' }}></div>
                    <div className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-r ${testimonial.gradient} animate-wave`} style={{ animationDelay: '0.5s' }}></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;