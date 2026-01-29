import ChapterLayout from "./ChapterLayout";
export default function Chapter4() {
  return (

    <ChapterLayout
          title="Chapter 4: The Uncertainty Principle"
          prevLink="/novel/chapter-3"
          nextLink="/novel/chapter-5"
        >
    <div style={styles.container}>
      <h1 style={styles.title}></h1>

      <p style={styles.text}>
        Classical physics, developed by scientists like Newton, assumed that
        the universe followed precise and predictable laws. If you knew the
        position and speed of every particle, you could predict the future
        exactly.
      </p>

      <p style={styles.text}>
        This comforting idea was shattered in the early twentieth century by
        the discovery of quantum mechanics — the physics of very small things
        like atoms and subatomic particles.
      </p>

      <p style={styles.text}>
        One of the most important ideas in quantum mechanics is the Uncertainty
        Principle, proposed by German physicist Werner Heisenberg in 1927.
      </p>

      <p style={styles.text}>
        The Uncertainty Principle states that we cannot simultaneously know
        both the exact position and the exact speed (momentum) of a particle.
        The more precisely one is measured, the less precisely the other can
        be known.
      </p>

      <p style={styles.text}>
        This uncertainty is not due to faulty instruments or poor measurement.
        It is a fundamental property of nature itself. Reality, at its core,
        is probabilistic rather than deterministic.
      </p>

      <p style={styles.text}>
        Hawking explains this using an everyday analogy. To see a particle, we
        must shine light on it. But light itself carries energy and disturbs
        the particle when it hits it, changing its motion.
      </p>

      <p style={styles.text}>
        At very small scales, even tiny disturbances have significant effects.
        As a result, the act of observing changes what is being observed.
      </p>

      <p style={styles.text}>
        This idea fundamentally challenges classical views of reality. The
        universe is no longer a clockwork machine. Instead, it behaves more
        like a game of chance governed by probabilities.
      </p>

      <p style={styles.text}>
        Quantum mechanics allows us to calculate the likelihood of different
        outcomes, but not exact predictions. We can say where a particle is
        likely to be, but never with absolute certainty.
      </p>

      <p style={styles.text}>
        The Uncertainty Principle has profound implications for cosmology.
        During the early universe, quantum fluctuations — tiny random changes
        in energy — played a key role in shaping galaxies and large-scale
        structures.
      </p>

      <p style={styles.text}>
        Even empty space is not truly empty. According to quantum theory, it
        constantly produces and destroys pairs of particles in brief flashes
        of existence, known as virtual particles.
      </p>

      <p style={styles.text}>
        Hawking highlights how uncertainty sets a fundamental limit to human
        knowledge. There are questions about the universe that may never have
        exact answers — only probabilities.
      </p>

      <p style={styles.text}>
        Rather than being discouraging, this makes the universe more
        fascinating. It shows that mystery and unpredictability are woven
        into the fabric of reality itself.
      </p>

      <p style={styles.text}>
        This chapter prepares us to explore how quantum mechanics and gravity
        interact — a challenge that lies at the heart of modern physics.
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
