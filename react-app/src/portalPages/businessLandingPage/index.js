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
      <div
        className="business-landing-benefits-section flex flex--column flex--align-center flex--justify-center"
        id="benefits"
      >
        <h1>Benefits</h1>
        <div className="business-landing-benefits-div">
          <div className="business-landing-benefits-div__card flex flex--column flex--align-center flex--justify-center">
            <h2>No Commisions</h2>
            <p>We won't loot you from all your earnings</p>
          </div>
          <div className="business-landing-benefits-div__card flex flex--column flex--align-center flex--justify-center">
            <h2>More Clients</h2>
            <p>All potential clients on the site can look at your profile.</p>
          </div>
          <div className="business-landing-benefits-div__card flex flex--column flex--align-center flex--justify-center">
            <h2>Straight Forward</h2>
            <p>All you need are pictures and a good bio to get started.</p>
          </div>
        </div>
      </div>
      <div className="business-pricing-section flex flex--column">
        <h1 className="business-pricing-section__header">Plans And Pricing</h1>
        <div className="flex">
          <div className="business-pricing-card">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessLandingPage;
