import React from "react";

import { axiosUser } from "../../axiosInstance";

import "./styles.css";
import closeSVG from "./assets/close.svg";
import loginImage from "./assets/loginImage.png";

function LoginPage({ setPopup }) {
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      userEmail: e.target.userEmail.value,
      password: e.target.userPassword.value,
    };

    axiosUser
      .post("/auth/user/login", formData)
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
      <div className="login flex">
        <div className="login__form-container flex flex--column flex--align-center flex--justify-center">
          <h1 className="login__header">Welcome!</h1>
          <form
            className="login__form-container flex flex--column flex--align-center flex--justify-center"
            onSubmit={submitHandler}
          >
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
            <button type="submit" className="login__submit">
              Login
            </button>
          </form>
        </div>
        <div className="login__image">
          <img src={loginImage} alt="" />
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

export default LoginPage;
