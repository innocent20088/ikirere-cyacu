
import { CloudSun, Droplets, Wind } from "lucide-react";

function WeatherCard({
  location = "Rwanda",
  temperature = "--",
  condition = "No data available",
  humidity = "--",
  wind = "--"
}) {
  return (
    <article className="weather-card">
      <div className="weather-card-heading">
        <div>
          <span className="card-label">WEATHER OVERVIEW</span>
          <h3>{location}</h3>
        </div>
        <CloudSun size={36} className="weather-icon" />
      </div>

      <div className="weather-temperature">
        {temperature}
        <span>°C</span>
      </div>

      <p className="weather-condition">{condition}</p>

      <div className="weather-details">
        <div>
          <Droplets size={17} />
          <span>Humidity: {humidity}</span>
        </div>
        <div>
          <Wind size={17} />
          <span>Wind: {wind}</span>
        </div>
      </div>
    </article>
  );
}

export default WeatherCard;
