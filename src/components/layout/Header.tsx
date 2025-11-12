import { useState } from "react";
import { Link } from "react-router-dom";
import { OvalButton } from "@/components/ui/oval-button";
import { Menu, X, Phone, ChevronDown, Heart, Brain, Activity, Scissors, Droplet, Syringe, Users, User, Eye, Pill, Shield, Stethoscope, Cross } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/oval-dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img src="/ozlogo.png" alt="OZMED Healthcare Services - AI Medical Billing & Revenue Cycle Management" className="h-16 w-auto" width="56" height="56" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link to="/" className="rect-nav-item inline-flex h-10 w-max items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none rounded-lg border border-transparent hover:border-primary/20">
              Home
            </Link>
            
            <Link to="/about" className="rect-nav-item inline-flex h-10 w-max items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none rounded-lg border border-transparent hover:border-primary/20">
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="rect-dropdown-trigger inline-flex h-10 w-max items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none rounded-lg border border-transparent hover:border-primary/20">
                Services <ChevronDown className="w-4 h-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuItem><Link to="/services/medical-billing" className="w-full">Medical Billing Services</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/services/medical-coding" className="w-full">Medical Coding Services</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/services/credentialing" className="w-full">Medical Credentialing Services</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/services/front-office" className="w-full">Front Office Management</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/services/rcm" className="w-full">RCM Services</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/services/pcmh" className="w-full">PCMH Services</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="rect-dropdown-trigger inline-flex h-10 w-max items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none rounded-lg border border-transparent hover:border-primary/20">
                Specialties <ChevronDown className="w-4 h-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[720px] p-8">
                {/* Grid Layout - 4 columns x 4 rows */}
                <div className="grid grid-cols-4 gap-x-6 gap-y-4 mb-6">
                  {/* Row 1 */}
                  <Link to="/specialties/cardiology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Cardiology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/neurology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Brain className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Neurology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/occupational-therapy" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center group-hover:bg-cta/20 transition-colors">
                      <Activity className="w-5 h-5 text-cta" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">OT</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/neurosurgery" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Scissors className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Neurosurgery</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>

                  {/* Row 2 */}
                  <Link to="/specialties/endocrinology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Droplet className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Endocrinology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/anesthesia" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center group-hover:bg-cta/20 transition-colors">
                      <Syringe className="w-5 h-5 text-cta" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Anesthesia</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/nephrology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Nephrology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/geriatrics" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Geriatrics</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>

                  {/* Row 3 */}
                  <Link to="/specialties/allergy-immunology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center group-hover:bg-cta/20 transition-colors">
                      <Shield className="w-5 h-5 text-cta" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Allergy & Immunology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/gastroenterology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Gastroenterology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/ophthalmology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Eye className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Ophthalmology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/family-practice" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center group-hover:bg-cta/20 transition-colors">
                      <Users className="w-5 h-5 text-cta" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Family Practice</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>

                  {/* Row 4 */}
                  <Link to="/specialties/oncology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Cross className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Oncology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/pain-management" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Pill className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Pain Management</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/urology" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center group-hover:bg-cta/20 transition-colors">
                      <Activity className="w-5 h-5 text-cta" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Urology</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                  
                  <Link to="/specialties/physician" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Physician</span>
                      <span className="text-xs text-muted-foreground">Billing</span>
                    </div>
                  </Link>
                </div>

                {/* View All Button */}
                <div className="flex justify-center pt-4 border-t border-border">
                  <Link to="/specialties">
                    <OvalButton variant="ovalGradient" size="lg" className="w-full mt-4 oval-button-primary">
                      View All Specialties
                    </OvalButton>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/resources" className="rect-nav-item inline-flex h-10 w-max items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none rounded-lg border border-transparent hover:border-primary/20">
              Our Reach
            </Link>
            <Link to="/contact" className="rect-nav-item inline-flex h-10 w-max items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none rounded-lg border border-transparent hover:border-primary/20">
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:1-800-555-0123" className="flex-shrink-0">
              <OvalButton variant="outline" size="default" className="bg-white/50 hover:bg-white border-primary/20 hover:border-primary/40 transition-all duration-300 text-primary">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  1-800-555-0123
                </span>
              </OvalButton>
            </a>
            <Link to="/free-audit">
              <OvalButton variant="ovalGradient" size="default" className="shadow-md">Get Free Audit</OvalButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 inline-flex items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              
              <Link to="/about" className="px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full px-4 py-3 text-left text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 flex items-center justify-between"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 space-y-2 pt-2">
                    <Link to="/services/medical-billing" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Medical Billing Services</Link>
                    <Link to="/services/medical-coding" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Medical Coding Services</Link>
                    <Link to="/services/credentialing" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Medical Credentialing Services</Link>
                    <Link to="/services/front-office" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Front Office Management</Link>
                    <Link to="/services/rcm" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>RCM Services</Link>
                    <Link to="/services/pcmh" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>PCMH Services</Link>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => setIsSpecialtiesOpen(!isSpecialtiesOpen)}
                  className="w-full px-4 py-3 text-left text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 flex items-center justify-between"
                >
                  <span>Specialties</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    isSpecialtiesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  isSpecialtiesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 space-y-2 pt-2 max-h-80 overflow-y-auto">
                    <Link to="/specialties/cardiology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Cardiology</Link>
                    <Link to="/specialties/neurology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Neurology</Link>
                    <Link to="/specialties/occupational-therapy" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Occupational Therapy</Link>
                    <Link to="/specialties/neurosurgery" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Neurosurgery</Link>
                    <Link to="/specialties/endocrinology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Endocrinology</Link>
                    <Link to="/specialties/anesthesia" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Anesthesia</Link>
                    <Link to="/specialties/nephrology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Nephrology</Link>
                    <Link to="/specialties/geriatrics" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Geriatrics</Link>
                    <Link to="/specialties/allergy-immunology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Allergy & Immunology</Link>
                    <Link to="/specialties/gastroenterology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Gastroenterology</Link>
                    <Link to="/specialties/ophthalmology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Ophthalmology</Link>
                    <Link to="/specialties/family-practice" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Family Practice</Link>
                    <Link to="/specialties/oncology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Oncology</Link>
                    <Link to="/specialties/pain-management" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pain Management</Link>
                    <Link to="/specialties/urology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Urology</Link>
                    <Link to="/specialties/physician" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Physician Services</Link>
                    <Link to="/specialties/primary-care" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Primary Care</Link>
                    <Link to="/specialties/dermatology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Dermatology</Link>
                    <Link to="/specialties/pediatric" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pediatric</Link>
                    <Link to="/specialties/podiatry" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Podiatry</Link>
                    <Link to="/specialties/urgent-care" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Urgent Care</Link>
                    <Link to="/specialties/rehab" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Rehab Services</Link>
                    <Link to="/specialties/physical-therapy" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Physical Therapy</Link>
                    <Link to="/specialties/wound-care" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Wound Care</Link>
                    <Link to="/specialties/infectious-disease" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Infectious Disease</Link>
                    <Link to="/specialties/mental-health" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Mental Health</Link>
                    <Link to="/specialties/radiology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Radiology</Link>
                    <Link to="/specialties/general-surgery" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>General Surgery</Link>
                    <Link to="/specialties/pathology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pathology</Link>
                    <Link to="/specialties/rheumatology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Rheumatology</Link>
                    <Link to="/specialties/pulmonology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pulmonology</Link>
                    <Link to="/specialties/hematology" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Hematology</Link>
                    <Link to="/specialties/chiropractic" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Chiropractic</Link>
                    <Link to="/specialties/obgyn" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>OB/GYN</Link>
                    <Link to="/specialties/acupuncture" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Acupuncture</Link>
                    <Link to="/specialties/observation-care" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Observation Care</Link>
                    <Link to="/specialties/dental" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Dental</Link>
                  </div>
                </div>
              </div>
              <Link to="/resources" className="px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                Our Reach
              </Link>
              
              <Link to="/contact" className="px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              
              <div className="pt-3 space-y-3 border-t border-border mt-3">
                <a href="tel:1-800-555-0123" className="block">
                  <OvalButton variant="outline" size="default" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    1-800-555-0123
                  </OvalButton>
                </a>
                <Link to="/free-audit" onClick={() => setIsMenuOpen(false)}>
                  <OvalButton variant="ovalGradient" size="default" className="w-full">Get Free Audit</OvalButton>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
