import React, { useEffect, useRef } from "react";

import logoPNG from "./assets/logo.png";

function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    let lastScrollTop = 0;
    if (window.scrollY < 150) {
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

      if (scrollHeight < 150) {
        navRef.current.style.backgroundColor = "transparent";
      } else {
        navRef.current.style.backgroundColor = "var(--color-1)";
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

        if (scrollHeight < 150) {
          navRef.current.style.backgroundColor = "transparent";
        } else {
          navRef.current.style.backgroundColor = "var(--color-1)";
        }
      });
    };
  }, []);
  return (
    <div
      className="navbar--business-landing flex flex--align-center"
      ref={navRef}
    >
      <img src={logoPNG} alt="" className="navbar--business-landing__logo" />
      <div className="navbar--business-landing__links">
        <ol className="flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#benefits">Benefits</a>
          </li>
          <li>
            <a href="#qanda">Q&A</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
