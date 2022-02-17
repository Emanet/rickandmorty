import { useParams } from "react-router-dom";
import useResidents from "../hooks/useResidents";
import Card from "../components/Card/Card";
import { ResidentCards, StyledLink, GetBackHomeButton } from "./styles";
function Residents() {
  const { location_id } = useParams();
  console.log(location_id);
  const residents = useResidents(location_id);
  return (
    <>
      <ResidentCards>
        {residents.map((item) => (
          <Card
            name={item.name}
            image={item.image}
            species={item.species}
            type={item.type}
            gender={item.gender}
            origin={item.origin.name}
            status={item.status}
          />
        ))}
      </ResidentCards>
      <StyledLink href="/">
        <GetBackHomeButton>Get back to locations.</GetBackHomeButton>
      </StyledLink>
    </>
  );
}

export default Residents;
