import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalTradeSection from "@/components/GlobalTradeSection";

const GlobalTrade = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main className="pt-20">
                <GlobalTradeSection />
            </main>
            <Footer />
        </div>
    );
};

export default GlobalTrade;
