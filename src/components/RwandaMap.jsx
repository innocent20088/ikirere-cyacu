
import { useState } from "react";
import { districts } from "../data/districts";

function RwandaMap({ onDistrictSelect }) {
  const [selectedProvince, setSelectedProvince] = useState("Kigali City");
  const [selectedDistrict, setSelectedDistrict] = useState("Gasabo");

  function selectDistrict(event) {
    const value = event.target.value;

    setSelectedDistrict(value);

    onDistrictSelect?.({
      province: selectedProvince,
      district: value
    });
  }

  function selectProvince(event) {
    const value = event.target.value;
    const firstDistrict = districts[value]?.[0] || "";

    setSelectedProvince(value);
    setSelectedDistrict(firstDistrict);

    onDistrictSelect?.({
      province: value,
      district: firstDistrict
    });
  }

  return (
    <section className="rwanda-map-card">
      <div className="map-placeholder">
        <span className="map-symbol">🇷🇼</span>
        <h3>Explore Rwanda</h3>
        <p>
          Select a province and district to explore available climate
          information.
        </p>
      </div>

      <div className="map-controls">
        <label>
          Province
          <select value={selectedProvince} onChange={selectProvince}>
            {Object.keys(districts).map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </label>

        <label>
          District
          <select value={selectedDistrict} onChange={selectDistrict}>
            {(districts[selectedProvince] || []).map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="selected-location">
        Selected: {selectedDistrict}, {selectedProvince}
      </p>
    </section>
  );
}

export default RwandaMap;
