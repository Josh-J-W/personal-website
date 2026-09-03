import { PageMeta } from '../components/PageMeta'
import { resume, siteConfig } from '../data/siteData'

export function AboutPage() {
  return (
    <>
      <PageMeta title="Resume | Josh Winkel" description="Resume of Josh Winkel, a linguistics graduate focused on language, communication, and content creation." />
      <div className="container page-shell">
      <header className="page-header resume-header">
        <p className="eyebrow">Resume</p>
        <h1>{siteConfig.name}</h1>
        <p className="resume-header__headline">{resume.headline}</p>
        <p className="resume-header__location">{siteConfig.location}</p>
      </header>

      <div className="resume-layout">
        <aside className="resume-sidebar">
          <section className="resume-section">
            <h2>Contact</h2>
            <div className="resume-contact">
              <a href="tel:+13312232679">331-223-2679</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </section>
          <section className="resume-section">
            <h2>Skills</h2>
            <ul className="resume-list resume-list--compact">
              {resume.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </section>
          <section className="resume-section">
            <h2>Languages</h2>
            <ul className="resume-list resume-list--compact">
              {resume.languages.map((language) => <li key={language.name}><strong>{language.name}</strong><span>{language.level}</span></li>)}
            </ul>
          </section>
          <section className="resume-section">
            <h2>Certifications</h2>
            <ul className="resume-list">{resume.certifications.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="resume-section">
            <h2>Honors & Awards</h2>
            <ul className="resume-list">{resume.honors.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </aside>

        <main className="resume-main">
          <section className="resume-section resume-section--main">
            <h2>Summary</h2>
            <p className="resume-summary">{resume.summary}</p>
          </section>
          <section className="resume-section resume-section--main">
            <h2>Experience</h2>
            <div className="resume-entries">
              {resume.experience.map((item) => (
                <article className="resume-entry" key={`${item.organization}-${item.role}`}>
                  <div className="resume-entry__heading"><div><h3>{item.organization}</h3><p className="resume-entry__role">{item.role}</p></div><div className="resume-entry__meta"><span>{item.period}</span><span>{item.location}</span></div></div>
                  <ul className="resume-list resume-list--bulleted">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
          <section className="resume-section resume-section--main">
            <h2>Education</h2>
            <div className="resume-entries">
              {resume.education.map((item) => <article className="resume-entry resume-entry--education" key={`${item.institution}-${item.period}`}><div className="resume-entry__heading"><div><h3>{item.institution}</h3><p className="resume-entry__role">{item.degree}</p>{item.detail && <p className="resume-entry__detail">{item.detail}</p>}</div><span className="resume-entry__meta">{item.period}</span></div></article>)}
            </div>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}
