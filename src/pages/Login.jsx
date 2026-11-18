
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setError("Demo mode: real login will be connected to the backend later.");
  }

  return (
    <section className="auth-card">
      <h1>Welcome Back</h1>
      <p>Login to IKIRERE CYACU</p>

      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          required
        />

        {error && <p className="form-message">{error}</p>}

        <button type="submit" className="primary-button">
          Login
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>

      <button
        className="text-button"
        onClick={() => navigate("/app")}
      >
        Preview dashboard without login
      </button>
    </section>
  );
}

export default Login;
