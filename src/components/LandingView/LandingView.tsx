import React, { VoidFunctionComponent } from "react";
import {
  LandingBG,
  LandingButtons,
  LandingLinkButton,
  LandingPicture,
  LandingTitle,
} from "./LandingViewComponents";

const LandingView: VoidFunctionComponent = () => {
  return (
    <LandingBG $bg={require("../../assets/img/LandingBG.png")}>
      <LandingPicture src={require("../../assets/img/LandingPicture.png")} />
      <LandingTitle>A Brand New Way To See The World</LandingTitle>
      <LandingButtons>
        <LandingLinkButton $primary to="/redirect">
          Our works
        </LandingLinkButton>
        <LandingLinkButton to="/redirect">Know more</LandingLinkButton>
      </LandingButtons>
    </LandingBG>
  );
};

export default LandingView;
