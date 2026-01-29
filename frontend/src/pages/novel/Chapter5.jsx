import ChapterLayout from "./ChapterLayout";

export default function Chapter5() {
  return (
<ChapterLayout
          title="Chapter 5: Elementary Particles and the Forces of Nature"
          prevLink="/novel/chapter-4"
          nextLink="/novel/chapter-6"
        >

    
    <div style={styles.container}>
      <h1 style={styles.title}>
        
      </h1>

      <p style={styles.text}>
        Everything around us — stars, planets, people, and even air — is made
        of tiny building blocks called particles. For centuries, scientists
        believed atoms were the smallest units of matter.
      </p>

      <p style={styles.text}>
        In the twentieth century, experiments revealed that atoms themselves
        are made of smaller particles: electrons, protons, and neutrons.
        Protons and neutrons are further composed of even more fundamental
        particles known as quarks.
      </p>

      <p style={styles.text}>
        Stephen Hawking explains that modern physics divides all particles into
        two main groups: matter particles and force-carrying particles.
      </p>

      <p style={styles.text}>
        Matter particles are the basic components of everything we can touch
        and see. These include quarks, which form protons and neutrons, and
        leptons, such as electrons and neutrinos.
      </p>

      <p style={styles.text}>
        Force-carrying particles are responsible for how matter particles
        interact. Without these forces, the universe would fall apart or never
        come together at all.
      </p>

      <p style={styles.text}>
        There are four fundamental forces in nature. The strongest is the
        strong nuclear force, which binds quarks together and holds atomic
        nuclei intact.
      </p>

      <p style={styles.text}>
        The electromagnetic force acts between charged particles. It is
        responsible for electricity, magnetism, light, and chemical reactions
        — including the processes that make life possible.
      </p>

      <p style={styles.text}>
        The weak nuclear force governs radioactive decay and plays a crucial
        role in nuclear reactions inside stars, including the Sun.
      </p>

      <p style={styles.text}>
        Gravity is the weakest of the four forces, but it dominates on large
        scales. It governs the motion of planets, stars, galaxies, and the
        expansion of the universe itself.
      </p>

      <p style={styles.text}>
        Each force has its own carrier particle. Photons carry the
        electromagnetic force, gluons carry the strong force, and W and Z
        particles carry the weak force.
      </p>

      <p style={styles.text}>
        Gravity is believed to be carried by a particle called the graviton,
        though it has not yet been directly observed. This remains one of the
        biggest challenges in modern physics.
      </p>

      <p style={styles.text}>
        Physicists aim to unite all four forces into a single framework known
        as a “theory of everything.” Such a theory would describe the universe
        using one set of fundamental laws.
      </p>

      <p style={styles.text}>
        Hawking emphasizes that progress in physics comes from simplifying
        complexity — discovering that many phenomena arise from a few basic
        principles.
      </p>

      <p style={styles.text}>
        This chapter sets the stage for deeper questions: Why do these forces
        exist? Why do they have the strengths they do? And could they all be
        different aspects of one underlying reality?
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
