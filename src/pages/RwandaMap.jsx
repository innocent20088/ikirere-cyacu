
import { useState } from "react";
import RwandaMapComponent from "../components/RwandaMap";

function RwandaMapPage() {
  const [location, setLocation] = useState(null);

  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>ikarita y'u rwanda</h1>
        <p>Explore climate information by province and district.</p>
      </div>

      <RwandaMapComponent onDistrictSelect={setLocation} />

      {location && (
        <div className="location-result">
          <h3>Selected location</h3>
          <p>{location.district}, {location.province}</p>
        </div>
      )}
    </div>
  );
}

export default RwandaMapPage;
