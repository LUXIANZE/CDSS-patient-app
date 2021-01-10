import { Fade } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import SplashScreen from "./components/splashScreen/SplashScreen";
import { Report, Signup } from "./pages";

const App = () => {
  const [isSplash, setIsSplash] = useState(true);
  const [splashOpacity, setSplashOpacity] = useState(true);
  const isSignedUp = localStorage.getItem("CDSS-Patient-UUID");

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 1500);
    setTimeout(() => {
      setSplashOpacity(false);
    }, 1000);
  }, [isSplash, splashOpacity]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
        backgroundColor: "#B6E4E7",
      }}
    >
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          flexGrow: 1,
          width: "100%",
        }}
      >
        {isSplash ? (
          <div
            style={{
              alignSelf: "center",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Fade style={{ alignSelf: "center" }} in={splashOpacity}>
              <div>
                <SplashScreen />
              </div>
            </Fade>
          </div>
        ) : (
          <div
            id="signup-report-container"
            style={{
              alignSelf: "center",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {isSignedUp ? <Report /> : <Signup />}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
