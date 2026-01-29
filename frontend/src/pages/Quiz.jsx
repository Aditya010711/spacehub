import { useEffect, useState } from "react";
import quizQuestions from "../data/quizQuestions";
import { Link } from "react-router-dom";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [coins, setCoins] = useState(0);
  const [time, setTime] = useState(15);
  const [leaderboard, setLeaderboard] = useState([]);

  const question = quizQuestions[index];

  useEffect(() => {
    if (time === 0) nextQuestion();
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const handleAnswer = (option) => {
    if (option === question.answer) {
      setCoins((c) => c + 10);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    setTime(15);
    setIndex((prev) => (prev + 1) % quizQuestions.length);
  };

  const endQuiz = () => {
    setLeaderboard((prev) => [...prev, { score: coins }]);
    setCoins(0);
    setIndex(0);
    setTime(15);
  };

  return (
    <div style={styles.wrapper}>
      <h1>🚀 Space Quiz</h1>

      <div style={styles.card}>
        <h2>{question.question}</h2>

        {question.options.map((opt) => (
          <button
            key={opt}
            style={styles.option}
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}

        <p>⏱ Time Left: {time}s</p>
        <p>🪙 Coins: {coins}</p>

        <button style={styles.endBtn} onClick={endQuiz}>
          End Quiz
        </button>
      </div>

      <div style={styles.leaderboard}>
        <h3>🏆 Leaderboard</h3>
        {leaderboard.map((l, i) => (
          <p key={i}>Player {i + 1}: {l.score} coins</p>
        ))}
      </div>

      <Link to="/">
        <button style={styles.back}>⬅ Back Home</button>
      </Link>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#000",
    color: "white",
    padding: "40px",
    textAlign: "center",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "30px",
    borderRadius: "16px",
    maxWidth: "500px",
    margin: "30px auto",
  },
  option: {
    display: "block",
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
  endBtn: {
    marginTop: "15px",
    padding: "10px 20px",
    background: "#ff2b6a",
    border: "none",
    color: "white",
    borderRadius: "8px",
  },
  leaderboard: {
    marginTop: "40px",
  },
  back: {
    marginTop: "20px",
    padding: "10px 20px",
  },
};
