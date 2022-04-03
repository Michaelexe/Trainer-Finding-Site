import React from "react";

import Navbar from "../../components/navbar";

import landingBanner from "./assets/landingBanner.png";
import "./styles.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="landing-banner">
        <img src={landingBanner} alt="" />
        <div className="landing-banner__text-div flex flex--column">
          <h1>Find your ideal Gym Trainer</h1>
          <h2>With Us!</h2>
          <p>
            We make finding a gym trainer extremely simple by only giving you
            the details that truly matter
          </p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
