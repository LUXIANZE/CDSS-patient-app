import { Button, Fade, TextField, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React, { useEffect, useState } from "react";
import SplashScreen from "./components/splashScreen/SplashScreen";

const axios = require("axios");

const App = () => {
  const [isSplash, setIsSplash] = useState(true);
  const [splashOpacity, setSplashOpacity] = useState(true);

  const [mRNNumber, setMRNNumber] = useState(localStorage.getItem("MRN"));
  const [report, setReport] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 1500);
    setTimeout(() => {
      setSplashOpacity(false);
    }, 1000);
  }, [isSplash, splashOpacity]);

  const handleConfirmClicked = () => {
    const data = {
      mRNNumber: mRNNumber,
      report: report,
      date: new Date().toDateString(),
    };
    localStorage.setItem("MRN", mRNNumber);

    axios
      .post("https://cdss-flask-backed.et.r.appspot.com/report", data)
      .then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: "#B6E4E7",
      }}
    >
      <div style={{ display: "flex", alignSelf: "center", flexGrow: 1 }}>
        {isSplash ? (
          <div style={{ alignSelf: "center" }}>
            <Fade in={splashOpacity}>
              <div>
                <SplashScreen />
              </div>
            </Fade>
          </div>
        ) : (
          <div style={{ alignSelf: "center" }}>
            <Card
              style={{ margin: "20px 0px", padding: 10, borderRadius: 10 }}
              raised
            >
              <Typography variant="h5">Instructions</Typography>
              <Typography style={{ fontSize: 8 }}>
                Please make sure your MRN Number is correct.
              </Typography>
              <Typography style={{ fontSize: 8 }}>
                If you find yourself having some abnormal symptoms, please
                submit a report ASAP.
              </Typography>
            </Card>
            <div>
              <div style={{ display: "flex", width: "100%" }}>
                <TextField
                  style={{ flexGrow: 6 }}
                  label="MRN Number"
                  variant="outlined"
                  value={mRNNumber}
                  onChange={(event) => {
                    setMRNNumber(event.target.value);
                  }}
                />
                <div style={{ width: 20, flexGrow: 1 }} />
                <Button
                  style={{
                    flexGrow: 4,
                    alignSelf: "center",
                    padding: 16,
                    backgroundColor: "#FFFFFF",
                    color: "#2C5B59",
                  }}
                  onClick={handleConfirmClicked}
                >
                  Confirm
                </Button>
              </div>
              <div style={{ height: 20 }} />
              <TextField
                value={report}
                onChange={(event) => {
                  setReport(event.target.value);
                }}
                style={{ width: "100%" }}
                label="Symptoms"
                variant="outlined"
                rows={5}
                multiline
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
