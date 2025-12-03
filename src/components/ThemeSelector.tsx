import { motion } from 'framer-motion'
import { useTheme, themeConfig, ThemeVariant } from '@/contexts/ThemeContext'

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1.5">
      {(Object.keys(themeConfig) as ThemeVariant[]).map((variant) => (
        <motion.button
          key={variant}
          onClick={() => setTheme(variant)}
          className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
            theme === variant
              ? 'border-white scale-110'
              : 'border-transparent hover:border-white/50 hover:scale-105'
          }`}
          style={{ backgroundColor: themeConfig[variant].color }}
          title={themeConfig[variant].name}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  )
}
