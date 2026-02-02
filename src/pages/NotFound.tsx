import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] px-6 relative overflow-hidden">
      <Seo title="404 - Page Not Found" description="The page you are looking for does not exist." />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl mx-auto relative z-10"
      >
        <div className="relative mb-8">
          <h1 className="text-[8rem] md:text-[12rem] font-serif leading-none text-gold/10 font-bold select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-serif italic text-gold-dark tracking-widest bg-[#FDFBF7] px-4">
              Page Not Found
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
          Uncharted Territory
        </h2>

        <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-body">
          Like uncarved marble waiting for the artisan's hand, this page has not yet been shaped.
          The path you seek remains elusive.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-medium rounded-sm hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-gold/20"
        >
          <ArrowLeft className="w-5 h-5" />
          Return to Sanctuary
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
