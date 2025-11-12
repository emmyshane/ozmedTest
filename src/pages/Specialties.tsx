import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, Heart, Sparkles, Baby, Bone, Brain, 
  Building2, FlaskConical, Ambulance, Users, Activity, Pill,
  Syringe, Eye, Scissors, Cross, TestTube, Zap, Wind, Droplet
} from "lucide-react";

const Specialties = () => {
  const specialties = [
    { icon: Stethoscope, name: "Primary Care", description: "Family medicine, internal medicine, and general practice billing.", link: "/specialties/primary-care" },
    { icon: Heart, name: "Cardiology", description: "Diagnostic testing, interventional procedures, and cardiac imaging billing.", link: "/specialties/cardiology" },
    { icon: Sparkles, name: "Dermatology", description: "Medical and cosmetic dermatology, procedures, and surgical services.", link: "/specialties/dermatology" },
    { icon: Baby, name: "Pediatric", description: "Well-child visits, immunizations, and specialized pediatric care.", link: "/specialties/pediatric" },
    { icon: Pill, name: "Gastroenterology", description: "Endoscopy, colonoscopy, and GI diagnostic procedures.", link: "/specialties/gastroenterology" },
    { icon: Ambulance, name: "Urgent Care", description: "Fast-paced urgent care E/M, procedures, and X-ray billing.", link: "/specialties/urgent-care" },
    { icon: Brain, name: "Mental Health", description: "Psychiatry, psychology, and counseling services billing.", link: "/specialties/mental-health" },
    { icon: Activity, name: "Physical Therapy", description: "PT/OT therapy codes, time-based billing, and functional reporting.", link: "/specialties/physical-therapy" },
    { icon: Brain, name: "Neurology", description: "EMG, EEG, nerve studies, and neurological assessments.", link: "/specialties/neurology" },
    { icon: Brain, name: "Neurosurgery", description: "Complex brain and spine surgery coding and billing.", link: "/specialties/neurosurgery" },
    { icon: Heart, name: "Oncology", description: "Chemotherapy, radiation therapy, and cancer treatment billing.", link: "/specialties/oncology" },
    { icon: Bone, name: "Podiatry", description: "Foot and ankle procedures, orthotics, and diabetic care.", link: "/specialties/podiatry" },
    { icon: Eye, name: "Ophthalmology", description: "Eye exams, surgeries, and vision testing billing.", link: "/specialties/ophthalmology" },
    { icon: Droplet, name: "Nephrology", description: "Dialysis, kidney disease management, and transplant coding.", link: "/specialties/nephrology" },
    { icon: Syringe, name: "Anesthesia", description: "Time-based anesthesia billing with modifiers and complexity codes.", link: "/specialties/anesthesia" },
    { icon: Zap, name: "Pain Management", description: "Interventional procedures and chronic pain treatment billing.", link: "/specialties/pain-management" },
    { icon: Stethoscope, name: "Family Practice", description: "Comprehensive family care and preventive services billing.", link: "/specialties/family-practice" },
    { icon: Cross, name: "Urology", description: "Urologic procedures, surgeries, and diagnostic testing.", link: "/specialties/urology" },
    { icon: Stethoscope, name: "Physician Services", description: "Comprehensive physician billing across all specialties.", link: "/specialties/physician" },
    { icon: TestTube, name: "Pathology", description: "Specimen analysis, cytology, and diagnostic lab testing.", link: "/specialties/pathology" },
    { icon: Scissors, name: "General Surgery", description: "Surgical procedures, pre-op, and post-op billing.", link: "/specialties/general-surgery" },
    { icon: Activity, name: "Wound Care", description: "Debridement, wound treatment, and hyperbaric therapy.", link: "/specialties/wound-care" },
    { icon: FlaskConical, name: "Infectious Disease", description: "Complex treatment protocols and infusion therapy billing.", link: "/specialties/infectious-disease" },
    { icon: Activity, name: "Occupational Therapy", description: "OT evaluations, treatments, and adaptive equipment billing.", link: "/specialties/occupational-therapy" },
    { icon: Pill, name: "Endocrinology", description: "Diabetes management, thyroid disorders, and hormone therapy.", link: "/specialties/endocrinology" },
    { icon: Bone, name: "Rheumatology", description: "Arthritis treatment, infusion therapy, and joint injections.", link: "/specialties/rheumatology" },
    { icon: Building2, name: "Radiology", description: "Imaging studies, interventional radiology, and diagnostic coding.", link: "/specialties/radiology" },
    { icon: Activity, name: "Chiropractic", description: "Spinal manipulation, therapeutic services, and wellness care.", link: "/specialties/chiropractic" },
    { icon: Baby, name: "OB/GYN", description: "Obstetric care, gynecological procedures, and women's health.", link: "/specialties/obgyn" },
    { icon: Activity, name: "Acupuncture", description: "Alternative medicine coding and insurance compliance.", link: "/specialties/acupuncture" },
    { icon: Building2, name: "Observation Care", description: "Hospital observation coding and billing requirements.", link: "/specialties/observation-care" },
    { icon: Sparkles, name: "Dental", description: "Dental procedures, periodontics, and oral surgery coding.", link: "/specialties/dental" },
    { icon: Wind, name: "Pulmonology", description: "Respiratory procedures, pulmonary function tests, and sleep studies.", link: "/specialties/pulmonology" },
    { icon: Droplet, name: "Hematology", description: "Blood disorders, transfusions, and hematologic treatments.", link: "/specialties/hematology" },
    { icon: Stethoscope, name: "Rehab Services", description: "Rehabilitation facility billing for comprehensive rehab programs.", link: "/specialties/rehab" },
    { icon: Users, name: "Geriatrics", description: "Medicare, long-term care, and elderly patient management.", link: "/specialties/geriatrics" },
    { icon: Syringe, name: "Allergy & Immunology", description: "Testing, immunotherapy, and allergy treatment coding.", link: "/specialties/allergy-immunology" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medical Billing by Specialty</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Specialized billing expertise tailored to your medical specialty. We understand the unique coding requirements, documentation needs, and payer rules for each specialty.
              </p>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get Specialty-Specific Free Audit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Specialty Matters */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Specialty-Specific Billing Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Each medical specialty has unique billing requirements, codes, and challenges. Our specialty-focused approach ensures your practice receives maximum reimbursement while maintaining compliance.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background p-6 rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Specialty-Specific CPT Codes We Handle</div>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-secondary mb-2">35+</div>
                  <div className="text-muted-foreground">Medical Specialties Served</div>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
                  <div className="text-muted-foreground">Specialty Coding Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Our Specialty Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <Link key={index} to={specialty.link}>
                  <Card className="border-border shadow-medium hover:shadow-strong hover:border-primary transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                        <specialty.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{specialty.name}</h3>
                      <p className="text-muted-foreground">{specialty.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Find Billing Experts for Your Specialty
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get connected with billing specialists who understand your specialty's unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/free-audit">
                  <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                    Get Free Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Specialties;
