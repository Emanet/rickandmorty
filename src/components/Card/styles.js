import styled from "styled-components";

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
  width: 610px;
  @media screen and (max-width: 767px) {
    display: inline-flex;
    flex-direction: column;
    width: 12em;
  }
`;

export const CharacterInfo = styled.div`
  margin-top: -10px;
  margin-left: 1em;
  font-size: 14px;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  grid-column-gap: 1em;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const CharacterInfoExpression = styled.p`
  color: #9e9e9e;
  white-space: 1;
`;
export const CharacterInfoExpressionValue = styled.p`
  color: #e6e6e7;
`;
export const CharacterName = styled.div`
  color: white;
  font-size: 17px;
  grid-column: 1/3;
`;
export const CharacterImageContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
    margin: 1em;
  }
`;
export const CharacterImage = styled.img`
  height: 192px;
  border-top-left-radius: 26%;
  border-bottom-left-radius: 26%;
  @media screen and (max-width: 767px) {
    border-radius: 50%;
  }
`;

export const ResidentInfoWrappter = styled.div`
  display: flex;
  white-space: pre-wrap;
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    background-color: #3c3e44;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    margin: 1em auto;
  }
`;
