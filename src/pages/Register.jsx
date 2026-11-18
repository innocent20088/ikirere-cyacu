
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  function updateField(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Registration interface is ready. Backend connection is pending.");
  }

  return (
    <section className="auth-card">
      <h1>Create Account</h1>
      <p>Join IKIRERE CYACU</p>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Enter your full name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={updateField}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={updateField}
          placeholder="Create a password"
          required
          minLength={8}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={updateField}
          placeholder="Confirm your password"
          required
        />

        {message && <p className="form-message">{message}</p>}

        <button type="submit" className="primary-button">
          Create Account
        </button>
      </form>

      <p>
        Already registered? <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default Register;
