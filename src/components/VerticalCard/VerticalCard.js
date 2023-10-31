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
    <div className="vertical-card-container flex flex-col font-white">
      <img className="vertical-card-img" src={imgSrc} alt={altText} />
      <h2>{heading}</h2>
      {subheading ? (
        <div className="vertical-card-subheading">{subheading}</div>
      ) : (
        <img
          className="vertical-card-subheading-img"
          src={subheadingImgSrc}
          alt={altText}
        />
      )}
    </div>
  );
};

export default VerticalCard;
