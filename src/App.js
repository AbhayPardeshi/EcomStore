import { Adidas } from "./components/adidasSection/Adidas";
import { Footer } from "./components/footer/Footer";
import { GodfatherShoePalace } from "./components/godfatherSection/GodfatherShoePalace";
import HeaderImage from "./components/hero-image/HeaderImage";
import { HeroLogo } from "./components/hero-logo/HeroLogo";
import { JordanShop } from "./components/jordanSection/JordanShop";
import { MaisonSacre } from "./components/maisonSacreSection/MaisonSacre";
import Navbar from "./components/navbar/Navbar";
import { Recommended } from "./components/recommendedSection/Recommended";
import { StoryLocation } from "./components/storyLocationSection/StoryLocation";
import { Trending } from "./components/trendingSection/Trending";

function App() {
  return (
    <>
      <Navbar />
      <HeaderImage />
      <HeroLogo />
      <GodfatherShoePalace />
      <JordanShop />
      <Adidas />
      <MaisonSacre />
      <Recommended />
      <Trending />
      <StoryLocation />
      <Footer />
    </>
  );
}

export default App;
