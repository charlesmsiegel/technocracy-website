import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ConsensusMark } from '../components/shared/logos'
import CookieBanner from '../components/public/CookieBanner'
import styles from './PublicLayout.module.css'

const NAV = [
  { to: '/divisions', label: 'Divisions' },
  { to: '/newsroom', label: 'Newsroom' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/careers', label: 'Careers' },
  { to: '/about', label: 'About' },
  { to: '/heritage', label: 'Heritage' },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function PublicLayout() {
  return (
    <div className={styles.shell} data-theme="public">
      <ScrollToTop />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.brand}>
            <ConsensusMark />
            CONSENSUS HOLDINGS
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/personnel" className={styles.loginButton}>
              Employee Login
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/heritage">Heritage</Link></li>
              <li><Link to="/divisions">Our divisions</Link></li>
              <li><Link to="/initiatives">Global initiatives</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>Newsroom</h3>
            <ul>
              <li><Link to="/newsroom">Press releases</Link></li>
              <li><Link to="/newsroom">Media resources</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>Commitments</h3>
            <ul>
              <li><Link to="/initiatives">Sustainability</Link></li>
              <li><Link to="/initiatives">Public safety</Link></li>
              <li><Link to="/initiatives">Community standards</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.legal}>
          <span>
            © {new Date().getFullYear()} Consensus Holdings. A better world, by
            design.™ All observations recorded. ·{' '}
            <Link to="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
          </span>
          <Link to="/personnel" className={styles.personnel}>
            Personnel Access
          </Link>
        </div>
      </footer>
      <CookieBanner />
    </div>
  )
}
