import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Focus from "./components/sections/Focus";
import Approach from "./components/sections/Approach";
import Footer from "./components/layout/Footer";
import Pricing from "./components/sections/Pricing";
import Projects from "./components/sections/Projects";
import Faq from "./components/sections/Faq";
import ContactCTA from "./components/sections/ContactCTA";
import Services from "./components/sections/Services";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Focus />
                <Services />
                <Projects />
                <Approach />
                <Pricing />
                <Faq />
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
