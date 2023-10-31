import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Perks from "../../components/Perks/Perks";
import Features from "../../components/Features/Features";
import Experience from "../../components/Experience/Experience";
import Download from "../../components/Download/Download";
import Compliant from "../../components/Compliant/Compliant";
import Security from "../../components/Security/Security";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Perks />
      <Features />
      <Experience />
      <Compliant />
      <Download />
      <Security />
      <Footer />
    </>
  );
};

export default HomePage;
