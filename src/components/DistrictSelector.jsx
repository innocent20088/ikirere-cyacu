
import { useState } from "react";
import { districts } from "../data/districts";

function DistrictSelector({ onLocationChange }) {
  const [province, setProvince] = useState("Kigali City");
  const [district, setDistrict] = useState("Gasabo");

  const availableDistricts = districts[province] || [];

  function changeProvince(event) {
    const selectedProvince = event.target.value;
    const firstDistrict = districts[selectedProvince]?.[0] || "";

    setProvince(selectedProvince);
    setDistrict(firstDistrict);

    onLocationChange?.({
      province: selectedProvince,
      district: firstDistrict
    });
  }

  function changeDistrict(event) {
    const selectedDistrict = event.target.value;

    setDistrict(selectedDistrict);

    onLocationChange?.({
      province,
      district: selectedDistrict
    });
  }

  return (
    <div className="district-selector">
      <label>
        Province / City
        <select value={province} onChange={changeProvince}>
          {Object.keys(districts).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <label>
        District
        <select value={district} onChange={changeDistrict}>
          {availableDistricts.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default DistrictSelector;
