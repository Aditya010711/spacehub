const API = import.meta.env.VITE_API_URL;

export async function sendMessage(input) {
  const res = await fetch(`${API}/api/spacebot/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });

  if (!res.ok) throw new Error("Server not responding");
  return await res.json();
}
