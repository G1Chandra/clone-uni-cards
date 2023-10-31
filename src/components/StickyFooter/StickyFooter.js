import React from "react";
import "./StickyFooter.css";
import MobileForm from "../MobileForm/MobileForm";

const StickyFooter = ({ isDisabled, onCheckboxClick, showSticky }) => {
  return (
    <div className={`sticky-footer ${showSticky ? "opacity-1" : "opacity-0"}`}>
      <div className="sticky-footer-container flex justify-between">
        <MobileForm isDisabled={isDisabled} />
        <div className="consent">
          <input
            type="checkbox"
            id="consent-msg"
            onClick={onCheckboxClick}
            checked={!isDisabled}
          />
          <label for="consent-msg" className="consent-label">
            You agree to be contacted by Uni Cards over Call, SMS, Email
            <br />
            or WhatsApp to guide you through your application.
          </label>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
