import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [email] = useState(user?.email || "");
  const [profileImage, setProfileImage] = useState(user?.profileImage || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /* ================= IMAGE UPLOAD ================= */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result); // base64
    };
    reader.readAsDataURL(file);
  };

  /* ================= SAVE PROFILE ================= */
  const saveProfile = async () => {
    try {
      setLoading(true);
      setMessage("");

      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          profileImage,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save profile");
      }

      const updatedUser = await res.json();

      // ✅ Update context + localStorage
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setMessage("✅ Profile saved successfully");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to save profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>👤 My Profile</h2>

        {/* PROFILE IMAGE */}
        <img
          src={
            profileImage ||
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          }
          alt="Profile"
          style={styles.avatar}
        />

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {/* NAME */}
        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />

        {/* EMAIL (READ ONLY) */}
        <input style={styles.input} value={email} disabled />

        <button onClick={saveProfile} style={styles.button} disabled={loading}>
          {loading ? "Saving..." : "Save Profile"}
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #05051a, #000)",
  },
  card: {
    width: "380px",
    padding: "30px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    textAlign: "center",
    color: "white",
    boxShadow: "0 0 30px rgba(0,153,255,0.4)",
  },
  title: {
    marginBottom: "20px",
    color: "#00e5ff",
  },
  avatar: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #ff2b6a",
    marginBottom: "12px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "12px",
    border: "none",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "14px",
    border: "none",
    background: "#00bfff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  message: {
    marginTop: "12px",
    fontSize: "14px",
  },
};
