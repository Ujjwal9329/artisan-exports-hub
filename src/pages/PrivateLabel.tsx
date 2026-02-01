import Header from "@/components/Header";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PrivateLabelSection from "@/components/PrivateLabelSection";

import PageHero from "@/components/PageHero";

const PrivateLabel = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main>
                <Seo
                    title="Private Label Services"
                    description="Custom manufacturing and private label solutions for luxury brands. Partner with our master artisans."
                    canonical="https://aurexartisan.com/private-label"
                />
                <PageHero
                    title="Private Label"
                    subtitle="Your Brand, Our Craft"
                />
                <PrivateLabelSection />
            </main>
            <Footer />
        </div>
    );
};

export default PrivateLabel;
