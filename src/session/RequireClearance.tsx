import { Navigate, Outlet } from 'react-router-dom'
import { useSession } from './SessionContext'

export default function RequireClearance() {
  const { authenticated } = useSession()
  return authenticated ? <Outlet /> : <Navigate to="/personnel" replace />
}
