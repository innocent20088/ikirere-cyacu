
import { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import ClimateCard from "../components/ClimateCard";
import ClimateChart from "../components/ClimateChart";
import DistrictSelector from "../components/DistrictSelector";
import AlertCard from "../components/AlertCard";
import { rainfallData, temperatureData } from "../data/sampleClimate";

function Dashboard() {
  const [location, setLocation] = useState({
    province: "Kigali City",
    district: "Gasabo"
  });

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <span className="eyebrow">RWANDA CLIMATE OVERVIEW</span>
          <h1>Climate Dashboard</h1>
          <p>Explore climate information for your selected location.</p>
        </div>

        <DistrictSelector onLocationChange={setLocation} />
      </div>

      <p className="sample-notice">
        Demonstration data only — not official live measurements.
      </p>

      <WeatherCard
        location={location.district}
        temperature="24"
        condition="Sample weather conditions"
        humidity="65%"
        wind="12 km/h"
      />

      <section className="climate-grid">
        <ClimateCard
          title="Temperature"
          value="24"
          unit="°C"
          description="Illustrative average"
        />

        <ClimateCard
          title="Rainfall"
          value="85"
          unit="mm"
          description="Illustrative monthly total"
        />

        <ClimateCard
          title="Humidity"
          value="65"
          unit="%"
          description="Illustrative value"
        />
      </section>

      <section className="charts-grid">
        <ClimateChart
          data={temperatureData}
          dataKey="temperature"
          title="Temperature Trends"
          color="#16a34a"
          unit="°C"
        />

        <ClimateChart
          data={rainfallData}
          dataKey="rainfall"
          title="Rainfall Trends"
          color="#2563eb"
          unit=" mm"
        />
      </section>

      <section className="dashboard-section">
        <h2>Climate Alerts</h2>
        <AlertCard
          title="Sample climate information"
          description="This is a demonstration alert, not an official warning."
          location={location.district}
          date="Demo"
          severity="info"
        />
      </section>
    </div>
  );
}

export default Dashboard;
