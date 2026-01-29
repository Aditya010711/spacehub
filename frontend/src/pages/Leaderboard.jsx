export default function Leaderboard() {
  const data = JSON.parse(localStorage.getItem("leaderboard")) || [];

  return (
    <div style={{ color: "white", padding: "40px" }}>
      <h1>🏆 Leaderboard</h1>
      {data.map((d, i) => (
        <p key={i}>
          Player {i + 1} — Score: {d.score}, Coins: {d.coins}
        </p>
      ))}
    </div>
  );
}
