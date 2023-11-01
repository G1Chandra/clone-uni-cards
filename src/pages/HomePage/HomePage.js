import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Perks from "../../components/Perks/Perks";
import Features from "../../components/Features/Features";
import Experience from "../../components/Experience/Experience";
import Download from "../../components/Download/Download";
import Compliant from "../../components/Compliant/Compliant";
import Security from "../../components/Security/Security";
import Footer from "../../components/Footer/Footer";
import StickyFooter from "../../components/StickyFooter/StickyFooter";
import StickyButton from "../../components/StickyButton/StickyButton";

const HomePage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showStickyFooter, setShowStickyFooter] = useState(false);

  const toggleDisable = () => {
    setIsDisabled((prev) => !prev);
  };

  const toggleStickyFooter = (val) => {
    setShowStickyFooter(val);
  };

  return (
    <>
      <HeroSection
        isDisabled={isDisabled}
        onCheckboxClick={toggleDisable}
        onStickyChange={toggleStickyFooter}
      />
      <Perks />
      <Features />
      <Experience />
      <Compliant />
      <Download />
      <Security />
      <Footer />
      <StickyFooter
        isDisabled={isDisabled}
        onCheckboxClick={toggleDisable}
        showSticky={showStickyFooter}
      />
      <StickyButton />
    </>
  );
};

export default HomePage;
