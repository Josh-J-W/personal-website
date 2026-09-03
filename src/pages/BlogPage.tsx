import { PageMeta } from '../components/PageMeta'
import { blogPosts } from '../data/siteData'

export function BlogPage() {
  return (
    <>
      <PageMeta title="Blog | Josh Winkel" description="Field notes, writing, reflections, and observations from a curious life." />
      <div className="container page-shell">
      <header className="page-header">
        <p className="eyebrow">Writing</p>
        <h1>Notes, fragments, and slower observations.</h1>
      </header>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card__cover" style={{ background: `linear-gradient(135deg, ${post.cover.palette[0]}, ${post.cover.palette[1]})` }} aria-hidden="true" />
            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="chip-list chip-list--compact">
                {post.tags.map((tag) => (
                  <span key={`${post.id}-${tag}`} className="chip chip--small">#{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="content-block notebox">
        <p>Sample content is included here for the initial build. Add a new Markdown file or entry in the data structure to expand the writing archive.</p>
      </aside>
    </div>
    </>
  )
}
