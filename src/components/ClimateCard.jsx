
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

function ClimateCard({
  title,
  value = "--",
  unit = "",
  description = "No data available",
  trend = "neutral"
}) {
  const TrendIcon =
    trend === "up"
      ? TrendingUp
      : trend === "down"
      ? TrendingDown
      : Minus;

  return (
    <article className="climate-card">
      <div className="climate-card-top">
        <span>{title}</span>
        <TrendIcon size={20} />
      </div>

      <div className="climate-value">
        {value}
        <small>{unit}</small>
      </div>

      <p>{description}</p>
    </article>
  );
}

export default ClimateCard;
