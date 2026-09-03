import { NavLink, Outlet } from 'react-router-dom'
import { navItems, siteConfig } from '../data/siteData'

export function Layout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="topbar">
        <div className="topbar__inner container">
          <NavLink to="/" className="brand" aria-label="Go to home page">
            <span className="brand__mark">
              <img src={`${import.meta.env.BASE_URL}josh-winkel-logo.svg`} alt="" />
            </span>
            <span className="brand__text">{siteConfig.name}</span>
          </NavLink>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }: { isActive: boolean }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="page-frame">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="footer__links">
            <a href={siteConfig.github}>GitHub</a>
            <a href={siteConfig.linkedin}>LinkedIn</a>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
