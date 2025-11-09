import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">MB</span>
            </div>
            <span className="text-xl font-bold text-primary">MedBill Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/specialties" className="text-foreground hover:text-primary transition-colors">
              Specialties
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:1-800-555-0123" className="flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              1-800-555-0123
            </a>
            <Link to="/free-audit">
              <Button variant="cta" size="lg">Get Free Audit</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/services" className="text-foreground hover:text-primary transition-colors py-2">
                Services
              </Link>
              <Link to="/specialties" className="text-foreground hover:text-primary transition-colors py-2">
                Specialties
              </Link>
              <Link to="/resources" className="text-foreground hover:text-primary transition-colors py-2">
                Resources
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </Link>
              <a href="tel:1-800-555-0123" className="flex items-center text-primary font-semibold py-2">
                <Phone className="w-5 h-5 mr-2" />
                1-800-555-0123
              </a>
              <Link to="/free-audit">
                <Button variant="cta" size="lg" className="w-full">Get Free Audit</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
