
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
  Settings
} from "lucide-react";

export const navigation = [
  { label: "Dashboard", path: "/app", icon: LayoutDashboard },
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
