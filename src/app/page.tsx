import Loader from "@/src/components/Loader";
import Cursor from "@/src/components/Cursor"
import AnnouncementBar from "@/src/components/AnnouncementBar";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import MarqueeBand from "@/src/components/MarqueeBand";
import Categories from "@/src/components/Categories";
import FeaturedBanner from "@/src/components/FeaturedBanner";
import ProductSection from "@/src/components/ProductSection";
import DualBanners from "@/src/components/DualBanners";
import FlashSale from "@/src/components/FlashSale";
import BrandStrip from "@/src/components/BrandStrip";
import Testimonials from "@/src/components/Testimonials";
import Newsletter from "@/src/components/Newsletter";
import PaymentMethods from "@/src/components/PaymentMethods";
import FAQ from "@/src/components/FAQ";
import FloatingWhatsapp from "@/src/components/FloatingWhatsapp";
import MobileNav from "../components/MobileNav";
import ProcessStrip from "../components/ProcessStrip";
export default function Home() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <Navbar />
      <MobileNav />
      <Hero />
      <MarqueeBand />
      <Categories />
      <FeaturedBanner />
      <ProductSection />
      <DualBanners /> 
      <FlashSale /> 
      {/* <BrandStrip /> */}
      <ProcessStrip />
      {/* <Testimonials /> */}
      <Newsletter />
      <PaymentMethods />
      <FAQ />
      <FloatingWhatsapp />
      <Loader />
      <Cursor />
  

    </>
  );
}