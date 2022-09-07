import React from "react";
import HeaderImage from "../../components/hero-image/HeaderImage";
import { HeroLogo } from "../../components/hero-logo/HeroLogo";
import { GodfatherShoePalace } from "../../components/godfatherSection/GodfatherShoePalace";
import { JordanShop } from "../../components/jordanSection/JordanShop";
import { Adidas } from "../../components/adidasSection/Adidas";
import { MaisonSacre } from "../../components/maisonSacreSection/MaisonSacre";
import { Recommended } from "../../components/recommendedSection/Recommended";
import { Trending } from "../../components/trendingSection/Trending";
import { StoryLocation } from "../../components/storyLocationSection/StoryLocation";

const Home = () => {
  return (
    <div>
      <HeaderImage />
      <HeroLogo />
      <GodfatherShoePalace />
      <JordanShop />
      <Adidas />
      <MaisonSacre />
      <Recommended />
      <Trending />
      <StoryLocation />
    </div>
  );
};

export default Home;
