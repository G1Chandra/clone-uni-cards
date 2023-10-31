import React from "react";
import "./HorizontalCard.css";

const HorizontalCard = ({
  idx,
  imgSrc,
  altText,
  heading,
  subheading,
  classes,
  imgClasses,
  headingClasses,
  subheadingClasses,
}) => {
  return (
    <div
      className={`horizontal-card-container flex justify-between ${
        idx % 2 === 0 ? "row-reverse" : ""
      } ${classes}`}
    >
      <img src={imgSrc} alt={altText} className={imgClasses} />
      <div className="horizontal-card-text flex flex-col">
        <p className={`heading ${headingClasses}`}>
          <div dangerouslySetInnerHTML={{ __html: heading }} />
        </p>
        <p className={`subheading ${subheadingClasses}`}>
          <div dangerouslySetInnerHTML={{ __html: subheading }} />
        </p>
      </div>
    </div>
  );
};

export default HorizontalCard;
