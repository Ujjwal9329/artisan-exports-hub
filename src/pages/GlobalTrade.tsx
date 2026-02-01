import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalTradeSection from "@/components/GlobalTradeSection";

import PageHero from "@/components/PageHero";

const GlobalTrade = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main>
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
