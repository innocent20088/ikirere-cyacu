
import ClimateChart from "../components/ClimateChart";
import DistrictSelector from "../components/DistrictSelector";
import { temperatureData } from "../data/sampleClimate";
import { useState } from "react";

function Temperature() {
  const [location, setLocation] = useState({
    province: "Kigali City",
    district: "Gasabo"
  });

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <h1>Temperature Information</h1>
          <p>Explore temperature patterns and historical trends.</p>
        </div>
        <DistrictSelector onLocationChange={setLocation} />
      </div>

      <p className="sample-notice">
        Illustrative temperature data, not official observations.
      </p>

      <ClimateChart
        data={temperatureData}
        dataKey="temperature"
        title={`Temperature in ${location.district}`}
        color="#e58a28"
        unit="°C"
      />
    </div>
  );
}

export default Temperature;
