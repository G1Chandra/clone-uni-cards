import React, { useEffect } from "react";
import "./StickyFooter.css";
import MobileForm from "../MobileForm/MobileForm";
import "aos/dist/aos.css";
import AOS from "aos";

const StickyFooter = ({ isDisabled, onCheckboxClick, showSticky }) => {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration
      // easing: "ease-out", // Easing option
      once: false,
    });
  }, []);

  return (
    <div
      data-aos={`${showSticky ? "fade-in" : ""}`}
      className={`sticky-footer ${showSticky ? "opacity-1" : "opacity-0"}`}
    >
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
