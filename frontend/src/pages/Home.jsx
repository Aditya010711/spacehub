import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.particles}></div>

      {/* HERO SECTION */}
      <div style={styles.heroWrapper}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>
            OFFERING THE MOST <br /> RIDESHARE OPTIONS TO SPACE
          </h1>

          <p style={styles.subtitle}>
            Explore planets, save favorites, and discover the universe with
            SpaceHub.
          </p>

          <div style={styles.buttons}>
            <Link to="/planets">
              <button style={styles.primaryBtn}>Explore Planets</button>
            </Link>

            <Link to="/signup">
              <button style={styles.secondaryBtn}>Get Started</button>
            </Link>
          </div>
        </div>

        <img
          src="https://pngimg.com/uploads/astronaut/astronaut_PNG26.png"
          alt="astronaut"
          style={styles.astronaut}
        />
      </div>

      {/* FEATURES */}
      <div style={styles.features}>
        <div style={styles.card}>
          <h3>🌍 Planet Data</h3>
          <p>Accurate planetary information with images & facts.</p>
        </div>

        <div style={styles.card}>
          <h3>⭐ Favorites</h3>
          <p>Save your favorite planets in your profile.</p>
        </div>

        <div style={styles.card}>
          <h3>🔐 Secure Login</h3>
          <p>JWT protected authentication system.</p>
        </div>
      </div>

      {/* 🔽 BOTTOM ACTION SECTION (NEW) */}
      <div style={styles.bottomActions}>
        <Link to="/quiz">
          <button style={styles.quizBtn}>🧠 Space Quiz</button>
        </Link>

        <Link to="/calendar">
          <button style={styles.calendarBtn}>📅 Astronomical Calendar</button>
        </Link>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #111 10%, #000 70%)",
    color: "white",
    padding: "40px",
    position: "relative",
    overflow: "hidden",
  },

  particles: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/stardust.png')",
    opacity: 0.25,
    zIndex: 0,
  },

  heroWrapper: {
    position: "relative",
    zIndex: 5,
    marginTop: "120px",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    marginInline: "auto",
    flexWrap: "wrap",
  },

  heroText: { maxWidth: "550px" },

  title: { fontSize: "48px", marginBottom: "20px" },

  subtitle: { fontSize: "18px", opacity: 0.85 },

  buttons: { display: "flex", gap: "20px", marginTop: "30px" },

  primaryBtn: {
    background: "#ff2b6a",
    padding: "14px 30px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid white",
    padding: "14px 30px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },

  astronaut: {
    width: "320px",
    animation: "float 4s ease-in-out infinite",
  },

  features: {
    marginTop: "100px",
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "22px",
    borderRadius: "14px",
    width: "260px",
  },

  /* 🔥 NEW BOTTOM SECTION */
  bottomActions: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    zIndex: 10,
    position: "relative",
  },

  quizBtn: {
    padding: "16px 34px",
    background: "#00c9ff",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },

  calendarBtn: {
    padding: "16px 34px",
    background: "#ffc107",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
};
