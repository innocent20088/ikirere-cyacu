
import { useState } from "react";

const defaultLocation = {
  province: "Kigali City",
  district: "Gasabo"
};

export function useLocation() {
  const [location, setLocation] = useState(() => {
    try {
      const saved = localStorage.getItem("ikirere-location");
      return saved ? JSON.parse(saved) : defaultLocation;
    } catch {
      return defaultLocation;
    }
  });

  function updateLocation(newLocation) {
    setLocation(newLocation);
    localStorage.setItem("ikirere-location", JSON.stringify(newLocation));
  }

  return {
    location,
    updateLocation
  };
}

export default useLocation;
