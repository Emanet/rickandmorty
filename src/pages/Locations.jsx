import useLocations from "../hooks/useLocations";
import { useEffect, useState } from "react";
import React from "react";
import {
  Title,
  Wrapper,
  LocationsCard,
  StyledButton,
  StyledImage,
  LocationCardInfo,
  LocationCardRows,
  Pagination,
} from "./styles";

function Locations() {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const locations = useLocations(currentPage);
  useEffect(() => {
    locations.info.pages && setPageCount(locations.info.pages);
  }, [locations]);
  return (
    <>
      <Title>Rick and Morty Locations</Title>
      <Wrapper>
        {locations.results.map((item) => {
          return (
            <LocationsCard to={"/residents/" + item.id} key={item.id}>
              <StyledImage src="/assets/location.png" alt="lasdjlasdkljasd" />
              <LocationCardInfo>
                <LocationCardRows>
                  <strong>Type: </strong> <p>{item.type}</p>
                </LocationCardRows>
                <LocationCardRows>
                  <strong>Name: </strong> <p>{item.name}</p>
                </LocationCardRows>
                <LocationCardRows>
                  <strong>Resident Count: </strong>{" "}
                  <p>{item.residents.length}</p>
                </LocationCardRows>
              </LocationCardInfo>
            </LocationsCard>
          );
        })}
      </Wrapper>
      <Pagination>
        {[...Array(pageCount).keys()].map((i) => {
          console.log(pageCount + "pageCount");
          return (
            <StyledButton onClick={() => setCurrentPage(i + 1)} id={i} key={i}>
              {i + 1}
            </StyledButton>
          );
        })}
      </Pagination>
    </>
  );
}

export default Locations;
