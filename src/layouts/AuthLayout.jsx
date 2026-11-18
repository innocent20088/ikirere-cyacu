
import { Outlet, Link } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <header className="auth-header">
        <Link to="/" className="brand">
          <span className="brand-icon">☀</span>
          <span>IKIRERE CYACU</span>
        </Link>
      </header>

      <main className="auth-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
