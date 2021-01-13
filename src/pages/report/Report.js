import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const axios = require("axios");

const Report = () => {
  const [mRNNumber, setMRNNumber] = useState(localStorage.getItem("MRN"));
  const [submission, setSubmission] = useState("");
  const [report, setReport] = useState("");
  const [abdominalPain, setAbdominalPain] = useState(false);
  const [constipation, setConstipation] = useState(false);
  const [diarrhea, setDiarrhea] = useState(false);
  const [perrectalBleeding, setPerrectalBleeding] = useState(false);
  const [weightLoss, setWeightLoss] = useState(false);

  const handleConfirmClicked = () => {
    const data = {
      mRNNumber: mRNNumber,
      report: submission,
      date: new Date().toDateString(),
    };

    axios
      .post("https://cdss-flask-backed.et.r.appspot.com/report", data)
      .then(function (response) {
        console.log("response :>> ", response);
        alert("Successfully Submitted");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  useEffect(() => {
    setSubmission(preProcessReport());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    report,
    abdominalPain,
    constipation,
    diarrhea,
    perrectalBleeding,
    weightLoss,
  ]);

  const preProcessReport = () => {
    let temp_report = "";
    if (abdominalPain) {
      temp_report += "Abdominal Pain, ";
    }
    if (constipation) {
      temp_report += "Constipation, ";
    }
    if (diarrhea) {
      temp_report += "Diarrhea, ";
    }
    if (perrectalBleeding) {
      temp_report += "Perrectal Bleeding, ";
    }
    if (weightLoss) {
      temp_report += "Unexplained weightloss > 3 months, ";
    }
    if (report) {
      temp_report += report;
    }

    return temp_report;
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
            <Checkbox
              style={{ color: "darkslategray" }}
              name="checkedC"
              checked={abdominalPain}
              onChange={(event) => {
                setAbdominalPain(event.target.checked);
              }}
            />
          }
          label="Abdominal Pain"
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: "darkslategray" }}
              name="checkedC"
              checked={constipation}
              onChange={(event) => {
                setConstipation(event.target.checked);
              }}
            />
          }
          label="Constipation"
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: "darkslategray" }}
              name="checkedC"
              checked={diarrhea}
              onChange={(event) => {
                setDiarrhea(event.target.checked);
              }}
            />
          }
          label="Persistent diarrhea"
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: "darkslategray" }}
              name="checkedC"
              checked={perrectalBleeding}
              onChange={(event) => {
                setPerrectalBleeding(event.target.checked);
              }}
            />
          }
          label="Perrectal Bleeding"
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: "darkslategray" }}
              name="checkedC"
              checked={weightLoss}
              onChange={(event) => {
                setWeightLoss(event.target.checked);
              }}
            />
          }
          label="Unexplained weight loss (more than 3 months)"
        />
        <TextField
          value={report}
          onChange={(event) => {
            setReport(event.target.value);
          }}
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
          onClick={handleConfirmClicked}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Report;
