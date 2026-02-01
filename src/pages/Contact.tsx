import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

import PageHero from "@/components/PageHero";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main>
                <PageHero
                    title="Contact Us"
                    subtitle="Get In Touch"
                />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
