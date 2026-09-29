export default function About() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h1>About Me</h1>
        <p>
          A little introduction about who I am, what I like, and what I want
          to learn.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card large-card">
          <p className="eyebrow">MY STORY</p>
          <h2>Always learning something new.</h2>
          <p>
            I am a BSIT student interested in technology and web development.
            I am still learning the basics of programming, but I enjoy
            improving my skills through school projects and personal practice.
          </p>
          <p>
            My goal is to become more confident in creating useful and
            user-friendly applications in the future.
          </p>
        </article>

        <article className="about-card">
          <p className="eyebrow">INTERESTS</p>
          <ul className="clean-list">
            <li>💻 Web development</li>
            <li>🏍️ Motorcycling</li>
            <li>🎮 Video games</li>
            <li>📚 Learning technology</li>
          </ul>
        </article>

        <article className="about-card">
          <p className="eyebrow">GOALS</p>
          <ul className="clean-list">
            <li>Learn programming better</li>
            <li>Build more projects</li>
            <li>Improve UI design skills</li>
            <li>Prepare for an IT career</li>
          </ul>
        </article>
      </div>
    </section>
  );
}