import { Link } from 'react-router-dom'
import pub from './Public.module.css'

export default function NotFound() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>404 — Page not found</h1>
        <p>
          The page you requested does not exist. If you believe it existed
          previously, please disregard that belief.{' '}
          <Link to="/">Return to a page that exists.</Link>
        </p>
      </div>
    </div>
  )
}
