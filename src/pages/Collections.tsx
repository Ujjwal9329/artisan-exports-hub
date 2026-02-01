import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollectionsSection from "@/components/CollectionsSection";

const Collections = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main className="pt-20">
                <CollectionsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Collections;
