import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import MarketSection from "@/components/MarketSection/MarketSection";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <MarketSection />
        <Contact />
      </main>
    </>
  );
}
