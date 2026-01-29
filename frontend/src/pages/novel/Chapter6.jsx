import ChapterLayout from "./ChapterLayout";


export default function Chapter6() {
  return (

    <ChapterLayout
              title="Chapter 6: Black Holes"
              prevLink="/novel/chapter-5"
              nextLink="/novel/chapter-7"
            >


    <div style={styles.container}>
      <h1 style={styles.title}>
        
      </h1>

      <p style={styles.text}>
        Black holes are among the most mysterious and fascinating objects in
        the universe. They are regions of space where gravity is so strong
        that nothing — not even light — can escape.
      </p>

      <p style={styles.text}>
        The idea of objects with gravity strong enough to trap light dates
        back to the eighteenth century, but black holes became a serious
        scientific concept only after Einstein’s theory of general relativity.
      </p>

      <p style={styles.text}>
        According to general relativity, massive objects bend space and time.
        When a massive star collapses under its own gravity, it can form a
        black hole, creating an infinite curvature in space-time.
      </p>

      <p style={styles.text}>
        The boundary around a black hole is called the event horizon. Once an
        object crosses this boundary, it can never return to the outside
        universe.
      </p>

      <p style={styles.text}>
        At the center of a black hole lies the singularity — a point where
        density becomes infinite and the laws of physics as we know them
        break down.
      </p>

      <p style={styles.text}>
        From far away, black holes appear just like any other massive object.
        They do not suck in matter like cosmic vacuum cleaners; objects fall
        into them only if they come too close.
      </p>

      <p style={styles.text}>
        One of the most surprising discoveries was that black holes are not
        completely black. Stephen Hawking showed that quantum effects allow
        black holes to emit radiation, now known as Hawking radiation.
      </p>

      <p style={styles.text}>
        This radiation causes black holes to slowly lose mass and eventually
        evaporate over incredibly long periods of time.
      </p>

      <p style={styles.text}>
        The idea that black holes can evaporate challenged existing theories
        and created new puzzles about the nature of information and entropy.
      </p>

      <p style={styles.text}>
        Hawking also proposed that black holes have temperature and entropy,
        linking gravity, thermodynamics, and quantum theory in a profound way.
      </p>

      <p style={styles.text}>
        Studying black holes helps physicists explore the limits of our
        understanding of space, time, and matter under extreme conditions.
      </p>

      <p style={styles.text}>
        Black holes are no longer just theoretical objects. Astronomers have
        observed their effects on nearby stars and even captured images of
        black hole shadows.
      </p>

      <p style={styles.text}>
        This chapter reveals that black holes are not cosmic dead ends, but
        key laboratories for discovering the deepest laws of the universe.
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
