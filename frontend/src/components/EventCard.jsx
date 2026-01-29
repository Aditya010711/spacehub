import "./../styles/cards.css";

export default function EventCard({ event }) {
  const dateStr = new Date(event.date).toLocaleDateString();
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{event.title}</div>
        <div className="card-subtitle">{event.type} • {dateStr} • {event.visibility}</div>
        <p style={{fontSize:14, color:"#cfe0ff"}}>{event.description}</p>
        {event.sourceUrl && (
          <div className="card-actions">
            <a href={event.sourceUrl} target="_blank" rel="noreferrer">Source</a>
          </div>
        )}
      </div>
    </div>
  );
}