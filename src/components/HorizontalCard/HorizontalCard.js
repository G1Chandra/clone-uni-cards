import React from "react";
import "./HorizontalCard.css";
import "../HeroSection/HeroSection.css";

const HorizontalCard = ({
  idx,
  imgSrc,
  altText,
  heading,
  subheading,
  classes,
}) => {
  return (
    <div
      className={`flex justify-between ${
        idx % 2 === 0 ? "row-reverse" : ""
      } ${classes}`}
    >
      <img src={imgSrc} alt={altText} className="hero-section-img" />
      <div>
        <h1>{heading}</h1>
        <h3>{subheading}</h3>
      </div>
    </div>
  );
};

export default HorizontalCard;
