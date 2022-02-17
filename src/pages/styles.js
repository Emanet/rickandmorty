import { Link } from "react-router-dom";
import styled from "styled-components";

//Locations Cards

export const Title = styled.h1`
  text-align: center;
  color: #f1e0ac;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const LocationsCard = styled(Link)`
  display: flex;
  background: #98b4aa;
  width: 23em;
  height: 15em;
  text-align: center;
  flex-direction: column;
  margin: 1em;
  text-decoration: none;
  color: black;
  border-radius: 10%;
`;
export const LocationCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 3em;
`;
export const LocationCardRows = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: break-spaces;
`;
export const StyledButton = styled.button`
  margin: 1em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  border: none;
`;
export const StyledImage = styled.img`
  width: 3em;
  margin: 0 auto;
  margin-top: 1em;
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;

// Resident Cards
export const ResidentCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledLink = styled.a`
  text-decoration: none;
`;
export const GetBackHomeButton = styled.button`
  display: flex;
  margin: 0 auto;
`;
