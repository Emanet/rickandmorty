import React from "react";
import { StyledContainer, Wrapper } from "./styles";
function Card({ name, image, species, type, gender, origin, status }) {
  return (
    <Wrapper className="wrapper">
      <StyledContainer className="container">
        <div className="character-img">
          <img src={image} alt="" />
        </div>

        <div className="character-info">
          <div>
            <h2 className="character-name">{name}</h2>
          </div>
          <div className="firs-seen">
            <p className="first-seen-header">Current Status: </p>
            <p className="first-seen-location">{status}</p>
          </div>
          {/*   <div className="status">
            <div className="status-code"></div>
            <div className="current-status">
              <p>Alive - Human</p>
            </div>
          </div> */}
          <div className="location">
            <p className="last-known-location">Species: </p>
            <p className="location-name">{species}</p>
          </div>
          <div className="firs-seen">
            <p className="first-seen-header">Type: </p>
            <p className="first-seen-location">{type || "No info"}</p>
          </div>
          <div className="firs-seen">
            <p className="first-seen-header">Gender: </p>
            <p className="first-seen-location">{gender}</p>
          </div>
          <div className="firs-seen">
            <p className="first-seen-header">Origin</p>
            <p className="first-seen-location">{origin}</p>
          </div>
        </div>
      </StyledContainer>
    </Wrapper>
  );
}

export default Card;
