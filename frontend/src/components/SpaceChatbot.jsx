import { useState } from "react";
import { sendMessage } from "../services/chatbotApi";

export default function SpaceChatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "🌌 Hi! Ask me anything about space." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const data = await sendMessage(input);
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Server not responding" },
      ]);
    }
  };

  return (
    <div style={styles.box}>
      <h3>🤖 SpaceHub Chatbot</h3>

      <div style={styles.chat}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.from === "user" ? "right" : "left",
              margin: "6px 0",
            }}
          >
            <span
              style={{
                background: m.from === "user" ? "#ff2b6a" : "#333",
                color: "white",
                padding: "6px 10px",
                borderRadius: "10px",
                display: "inline-block",
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div style={styles.inputRow}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about space..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.btn}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  box: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "320px",
    background: "#000",
    border: "1px solid #333",
    borderRadius: "12px",
    padding: "10px",
    color: "white",
    zIndex: 9999,
  },
  chat: {
    height: "200px",
    overflowY: "auto",
    marginBottom: "8px",
  },
  inputRow: {
    display: "flex",
    gap: "6px",
  },
  input: {
    flex: 1,
    padding: "6px",
    borderRadius: "6px",
    border: "none",
  },
  btn: {
    background: "#ff2b6a",
    border: "none",
    color: "white",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
