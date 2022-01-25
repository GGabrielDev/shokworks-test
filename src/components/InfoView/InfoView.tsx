import React, { VoidFunctionComponent } from "react";
import {
  DualSquares,
  ImageElipsis,
  InfoBackCircle,
  InfoButton,
  InfoCard,
  InfoContent,
  InfoContentWrapper,
  InfoImage,
  InfoImageWrapper,
  InfoTitle,
} from "./InfoViewComponents";

const InfoView: VoidFunctionComponent = () => {
  return (
    <>
      <InfoCard>
        <InfoContentWrapper>
          <InfoTitle>
            The Process <br /> About Our Work
          </InfoTitle>
          <InfoContent>
            Alejandro Laplana leads and adaptable end-to-end development team
            consisting of a large portion of captable enterprise mixed reality
            solutions.
          </InfoContent>
          <InfoButton to="/redirect">Know more</InfoButton>
        </InfoContentWrapper>
        <InfoImageWrapper>
          <InfoImage src={require("../../assets/img/InfoImage1.png")} />
          <InfoBackCircle />
          <InfoBackCircle $transform="-20%, 10%" />
          <DualSquares
            $mainSize={64}
            $xPos={81}
            $yPos={55}
            $altMainSize={32}
            $altTranslatePos="-50%, -50%"
          />
          <DualSquares
            $mainSize={24}
            $xPos={91}
            $yPos={31.5}
            $altMainSize={24}
            $altTranslatePos="-70%, -70%"
          />
          <ImageElipsis $width={40} $xPos={25} $yPos={85} />
          <ImageElipsis $width={25} $xPos={54} $yPos={85} />
        </InfoImageWrapper>
      </InfoCard>
      <InfoCard $altFlex>
        <InfoContentWrapper>
          <InfoTitle>
            We are here to
            <br />
            <b>always help</b> you
          </InfoTitle>
          <InfoContent>
            Shokworks team provide solutions and guidance to every project,
            taking the project vision to high level.
          </InfoContent>
        </InfoContentWrapper>
        <InfoImageWrapper>
          <InfoImage src={require("../../assets/img/InfoImage2.png")} />
          <InfoBackCircle $transform="17%, 0%" />
          <InfoBackCircle $transform="-21%, 0%" />
          <DualSquares
            $mainSize={32}
            $xPos={81}
            $yPos={35}
            $altMainSize={40}
            $altTranslatePos="-70%, -70%"
          />
          <DualSquares
            $mainSize={58}
            $xPos={74}
            $yPos={64}
            $altMainSize={32}
            $altTranslatePos="-70%, -70%"
          />
          <DualSquares
            $mainSize={36}
            $xPos={8}
            $yPos={36}
            $altMainSize={36}
            $altTranslatePos="70%, -70%"
          />
          <DualSquares
            $mainSize={52}
            $xPos={8}
            $yPos={63}
            $altMainSize={28}
            $altTranslatePos="135%,-55%"
          />
        </InfoImageWrapper>
      </InfoCard>
    </>
  );
};

export default InfoView;
