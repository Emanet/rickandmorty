import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;
export const DeadStatus = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  margin-left: 11em;
  margin-top: 4px;
`;
export const AliveStatus = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  margin-left: 11em;
  margin-top: 4px;
`;
export const UnknownStatus = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  position: absolute;
  margin-left: 13em;
  margin-top: 4px;
`;

export const StyledContainer = styled.div`
  background-color: #3c3e44;
  border-radius: 50px;
  max-width: 60em;
  display: inline-flex;
  margin: 1em;
  width: 31em;
  img {
    height: 192px;
    border-top-left-radius: 26%;
    border-bottom-left-radius: 26%;
  }
  .character-name {
    color: white;
    font-size: 17px;
    grid-column: 1/3;
  }
  .character-img {
    display: flex;
  }
  .character-info {
    margin-top: -10px;
    margin-left: 1em;
    font-size: 14px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: 1em;
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
    height: 32em;
    margin: 1 auto;
    .character-info {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .character-img {
      justify-content: center;
      margin: 1em;
    }
    img {
      border-radius: 50%;
    }
  }
`;
