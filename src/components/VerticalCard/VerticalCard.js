import React from "react";
import "./VerticalCard.css";

const VerticalCard = ({
  index,
  imgSrc,
  altText,
  heading,
  subheading,
  subheadingImgSrc,
}) => {
  return (
    <div
      className={`vertical-card-container flex font-white ${
        index % 2 !== 0 ? "row-rev" : "row"
      }`}
    >
      <img className="vertical-card-img" src={imgSrc} alt={altText} />
      <div>
        <h2 className="vertical-card-heading">{heading}</h2>
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
    </div>
  );
};

export default VerticalCard;
