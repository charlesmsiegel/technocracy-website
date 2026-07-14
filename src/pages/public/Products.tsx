import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { getDivision } from '../../data/divisions'
import pub from './Public.module.css'
import styles from './Products.module.css'

const ALL = 'All'

export default function Products() {
  const [division, setDivision] = useState(ALL)

  const divisionOptions = useMemo(
    () => [...new Set(PRODUCTS.map((p) => p.division))],
    [],
  )

  const results = useMemo(
    () => (division === ALL ? PRODUCTS : PRODUCTS.filter((p) => p.division === division)),
    [division],
  )

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Products</h1>
        <p>
          A sample of what our five divisions sell directly to consumers,
          alongside the industrial and institutional work most of the
          company does. Employee pricing available; see{' '}
          <Link to="/benefits">Benefits</Link>.
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={styles.filterRow}>
          <button
            type="button"
            className={division === ALL ? styles.filterActive : styles.filter}
            onClick={() => setDivision(ALL)}
          >
            All divisions
          </button>
          {divisionOptions.map((slug) => {
            const info = getDivision(slug)
            return (
              <button
                key={slug}
                type="button"
                className={division === slug ? styles.filterActive : styles.filter}
                onClick={() => setDivision(slug)}
              >
                {info?.shortName ?? slug}
              </button>
            )
          })}
        </div>

        <div className={styles.grid}>
          {results.map((product) => {
            const info = getDivision(product.division)
            return (
              <div key={product.id} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.category}>{product.category}</span>
                  <span className={styles.brand}>{info?.shortName}</span>
                </div>
                <span className={styles.name}>{product.name}</span>
                <span className={styles.tagline}>{product.tagline}</span>
                <span className={styles.description}>{product.description}</span>
                <ul className={styles.specs}>
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
                {product.price && <span className={styles.price}>{product.price}</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
