import ChapterLayout from "./ChapterLayout";


export default function Chapter12() {
  return (
    <ChapterLayout
              title="Chapter 12: Conclusion — The Future of Humanity"
              prevLink="/novel/chapter-11"
              nextLink="/novel/chapter-1"
            >
    <div style={styles.container}>
      <h1 style={styles.title}>
      </h1>

      <p style={styles.text}>
        In this final chapter, Stephen Hawking reflects on what our discoveries
        about the universe mean for humanity itself.
      </p>

      <p style={styles.text}>
        Over centuries, humans have moved from believing the Earth was the
        center of the universe to understanding that we are part of a vast,
        expanding cosmos.
      </p>

      <p style={styles.text}>
        This shift in perspective has not made humanity insignificant; instead,
        it has shown how remarkable our ability to understand the universe
        truly is.
      </p>

      <p style={styles.text}>
        The laws of physics reveal that the universe follows precise rules, yet
        those rules allow for complexity, stars, planets, life, and conscious
        beings.
      </p>

      <p style={styles.text}>
        One of the most profound questions Hawking raises is whether the
        universe has a purpose.
      </p>

      <p style={styles.text}>
        Science does not answer questions of meaning directly, but it shows
        that the universe is understandable and not governed by chaos alone.
      </p>

      <p style={styles.text}>
        The search for a complete theory of physics is, in a way, the search
        for understanding our own origins.
      </p>

      <p style={styles.text}>
        If humanity discovers a theory of everything, it would not only
        explain how the universe works but also why it exists at all.
      </p>

      <p style={styles.text}>
        Hawking imagines a future where such knowledge is shared and
        accessible, not limited to scientists alone.
      </p>

      <p style={styles.text}>
        Understanding the universe empowers humanity to face its challenges
        with wisdom rather than fear.
      </p>

      <p style={styles.text}>
        However, scientific knowledge also brings responsibility.
      </p>

      <p style={styles.text}>
        Technology can either enhance life or threaten it, depending on how
        it is used.
      </p>

      <p style={styles.text}>
        Hawking warns that survival may eventually require humanity to expand
        beyond Earth.
      </p>

      <p style={styles.text}>
        Space exploration is not just curiosity; it may be essential for the
        long-term survival of our species.
      </p>

      <p style={styles.text}>
        At the same time, humanity must protect its home planet and use
        science to improve life for everyone.
      </p>

      <p style={styles.text}>
        The universe does not care about human existence, yet humans are able
        to care about the universe.
      </p>

      <p style={styles.text}>
        This ability to question, explore, and understand is what makes us
        unique.
      </p>

      <p style={styles.text}>
        Hawking concludes with a powerful idea: even though the universe is
        vast and ancient, human curiosity gives it meaning.
      </p>

      <p style={styles.text}>
        As long as we continue to ask questions and seek answers, the future
        of humanity remains full of hope.
      </p>
    </div>
    </ChapterLayout>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "50px",
    lineHeight: "1.9",
  },
  title: {
    textAlign: "center",
    marginBottom: "35px",
    fontSize: "32px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "22px",
    color: "#ddd",
  },
};
