import { PageMeta } from '../components/PageMeta'
import { aboutSections } from '../data/siteData'

export function AboutPage() {
  return (
    <>
      <PageMeta title="About | Josh Winkel" description="A personal profile covering interests, education, skills, language learning, and travel." />
      <div className="container page-shell">
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1>Curious by default.</h1>
      </header>

      <section className="content-block">
        <p>{aboutSections.intro}</p>
      </section>

      <div className="split-grid">
        <section className="content-block">
          <h2>Education</h2>
          <ul className="info-list">
            {aboutSections.education.map((item) => (
              <li key={`${item.institution}-${item.period}`}>
                <strong>{item.institution}</strong>
                <span>{item.degree}</span>
                <em>{item.period}</em>
                <p>{item.notes}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-block">
          <h2>Skills</h2>
          <div className="chip-list">
            {aboutSections.skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </section>
      </div>

      <div className="split-grid">
        <section className="content-block">
          <h2>Currently learning</h2>
          <ul className="bullet-list">
            {aboutSections.learning.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="content-block">
          <h2>Languages</h2>
          <ul className="bullet-list">
            {aboutSections.languages.map((language) => <li key={language}>{language}</li>)}
          </ul>
        </section>
      </div>

      <div className="split-grid">
        <section className="content-block">
          <h2>Travel</h2>
          <ul className="bullet-list">
            {aboutSections.travel.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="content-block">
          <h2>Personal interests</h2>
          <ul className="bullet-list">
            {aboutSections.personalInterests.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>
    </div>
    </>
  )
}
