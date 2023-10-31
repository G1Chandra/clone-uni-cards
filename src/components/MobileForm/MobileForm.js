import React from "react";
import "./MobileForm.css";
import Button from "../Button/Button";

const MobileForm = () => {
  return (
    <div className="mobile-form flex">
      <input placeholder="Enter Phone Number" />
      <Button classes="form-button">Apply Now</Button>
    </div>
  );
};

export default MobileForm;
