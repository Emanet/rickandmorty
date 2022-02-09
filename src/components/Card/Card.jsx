import React from "react";
import { StyledContainer, Wrapper } from "./styles";
function Card() {
  return (
    <Wrapper className="wrapper">
      <StyledContainer className="container">
        <div className="character-img">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/365.jpeg"
            alt=""
          />
        </div>
        <div className="character-info">
          <h2 className="character-name">Tricia Lange</h2>
          <div className="status">
            <div className="status-code"></div>
            <div className="current-status">
              <p>Alive - Human</p>
            </div>
          </div>
          <div className="location">
            <p className="last-known-location">Last known location</p>
            <p className="location-name">Earth</p>
          </div>
          <div className="firs-seen">
            <p className="first-seen-header">First seen in</p>
            <p className="first-seen-location">The whirly dirly</p>
          </div>
        </div>
      </StyledContainer>
    </Wrapper>
  );
}

export default Card;
