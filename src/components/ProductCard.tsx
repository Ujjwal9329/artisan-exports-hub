import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
}

const ProductCard = ({ image, title, category, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="luxury-card">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.08 : 1,
              rotateY: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-charcoal/40 flex items-center justify-center"
          >
            <span className="px-6 py-2 border border-champagne text-champagne text-sm tracking-wide hover:bg-champagne/20 transition-colors">
              View Details
            </span>
          </motion.div>

          {/* Gold Glow Effect */}
          <motion.div
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, hsl(38 65% 50% / 0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-xs uppercase tracking-widest text-gold mb-2 block">
            {category}
          </span>
          <h3 className="font-heading text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
