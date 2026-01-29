import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { downloadFullNovel } from "../../utils/downloadFullNovel";

export default function ChapterLayout({
  title,
  children,
  prevLink,
  nextLink,
}) {
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      setProgress((scrollTop / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        ...styles.page,
        background: dark
          ? "radial-gradient(circle at top, #111 10%, #000 70%)"
          : "#f4f4f4",
        color: dark ? "#fff" : "#111",
      }}
    >
      {/* ✅ PROGRESS BAR */}
      <div style={styles.progressWrapper}>
        <div
          style={{
            ...styles.progressBar,
            width: `${progress}%`,
          }}
        />
      </div>

      {/* ✅ DARK / LIGHT MODE BUTTON */}
      <div style={styles.modeWrapper}>
        <button
          onClick={() => setDark(!dark)}
          style={{
            ...styles.modeBtn,
            background: dark ? "#fff" : "#000",
            color: dark ? "#000" : "#fff",
          }}
        >
          {dark ? "🌙 Dark Mode" : "☀ Light Mode"}
        </button>
      </div>

      {/* ✅ CONTENT */}
      <div style={styles.container}>
        {/* ✅ DOWNLOAD FULL NOVEL BUTTON */}
        <button
          onClick={downloadFullNovel}
          style={styles.downloadBtn}
        >
          📘 Download FULL Novel (PDF)
        </button>

        <h1 style={styles.heading}>{title}</h1>

        <div style={styles.content}>{children}</div>

        <div style={styles.nav}>
          {prevLink && (
            <Link to={prevLink} style={styles.navBtn}>
              ⬅ Previous
            </Link>
          )}
          {nextLink && (
            <Link to={nextLink} style={styles.navBtn}>
              Next ➡
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    paddingBottom: "60px",
    transition: "0.3s",
  },

  progressWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "6px",
    width: "100%",
    background: "#222",
    zIndex: 1000,
  },

  progressBar: {
    height: "100%",
    background: "linear-gradient(90deg, #ff2b6a, #ff8fab)",
    transition: "width 0.2s",
  },

  modeWrapper: {
    position: "fixed",
    top: "90px",
    right: "30px",
    zIndex: 999,
  },

  modeBtn: {
    border: "none",
    padding: "10px 18px",
    borderRadius: "22px",
    cursor: "pointer",
    fontSize: "14px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  },

  container: {
    maxWidth: "850px",
    margin: "160px auto 0",
    padding: "0 20px",
    textAlign: "center",
  },

  downloadBtn: {
    marginBottom: "30px",
    padding: "12px 22px",
    background: "linear-gradient(135deg, #6366f1, #9333ea)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "15px",
    boxShadow: "0 6px 25px rgba(99,102,241,0.4)",
  },

  heading: {
    fontSize: "42px",
    marginBottom: "40px",
    letterSpacing: "1px",
  },

  content: {
    textAlign: "left",
    fontSize: "18px",
    lineHeight: "1.9",
    background: "rgba(255,255,255,0.05)",
    padding: "35px",
    borderRadius: "18px",
    backdropFilter: "blur(10px)",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
    flexWrap: "wrap",
    gap: "16px",
  },

  navBtn: {
    textDecoration: "none",
    background: "#ff2b6a",
    color: "white",
    padding: "12px 22px",
    borderRadius: "10px",
    fontSize: "15px",
  },
};
