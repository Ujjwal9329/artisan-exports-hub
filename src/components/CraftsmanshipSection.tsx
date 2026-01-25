import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import artisanImage from "@/assets/artisan-crafting.jpg";

const CraftsmanshipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Master Artisans",
      description: "Generations of skilled craftspeople preserving ancient techniques",
    },
    {
      title: "Premium Materials",
      description: "Hand-selected marble and natural stone from quarries across India",
    },
    {
      title: "Meticulous Process",
      description: "Every piece undergoes 50+ hours of careful handcrafting",
    },
  ];

  return (
    <section id="craftsmanship" className="section-padding bg-gradient-luxury" ref={ref}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={artisanImage}
                alt="Artisan crafting marble"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-background p-6 shadow-luxury"
            >
              <div className="text-4xl font-heading font-semibold text-gold mb-1">40+</div>
              <div className="text-sm text-muted-foreground tracking-wide">Years of Heritage</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-eyebrow mb-4 block">The Art of Creation</span>
            <h2 className="heading-section text-foreground mb-6">
              Where Heritage Meets
              <br />
              <span className="text-gold">Modern Luxury</span>
            </h2>
            
            <p className="text-body mb-8 max-w-lg">
              Each AUREX ARTISAN piece tells a story of tradition, dedication, and 
              excellence. Our master craftsmen transform raw marble and stone into 
              extraordinary works of art, using techniques passed down through generations.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1 bg-gradient-to-b from-gold to-gold-light flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
