import React from "react";
import {
  StyledContainer,
  Wrapper,
  DeadStatus,
  AliveStatus,
  UnknownStatus,
  CharacterName,
  ResidentInfoWrappter,
  CharacterInfo,
  CharacterImage,
  CharacterInfoExpression,
  CharacterInfoExpressionValue,
  CharacterImageContainer,
} from "./styles";
function Card({ name, image, species, type, gender, origin, status }) {
  function renderStatus(status) {
    switch (status) {
      case "Dead":
        return <DeadStatus />;
      case "Alive":
        return <AliveStatus />;
      default:
        return <UnknownStatus />;
    }
  }
  return (
    <Wrapper>
      <StyledContainer>
        <CharacterImageContainer>
          <CharacterImage src={image} alt="" />
        </CharacterImageContainer>
        <CharacterInfo>
          <CharacterInfoExpressionValue>
            <CharacterName>{name}</CharacterName>
          </CharacterInfoExpressionValue>
          <ResidentInfoWrappter>
            <CharacterInfoExpression>
              {renderStatus(status)}Current Status:{" "}
            </CharacterInfoExpression>
            <CharacterInfoExpressionValue>
              {status}
            </CharacterInfoExpressionValue>
          </ResidentInfoWrappter>
          <ResidentInfoWrappter>
            <CharacterInfoExpression>Species: </CharacterInfoExpression>
            <CharacterInfoExpressionValue>
              {species}
            </CharacterInfoExpressionValue>
          </ResidentInfoWrappter>
          <ResidentInfoWrappter>
            <CharacterInfoExpression>Type: </CharacterInfoExpression>
            <CharacterInfoExpressionValue>
              {type || "No info"}
            </CharacterInfoExpressionValue>
          </ResidentInfoWrappter>
          <ResidentInfoWrappter>
            <CharacterInfoExpression>Gender: </CharacterInfoExpression>
            <CharacterInfoExpressionValue>
              {gender}
            </CharacterInfoExpressionValue>
          </ResidentInfoWrappter>
          <ResidentInfoWrappter>
            <CharacterInfoExpression>Origin</CharacterInfoExpression>
            <CharacterInfoExpressionValue>
              {origin}
            </CharacterInfoExpressionValue>
          </ResidentInfoWrappter>
        </CharacterInfo>
      </StyledContainer>
    </Wrapper>
  );
}

export default Card;
