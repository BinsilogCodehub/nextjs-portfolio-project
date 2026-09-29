const projects = [
  {
    number: "01",
    title: "MindDigits",
    type: "Web Game",
    description:
      "A progressive number memory game where players remember numbers before entering the correct answer.",
    tech: "HTML • CSS • JavaScript"
  },
  {
    number: "02",
    title: "FlashLearn",
    type: "Educational Website",
    description:
      "An interactive flashcard learning dashboard designed to make studying simple and engaging for kids.",
    tech: "HTML • CSS • JavaScript"
  },
  {
    number: "03",
    title: "Next.js Portfolio",
    type: "Personal Website",
    description:
      "A multi-page portfolio built with reusable components, navigation, and active-page highlighting.",
    tech: "Next.js • React • CSS"
  }
];

export default function Portfolio() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">MY WORK</p>
        <h1>Portfolio</h1>
        <p>
          Here are some projects that represent my experience and what I am
          currently learning.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className="tech">{project.tech}</span>
            </div>
            <div className="project-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}