
import WeatherCard from "../components/WeatherCard";
import DistrictSelector from "../components/DistrictSelector";
import { useState } from "react";

function Weather() {
  const [location, setLocation] = useState({
    province: "Kigali City",
    district: "Gasabo"
  });

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <h1>Weather Information</h1>
          <p>Weather information for locations across Rwanda.</p>
        </div>
        <DistrictSelector onLocationChange={setLocation} />
      </div>

      <p className="sample-notice">
        Sample information only. Live weather data is not connected.
      </p>

      <WeatherCard
        location={location.district}
        temperature="24"
        condition="Sample conditions"
        humidity="65%"
        wind="12 km/h"
      />
    </div>
  );
}

export default Weather;
