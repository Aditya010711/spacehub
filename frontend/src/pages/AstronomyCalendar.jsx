import { useState } from "react";
import jsPDF from "jspdf";

/* 🔑 NASA API KEY */
const NASA_KEY = "NVwlkWhLkrsXvjGZwsrqXJLfz67epCRWfLedoVH0";

export default function AstronomyCalendar() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [nasaData, setNasaData] = useState(null);
  const [reminder, setReminder] = useState(
    JSON.parse(localStorage.getItem("astroReminder"))
  );

  /* 🌠 LOCAL EVENTS */
  const events = [
    {
      date: "2025-01-03",
      title: "🌠 Quadrantids Meteor Shower",
      description: "Peak after midnight. Up to 120 meteors/hour.",
    },
    {
      date: "2025-01-11",
      title: "🌕 Full Moon (Wolf Moon)",
      description: "Bright full moon named by Native Americans.",
    },
    {
      date: "2025-01-18",
      title: "🪐 Saturn–Moon Conjunction",
      description: "Saturn appears close to the Moon.",
    },
    {
      date: "2025-01-25",
      title: "🌑 New Moon",
      description: "Best night for deep-sky observation.",
    },
  ];

  /* 🌙 MOON PHASE (simple calculation) */
  const moonPhases = [
    "🌑 New Moon",
    "🌒 Waxing Crescent",
    "🌓 First Quarter",
    "🌔 Waxing Gibbous",
    "🌕 Full Moon",
    "🌖 Waning Gibbous",
    "🌗 Last Quarter",
    "🌘 Waning Crescent",
  ];
  const moonPhase = moonPhases[today.getDate() % 8];

  /* 🪐 PLANET VISIBILITY */
  const planetVisibility = [
    "🟡 Jupiter – Bright all night",
    "🔴 Mars – After midnight",
    "🪐 Saturn – Evening sky",
    "🌕 Venus – Morning star",
  ];

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  /* ⬅➡ MONTH NAVIGATION */
  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedInfo(null);
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedInfo(null);
  };

  /* 📅 DATE CLICK → NASA FETCH */
  const handleDateClick = async (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    const localEvent = events.find((e) => e.date === dateStr);

    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?date=${dateStr}&api_key=${NASA_KEY}`
      );
      const data = await res.json();
      setNasaData(data);
    } catch {
      setNasaData(null);
    }

    setSelectedInfo({
      date: dateStr,
      event: localEvent || null,
    });
  };

  const hasEvent = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.some((e) => e.date === dateStr);
  };

  /* 🔔 SAVE REMINDER */
  const saveReminder = (event) => {
    localStorage.setItem("astroReminder", JSON.stringify(event));
    setReminder(event);
    alert("🔔 Reminder saved!");
  };

  /* 📄 PDF DOWNLOAD */
  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text(
      `Astronomy Events - ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`,
      10,
      10
    );

    events.forEach((e, i) => {
      pdf.text(`${e.date} - ${e.title}`, 10, 20 + i * 10);
    });

    pdf.save("Astronomy_Calendar.pdf");
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>🌌 Astronomical Calendar</h1>

      <div style={styles.card}>
        🌙 Moon Phase Today: <b>{moonPhase}</b>
      </div>

      <div style={styles.card}>
        <h3>🪐 Planet Visibility</h3>
        {planetVisibility.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div style={styles.header}>
        <button onClick={prevMonth}>⬅</button>
        <h2>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={nextMonth}>➡</button>
      </div>

      <div style={styles.grid}>
        {[...Array(firstDay)].map((_, i) => <div key={i} />)}

        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          return (
            <div
              key={day}
              onClick={() => handleDateClick(day)}
              style={{
                ...styles.day,
                ...(hasEvent(day) ? styles.eventDay : {}),
              }}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* 📌 INFO PANEL */}
      {selectedInfo && (
        <div style={styles.infoBox}>
          <h3>📅 {selectedInfo.date}</h3>

          {selectedInfo.event && (
            <>
              <h4>{selectedInfo.event.title}</h4>
              <p>{selectedInfo.event.description}</p>
              <button onClick={() => saveReminder(selectedInfo.event)}>
                🔔 Save Reminder
              </button>
            </>
          )}

          {nasaData && (
            <>
              <h4 style={{ marginTop: "15px" }}>
                🚀 NASA Insight: {nasaData.title}
              </h4>

              {nasaData.media_type === "image" && (
                <img
                  src={nasaData.url}
                  alt="NASA"
                  style={{ width: "100%", borderRadius: "12px" }}
                />
              )}

              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                {nasaData.explanation}
              </p>

              <p style={{ opacity: 0.6 }}>Source: NASA APOD</p>
            </>
          )}

          <button onClick={() => setSelectedInfo(null)} style={styles.closeBtn}>
            Close
          </button>
        </div>
      )}

      {reminder && (
        <div style={styles.card}>
          🔔 Reminder Saved: <b>{reminder.title}</b>
        </div>
      )}

      <button onClick={downloadPDF} style={styles.pdfBtn}>
        📄 Download Monthly PDF
      </button>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "30px",
    background: "linear-gradient(135deg,#050505,#020024,#090979)",
    color: "white",
  },
  title: { textAlign: "center", marginBottom: "20px" },
  header: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    gap: "12px",
    maxWidth: "800px",
    margin: "auto",
  },
  day: {
    height: "75px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  eventDay: {
    background: "linear-gradient(145deg,#ff2b6a,#ff007f)",
    boxShadow: "0 0 15px rgba(255,0,120,0.6)",
  },
  card: {
    maxWidth: "600px",
    margin: "15px auto",
    padding: "15px",
    background: "rgba(0,0,0,0.6)",
    borderRadius: "14px",
    textAlign: "center",
  },
  infoBox: {
    maxWidth: "700px",
    margin: "25px auto",
    padding: "20px",
    background: "rgba(0,0,0,0.85)",
    borderRadius: "16px",
  },
  closeBtn: {
    marginTop: "10px",
    padding: "8px 14px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  pdfBtn: {
    margin: "30px auto",
    display: "block",
    padding: "10px 20px",
    borderRadius: "12px",
    cursor: "pointer",
  },
};
