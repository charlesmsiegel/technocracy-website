import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import type { ConventionSlug } from '../data/types'

export const DEFAULT_OPERATIVE = 'Operative 7741-C'

interface Session {
  authenticated: boolean
  operativeName: string
  /** The Convention selected at login; scopes which response files are visible. */
  convention: ConventionSlug | null
  login: (name: string, convention: ConventionSlug) => void
  logout: () => void
}

const SessionContext = createContext<Session | null>(null)

export function SessionProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [operativeName, setOperativeName] = useState('')
  const [convention, setConvention] = useState<ConventionSlug | null>(null)

  const login = useCallback((name: string, chosen: ConventionSlug) => {
    setOperativeName(name.trim() || DEFAULT_OPERATIVE)
    setConvention(chosen)
    setAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    // As a transition, this batches with the router's own (transition-based)
    // navigation to '/' — a synchronous update here would re-render the still
    // mounted RequireClearance first and bounce logout to the login page.
    startTransition(() => {
      setAuthenticated(false)
      setOperativeName('')
      setConvention(null)
    })
  }, [])

  const value = useMemo(
    () => ({ authenticated, operativeName, convention, login, logout }),
    [authenticated, operativeName, convention, login, logout],
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession(): Session {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSession must be used within SessionProvider')
  return ctx
}
