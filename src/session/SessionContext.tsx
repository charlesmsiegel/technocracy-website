import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export const DEFAULT_OPERATIVE = 'Operative 7741-C'

interface Session {
  authenticated: boolean
  operativeName: string
  login: (name: string) => void
  logout: () => void
}

const SessionContext = createContext<Session | null>(null)

export function SessionProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [operativeName, setOperativeName] = useState('')

  const login = useCallback((name: string) => {
    setOperativeName(name.trim() || DEFAULT_OPERATIVE)
    setAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    setAuthenticated(false)
    setOperativeName('')
  }, [])

  const value = useMemo(
    () => ({ authenticated, operativeName, login, logout }),
    [authenticated, operativeName, login, logout],
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession(): Session {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSession must be used within SessionProvider')
  return ctx
}
