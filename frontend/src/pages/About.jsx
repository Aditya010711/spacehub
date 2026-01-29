export default function About() {
  return (
    <div className="container">
      <h1 className="page-title">About SpaceHub</h1>
      <p style={{maxWidth:700, color:"#cfe0ff"}}>
        This project is built with the MERN stack (MongoDB, Express, React, Node). Data is seeded locally and can be
        extended with more events and planet details. Perfect for learning full-stack patterns and UI design.
      </p>
    </div>
  );
}