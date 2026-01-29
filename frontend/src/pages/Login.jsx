import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      // ✅ Save token + user in AuthContext
      login(res.data.token, res.data.user);

      // ✅ Redirect after login
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={submit} style={styles.card}>
        <h2 style={styles.title}>🔐 Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

/* ✅ Built-in styling (no CSS file needed) */
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #05051a, #000)"
  },
  card: {
    width: "340px",
    padding: "32px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 25px rgba(0,153,255,0.4)",
    textAlign: "center"
  },
  title: {
    marginBottom: "22px",
    color: "#00e5ff"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    fontSize: "15px"
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "14px",
    border: "none",
    background: "#00bfff",
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
  },
  error: {
    color: "#ff6b6b",
    marginBottom: "10px",
    fontSize: "14px"
  }
};
