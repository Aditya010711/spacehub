import ChapterLayout from "./ChapterLayout";

export default function Chapter2() {
  return (
    <ChapterLayout
      title="Chapter 2: Space and Time"
      prevLink="/novel/chapter-1"
      nextLink="/novel/chapter-3"
    >
      <p>
        Space and time are not fixed backgrounds against which the universe
        unfolds. They are dynamic entities that stretch, bend, and react to the
        presence of matter and energy.
      </p>

      <p>
        Before Einstein, scientists believed that time flowed at the same rate
        everywhere in the universe. Space was considered rigid and unchanging.
        This classical view worked well for everyday life but failed when tested
        at extreme speeds and gravity.
      </p>

      <p>
        Einstein’s theory of relativity revealed that time slows down for objects
        moving close to the speed of light. This phenomenon, known as time
        dilation, has been experimentally confirmed using atomic clocks on fast
        airplanes and satellites.
      </p>

      <p>
        Space and time combine to form spacetime, a four-dimensional fabric.
        Massive objects like stars and planets curve this fabric, and objects
        move along paths determined by that curvature.
      </p>

      <p>
        Gravity is no longer viewed as a force but as the effect of curved
        spacetime. Earth orbits the Sun not because it is pulled, but because it
        follows the curved geometry of spacetime.
      </p>

      <p>
        These ideas are not just theoretical. Modern technologies such as GPS
        rely on relativistic corrections. Without accounting for time dilation,
        navigation systems would fail within minutes.
      </p>

      <p>
        Understanding space and time reshapes how we see reality itself. The
        universe is not a static stage, but an evolving structure where geometry
        and motion are deeply connected.
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
