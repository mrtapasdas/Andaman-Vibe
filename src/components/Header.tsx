import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/#packages", label: "Packages" },
    { to: "/#reviews", label: "Reviews" },
    { to: "/#contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (to: string) => {
    setIsOpen(false);
    if (to.startsWith("/#")) {
      const id = to.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = to;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gradient-ocean">
            Andamanvibe
          </span>
          <span className="text-xs font-body text-muted-foreground">.com</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.to) ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-gradient-ocean text-primary-foreground gap-2">
              <Phone className="w-4 h-4" /> Book Now
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-up">
          <nav className="flex flex-col p-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2"
              >
                {link.label}
              </Link>
            ))}
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gradient-ocean text-primary-foreground gap-2">
                <Phone className="w-4 h-4" /> Book Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
