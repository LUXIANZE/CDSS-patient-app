import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const axios = require("axios");

const Report = () => {
  const [mRNNumber, setMRNNumber] = useState(
    localStorage.getItem("CDSS-Patient-UUID")
  );
  const [report, setReport] = useState("");

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
    <div style={{ alignSelf: "center", margin: 20 }}>
      <Card
        style={{ margin: "20px 0px", padding: 10, borderRadius: 10 }}
        raised
      >
        <Typography variant="h6" component="h5">
          Instructions
        </Typography>
        <Typography style={{ fontSize: 8 }}>
          Please make sure your MRN Number is correct.
        </Typography>
        <Typography style={{ fontSize: 8 }}>
          If you find yourself having some abnormal symptoms, please submit a
          report ASAP.
        </Typography>
      </Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          control={
            <Checkbox style={{ color: "darkslategray" }} name="checkedC" />
          }
          label="Abdominal Pain"
        />
        <FormControlLabel
          control={
            <Checkbox style={{ color: "darkslategray" }} name="checkedC" />
          }
          label="Constipation"
        />
        <FormControlLabel
          control={
            <Checkbox style={{ color: "darkslategray" }} name="checkedC" />
          }
          label="Persistent diarrhea"
        />
        <FormControlLabel
          control={
            <Checkbox style={{ color: "darkslategray" }} name="checkedC" />
          }
          label="Perrectal Bleeding"
        />
        <FormControlLabel
          control={
            <Checkbox style={{ color: "darkslategray" }} name="checkedC" />
          }
          label="Unexplained weight loss (more than 3 months)"
        />
        <TextField
          style={{ margin: "10px 0px" }}
          multiline
          rows={3}
          label="Other"
          variant="outlined"
        />
        <Button
          style={{
            margin: "10px 0px",
            padding: 10,
            backgroundColor: "#FFFFFF",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Report;
