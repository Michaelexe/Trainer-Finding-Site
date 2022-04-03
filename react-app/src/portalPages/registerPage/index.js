import React from "react";

import "./styles.css";
import closeSVG from "./assets/close.svg";
import registerImage from "./assets/registerImage.png";

function RegisterPage({ setPopup }) {
  return (
    <div className="overlay flex flex--justify-center flex--align-center">
      <div className="register flex">
        <div className="register__image">
          <img src={registerImage} alt="" />
        </div>
        <div className="register__form-container flex flex--column flex--justify-center flex--align-center">
          <h1 className="register__header">Join Us!</h1>
          <form className="flex flex--column flex--justify-center flex--align-center">
            <div className="mgt-input">
              <input type="text" placeholder=" " className="mgt-input__input" />
              <label className="mgt-input__label">Full Name</label>
            </div>
            <div className="mgt-input">
              <input
                type="email"
                placeholder=" "
                className="mgt-input__input"
              />
              <label className="mgt-input__label">E-mail</label>
            </div>
            <div className="mgt-input">
              <input
                type="password"
                placeholder=" "
                className="mgt-input__input"
              />
              <label className="mgt-input__label">Password</label>
            </div>
            <div className="mgt-input">
              <input
                type="password"
                placeholder=" "
                className="mgt-input__input"
              />
              <label className="mgt-input__label">Confirm Password</label>
            </div>
            <button className="register__submit">Register</button>
          </form>
        </div>
        <div
          className="close-popup"
          onClick={() => {
            setPopup("");
          }}
        >
          <img src={closeSVG} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
