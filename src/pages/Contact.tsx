import Header from "@/components/Header";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

import PageHero from "@/components/PageHero";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            <main>
                <Seo
                    title="Contact Us"
                    description="Get in touch with Aurex Artisan. Inquire about wholesale, private label, or custom orders."
                    canonical="https://aurexartisan.com/contact"
                />
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
