
import { useState } from "react";
import { Sprout, Droplets, ThermometerSun } from "lucide-react";
import ClimateCard from "../components/ClimateCard";
import DistrictSelector from "../components/DistrictSelector";

function Agriculture() {
  const [location, setLocation] = useState({
    province: "Kigali City",
    district: "Gasabo"
  });

  const tips = [
    {
      icon: Droplets,
      title: "Rainfall",
      description: "Plan planting around seasonal rainfall patterns."
    },
    {
      icon: ThermometerSun,
      title: "Temperature",
      description: "Monitor temperature changes that affect crop growth."
    },
    {
      icon: Sprout,
      title: "Soil",
      description: "Use climate information to protect soil health."
    }
  ];

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <h1>Climate and Agriculture</h1>
          <p>Climate information to support agricultural planning in {location.district}.</p>
        </div>
        <DistrictSelector onLocationChange={setLocation} />
      </div>

      <p className="sample-notice">
        Demonstration information only — not official agricultural advice.
      </p>

      <section className="climate-grid">
        <ClimateCard
          title="Rainfall"
          value="85"
          unit="mm"
          description="Illustrative monthly total"
        />
        <ClimateCard
          title="Temperature"
          value="24"
          unit="°C"
          description="Illustrative average"
        />
        <ClimateCard
          title="Humidity"
          value="65"
          unit="%"
          description="Illustrative value"
        />
      </section>

      <div className="feature-grid">
        {tips.map((tip) => {
          const Icon = tip.icon;

          return (
            <article className="feature-card" key={tip.title}>
              <Icon size={30} />
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Agriculture;
