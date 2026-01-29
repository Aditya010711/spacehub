
import ChapterLayout from "./ChapterLayout";
export default function Chapter8() {
  return (
    <ChapterLayout
                  title="Chapter 8: The Origin and Fate of the Universe"
                  prevLink="/novel/chapter-7"
                  nextLink="/novel/chapter-9"
                >

    <div style={styles.container}>
      <h1 style={styles.title}>
        
      </h1>

      <p style={styles.text}>
        One of the biggest questions in cosmology is how the universe began
        and how it will ultimately end.
      </p>

      <p style={styles.text}>
        According to modern science, the universe began with the Big Bang,
        a moment when space and time themselves came into existence.
      </p>

      <p style={styles.text}>
        The Big Bang was not an explosion in space, but an expansion of
        space itself from an extremely hot and dense state.
      </p>

      <p style={styles.text}>
        As the universe expanded, it cooled down, allowing particles to
        form atoms, stars, galaxies, and eventually planets.
      </p>

      <p style={styles.text}>
        Observations show that galaxies are moving away from each other,
        indicating that the universe is still expanding today.
      </p>

      <p style={styles.text}>
        The fate of the universe depends on its overall density and the
        strength of gravity.
      </p>

      <p style={styles.text}>
        If gravity is strong enough, expansion may slow down and reverse,
        leading to a Big Crunch.
      </p>

      <p style={styles.text}>
        In this scenario, the universe would collapse back into a hot,
        dense state, possibly giving rise to another Big Bang.
      </p>

      <p style={styles.text}>
        If gravity is weaker, the universe may expand forever, becoming
        colder and emptier over time.
      </p>

      <p style={styles.text}>
        This endless expansion could lead to a Big Freeze, where stars burn
        out and galaxies drift apart.
      </p>

      <p style={styles.text}>
        Another possibility is the Big Rip, where dark energy causes the
        expansion to accelerate until all structures are torn apart.
      </p>

      <p style={styles.text}>
        Dark energy is a mysterious force that makes up most of the universe
        and drives its accelerated expansion.
      </p>

      <p style={styles.text}>
        Hawking emphasized that understanding the universe’s fate requires
        understanding its origin.
      </p>

      <p style={styles.text}>
        The laws of physics link the beginning and end of the universe in
        profound ways.
      </p>

      <p style={styles.text}>
        Whether the universe ends in fire, ice, or collapse, its story is
        governed by the same fundamental principles.
      </p>

      <p style={styles.text}>
        This chapter highlights humanity’s quest to understand the full
        lifespan of the cosmos.
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
