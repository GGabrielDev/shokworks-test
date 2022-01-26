import React, { VoidFunctionComponent } from "react";
import FormView from "../components/FormView/FormView";
import InfoView from "../components/InfoView/InfoView";
import LandingView from "../components/LandingView/LandingView";

const Landing: VoidFunctionComponent = () => {
  return (
    <>
      <LandingView />
      <InfoView />
      <FormView />
    </>
  );
};

export default Landing;
