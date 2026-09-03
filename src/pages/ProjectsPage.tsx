import { useMemo, useState } from 'react'
import { PageMeta } from '../components/PageMeta'
import { projects, type Project } from '../data/siteData'

const categories = ['All', 'Web', 'Data', 'Research', 'Personal', 'Creative', 'Other'] as const

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <PageMeta title="Projects | Avery Quinn" description="A portfolio of personal projects, experiments, and creative research work." />
      <div className="container page-shell">
        <header className="page-header page-header--space-between">
          <div>
            <p className="eyebrow">Projects</p>
            <h1>Things I have built and explored.</h1>
          </div>
          <div className="filter-row" aria-label="Project categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip${activeCategory === category ? ' filter-chip--active' : ''}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <div className="project-grid">
          {filteredProjects.map((project: Project) => (
            <article key={project.id} className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
              <div className="project-card__visual" style={{ background: `linear-gradient(135deg, ${project.image.palette[0]}, ${project.image.palette[1]})` }} aria-hidden="true" />
              <div className="project-card__content">
                <div className="project-card__topline">
                  <span className="meta-tag">{project.category}</span>
                  {project.featured ? <span className="meta-tag meta-tag--accent">Featured</span> : null}
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="chip-list chip-list--compact">
                  {project.technologies.map((technology) => (
                    <span key={`${project.id}-${technology}`} className="chip chip--small">{technology}</span>
                  ))}
                </div>
                <div className="project-card__meta">
                  <span>{project.date}</span>
                  <span>{project.status}</span>
                </div>
                <div className="project-card__actions">
                  {project.links.live ? <a href={project.links.live}>Live</a> : null}
                  {project.links.source ? <a href={project.links.source}>Source</a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
