import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import lotusIcon from "@/assets/lotus-icon.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/seva", label: "Seva" },
  { to: "/booking", label: "Book" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? "bg-transparent py-4" 
          : "bg-background/95 backdrop-blur-md border-b border-border py-2 shadow-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={lotusIcon} alt="Lotus" className="w-8 h-8 transition-transform group-hover:scale-110" />
          <span className={`font-heading text-lg font-semibold transition-colors duration-300 ${
            isTransparent ? "text-temple-cream" : "text-foreground"
          }`}>
            Vaishnava Homa
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-body transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                isTransparent 
                  ? "text-temple-cream/90 hover:text-white" 
                  : location.pathname === link.to ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={`md:hidden transition-colors ${isTransparent ? "text-temple-cream" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 py-6 animate-fade-down">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base font-body border-b border-border/50 last:border-0 transition-colors ${
                location.pathname === link.to ? "text-primary font-semibold" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
