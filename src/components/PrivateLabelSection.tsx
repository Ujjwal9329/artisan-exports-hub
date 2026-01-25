import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Palette, BadgeCheck, Headphones } from "lucide-react";

const PrivateLabelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Package,
      title: "White Label Manufacturing",
      description: "Launch your brand with our premium products under your own label. Complete anonymity guaranteed.",
    },
    {
      icon: Palette,
      title: "Custom Design Development",
      description: "Bring your vision to life. Our designers work with you to create exclusive, bespoke pieces.",
    },
    {
      icon: BadgeCheck,
      title: "Logo & Brand Engraving",
      description: "Precision laser and hand engraving to immortalize your brand on every piece.",
    },
    {
      icon: Headphones,
      title: "Dedicated Brand Support",
      description: "Personal account manager for seamless communication and project coordination.",
    },
  ];

  return (
    <section id="private-label" className="section-padding bg-charcoal" ref={ref}>
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-light font-medium mb-4 block">
            For Brands & Retailers
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-ivory mb-4">
            Private Label & <span className="text-gradient-gold">Custom Branding</span>
          </h2>
          <p className="text-champagne/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with us to create your exclusive line of handcrafted luxury decor. 
            OEM & ODM services tailored for international brands.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-6 md:p-8 border border-charcoal-light/30 hover:border-gold/50 transition-all duration-500 hover-glow bg-charcoal/50"
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center border border-gold/30 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-medium text-ivory mb-3">
                {service.title}
              </h3>
              <p className="text-champagne/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-gold-dark transition-all duration-300"
            >
              Start Your Private Label
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-champagne/30 text-champagne font-medium tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
            >
              Request Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateLabelSection;
