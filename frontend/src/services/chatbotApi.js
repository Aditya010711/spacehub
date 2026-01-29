export async function sendMessage(input) {
  const res = await fetch("http://localhost:5000/api/spacebot/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });

  if (!res.ok) {
    throw new Error("Server not responding");
  }

  return await res.json();
}
