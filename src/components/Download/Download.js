import React from "react";
import "./Download.css";

const Download = () => {
  return (
    <div className="download-container">
      <div className="download-content flex align-center justify-center max-width">
        <p>Download now to get started</p>
        <div className="flex download-buttons">
          <button>Google Play</button>
          <button>App Store</button>
        </div>
      </div>
    </div>
  );
};

export default Download;
