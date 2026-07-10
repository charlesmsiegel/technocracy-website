import { Link } from 'react-router-dom'
import { PORTFOLIO_NOTE, SUBSIDIARIES } from '../../data/portfolio'
import pub from './Public.module.css'

/* Deliberately the plainest page on the site — a wall of operating
   companies in the grand tradition of holding-company web design. */
export default function Portfolio() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <Link to="/investors" className={pub.backLink}>
          ← Investor Relations
        </Link>
        <h1>Operating Company Links</h1>
      </div>
      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose} style={{ marginBottom: '2rem' }}>
          {PORTFOLIO_NOTE.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <ul
          style={{
            columns: '3 220px',
            columnGap: '2.5rem',
            listStyle: 'none',
            padding: 0,
            fontSize: '0.92rem',
            lineHeight: 2,
          }}
        >
          {SUBSIDIARIES.map((name) => (
            <li key={name} style={{ breakInside: 'avoid' }}>
              <span
                title="This operating company maintains its own web presence."
                style={{
                  color: 'var(--accent)',
                  textDecoration: 'underline',
                  cursor: 'help',
                }}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
        <p className={pub.meta} style={{ marginTop: '2rem' }}>
          * List current as of this morning.
        </p>
      </div>
    </div>
  )
}
