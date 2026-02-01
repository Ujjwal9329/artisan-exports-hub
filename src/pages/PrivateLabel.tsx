import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateLabelSection from "@/components/PrivateLabelSection";

import PageHero from "@/components/PageHero";

const PrivateLabel = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main>
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
