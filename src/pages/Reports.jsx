
import { useState } from "react";
import { Download, FileText } from "lucide-react";

function Reports() {
  const [topic, setTopic] = useState("Temperature");
  const [period, setPeriod] = useState("Monthly");

  function handleGenerate() {
    window.alert(
      `Demo report selected: ${topic} - ${period}. Report generation will be connected later.`
    );
  }

  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>Climate Reports</h1>
        <p>Prepare climate information reports.</p>
      </div>

      <section className="settings-card">
        <FileText size={30} />
        <h2>Generate a report</h2>

        <label>Climate topic</label>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>Temperature</option>
          <option>Rainfall</option>
          <option>Weather</option>
          <option>Climate trends</option>
        </select>

        <label>Reporting period</label>
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option>Monthly</option>
          <option>Annual</option>
          <option>Historical</option>
        </select>

        <button className="primary-button" onClick={handleGenerate}>
          <Download size={18} /> Prepare report
        </button>
      </section>
    </div>
  );
}

export default Reports;
