import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-16 px-6 md:px-12 lg:px-20">
      <div className="container-luxury">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-heading text-2xl font-semibold tracking-wide text-ivory">
                AUREX ARTISAN
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-gold-light font-medium mt-1">
                HANDCRAFTED LUXURY
              </span>
            </div>
            <p className="text-champagne/70 text-sm leading-relaxed max-w-sm">
              Premium marble and stone artistry, handcrafted in India for luxury brands 
              and discerning collectors worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ivory font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Collections", "Craftsmanship", "Private Label", "Global Trade", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-champagne/60 text-sm hover:text-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-ivory font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "White Label",
                "Custom Design",
                "Bulk Orders",
                "Corporate Gifting",
                "Hospitality Projects",
              ].map((service) => (
                <li key={service}>
                  <span className="text-champagne/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-charcoal-light/30 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-champagne/50 text-sm">
            © {currentYear} AUREX ARTISAN™. All rights reserved.
          </p>
          <p className="text-champagne/50 text-sm">
            Handmade with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
