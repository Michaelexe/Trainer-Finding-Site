import React from "react";

import "./styles.css";
import closeSVG from "./assets/close.svg";
import registerImage from "./assets/registerImage.png";
import { axiosUser } from "../../axiosInstance";

function RegisterPage({ setPopup }) {
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      userFullName: e.target.userFullName.value,
      userEmail: e.target.userEmail.value,
      password: e.target.userPassword.value,
      confirmPassword: e.target.userConfirmPassword.value,
    };

    axiosUser
      .post("/auth/user/register", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="overlay flex flex--justify-center flex--align-center">
      <div className="register flex">
        <div className="register__image">
          <img src={registerImage} alt="" />
        </div>
        <div className="register__form-container flex flex--column flex--justify-center flex--align-center">
          <h1 className="register__header">Join Us!</h1>
          <form
            className="flex flex--column flex--justify-center flex--align-center"
            onSubmit={submitHandler}
          >
            <div className="mgt-input">
              <input
                type="text"
                placeholder=" "
                className="mgt-input__input"
                name="userFullName"
              />
              <label className="mgt-input__label">Full Name</label>
            </div>
            <div className="mgt-input">
              <input
                type="email"
                placeholder=" "
                className="mgt-input__input"
                name="userEmail"
              />
              <label className="mgt-input__label">E-mail</label>
            </div>
            <div className="mgt-input">
              <input
                type="password"
                placeholder=" "
                className="mgt-input__input"
                name="userPassword"
              />
              <label className="mgt-input__label">Password</label>
            </div>
            <div className="mgt-input">
              <input
                type="password"
                placeholder=" "
                className="mgt-input__input"
                name="userConfirmPassword"
              />
              <label className="mgt-input__label">Confirm Password</label>
            </div>
            <button className="register__submit" type="submit">
              Register
            </button>
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
