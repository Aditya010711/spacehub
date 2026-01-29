import ChapterLayout from "./ChapterLayout";

export default function Chapter10() {
  return (
    <ChapterLayout
              title="Chapter 10: Wormholes and Time Travel"
              prevLink="/novel/chapter-9"
              nextLink="/novel/chapter-11"
            >
    <div style={styles.container}>
      <h1 style={styles.title}>
      </h1>

      <p style={styles.text}>
        The idea of time travel has fascinated humans for centuries, appearing
        in science fiction long before scientists seriously considered its
        possibility.
      </p>

      <p style={styles.text}>
        In this chapter, Stephen Hawking explores whether time travel could
        exist within the laws of physics.
      </p>

      <p style={styles.text}>
        According to Einstein’s theory of relativity, space and time are not
        separate entities but are woven together into a single fabric called
        spacetime.
      </p>

      <p style={styles.text}>
        If spacetime can bend due to gravity, it might also fold or connect in
        unexpected ways.
      </p>

      <p style={styles.text}>
        Wormholes are theoretical tunnels in spacetime that could link distant
        regions of the universe—or even different moments in time.
      </p>

      <p style={styles.text}>
        A wormhole could, in theory, allow a traveler to take a shortcut
        through spacetime, arriving faster than light traveling through normal
        space.
      </p>

      <p style={styles.text}>
        If one end of a wormhole were moved at near-light speed and then
        returned, time dilation could cause the two ends to exist at different
        times.
      </p>

      <p style={styles.text}>
        This would effectively turn the wormhole into a time machine.
      </p>

      <p style={styles.text}>
        However, wormholes face serious problems. They are predicted to be
        extremely unstable and would collapse instantly without exotic forms
        of matter.
      </p>

      <p style={styles.text}>
        Exotic matter would need to have negative energy density—something not
        known to exist in large quantities.
      </p>

      <p style={styles.text}>
        Hawking proposed the Chronology Protection Conjecture, suggesting that
        the laws of physics prevent time travel to the past.
      </p>

      <p style={styles.text}>
        This idea helps preserve cause and effect, preventing paradoxes such
        as killing your own grandfather before you were born.
      </p>

      <p style={styles.text}>
        Even if time travel were theoretically possible, quantum effects might
        destroy a time machine the moment it is created.
      </p>

      <p style={styles.text}>
        Observationally, we see no evidence of visitors from the future, which
        supports Hawking’s skepticism.
      </p>

      <p style={styles.text}>
        While traveling into the future is already possible through time
        dilation, traveling into the past remains highly doubtful.
      </p>

      <p style={styles.text}>
        Time travel, therefore, appears to be constrained by nature itself.
      </p>

      <p style={styles.text}>
        This chapter reminds us that not everything imaginable is physically
        possible.
      </p>

      <p style={styles.text}>
        Science may allow astonishing phenomena, but it also enforces strict
        limits to protect the consistency of reality.
      </p>

      <p style={styles.text}>
        The mystery of time travel pushes us to understand the deepest laws
        governing the universe.
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
