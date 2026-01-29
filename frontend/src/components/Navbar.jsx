import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [openNovel, setOpenNovel] = useState(false);

  const profileImage =
    user?.profileImage ||
    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>🚀 SPACEHUB</Link>

      <div style={styles.links}>
        <Link to="/planets" style={styles.link}>Planets</Link>
        <Link to="/events" style={styles.link}>🛰 Events</Link>
        <Link to="/map" style={styles.link}>🌍 Map</Link>
        <Link to="/chatbot" style={styles.link}>🤖 Space Chatbot</Link>


        <div style={styles.dropdown}>
          <button
            style={styles.dropBtn}
            onClick={() => setOpenNovel(!openNovel)}
          >
            Novel ⌄
          </button>

          {openNovel && (
            <div style={styles.menu}>
              <Link
                to="/novel"
                style={styles.menuItem}
                onClick={() => setOpenNovel(false)}
              >
                📘 A Brief History of Time
              </Link>
            </div>
          )}
        </div>

        {user ? (
          <>
            <Link to="/profile">
              <img src={profileImage} alt="profile" style={styles.avatar} />
            </Link>
            <button onClick={logout} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

/* styles unchanged */



/* ================= STYLES ================= */

const styles = {
  nav: {
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    background: "#000",
    borderBottom: "1px solid #222",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  logo: { color: "white", fontSize: "22px", textDecoration: "none" },
  links: { display: "flex", alignItems: "center", gap: "22px" },
  link: { color: "white", textDecoration: "none", fontSize: "16px" },
  dropdown: { position: "relative" },
  dropBtn: {
    background: "transparent",
    color: "white",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  menu: {
    position: "absolute",
    top: "32px",
    right: 0,
    background: "#111",
    borderRadius: "8px",
    minWidth: "240px",
  },
  menuItem: {
    display: "block",
    padding: "12px 16px",
    color: "white",
    textDecoration: "none",
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "2px solid #ff2b6a",
  },
  logoutBtn: {
    background: "#ff2b6a",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },
};
