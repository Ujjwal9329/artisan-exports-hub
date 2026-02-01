import Header from "@/components/Header";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import GlobalTradeSection from "@/components/GlobalTradeSection";

import PageHero from "@/components/PageHero";

const GlobalTrade = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main>
                <Seo
                    title="Global Trade & Exports"
                    description="International export services for handcrafted stone products. Reliable logistics and quality assurance for global partners."
                    canonical="https://aurexartisan.com/global-trade"
                />
                <PageHero
                    title="Global Trade"
                    subtitle="Export Solutions"
                />
                <GlobalTradeSection />
            </main>
            <Footer />
        </div>
    );
};

export default GlobalTrade;
