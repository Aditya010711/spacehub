import { useState } from "react";
import { sendMessage } from "../services/chatbotApi";

export default function SpaceChatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const data = await sendMessage(input);

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: data.reply },
    ]);

    setInput("");
  };

  return (
    <div style={styles.container}>
      <h2>🚀 Space Chatbot</h2>

      <div style={styles.chatBox}>
        {messages.map((m, i) => (
          <div key={i} style={m.sender === "user" ? styles.user : styles.bot}>
            {m.text}
          </div>
        ))}
      </div>

      <div style={styles.inputRow}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about space..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.btn}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  chatBox: {
    height: 300,
    overflowY: "auto",
    background: "#111",
    padding: 10,
    marginBottom: 10,
  },
  user: {
    textAlign: "right",
    color: "#00ffcc",
    marginBottom: 6,
  },
  bot: {
    textAlign: "left",
    color: "#fff",
    marginBottom: 6,
  },
  inputRow: { display: "flex", gap: 8 },
  input: { flex: 1, padding: 8 },
  btn: { padding: "8px 16px" },
};
