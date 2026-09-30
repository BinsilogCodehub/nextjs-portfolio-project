import Image from "next/image";

const galleryItems = [
  {
    title: "Coding",
    image: "/images/gallery-coding.jpg",
    alt: "Code on a computer screen",
    text: "Learning and building projects"
  },
  {
    title: "Gaming",
    image: "/images/gallery-gaming.jpg",
    alt: "Gaming event with players and screens",
    text: "One of my favorite hobbies"
  },
  {
    title: "Ideas",
    image: "/images/gallery-ideas.jpg",
    alt: "Creative workspace for developing ideas",
    text: "Turning ideas into projects"
  },
  {
    title: "Motorcycle",
    image: "/images/33e6890f-b60d-447d-958d-d700b87aee83.jpg",
    alt: "Vince riding a motorcycle on a country road",
    text: "Enjoying the road"
  },
  {
    title: "Study",
    image: "/images/gallery-study.jpg",
    alt: "Notebook and materials for studying",
    text: "Growing through practice"
  },
  {
    title: "Future",
    image: "/images/gallery-future.jpg",
    alt: "Professionals collaborating on a project",
    text: "Working toward my goals"
  }
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
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
              className="gallery-photo"
            />
            <div className="gallery-content">
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