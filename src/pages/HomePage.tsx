import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { currentInterests, projects, photography, blogPosts, siteConfig } from '../data/siteData'

export function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2)
  const featuredPhotos = photography.slice(0, 3)
  const latestPost = blogPosts[0]

  return (
    <>
      <PageMeta title="Avery Quinn | Home" description="Personal portfolio exploring travel, photography, writing, and technology." />
      <section className="hero section-spacing">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">A life in motion</p>
            <h1>{siteConfig.title}</h1>
            <p className="lede">
              {siteConfig.intro}
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="button button--primary">Browse projects</Link>
              <Link to="/about" className="button button--secondary">About me</Link>
            </div>
          </div>

          <div className="hero__panel" aria-label="Current interests">
            <p className="panel-label">Currently exploring</p>
            <ul className="interest-list">
              {currentInterests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Highlights</p>
            <h2>Things I make, collect, and keep learning.</h2>
          </div>

          <div className="feature-grid">
            <Link to="/projects" className="feature-card feature-card--projects">
              <div className="feature-card__visual" aria-hidden="true" />
              <div className="feature-card__copy">
                <span>Projects</span>
                <strong>Selected experiments & builds</strong>
              </div>
            </Link>
            <Link to="/photography" className="feature-card feature-card--photo">
              <div className="feature-card__visual" aria-hidden="true" />
              <div className="feature-card__copy">
                <span>Photography</span>
                <strong>Frames from places and moments</strong>
              </div>
            </Link>
            <Link to="/blog" className="feature-card feature-card--writing">
              <div className="feature-card__visual" aria-hidden="true" />
              <div className="feature-card__copy">
                <span>Writing</span>
                <strong>Notes, reflections, and observations</strong>
              </div>
            </Link>
            <Link to="/about" className="feature-card feature-card--about">
              <div className="feature-card__visual" aria-hidden="true" />
              <div className="feature-card__copy">
                <span>About</span>
                <strong>My interests, languages, and learning</strong>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing theme-panel">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Featured work</p>
              <h2>Projects in motion.</h2>
            </div>
            <Link to="/projects" className="text-link">See all projects</Link>
          </div>

          <div className="project-strip">
            {featuredProjects.map((project) => (
              <article key={project.id} className="mini-project">
                <div className="mini-project__art" style={{ background: `linear-gradient(135deg, ${project.image.palette[0]}, ${project.image.palette[1]})` }} aria-hidden="true" />
                <div className="mini-project__body">
                  <span className="meta-tag">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container two-column">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Recent frames</p>
              <h2>Photography as a way of noticing.</h2>
            </div>
            <div className="photo-grid photo-grid--compact">
              {featuredPhotos.map((photo) => (
                <div key={photo.id} className="photo-card photo-card--mini" aria-label={photo.title}>
                  <div className="photo-card__image" style={{ background: `linear-gradient(135deg, ${photo.image.palette[0]}, ${photo.image.palette[1]})` }} aria-hidden="true" />
                  <div className="photo-card__meta">
                    <strong>{photo.title}</strong>
                    <span>{photo.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="essay-card">
            <p className="eyebrow">Latest note</p>
            <h3>{latestPost.title}</h3>
            <p>{latestPost.excerpt}</p>
            <Link to="/blog" className="text-link">Read the post</Link>
          </aside>
        </div>
      </section>
    </>
  )
}
