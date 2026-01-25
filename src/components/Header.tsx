import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "/#collections", isExternal: true },
    { name: "Our Story", href: "/story", isExternal: false },
    { name: "Private Label", href: "/#private-label", isExternal: true },
    { name: "Global Trade", href: "/#global", isExternal: true },
    { name: "Contact", href: "/#contact", isExternal: true },
  ];

  // Check if we're on the story page to determine header text color
  const isOnDarkPage = location.pathname === "/story";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className={`font-heading text-xl md:text-2xl font-semibold tracking-wide transition-colors ${
              isScrolled ? "text-foreground" : (isOnDarkPage ? "text-ivory" : "text-foreground")
            }`}>
              AUREX ARTISAN
            </span>
            <span className="text-[10px] tracking-[0.3em] text-gold font-medium">
              HANDCRAFTED LUXURY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium hover:text-gold transition-colors duration-300 tracking-wide ${
                    isScrolled ? "text-muted-foreground" : (isOnDarkPage ? "text-champagne/80" : "text-muted-foreground")
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium hover:text-gold transition-colors duration-300 tracking-wide ${
                    isScrolled ? "text-muted-foreground" : (isOnDarkPage ? "text-champagne/80" : "text-muted-foreground")
                  } ${location.pathname === link.href ? "text-gold" : ""}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/#contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-gold-dark transition-colors duration-300"
            >
              Inquire Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : (isOnDarkPage ? "text-ivory" : "text-foreground")
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-luxury px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-gold transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium hover:text-gold transition-colors py-2 ${
                      location.pathname === link.href ? "text-gold" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide text-center"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
