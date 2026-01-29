import ChapterLayout from "./ChapterLayout";

export default function Chapter7() {
  return (

    <ChapterLayout
              title="Chapter 7: The Arrow of Time"
              prevLink="/novel/chapter-6"
              nextLink="/novel/chapter-8"
            >
    <div style={styles.container}>
      <h1 style={styles.title}>
        
      </h1>

      <p style={styles.text}>
        Time appears to flow in one direction — from the past to the future.
        This one-way direction of time is known as the arrow of time.
      </p>

      <p style={styles.text}>
        The fundamental laws of physics do not distinguish between past and
        future. Yet our everyday experience clearly shows a difference.
      </p>

      <p style={styles.text}>
        A broken cup does not reassemble itself, and memories exist only of
        the past, never of the future.
      </p>

      <p style={styles.text}>
        The key to understanding this lies in the concept of entropy.
        Entropy measures the amount of disorder in a system.
      </p>

      <p style={styles.text}>
        The second law of thermodynamics states that entropy tends to
        increase over time in an isolated system.
      </p>

      <p style={styles.text}>
        This increase in entropy defines the thermodynamic arrow of time.
        It explains why processes appear irreversible.
      </p>

      <p style={styles.text}>
        There are other arrows of time as well, including the psychological
        arrow, which reflects how humans perceive time.
      </p>

      <p style={styles.text}>
        We remember the past because the past had lower entropy than the
        present. Our brains store information in an orderly way.
      </p>

      <p style={styles.text}>
        Another arrow is the cosmological arrow of time, which points in the
        direction of the universe’s expansion.
      </p>

      <p style={styles.text}>
        The universe began in a highly ordered state, and entropy has been
        increasing ever since the Big Bang.
      </p>

      <p style={styles.text}>
        Hawking argued that all arrows of time point in the same direction
        because they are tied to the universe’s initial conditions.
      </p>

      <p style={styles.text}>
        If the universe were to stop expanding and begin contracting, it is
        unclear whether entropy would reverse or continue to increase.
      </p>

      <p style={styles.text}>
        Understanding the arrow of time helps explain why the universe looks
        different at different moments.
      </p>

      <p style={styles.text}>
        Time’s direction is not imposed by physics laws, but emerges from the
        universe’s boundary conditions.
      </p>

      <p style={styles.text}>
        This chapter shows that time’s flow is deeply connected to entropy
        and the structure of the universe itself.
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
