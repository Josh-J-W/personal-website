import { PageMeta } from '../components/PageMeta'
import { siteConfig } from '../data/siteData'

export function ContactPage() {
  return (
    <>
      <PageMeta title="Contact | Avery Quinn" description="Contact details and a simple form for reaching out." />
      <div className="container page-shell narrow-shell">
      <header className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Say hello.</h1>
      </header>

      <div className="contact-panel">
        <div className="contact-links">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.github}>GitHub</a>
          <a href={siteConfig.linkedin}>LinkedIn</a>
          {siteConfig.instagram ? <a href={siteConfig.instagram}>Instagram</a> : null}
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} placeholder="Write a note..." />
          </label>
          <button type="submit" className="button button--primary">Send</button>
        </form>
      </div>
    </div>
    </>
  )
}
