import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSession } from '../session/SessionContext'
import { UnionSeal } from '../components/shared/logos'
import styles from './InternalLayout.module.css'

const NAV = [
  { to: '/portal', label: 'COMMAND DASHBOARD', end: true },
  { to: '/portal/operations', label: 'OPERATIONS' },
  { to: '/portal/hr', label: 'HUMAN RESOURCES' },
]

export default function InternalLayout() {
  const { operativeName, logout } = useSession()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const terminate = () => {
    logout()
    navigate('/')
  }

  return (
    <div className={styles.shell} data-theme="internal">
      <div className={styles.banner}>
        Union internal — compartmented // unauthorized access is an infraction
        of the second degree
      </div>

      <header className={styles.header}>
        <div className={styles.brand}>
          <UnionSeal size={38} />
          <div className={styles.brandText}>
            <strong>TECHNOCRATIC UNION</strong>
            <span>ENLIGHTENED OPERATIONS NETWORK · NODE 12</span>
          </div>
        </div>
        <div className={styles.session}>
          <div className={styles.operative}>
            <strong>{operativeName}</strong>
            <br />
            clearance verified · session monitored for quality assurance
          </div>
          <button type="button" className={styles.logout} onClick={terminate}>
            Terminate Session
          </button>
        </div>
      </header>

      <div className={styles.body}>
        <nav className={styles.sidebar} aria-label="Portal">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? styles.sideLinkActive : styles.sideLink
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className={styles.sideNote}>
            THIS TERMINAL SERVES THE UNION.
            <br />
            THE UNION SERVES HUMANITY.
            <br />
            REPORT UNAUTHORIZED HOPE TO YOUR SUPERVISOR.
          </div>
        </nav>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>

      <div className={styles.banner}>
        Damian-scale awareness: all procedures logged // deviation is inefficiency
      </div>
    </div>
  )
}
