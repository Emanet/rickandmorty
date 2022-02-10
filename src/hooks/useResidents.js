import { useEffect, useState } from "react";

function useResidents(location_id) {
  const [citizen, setCitizen] = useState([]);
  const GETRESIDENTS = `
  {
    location(id:${location_id}) {
        id
            residents{id image name species type gender origin{name} status}
      }
    }
`;
  console.log(citizen);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GETRESIDENTS }),
    })
      .then((response) => response.json())
      .then((data) => setCitizen(data.data.location.residents));
  }, [location_id]);
  console.log("item" + location_id);
  return citizen;
}

export default useResidents;
