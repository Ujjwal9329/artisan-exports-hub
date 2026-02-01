import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
    return (
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Background */}
            <div className="absolute inset-0">
                {backgroundImage ? (
                    <img
                        src={backgroundImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-charcoal" />
                )}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container-luxury text-center px-6 md:px-12 lg:px-20 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {subtitle && (
                        <span className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-gold-light font-medium mb-4">
                            {subtitle}
                        </span>
                    )}
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-ivory mb-6">
                        {title}
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

export default PageHero;
