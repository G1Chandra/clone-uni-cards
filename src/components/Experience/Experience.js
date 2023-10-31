import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container flex flex-col align-center font-white">
      <div className="experience-heading">
        <p>
          At Uni, we’re committed to{" "}
          <span className="uni-gradient-primary">
            delivering an unmatched credit <br />
            experience
          </span>{" "}
          for millions of Indians.
        </p>
      </div>
      <div className="experience-subheading">
        On this mission, we’ve partnered with some of <br />
        the best in the business.
      </div>
      <div className="experience-img">
        <img src="https://www.uni.cards/images/SBM.svg" alt="bank-partner" />
      </div>
    </div>
  );
};

export default Experience;
