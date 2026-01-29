import ChapterLayout from "./ChapterLayout";
import jsPDF from "jspdf";

export default function Chapter1() {

  // ✅ PDF DOWNLOAD FUNCTION (ADDED ONLY)
  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text("Chapter 1: Our Picture of the Universe", 14, y);
    y += 15;

    doc.setFontSize(12);

    const paragraphs = [
      "Humanity has always wondered about the universe. From ancient civilizations observing stars to modern scientists using telescopes, our understanding of the cosmos has evolved dramatically.",

      "Stephen Hawking begins this chapter by explaining how early models of the universe were deeply connected to religion and philosophy. Ancient Greeks believed in a static, eternal universe, while later thinkers questioned whether the universe had a beginning.",

      "The chapter introduces key ideas such as scientific models, emphasizing that no model is ever absolute truth — it is simply the best explanation based on current evidence.",

      "Hawking encourages readers to see science as a journey of refinement, where old ideas are replaced when better ones emerge. This mindset sets the foundation for understanding the rest of the book."
    ];

    paragraphs.forEach(p => {
      doc.text(p, 14, y, { maxWidth: 180 });
      y += 12;
    });

    doc.save("Chapter-1-Our-Picture-of-the-Universe.pdf");
  };

  return (
    <ChapterLayout
      prevLink="/novel/chapter-12"
      nextLink="/novel/chapter-2"
    >
      <div style={styles.container}>

        {/* ✅ DOWNLOAD BUTTON (ADDED ONLY) */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <button onClick={downloadPDF} style={styles.downloadBtn}>
            📄 Download Chapter as PDF
          </button>
        </div>

        <h1 style={styles.title}>Chapter 1: Our Picture of the Universe</h1>

        <p style={styles.text}>
          Humanity has always wondered about the universe. From ancient civilizations
          observing stars to modern scientists using telescopes, our understanding
          of the cosmos has evolved dramatically.
        </p>

        <p style={styles.text}>
          Stephen Hawking begins this chapter by explaining how early models of the
          universe were deeply connected to religion and philosophy. Ancient Greeks
          believed in a static, eternal universe, while later thinkers questioned
          whether the universe had a beginning.
        </p>

        <p style={styles.text}>
          The chapter introduces key ideas such as scientific models, emphasizing
          that no model is ever absolute truth — it is simply the best explanation
          based on current evidence.
        </p>

        <p style={styles.text}>
          Hawking encourages readers to see science as a journey of refinement,
          where old ideas are replaced when better ones emerge. This mindset sets
          the foundation for understanding the rest of the book.
        </p>

      </div>
    </ChapterLayout>
  );
}

const styles = {
  container: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "50px",
    lineHeight: "1.8",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#ddd",
  },

  // ✅ BUTTON STYLE (ADDED ONLY)
  downloadBtn: {
    background: "#16a34a",
    color: "#fff",
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
