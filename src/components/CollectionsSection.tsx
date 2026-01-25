import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import candleHolderImage from "@/assets/product-candle-holder.jpg";
import stoneLampImage from "@/assets/product-stone-lamp.jpg";
import elephantImage from "@/assets/product-elephant.jpg";
import plateImage from "@/assets/product-plate.jpg";

const CollectionsSection = () => {
  const products = [
    {
      image: candleHolderImage,
      title: "Geometric Candle Holder",
      category: "Marble Decor",
    },
    {
      image: stoneLampImage,
      title: "Carved Stone Lantern",
      category: "Stone Lamps",
    },
    {
      image: elephantImage,
      title: "Royal Elephant Sculpture",
      category: "Figurines",
    },
    {
      image: plateImage,
      title: "Golden Mandala Plate",
      category: "Luxury Gifts",
    },
  ];

  return (
    <section id="collections" className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-eyebrow mb-4 block">Our Collections</span>
          <h2 className="heading-section text-foreground mb-4">
            Curated for <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover our signature collections of handcrafted marble and stone pieces, 
            each designed to elevate luxury interiors around the world.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              {...product}
              index={index}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-medium tracking-wide group"
          >
            Request Full Catalog
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
