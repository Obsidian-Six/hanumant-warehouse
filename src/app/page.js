import Navbar from "./_components/navbar";
import HomeHerosection from "./_components/home-herosection";
import HomeAbout from "./_components/home-about";
import Footer from "./_components/footer";
import HomeProducts from "./_components/home-products";
import HomeFeature from "./_components/home-feature";
import HomeSection from "./_components/home-section";
import Testimonal from "./_components/testimonal-slider";
import ContactUs from "./_components/contact-form";
import FAQSection from "./_components/faq";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHerosection />
      {/* <HomeSection /> */}
      <HomeProducts />
      <HomeAbout />
      <HomeFeature />
      <ContactUs />
      <Testimonal />
      <FAQSection />
      <Footer />
    </div>
  );
}
