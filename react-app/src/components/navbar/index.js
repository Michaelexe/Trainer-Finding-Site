import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logoPNG from "./assets/logo.png";
import RegisterPage from "../../portalPages/registerPage";
import LoginPage from "../../portalPages/loginPage";
import { UserContext } from "../../context";

function Navbar({ transparency, hide }) {
  const navRef = useRef();
  const { userInfo } = useContext(UserContext);
  const [popup, setPopup] = useState("");

  useEffect(() => {
    let lastScrollTop = 0;
    if (hide) {
      if (window.scrollY < 150 && transparency) {
        navRef.current.style.backgroundColor = "transparent";
      } else {
        navRef.current.style.backgroundColor = "var(--color-1)";
      }

      window.addEventListener("scroll", () => {
        let scrollHeight = window.scrollY;
        if (scrollHeight > lastScrollTop) {
          navRef.current.style.top = "-65px";
        } else {
          navRef.current.style.top = "0";
        }
        lastScrollTop = scrollHeight;

        if (scrollHeight < 150 && transparency) {
          navRef.current.style.backgroundColor = "transparent";
        } else {
          navRef.current.style.backgroundColor = "var(--color-1)";
        }
      });
    }

    return () => {
      if (hide) {
        document.body.removeEventListener("scroll", () => {
          let scrollHeight = window.scrollY;
          if (scrollHeight > lastScrollTop) {
            navRef.current.style.top = "-65px";
          } else {
            navRef.current.style.top = "0";
          }
          lastScrollTop = scrollHeight;

          if (scrollHeight < 150 && transparency) {
            navRef.current.style.backgroundColor = "transparent";
          } else {
            navRef.current.style.backgroundColor = "var(--color-1)";
          }
        });
      }
    };
  }, [transparency]);

  return (
    <>
      <div className="navbar flex flex--align-center" ref={navRef}>
        <img src={logoPNG} alt="" className="navbar__logo" />
        <div className="navbar__others-div flex flex--align-center">
          {userInfo.gotUser ? (
            <>
              <Link to="/messages">Messages</Link>
              <Link to="/explore">Explore</Link>
            </>
          ) : (
            <>
              <Link to="/business">Join As Trainer</Link>
              <span
                onClick={() => {
                  setPopup("login");
                }}
              >
                Explore
              </span>
            </>
          )}
        </div>
        <div className="navbar__auth-div flex flex--align-center">
          {userInfo.gotUser ? (
            <div className="navbar__auth-div__user flex flex--align-center flex--justify-center">
              {userInfo.user_full_name[0]}
            </div>
          ) : (
            <>
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
                className="navbar__auth-div__register flex flex--align-center"
                onClick={() => {
                  setPopup("register");
                }}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
      {popup === "register" ? <RegisterPage setPopup={setPopup} /> : null}
      {popup === "login" ? <LoginPage setPopup={setPopup} /> : null}
    </>
  );
}

export default Navbar;
