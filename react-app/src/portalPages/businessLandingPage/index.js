import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

import "./styles.css";
import businessBanner from "./assets/businessBanner.png";

function BusinessLandingPage() {
  return (
    <>
      <Navbar />
      <div id="home" className="business-landing-banner">
        <img src={businessBanner} alt="" />
        <div className="business-landing-banner__text-div flex flex--column flex--align-center flex--justify-center">
          <h1>Train Clients With Liberty!</h1>
          <p>Don't let money-minded gyms stop you from being more</p>
          <div className="business-landing-banner__buttons flex flex--align-center">
            <Link
              to="/business/login"
              className="business-landing-banner__buttons__login"
            >
              Sign In
            </Link>
            <span>OR</span>
            <Link
              to="/business/register"
              className="business-landing-banner__buttons__register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessLandingPage;
