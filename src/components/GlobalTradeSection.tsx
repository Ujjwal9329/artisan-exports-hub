import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Ship, Building2, Gift } from "lucide-react";

const GlobalTradeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Globe,
      title: "Worldwide Shipping",
      description: "Door-to-door delivery to 50+ countries with secure packaging and full insurance.",
    },
    {
      icon: Ship,
      title: "Bulk Production",
      description: "Scalable manufacturing capacity for orders from 100 to 100,000+ pieces.",
    },
    {
      icon: Building2,
      title: "Hospitality Solutions",
      description: "Bespoke decor programs for hotels, resorts, and commercial spaces.",
    },
    {
      icon: Gift,
      title: "Corporate Gifting",
      description: "Premium gift sets with custom branding for corporate and VIP clients.",
    },
  ];

  const stats = [
    { value: "50+", label: "Countries Served" },
    { value: "500+", label: "Brand Partners" },
    { value: "1M+", label: "Pieces Exported" },
    { value: "25+", label: "Years Experience" },
  ];

  return (
    <section id="global" className="section-padding bg-gradient-luxury" ref={ref}>
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-eyebrow mb-4 block">Global Trade</span>
          <h2 className="heading-section text-foreground mb-4">
            B2B Export <span className="text-gold">Solutions</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            From our workshops in India to luxury markets worldwide. Trusted by leading 
            retailers, designers, and hospitality brands across continents.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-background/50 border border-border/50"
            >
              <div className="font-heading text-3xl md:text-4xl font-semibold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex gap-5 p-6 bg-background border border-border/50 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-muted">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalTradeSection;
