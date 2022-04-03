import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logoPNG from "./assets/logo.png";
import RegisterPage from "../../portalPages/registerPage";

function Navbar() {
  const navRef = useRef();
  const [popup, setPopup] = useState("");

  useEffect(() => {
    var lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollHeight = window.scrollY;
      if (scrollHeight > lastScrollTop) {
        navRef.current.style.top = "-65px";
      } else {
        navRef.current.style.top = "0";
      }
      lastScrollTop = scrollHeight;

      if (scrollHeight > 150) {
        navRef.current.style.backgroundColor = "var(--color-1)";
      } else {
        navRef.current.style.backgroundColor = "";
      }
    });

    return () => {
      document.body.removeEventListener("scroll", () => {
        let scrollHeight = window.scrollY;
        if (scrollHeight > lastScrollTop) {
          navRef.current.style.top = "-65px";
        } else {
          navRef.current.style.top = "0";
        }
        lastScrollTop = scrollHeight;

        if (scrollHeight > 150) {
          navRef.current.style.backgroundColor = "var(--color-1)";
        } else {
          navRef.current.style.backgroundColor = "";
        }
      });
    };
  }, []);

  return (
    <>
      <div className="navbar flex flex--align-center" ref={navRef}>
        <img src={logoPNG} alt="" className="navbar__logo" />
        <div className="navbar__others-div flex flex--align-center">
          <Link to="/explore">Join As Trainer</Link>
          <Link to="/explore">Explore</Link>
        </div>
        <div className="navbar__register-div flex flex--align-center">
          <button
            to="/login"
            className="flex flex--align-center"
            onClick={() => {
              setPopup("login");
            }}
          >
            Sign In
          </button>
          <button
            className="navbar__register-div__register flex flex--align-center"
            onClick={() => {
              setPopup("register");
            }}
          >
            Register
          </button>
        </div>
      </div>
      {popup === "register" ? <RegisterPage setPopup={setPopup} /> : null}
      {popup === "login" ? null : null}
    </>
  );
}

export default Navbar;
