import ChapterLayout from "./ChapterLayout";

export default function Chapter3() {
  return (
    <ChapterLayout
      title="Chapter 3: The Expanding Universe"
      prevLink="/novel/chapter-2"
      nextLink="/novel/chapter-4"
    >
      <p>
        One of the greatest discoveries of modern astronomy is that the universe
        is expanding. Galaxies are moving away from each other, and the farther
        apart they are, the faster they recede.
      </p>

      <p>
        This discovery was made by Edwin Hubble in the 1920s. By observing distant
        galaxies, he noticed that their light was shifted toward the red end of
        the spectrum. This redshift indicated motion away from Earth.
      </p>

      <p>
        The expansion of the universe does not mean that galaxies are flying
        through space from a central point. Instead, space itself is expanding,
        carrying galaxies along with it.
      </p>

      <p>
        A useful analogy is the surface of an inflating balloon. As the balloon
        expands, every point moves away from every other point, yet no single
        point is the center of expansion.
      </p>

      <p>
        The expanding universe suggests that it had a beginning. If we reverse
        the expansion backward in time, all matter and energy converge into an
        extremely hot and dense state known as the Big Bang.
      </p>

      <p>
        Evidence for the Big Bang comes from multiple observations, including the
        cosmic microwave background radiation — the faint afterglow of the early
        universe still detectable today.
      </p>

      <p>
        Understanding cosmic expansion helps scientists determine the age,
        size, and ultimate fate of the universe, raising profound questions
        about how everything began.
      </p>
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
