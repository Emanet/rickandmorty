import { useEffect, useState } from "react";

function useLocations(index) {
  const [launches, setLaunches] = useState({ info: {}, results: [] });
  const LOCATIONS = `
  {
    locations(page:${index}) {
      info{pages}
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;
  console.log(launches);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LOCATIONS }),
    })
      .then((response) => response.json())
      .then((data) => setLaunches(data.data.locations));
  }, [index]);
  console.log("item" + index);
  return launches;
}

export default useLocations;
