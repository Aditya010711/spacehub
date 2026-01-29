import { Link } from "react-router-dom";

export default function Novel() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📘 A Brief History of Time</h1>
      <p style={styles.subtitle}>
        By Stephen Hawking — Explained for Curious Minds
      </p>

      <div style={styles.list}>
        {[...Array(12)].map((_, i) => (
          <Link
            key={i}
            to={`/novel/chapter-${i + 1}`}
            style={styles.link}
          >
            Chapter {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "50px",
    textAlign: "center",
  },
  title: {
    fontSize: "38px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: "40px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "300px",
    margin: "auto",
  },
  link: {
    padding: "14px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#fff",
  },
};
