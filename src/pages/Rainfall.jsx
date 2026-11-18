
import { useState } from "react";
import ClimateChart from "../components/ClimateChart";
import DistrictSelector from "../components/DistrictSelector";
import { rainfallData } from "../data/sampleClimate";

function Rainfall() {
  const [location, setLocation] = useState({
    province: "Kigali City",
    district: "Gasabo"
  });

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <h1>Rainfall Information</h1>
          <p>Explore rainfall patterns and historical trends.</p>
        </div>
        <DistrictSelector onLocationChange={setLocation} />
      </div>

      <p className="sample-notice">
        Illustrative rainfall data, not official observations.
      </p>

      <ClimateChart
        data={rainfallData}
        dataKey="rainfall"
        title={`Rainfall in ${location.district}`}
        color="#2563eb"
        unit=" mm"
      />
    </div>
  );
}

export default Rainfall;
