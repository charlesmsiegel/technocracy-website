import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ConsensusMark } from '../components/shared/logos'
import CookieBanner from '../components/public/CookieBanner'
import NewsletterSignup from '../components/public/NewsletterSignup'
import styles from './PublicLayout.module.css'

const NAV = [
  { to: '/divisions', label: 'Divisions' },
  { to: '/products', label: 'Products' },
  { to: '/research', label: 'Research' },
  { to: '/insights', label: 'Insights' },
  { to: '/newsroom', label: 'Newsroom' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/investors', label: 'Investors' },
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

/** More primary-nav items means the header can wrap to a second line at
    tablet/small-desktop widths. Anything elsewhere on the site that sticks
    to the header (the careers filter bar) needs the header's *actual*
    rendered height, not a number that only holds while the nav fits on one
    line — so this publishes it as a custom property every layout pass. */
function useHeaderHeightVar(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const publish = () =>
      document.documentElement.style.setProperty(
        '--public-header-height',
        `${el.offsetHeight}px`,
      )
    publish()
    const observer = new ResizeObserver(publish)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

export default function PublicLayout() {
  const headerRef = useRef<HTMLElement>(null)
  useHeaderHeightVar(headerRef)

  return (
    <div className={styles.shell} data-theme="public">
      <ScrollToTop />
      <header ref={headerRef} className={styles.header}>
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
              <li><Link to="/leadership">Leadership</Link></li>
              <li><Link to="/heritage">Heritage</Link></li>
              <li><Link to="/divisions">Our divisions</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/initiatives">Global initiatives</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/benefits">Benefits</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>Newsroom</h3>
            <ul>
              <li><Link to="/newsroom">Press releases</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/explained">Consensus Explained</Link></li>
              <li><Link to="/research">Our Research</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>Investors</h3>
            <ul>
              <li><Link to="/investors">Investor relations</Link></li>
              <li><Link to="/portfolio">Operating companies</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>Commitments</h3>
            <ul>
              <li><Link to="/initiatives">Sustainability</Link></li>
              <li><Link to="/transparency">Narrative Integrity Report</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
              <li><Link to="/initiatives">Community standards</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <NewsletterSignup />
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
