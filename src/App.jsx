
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LoadingState from "./components/LoadingState";

const Welcome = lazy(() => import("./pages/Welcome"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Weather = lazy(() => import("./pages/Weather"));
const Rainfall = lazy(() => import("./pages/Rainfall"));
const Temperature = lazy(() => import("./pages/Temperature"));
const RwandaMap = lazy(() => import("./pages/RwandaMap"));
const Agriculture = lazy(() => import("./pages/Agriculture"));
const Alerts = lazy(() => import("./pages/Alerts"));
const Education = lazy(() => import("./pages/Education"));
const Reports = lazy(() => import("./pages/Reports"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Routes>
      {/* Public pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Welcome />} />
      </Route>

      {/* Authentication pages */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Main climate application */}
      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="weather" element={<Weather />} />
        <Route path="rainfall" element={<Rainfall />} />
        <Route path="temperature" element={<Temperature />} />
        <Route path="rwanda-map" element={<RwandaMap />} />
        <Route path="agriculture" element={<Agriculture />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="education" element={<Education />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Unknown pages */}
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
