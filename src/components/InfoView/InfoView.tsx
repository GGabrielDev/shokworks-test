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
          $xPos={72}
          $yPos={55}
          $altMainSize={32}
          $altTranslatePos="-50%, -50%"
        />
        <DualSquares
          $mainSize={24}
          $xPos={77}
          $yPos={31.5}
          $altMainSize={24}
          $altTranslatePos="-70%, -70%"
        />
        <ImageElipsis $width={25} $xPos={35} $yPos={72.5} />
        <ImageElipsis $width={15} $xPos={54} $yPos={72.5} />
      </InfoImageWrapper>
    </InfoCard>
  );
};

export default InfoView;
