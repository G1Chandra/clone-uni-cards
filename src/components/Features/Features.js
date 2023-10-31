import React from "react";
import "./Features.css";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import VerticalCard from "../VerticalCard/VerticalCard";

const Features = () => {
  const horizontalFeaturesData = [
    {
      img_url: "https://www.uni.cards/images/nx-wave/app_screen_1.webp",
      alt_text: "ss1",
      heading:
        "We’ve all heard of instant groceries, now say hello to instant credit.",
      subheading: "0% hassle, 100% paperless. Get your Uni Card instantly.",
    },
    {
      img_url: "https://www.uni.cards/images/nx-wave/app_screen_2.webp",
      alt_text: "ss2",
      heading: "With Uni, you’re always in control.",
      subheading:
        "Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.",
    },
  ];

  const verticalFeaturesData = [
    {
      img_url: "https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp",
      alt_text: "whatsapp",
      heading: "Help, just a WhatsApp away. Anytime, Anyday.",
      subheading:
        "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
    },
    {
      img_url: "https://www.uni.cards/images/nx-wave/rupee_bubble.webp",
      alt_text: "rupee",
      heading: "No hidden charges, no last minute surprises.",
      subheading:
        "100% money back guarantee if a charge is applied without your knowledge.",
    },
    {
      img_url: "https://www.uni.cards/images/nx-wave/antivirus_bubble.webp",
      alt_text: "antivirus",
      heading: "Super secure. Because we care about your money.",
      subheading: "",
      subheading_img_url: "https://www.uni.cards/images/pcidss_cert.svg",
    },
  ];

  const displayFeaturesHorizontal = () => {
    return horizontalFeaturesData.map((perk) => {
      return (
        <HorizontalCard
          idx={0}
          imgSrc={perk.img_url}
          altText={perk.alt_text}
          heading={perk.heading}
          subheading={perk.subheading}
          classes="font-white"
        />
      );
    });
  };

  const displayFeaturesVertical = () => {
    return verticalFeaturesData.map((perk) => {
      return (
        <VerticalCard
          imgSrc={perk.img_url}
          altText={perk.alt_text}
          heading={perk.heading}
          subheading={perk.subheading}
          subheadingImgSrc={perk.subheading_img_url}
        />
      );
    });
  };

  return (
    <div className="features-container">
      <div className="flex flex-col align-center max-width">
        {displayFeaturesHorizontal()}
        <div className="flex justify-between">{displayFeaturesVertical()}</div>
      </div>
    </div>
  );
};

export default Features;
