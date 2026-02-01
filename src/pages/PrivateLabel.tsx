import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateLabelSection from "@/components/PrivateLabelSection";

const PrivateLabel = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main className="pt-20">
                <PrivateLabelSection />
            </main>
            <Footer />
        </div>
    );
};

export default PrivateLabel;
