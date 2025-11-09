import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">MB</span>
              </div>
              <span className="text-xl font-bold">MedBill Pro</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Professional medical billing services helping healthcare providers maximize revenue and focus on patient care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/medical-billing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Medical Billing</Link></li>
              <li><Link to="/services/revenue-cycle" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Revenue Cycle Management</Link></li>
              <li><Link to="/services/medical-coding" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Medical Coding</Link></li>
              <li><Link to="/services/credentialing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Credentialing</Link></li>
              <li><Link to="/services/ar-management" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">AR Management</Link></li>
              <li><Link to="/services/practice-management" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Practice Management</Link></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2">
              <li><Link to="/specialties/primary-care" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Primary Care</Link></li>
              <li><Link to="/specialties/cardiology" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cardiology</Link></li>
              <li><Link to="/specialties/dermatology" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Dermatology</Link></li>
              <li><Link to="/specialties/pediatrics" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pediatrics</Link></li>
              <li><Link to="/specialties/orthopedics" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Orthopedics</Link></li>
              <li><Link to="/specialties/mental-health" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Mental Health</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:1-800-555-0123" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  1-800-555-0123
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@medbillpro.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@medbillpro.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Healthcare Blvd, Suite 500<br />
                  Medical City, MC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MedBill Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/hipaa" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              HIPAA Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
