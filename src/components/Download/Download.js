import React from "react";
import "./Download.css";
import Button from "../Button/Button";

const Download = () => {
  return (
    <div className="download-container">
      <div className="download-content flex align-center justify-center max-width">
        <div className="download-text">Download now to get started</div>
        <div className="flex download-buttons">
          <Button classes="download-btn">Google Play</Button>
          <Button classes="download-btn">App Store</Button>
        </div>
      </div>
    </div>
  );
};

export default Download;
