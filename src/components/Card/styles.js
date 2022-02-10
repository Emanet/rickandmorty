import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledContainer = styled.div`
  background-color: #3c3e44;
  border-radius: 50px;
  max-width: 35em;
  display: inline-flex;
  margin: 1em;
  width: 30em;
  img {
    height: 320px;
    border-radius: 51px;
    max-width: 100%;
  }
  .character-name {
    color: white;
  }
  .character-info {
    margin-left: 2em;
    font-size: 14px;
  }
  .current-status {
    display: inline-block;
    color: #e6e6e7;
  }
  .status-code {
    width: 8px;
    height: 8px;
    background-color: greenyellow;
    display: inline-flex;
  }
  .last-known-location {
    color: #9e9e9e;
  }
  .location-name {
    color: #e6e6e7;
  }
  .first-seen-header {
    color: #9e9e9e;
  }
  .first-seen-location {
    color: #e6e6e7;
  }
  @media screen and (max-width: 767px) {
    background-color: #3c3e44;
    border-radius: 50px;
    max-width: 16em;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin: 1 auto;
  }
`;
