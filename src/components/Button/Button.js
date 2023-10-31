import React from "react";
import "./Button.css";

const Button = (props) => {
  const { children, classes, ...rest } = props;
  return (
    <button className={`button ${classes}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
