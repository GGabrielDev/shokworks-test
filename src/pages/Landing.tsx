import React, { VoidFunctionComponent } from "react";
import InfoView from "../components/InfoView/InfoView";
import LandingView from "../components/LandingView/LandingView";

const Landing: VoidFunctionComponent = () => {
  return (
    <>
      <LandingView />
      <InfoView />
    </>
  );
};

export default Landing;
