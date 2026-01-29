import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/?limit=12"
      );
      const data = await res.json();
      setEvents(data.results || []);
    } catch (err) {
      console.error("News Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h2 style={{ color: "white", padding: 40, textAlign: "center" }}>
        Loading Space Events...
      </h2>
    );
  }

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>🛰 Live Astronomical & Space Events</h1>

      {/* ================= VIDEO SECTION (FIXED) ================= */}
      <div style={styles.videoBox}>
        <h2 style={styles.videoTitle}>🌌 Featured Astronomical Videos</h2>

        <div style={styles.videoGrid}>
          {/* NASA Documentary */}
          <iframe
            src="https://www.youtube.com/embed/WeA7edXsU40"
            title="NASA Space Documentary"
            allowFullScreen
            style={styles.video}
          ></iframe>

          {/* James Webb Telescope */}
          <iframe
            src="https://www.youtube.com/embed/4P8fKd0IVOs"
            title="James Webb Telescope Discoveries"
            allowFullScreen
            style={styles.video}
          ></iframe>

          {/* Black Holes Explained */}
          <iframe
            src="https://www.youtube.com/embed/e-P5IFTqB98"
            title="Black Holes Explained"
            allowFullScreen
            style={styles.video}
          ></iframe>
        </div>

        <p style={styles.note}>
          These videos are official, recorded, and embeddable — no live stream
          issues.
        </p>
      </div>

      {/* ================= NEWS SECTION (UNCHANGED) ================= */}
      <h2 style={styles.subHeading}>🚀 Latest Space & ISRO News</h2>

      <div style={styles.grid}>
        {events.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image_url} alt="" style={styles.cardImg} />

            <h3 style={styles.cardTitle}>{item.title}</h3>

            <p style={styles.cardText}>
              {item.summary.slice(0, 160)}...
            </p>

            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              style={styles.readBtn}
            >
              Read Full Article →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0a0a0a, #000)",
    color: "white",
    padding: "40px",
  },

  heading: {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "40px",
  },

  videoBox: {
    maxWidth: "1200px",
    margin: "auto",
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "18px",
    marginBottom: "70px",
    backdropFilter: "blur(10px)",
  },

  videoTitle: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "26px",
  },

  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px",
  },

  video: {
    width: "100%",
    height: "220px",
    borderRadius: "14px",
    border: "none",
    background: "#000",
    boxShadow: "0 0 20px rgba(255,255,255,0.15)",
  },

  note: {
    marginTop: "20px",
    textAlign: "center",
    opacity: 0.8,
    fontSize: "14px",
  },

  subHeading: {
    marginBottom: "30px",
    fontSize: "28px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "18px",
    backdropFilter: "blur(10px)",
  },

  cardImg: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "12px",
  },

  cardTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },

  cardText: {
    opacity: 0.85,
    fontSize: "15px",
    marginBottom: "12px",
  },

  readBtn: {
    color: "#ff2b6a",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
