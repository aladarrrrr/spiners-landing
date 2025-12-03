import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type ThemeVariant = 'emerald' | 'neon' | 'cyan' | 'amber'

interface ThemeContextType {
  theme: ThemeVariant
  setTheme: (theme: ThemeVariant) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const themeConfig: Record<ThemeVariant, { name: string; color: string }> = {
  emerald: { name: 'Emerald', color: '#10B981' },
  neon: { name: 'Neon', color: '#39FF14' },
  cyan: { name: 'Cyan', color: '#06B6D4' },
  amber: { name: 'Amber', color: '#F59E0B' },
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeVariant>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('spiners-theme') as ThemeVariant
      if (saved && themeConfig[saved]) {
        return saved
      }
    }
    return 'emerald'
  })

  useEffect(() => {
    localStorage.setItem('spiners-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
