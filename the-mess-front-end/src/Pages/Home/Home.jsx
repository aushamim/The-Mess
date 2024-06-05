import AboutUsSection from "./AboutUsSection";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <Pricing />
      <div id="contact-us" className="min-h-screen bg-yellow-200"></div>
    </>
  );
};

export default Home;
