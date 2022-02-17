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
  max-width: 60em;
  display: inline-flex;
  margin: 1em;
  width: 36em;
  height: 160px;
  img {
    height: 10em;
    border-top-left-radius: 31%;
    border-bottom-left-radius: 31%;
  }
  .character-name {
    color: white;
    font-size: 17px;
  }
  .character-img {
    display: flex;
  }
  .character-info {
    margin-top: -10px;
    margin-left: 1em;
    font-size: 14px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
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
    white-space: 1;
  }
  .first-seen-location {
    color: #e6e6e7;
  }
  .location {
    display: flex;
  }
  .firs-seen {
    display: flex;
    white-space: pre-wrap;
  }
  @media screen and (max-width: 767px) {
    background-color: #3c3e44;
    border-radius: 50px;
    max-width: 16em;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin: 1 auto;
    .character-info {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
    .character-img {
      justify-content: center;
      margin: 1em;
    }
    img{
      border-radius: 50%;
    }
  }
`;
