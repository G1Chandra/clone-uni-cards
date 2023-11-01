import React from "react";
import "./Footer.css";
import Button from "../Button/Button";

const Footer = () => {
  const leftArr = ["Instagram", "LinkedIn", "Twitter", "Facebook", "Careers"];
  const rightArr = ["Credit Card KFS", "Credit Card T&Cs", "Uni T&Cs"];

  return (
    <div className="footer-container">
      <div className="footer-content flex flex-col max-width font-white">
        <svg
          class="Logo_logo_white__zowGB"
          width="120"
          height="80"
          viewBox="0 0 90 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
            fill="white"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
            fill="#00DCC8"
          ></path>
        </svg>
        <p>
          Indiqube Sigma No.3/B, Nexus
          <br />
          Koramangala 3rd Block SBI Colony,
          <br />
          Koramangala, Bengaluru, Karnataka
          <br />
          560034
        </p>
        <p>
          Contact Us: 080 68216821
          <br />
          Email: care@uni.club
        </p>
        <div style={{ borderTop: "1px solid white" }} />
        <Button classes="btn-grievance">
          <u>Grievance Redressal Mechanism</u> - SBM Bank India
        </Button>
        <div className="spacer-gradient" />
        <div className="quick-links flex justify-between">
          <div className="menu-items flex font-white">
            {leftArr.map((name) => (
              <Button classes="menu-btn">{name}</Button>
            ))}
          </div>
          <div className="footer-final menu-items flex font-white">
            {rightArr.map((name) => {
              return (
                <div style={{ gap: "0" }} className="flex">
                  <Button classes="footer-final-btn menu-btn">{name}</Button>
                  <div>|</div>
                </div>
              );
            })}
            <Button classes="footer-final-btn menu-btn">
              Lending Partner T&Cs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
