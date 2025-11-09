import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      credentials: "MD, Family Medicine",
      practice: "Johnson Family Practice, Austin, TX",
      quote: "Switching to MedBill Pro was the best decision for our practice. Our revenue increased by 22% in the first six months, and we've saved countless hours on billing. Their team is professional, responsive, and truly understands family medicine billing.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      credentials: "DO, Cardiology",
      practice: "Heart Care Specialists, San Diego, CA",
      quote: "As a cardiologist, our billing is complex with procedures and diagnostics. MedBill Pro's expertise in cardiology billing has been invaluable. Denial rates dropped by 40%, and we finally have clear visibility into our revenue cycle.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      credentials: "MD, Pediatrics",
      practice: "Kids First Pediatrics, Denver, CO",
      quote: "MedBill Pro allowed me to focus on my young patients instead of worrying about insurance claims. Their dedicated account manager is always available, and the monthly reports help us make informed business decisions. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied healthcare providers who trust us with their medical billing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.credentials}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.practice}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
