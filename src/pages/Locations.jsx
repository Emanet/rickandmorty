import useLocations from "../hooks/useLocations";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Locations() {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const locations = useLocations(currentPage);
  useEffect(() => {
    locations.info.pages && setPageCount(locations.info.pages);
  }, [locations]);
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Rick and Morty Locations</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {locations.results.map((item) => {
          return (
            <Link
              to={"/residents/" + item.id}
              style={{
                display: "flex",
                background: "#E9DAC1",
                width: "23em",
                height: "15em",
                textAlign: "center",
                flexDirection: "column",
                margin: "1em",
                textDecoration: "none",
                color: "black",
                borderRadius: "10%",
              }}
              key={item.id}
            >
              <img
                style={{ width: "3em", margin: "0 auto", marginTop: "1em" }}
                src="/assets/location.png"
                alt="lasdjlasdkljasd"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "break-spaces",
                  }}
                >
                  <strong>Type: </strong> <p>{item.type}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "break-spaces",
                  }}
                >
                  <strong>Name: </strong> <p>{item.name}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "break-spaces",
                  }}
                >
                  <strong>Resident Count: </strong> <p>100</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {[...Array(pageCount).keys()].map((i) => {
          console.log(pageCount + "pageCount");
          return (
            <button
              style={{
                margin: "1em",
                width: "3em",
                height: "3em",
                borderRadius: "50%",
                border:"none"
              }}
              onClick={() => setCurrentPage(i + 1)}
              id={i}
              key={i}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Locations;
