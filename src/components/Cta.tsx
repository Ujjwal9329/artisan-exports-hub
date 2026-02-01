import { motion } from "framer-motion";
import ctaImage from "@/assets/artisan_hands_carving.png";

const Cta = () => {
    return (
        <section className="py-8 px-4 md:px-8 bg-background">
            <div className="container-custom max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#F2F0E9] rounded-sm p-8 md:p-12"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Circular Image Container */}


                        {/* Text Content */}
                        <div className="text-center md:text-left flex-1">
                            <blockquote className="font-serif italic text-xl md:text-2xl leading-relaxed text-foreground mb-8">
                                "Discover artisan-crafted pieces shaped in Jabalpur, designed to elevate modern spaces."
                            </blockquote>

                            <div className="flex flex-col sm:flex-row items-center md:justify-start gap-4">
                                <a
                                    href="/contact"
                                    className="w-full sm:w-auto px-8 py-4 bg-gold text-white font-medium hover:bg-gold-dark transition-colors min-w-[200px] text-center"
                                >
                                    Request Full Catalog
                                </a>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl relative group">
                                <img
                                    src={ctaImage}
                                    alt="Artisan Craftsmanship"
                                    className="w-full h-full object-cover items-center transition-transform duration-700 "
                                />
                                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Cta;
