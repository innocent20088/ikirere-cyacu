
import { AlertTriangle, Info, ShieldAlert } from "lucide-react";

function AlertCard({
  title,
  description,
  location,
  date,
  severity = "info"
}) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    critical: ShieldAlert
  };

  const Icon = icons[severity] || Info;

  return (
    <article className={`alert-card alert-${severity}`}>
      <div className="alert-icon">
        <Icon size={22} />
      </div>

      <div className="alert-content">
        <div className="alert-heading">
          <h3>{title}</h3>
          <span>{severity}</span>
        </div>

        <p>{description}</p>

        <div className="alert-meta">
          <span>{location}</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
}

export default AlertCard;
