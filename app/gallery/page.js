const galleryItems = [
  { title: "Coding", icon: "💻", text: "Learning and building projects" },
  { title: "Gaming", icon: "🎮", text: "One of my favorite hobbies" },
  { title: "Ideas", icon: "💡", text: "Turning ideas into projects" },
  { title: "Motorcycle", icon: "🏍️", text: "Enjoying the road" },
  { title: "Study", icon: "📚", text: "Growing through practice" },
  { title: "Future", icon: "🚀", text: "Working toward my goals" }
];

export default function Gallery() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">MY GALLERY</p>
        <h1>Gallery</h1>
        <p>
          A visual collection of the things that represent my interests and
          student life.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <article className={`gallery-card gallery-${index + 1}`} key={item.title}>
            <div className="gallery-icon">{item.icon}</div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <span className="gallery-number">0{index + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}