import React, { useState } from "react";
import "../StepThree/StepThree.css";
import { Link } from "react-router-dom";

const StepThree = () => {
  const [selectedEngagement, setSelectedEngagement] = useState("");

  const handleEngagementClick = (engagement) => {
    setSelectedEngagement(engagement);
  };

  return (
    <div className="sign-up-steps-bg">
      <div className="sing-up-pop-up">
        <div className="sing-up-pop-up-three-content">
          <p>
            <img src={require(`../../assets/images/Icons/Numbers/two.png`)} alt="" />
            How do you wish to engage with kinemoe?
          </p>
          <div className="sign-up-engage-container">
            <div
              className={`sign-up-engage ${
                selectedEngagement === "Show me around" ? "selected" : ""
              }`}
              onClick={() => handleEngagementClick("Show me around")}
            >
              <img
                src={require(`../../assets/images/Icons/SignIn/mingcute_eye-line.png`)}
                alt="Mingcute eye line icon"
              />
              Show me around
            </div>
            <div
              className={`sign-up-engage ${
                selectedEngagement === "Dive right in and explore" ? "selected" : ""
              }`}
              onClick={() => handleEngagementClick("Dive right in and explore")}
            >
              <img
                src={require(`../../assets/images/Icons/SignIn/material-symbols_diversity-4-outline.png`)}
                alt="Material symbol diversity icon"
              />
              Dive right in and explore
            </div>
          </div>
          <div className="sign-up-pop-up-navigation-arrows">
            <Link to={"/steptwo"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-left.png`)}
                  alt="navigation arrow left"
                />
                <span>Back</span>
              </button>
            </Link>

            <Link to={"/stepfour"} style={{ textDecoration: "none" }}>
              <button className="sign-up-navigation">
                <span>Next</span>
                <img
                  src={require(`../../assets/images/Icons/SignIn/fluent_arrow-right.png`)}
                  alt="navigation arrow right"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
