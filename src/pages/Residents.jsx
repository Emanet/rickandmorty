import { useParams } from "react-router-dom";
import useResidents from "../hooks/useResidents";
import Card from "../components/Card/Card";
function Residents() {
  const { location_id } = useParams();
  console.log(location_id);
  const residents = useResidents(location_id);
  return (
    <div>
      {residents.map((item) => (
        <Card
          name={item.name}
          image={item.image}
          species={item.species}
          type={item.type}
          gender={item.gender}
          origin={item.origin.name}
        />
      ))}
    </div>
  );
}

export default Residents;
