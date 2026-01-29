import ChapterLayout from "./ChapterLayout";

export default function Chapter9() {
  return (

    <ChapterLayout
              title="Chapter 9: The Nature of Time"
              prevLink="/novel/chapter-8"
              nextLink="/novel/chapter-10"
            >
    <div style={styles.container}>
      <h1 style={styles.title}>
      </h1>

      <p style={styles.text}>
        Time is one of the most familiar yet mysterious aspects of our
        existence. We experience it constantly, but understanding its true
        nature has challenged scientists and philosophers for centuries.
      </p>

      <p style={styles.text}>
        In everyday life, time appears to flow in one direction—from the
        past, through the present, and into the future.
      </p>

      <p style={styles.text}>
        This one-way direction of time is known as the arrow of time.
      </p>

      <p style={styles.text}>
        However, the laws of physics at the microscopic level often work the
        same whether time moves forward or backward.
      </p>

      <p style={styles.text}>
        This raises a fundamental question: if physics allows time to run
        both ways, why do we experience it moving only forward?
      </p>

      <p style={styles.text}>
        Stephen Hawking explains that the arrow of time is closely related to
        entropy.
      </p>

      <p style={styles.text}>
        Entropy is a measure of disorder in a system, and it tends to increase
        over time.
      </p>

      <p style={styles.text}>
        For example, a broken cup will never naturally reassemble itself,
        because that would require entropy to decrease.
      </p>

      <p style={styles.text}>
        This increase in entropy defines the thermodynamic arrow of time.
      </p>

      <p style={styles.text}>
        There is also a psychological arrow of time—we remember the past but
        not the future.
      </p>

      <p style={styles.text}>
        Hawking suggests that our brains function in a way that aligns memory
        with increasing entropy.
      </p>

      <p style={styles.text}>
        Another arrow is the cosmological arrow of time, defined by the
        expansion of the universe.
      </p>

      <p style={styles.text}>
        The universe started in a highly ordered state and has been expanding
        and becoming more disordered ever since.
      </p>

      <p style={styles.text}>
        Interestingly, all three arrows of time—the thermodynamic,
        psychological, and cosmological—point in the same direction.
      </p>

      <p style={styles.text}>
        Hawking argues that this alignment is not a coincidence, but a result
        of the universe’s initial conditions.
      </p>

      <p style={styles.text}>
        If the universe were to stop expanding and begin contracting, the
        direction of time might behave differently.
      </p>

      <p style={styles.text}>
        However, current evidence suggests that the universe will continue to
        expand indefinitely.
      </p>

      <p style={styles.text}>
        Time, therefore, is deeply connected to the structure and evolution of
        the universe itself.
      </p>

      <p style={styles.text}>
        This chapter shows that time is not just a ticking clock, but a
        fundamental part of the cosmos.
      </p>

      <p style={styles.text}>
        Understanding time helps us understand why the universe exists the
        way it does—and why we experience reality as we do.
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
