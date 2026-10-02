import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CraftRibbon from "@/components/CraftRibbon";
import Collections from "@/components/Collections";
import BridalFeature from "@/components/BridalFeature";
import NewArrivals from "@/components/NewArrivals";
import Atelier from "@/components/Atelier";
import Lookbook from "@/components/Lookbook";
import Bespoke from "@/components/Bespoke";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Instagram from "@/components/Instagram";
import Newsletter from "@/components/Newsletter";
import AboutDemo from "@/components/AboutDemo";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <CraftRibbon />
        <Collections />
        <BridalFeature />
        <NewArrivals />
        <Atelier />
        <Lookbook />
        <Bespoke />
        <Testimonials />
        <Faq />
        <Instagram />
        <Newsletter />
        <AboutDemo />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
