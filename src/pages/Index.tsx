import Header from "@/components/Header";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import CollectionsSection from "@/components/CollectionsSection";
import PrivateLabelSection from "@/components/PrivateLabelSection";
import GlobalTradeSection from "@/components/GlobalTradeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Seo
          title="AUREX ARTISAN"
          description="Aurex Artisan: Exquisite handcrafted stone lamps, marble decor, and sculptures from the heart of India. Elevate your space with heritage craftsmanship."
          canonical="https://aurexartisan.com/"
        />
        <HeroSection />
        <CraftsmanshipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
