import React from "react";
import "./VerticalCard.css";

const VerticalCard = ({
  imgSrc,
  altText,
  heading,
  subheading,
  subheadingImgSrc,
}) => {
  return (
    <div className="flex flex-col font-white">
      <img src={imgSrc} alt={altText} />
      <h1>{heading}</h1>
      {subheading ? (
        <h3>{subheading}</h3>
      ) : (
        <img src={subheadingImgSrc} alt={altText} />
      )}
    </div>
  );
};

export default VerticalCard;
