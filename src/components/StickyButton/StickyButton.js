import React from "react";
import "./StickyButton.css";
import Button from "../Button/Button";

const StickyButton = () => {
  return (
    <div className="only-mobile sticky-button">
      <Button classes="apply-btn">
        <div className="flex justify-between">
          <div style={{ fontSize: "15px" }}>Apply now</div>
          <img
            src="https://www.uni.cards/images/right_arrow.svg"
            alt="right-arrow"
          />
        </div>
      </Button>
    </div>
  );
};

export default StickyButton;
