import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="page home-page">
      <div className="hero">
        <div className="hero-text">
          <p className="eyebrow">WELCOME TO MY WEBSITE</p>
          <h1>Hi, I&apos;m <span>Vince.</span></h1>
          <p className="hero-description">
            I&apos;m a BSIT student who enjoys learning technology, building
            websites, playing games, and exploring new ideas.
          </p>

          <div className="button-group">
            <Link href="/portfolio" className="btn primary-btn">
              View My Work
            </Link>
            <Link href="/about" className="btn secondary-btn">
              About Me
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <Image
            src="/images/fa013a7a-542d-4267-9d2d-67e07bd246c3.jpg"
            alt="Vince"
            width={150}
            height={150}
            className="avatar"
          />
          <h2>BSIT Student</h2>
          <p>Learning • Creating • Improving</p>
        </div>
      </div>

      <div className="section-heading">
        <p className="eyebrow">WHAT I DO</p>
        <h2>Things I enjoy</h2>
      </div>

      <div className="cards three-columns">
        <article className="info-card">
          <div className="card-icon">{"</>"}</div>
          <h3>Web Development</h3>
          <p>I enjoy creating simple and useful websites with HTML, CSS, JavaScript, and Next.js.</p>
        </article>

        <article className="info-card">
          <div className="card-icon">🎮</div>
          <h3>Gaming</h3>
          <p>Gaming is one of my hobbies and also gives me ideas for creative digital projects.</p>
        </article>

        <article className="info-card">
          <div className="card-icon">💡</div>
          <h3>Learning</h3>
          <p>I believe that improving little by little is still progress, especially when learning programming.</p>
        </article>
      </div>
    </section>
  );
}