
import AlertCard from "../components/AlertCard";

function Alerts() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>Climate Alerts</h1>
        <p>Climate-related notices and information.</p>
      </div>

      <p className="sample-notice">
        The following is demonstration content, not an official weather warning.
      </p>

      <div className="alert-list">
        <AlertCard
          title="Demonstration information notice"
          description="This example shows how climate notices will appear."
          location="Rwanda"
          date="Demo"
          severity="info"
        />
      </div>
    </div>
  );
}

export default Alerts;
