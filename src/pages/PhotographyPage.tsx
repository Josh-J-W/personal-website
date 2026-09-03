import { useMemo, useState } from 'react'
import { PageMeta } from '../components/PageMeta'
import { photography, type Photo } from '../data/siteData'

const categories = ['All', 'Travel', 'Landscape', 'Architecture', 'Street', 'Food', 'People', 'Miscellaneous'] as const

export function PhotographyPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All')

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return photography
    return photography.filter((photo) => photo.category === activeCategory)
  }, [activeCategory])

  const [activeImage, setActiveImage] = useState<Photo | null>(null)

  const showPrev = () => {
    if (!activeImage) return
    const index = photography.findIndex((photo) => photo.id === activeImage.id)
    const next = photography[(index - 1 + photography.length) % photography.length]
    setActiveImage(next)
  }

  const showNext = () => {
    if (!activeImage) return
    const index = photography.findIndex((photo) => photo.id === activeImage.id)
    const next = photography[(index + 1) % photography.length]
    setActiveImage(next)
  }

  return (
    <>
      <PageMeta title="Photography | Avery Quinn" description="Visual notes from travels, streets, landscapes, and daily observations." />
      <div className="container page-shell">
        <header className="page-header page-header--space-between">
          <div>
            <p className="eyebrow">Photography</p>
            <h1>Frames from places and moments.</h1>
          </div>
          <div className="filter-row" aria-label="Photography categories">
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

        <div className="photo-grid">
          {filteredPhotos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              className="photo-card"
              onClick={() => setActiveImage(photo)}
              aria-label={`Open photo: ${photo.title}`}
            >
              <div className="photo-card__image" style={{ background: `linear-gradient(135deg, ${photo.image.palette[0]}, ${photo.image.palette[1]})` }} aria-hidden="true" />
              <div className="photo-card__meta">
                <strong>{photo.title}</strong>
                <span>{photo.location}</span>
              </div>
            </button>
          ))}
        </div>

        {activeImage ? (
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={() => setActiveImage(null)}>
            <div className="lightbox__content" onClick={(event) => event.stopPropagation()}>
              <button type="button" className="lightbox__close" onClick={() => setActiveImage(null)} aria-label="Close lightbox">×</button>
              <div className="lightbox__image" style={{ background: `linear-gradient(135deg, ${activeImage.image.palette[0]}, ${activeImage.image.palette[1]})` }} aria-hidden="true" />
              <div className="lightbox__body">
                <div className="lightbox__header">
                  <div>
                    <p className="eyebrow">{activeImage.category}</p>
                    <h2>{activeImage.title}</h2>
                  </div>
                  <div className="lightbox__nav">
                    <button type="button" onClick={showPrev} aria-label="Previous image">Prev</button>
                    <button type="button" onClick={showNext} aria-label="Next image">Next</button>
                  </div>
                </div>
                <p>{activeImage.caption}</p>
                <div className="lightbox__meta">
                  <span>{activeImage.location}</span>
                  <span>{activeImage.date}</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}
