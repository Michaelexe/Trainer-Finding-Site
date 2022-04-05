import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./portalPages/landingPage";

import { UserContext } from "./context.js";
import { axiosUser } from "./axiosInstance";
import InitialLoadingPage from "./portalPages/initialLoadingPage";
import MainPage from "./portalPages/mainPage";
import BusinessLandingPage from "./portalPages/businessLandingPage";

function App() {
  const [userInfo, setUserInfo] = useState({ gotUser: false });
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    axiosUser
      .get("/user/info")
      .then((res) => {
        setInitialLoad(false);
        if (res.data.status === "success") {
          setUserInfo({ ...res.data.user, gotUser: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setInitialLoad(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              initialLoad ? (
                <InitialLoadingPage />
              ) : userInfo.gotUser ? (
                <MainPage />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/business" element={<BusinessLandingPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
