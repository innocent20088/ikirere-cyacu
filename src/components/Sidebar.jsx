
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CloudSun,
  CloudRain,
  Thermometer,
  Map,
  Sprout,
  Bell,
  BookOpen,
  FileText,
  Settings,
  X
} from "lucide-react";

const navigation = [
  { label: "Dashboard", path: "/app", icon: LayoutDashboard, end: true },
  { label: "Weather", path: "/app/weather", icon: CloudSun },
  { label: "Rainfall", path: "/app/rainfall", icon: CloudRain },
  { label: "Temperature", path: "/app/temperature", icon: Thermometer },
  { label: "Rwanda Map", path: "/app/rwanda-map", icon: Map },
  { label: "Agriculture", path: "/app/agriculture", icon: Sprout },
  { label: "Alerts", path: "/app/alerts", icon: Bell },
  { label: "Education", path: "/app/education", icon: BookOpen },
  { label: "Reports", path: "/app/reports", icon: FileText },
  { label: "Settings", path: "/app/settings", icon: Settings }
];

function Sidebar({ onClose }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-symbol">☀</div>
        <div>
          <strong>IKIRERE CYACU</strong>
          <small>Rwanda Climate Platform</small>
        </div>

        {onClose && (
          <button onClick={onClose} className="sidebar-close">
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="sidebar-navigation">
        <span className="sidebar-label">MAIN MENU</span>

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={onClose}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-message">
          <CloudSun size={25} />
          <strong>Climate awareness</strong>
          <p>Understanding our climate helps protect our future.</p>
        </div>
        <small>IKIRERE CYACU © 2026</small>
      </div>
    </aside>
  );
}

export default Sidebar;
