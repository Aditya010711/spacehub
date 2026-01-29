import html2pdf from "html2pdf.js";

export const downloadFullNovel = () => {
  const chapters = [
    {
      title: "Chapter 1: Our Picture of the Universe",
      content: `
      Humanity has always wondered about the universe. From ancient civilizations
      observing stars to modern scientists using powerful telescopes, our picture
      of the cosmos has evolved continuously.

      Early models of the universe were deeply connected with religion and philosophy.
      Thinkers tried to explain the heavens using myths, gods, and fixed celestial spheres.

      Modern science introduced models based on observation and evidence, showing
      that knowledge grows by refinement rather than absolute truth.
      `,
    },
    {
      title: "Chapter 2: Space and Time",
      content: `
      Space and time were once believed to be separate and absolute. Newton viewed
      them as fixed stages upon which the universe played out.

      Einstein revolutionized this idea by combining space and time into spacetime,
      a dynamic fabric influenced by matter and energy.

      This insight reshaped physics and allowed us to understand gravity as curvature
      rather than a mysterious force.
      `,
    },
    {
      title: "Chapter 3: The Expanding Universe",
      content: `
      Observations revealed that galaxies are moving away from us, meaning the universe
      is expanding rather than static.

      The farther a galaxy is, the faster it moves away — a discovery that changed
      cosmology forever.

      This led to the idea that the universe began from a single hot, dense point.
      `,
    },
    {
      title: "Chapter 4: The Uncertainty Principle",
      content: `
      Quantum mechanics introduced limits to what we can know about particles.

      The uncertainty principle states that position and momentum cannot both be
      precisely measured at the same time.

      This randomness challenged classical physics and our understanding of reality.
      `,
    },
    {
      title: "Chapter 5: Elementary Particles",
      content: `
      Matter is made from fundamental particles like quarks and leptons.

      Forces act between these particles through exchange particles.

      Understanding these building blocks helps explain the structure of the universe.
      `,
    },
    {
      title: "Chapter 6: Black Holes",
      content: `
      Black holes form when massive stars collapse under their own gravity.

      Nothing, not even light, can escape once it crosses the event horizon.

      Hawking showed black holes are not entirely black — they emit radiation.
      `,
    },
    {
      title: "Chapter 7: Black Holes Aren't So Black",
      content: `
      Quantum effects allow black holes to emit radiation.

      Over time, black holes can slowly evaporate.

      This discovery connected gravity, quantum theory, and thermodynamics.
      `,
    },
    {
      title: "Chapter 8: The Origin and Fate of the Universe",
      content: `
      The Big Bang theory describes the universe’s beginning.

      Whether the universe expands forever or collapses depends on its density.

      These questions remain central to cosmology.
      `,
    },
    {
      title: "Chapter 9: The Arrow of Time",
      content: `
      Time appears to move forward, not backward.

      Entropy explains why disorder increases over time.

      This gives direction to time itself.
      `,
    },
    {
      title: "Chapter 10: Wormholes and Time Travel",
      content: `
      Wormholes are hypothetical tunnels through spacetime.

      They could allow shortcuts across vast distances.

      Time travel remains theoretical but fascinating.
      `,
    },
    {
      title: "Chapter 11: Unification of Physics",
      content: `
      Scientists seek a theory that unifies all forces.

      Quantum mechanics and relativity remain incompatible.

      A unified theory could explain everything.
      `,
    },
    {
      title: "Chapter 12: Conclusion",
      content: `
      Our understanding of the universe is incomplete but growing.

      Science thrives on curiosity and questioning assumptions.

      The journey of discovery continues beyond this book.
      `,
    },
  ];

  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <style>
      body {
        font-family: "Times New Roman", serif;
        color: #000;
        background: #fff;
      }
      h1 {
        font-size: 28px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 1.8;
        margin-bottom: 16px;
        white-space: pre-line;
      }
      .chapter {
        page-break-after: always;
      }
    </style>

    ${chapters
      .map(
        (c) => `
          <div class="chapter">
            <h1>${c.title}</h1>
            <p>${c.content}</p>
          </div>
        `
      )
      .join("")}
  `;

  html2pdf()
    .from(wrapper)
    .set({
      filename: "Full_Novel_Notes.pdf",
      margin: 1,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    })
    .save();
};
