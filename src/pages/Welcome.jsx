
import { Link } from "react-router-dom";
import { CloudSun, CloudRain, Thermometer, ArrowRight } from "lucide-react";

function Welcome() {
  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <div className="brand">
          <span className="brand-symbol">☀</span>
          <strong>IKIRERE CYACU</strong>
        </div>

        <nav>
          <a href="#about">About</a>
          <Link to="/login">Login</Link>
          <Link to="/register" className="primary-button">Register</Link>
        </nav>
      </header>

      <section className="welcome-hero">
        <div className="welcome-hero-content">
          <span className="eyebrow">RWANDA CLIMATE INFORMATION</span>

          <h1>Understand Our Climate. Protect Our Future.</h1>

          <p>
            Discover weather information, rainfall patterns, temperature
            trends and climate education for Rwanda.
          </p>

          <div className="welcome-actions">
            <Link to="/app" className="primary-button">
              Explore Dashboard <ArrowRight size={18} />
            </Link>

            <Link to="/register" className="secondary-button">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <section className="welcome-features" id="about">
        <h2>Explore Climate Information</h2>

        <div className="feature-grid">
          <article>
            <CloudSun size={32} />
            <h3>Weather</h3>
            <p>Explore available weather information across Rwanda.</p>
          </article>

          <article>
            <CloudRain size={32} />
            <h3>Rainfall</h3>
            <p>Understand rainfall measurements and patterns.</p>
          </article>

          <article>
            <Thermometer size={32} />
            <h3>Temperature</h3>
            <p>Explore temperature information and historical trends.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        IKIRERE CYACU © 2026 — Rwanda Climate Information Platform
      </footer>
    </div>
  );
}

export default Welcome;
