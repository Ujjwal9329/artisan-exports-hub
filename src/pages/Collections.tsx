import Header from "@/components/Header";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import CollectionsSection from "@/components/CollectionsSection";

import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

const Collections = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main>
                <Seo
                    title="Our Collections"
                    description="Explore our curated collections of handcrafted stone lamps, marble vessels, and artistic sculptures."
                    canonical="https://aurexartisan.com/collections"
                />
                <PageHero
                    title="Our Collections"
                    subtitle="Handcrafted Excellence"
                // You might want to add a backgroundImage prop here if available
                />
                <CollectionsSection />
                <Cta />
            </main>
            <Footer />
        </div>
    );
};

export default Collections;
