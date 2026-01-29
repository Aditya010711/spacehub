
import ChapterLayout from "./ChapterLayout";
export default function Chapter11() {
  return (
    <ChapterLayout
              title="Chapter 11: The Unification of Physics"
              prevLink="/novel/chapter-10"
              nextLink="/novel/chapter-12"
            >
    <div style={styles.container}>
      <h1 style={styles.title}>
      </h1>

      <p style={styles.text}>
        One of the greatest goals of science is to find a single theory that
        explains everything in the universe.
      </p>

      <p style={styles.text}>
        Throughout history, physicists have tried to unify the fundamental
        forces of nature into one coherent framework.
      </p>

      <p style={styles.text}>
        Today, we know that four fundamental forces govern the universe:
        gravity, electromagnetism, the weak nuclear force, and the strong
        nuclear force.
      </p>

      <p style={styles.text}>
        In the past, these forces were thought to be completely separate, but
        modern physics has shown deep connections between them.
      </p>

      <p style={styles.text}>
        Electromagnetism and the weak nuclear force have already been unified
        into what is known as the electroweak force.
      </p>

      <p style={styles.text}>
        This unification occurs at very high energies, similar to conditions
        shortly after the Big Bang.
      </p>

      <p style={styles.text}>
        The strong nuclear force, which binds quarks inside protons and
        neutrons, may also merge with the electroweak force at even higher
        energies.
      </p>

      <p style={styles.text}>
        The idea that all forces were once a single force is known as Grand
        Unified Theory (GUT).
      </p>

      <p style={styles.text}>
        Gravity, however, remains the most difficult force to unify with the
        others.
      </p>

      <p style={styles.text}>
        Einstein’s general relativity describes gravity on large scales, while
        quantum mechanics governs the subatomic world.
      </p>

      <p style={styles.text}>
        These two theories work extremely well in their own domains but are
        mathematically incompatible with each other.
      </p>

      <p style={styles.text}>
        Attempts to unify gravity with quantum mechanics have led to ideas
        such as string theory.
      </p>

      <p style={styles.text}>
        In string theory, particles are not points but tiny vibrating strings,
        and different vibrations create different particles.
      </p>

      <p style={styles.text}>
        String theory naturally includes gravity, making it a promising
        candidate for a theory of everything.
      </p>

      <p style={styles.text}>
        However, string theory requires extra dimensions of space that are too
        small to be observed directly.
      </p>

      <p style={styles.text}>
        Despite decades of effort, no experimental evidence has yet confirmed
        any unified theory.
      </p>

      <p style={styles.text}>
        Hawking emphasizes that the search for unification is not just about
        equations, but about understanding why the universe exists the way it
        does.
      </p>

      <p style={styles.text}>
        A successful theory would explain the origin, structure, and future of
        the universe using a single set of principles.
      </p>

      <p style={styles.text}>
        The quest for unification represents humanity’s deepest desire to
        understand the cosmos completely.
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
