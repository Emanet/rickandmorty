import useLocations from "../hooks/useLocations";
import { useEffect, useState } from "react";
import React from "react";

function Locations() {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const locations = useLocations(currentPage);
  useEffect(() => {
    locations.info.pages && setPageCount(locations.info.pages);
  }, [locations]);
  return (
    <div>
      {locations.results.map((item) => {
        return (
          <div
            style={{
              display: "inline-block",
              background: "gray",
              margin: "1em",
            }}
            key={item.id}
          >
            <h3>Location Info</h3>
            <div>
              {"Name: " + item.name}
              <br />
              {"Type: " + item.type}
            </div>
          </div>
        );
      })}
      {[...Array(pageCount).keys()].map((i) => {
        return (
          <button onClick={() => setCurrentPage(i + 1)} id={i} key={i}>
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}

export default Locations;
