import { motion } from "framer-motion";
import heroImage from "@/assets/hero-marble-vase.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury marble vase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center md:text-left px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block text-xs md:text-sm uppercase tracking-[0.25em] text-gold-light font-medium">
              Premium Marble & Stone Artistry
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-ivory leading-tight mb-6"
          >
            Timeless Handcrafts.
            <br />
            <span className="text-gradient-gold">Global Luxury.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-champagne/90 mb-10 max-w-xl leading-relaxed"
          >
            Custom-crafted marble and stone decor for discerning brands worldwide. 
            From artisan workshops in India to luxury spaces across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="/collections"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-gold-dark transition-all duration-300 hover:shadow-gold-glow"
            >
              Explore Collections
            </a>
            <a
              href="/private-label"
              className="px-8 py-4 border border-champagne/50 text-champagne font-medium tracking-wide hover:bg-champagne/10 hover:border-champagne transition-all duration-300"
            >
              Private Label Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
      </motion.div>
    </section>
  );
};

export default HeroSection;
