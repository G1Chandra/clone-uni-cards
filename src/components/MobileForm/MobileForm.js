import React from "react";
import "./MobileForm.css";
import Button from "../Button/Button";

const MobileForm = ({ isDisabled }) => {
  return (
    <div className="mobile-form flex">
      <input placeholder="Enter Phone Number" />
      <Button
        disabled={isDisabled}
        classes={`form-button ${isDisabled ? "button-disabled" : ""}`}
      >
        Apply Now
      </Button>
    </div>
  );
};

export default MobileForm;
