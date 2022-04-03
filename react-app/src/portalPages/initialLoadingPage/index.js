import React from "react";

import logoPNG from "./assets/logo.png";

import "./styles.css";

function InitialLoadingPage() {
  return (
    <div className="flex flex--justify-center flex--align-center initial-loading">
      <img src={logoPNG} alt="" />
    </div>
  );
}

export default InitialLoadingPage;
