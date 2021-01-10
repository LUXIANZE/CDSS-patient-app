import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";

const Signup = () => {
  const [mRNNumber, setMRNNumber] = useState("");
  const [ic, setIc] = useState("");

  const handleOnSignUpClicked = () => {
    if (mRNNumber.trim() === "" || ic.trim() === "") {
      alert("please provide valid IC/Passport and password");
    } else {
      const uuid = uuidv4();
      localStorage.setItem("CDSS-Patient-UUID", uuid);
      const data = {
        ic: ic,
        mRNNumber: mRNNumber,
        uuid: uuid,
      };
      console.log("data :>> ", data);
      window.location.reload(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        width: "100%",
        margin: 20,
      }}
    >
      <Card
        style={{ margin: "20px 10px", padding: 10, borderRadius: 10 }}
        raised
      >
        <Typography variant="h6" component="h5">
          Instruction
        </Typography>
        <Typography style={{ fontSize: 8 }}>
          Please fill in your IC/Passport Number and assigned password
        </Typography>
      </Card>
      <TextField
        style={{ margin: 10 }}
        label="IC/Passport Number"
        variant="outlined"
        value={ic}
        onChange={(event) => {
          setIc(event.target.value);
        }}
      />
      <TextField
        style={{ margin: 10 }}
        label="Password"
        type="password"
        variant="outlined"
        value={mRNNumber}
        onChange={(event) => {
          setMRNNumber(event.target.value);
        }}
      />
      <Button
        style={{ margin: 10, padding: 10, backgroundColor: "#FFFFFF" }}
        variant="contained"
        onClick={handleOnSignUpClicked}
      >
        SignUp
      </Button>
    </div>
  );
};

export default Signup;
