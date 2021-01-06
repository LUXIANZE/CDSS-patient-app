import { Card } from "@material-ui/core";
import HomeWorkTwoToneIcon from "@material-ui/icons/HomeWorkTwoTone";
import React from "react";

const SplashScreen = () => {
  return (
    <Card raised style={{ borderRadius: 100 }}>
      <HomeWorkTwoToneIcon style={{ margin: 30, fontSize: 50 }} />
    </Card>
  );
};

export default SplashScreen;
