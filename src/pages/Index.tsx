import Header from "@/components/Header";
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
        <HeroSection />
        <CraftsmanshipSection />
        <CollectionsSection />
        <PrivateLabelSection />
        <GlobalTradeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
