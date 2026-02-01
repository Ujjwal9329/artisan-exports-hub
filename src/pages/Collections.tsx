import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollectionsSection from "@/components/CollectionsSection";

import PageHero from "@/components/PageHero";

const Collections = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main>
                <PageHero
                    title="Our Collections"
                    subtitle="Handcrafted Excellence"
                // You might want to add a backgroundImage prop here if available
                />
                <CollectionsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Collections;
