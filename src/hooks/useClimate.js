
import { useEffect, useState } from "react";
import climateService from "../services/climateService";

export function useClimate() {
  const [temperature, setTemperature] = useState([]);
  const [rainfall, setRainfall] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadClimate() {
      try {
        setLoading(true);
        setError(null);

        const [temperatureResult, rainfallResult] =
          await Promise.all([
            climateService.getTemperature(),
            climateService.getRainfall()
          ]);

        if (isMounted) {
          setTemperature(temperatureResult);
          setRainfall(rainfallResult);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Climate loading error:", err);
          setError("Unable to load climate information.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadClimate();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    temperature,
    rainfall,
    loading,
    error
  };
}

export default useClimate;
