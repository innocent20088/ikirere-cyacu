
import LanguageSwitcher from "../components/LanguageSwitcher";

function Settings() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>Settings</h1>
        <p>Manage your application preferences.</p>
      </div>

      <section className="settings-card">
        <h2>Language preferences</h2>
        <p>Choose your preferred interface language.</p>
        <LanguageSwitcher />
      </section>

      <section className="settings-card">
        <h2>Application information</h2>
        <p>Application: IKIRERE CYACU</p>
        <p>Geographic scope: Rwanda</p>
        <p>Frontend version: 1.0.0</p>
      </section>
    </div>
  );
}

export default Settings;
