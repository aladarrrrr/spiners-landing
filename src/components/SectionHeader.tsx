import { motion } from 'framer-motion'
import { fadeInUpOnView } from '@/lib/animations'

interface SectionHeaderProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  className = 'mb-16',
}: SectionHeaderProps) {
  return (
    <motion.div
      {...fadeInUpOnView}
      className={`text-center ${className}`}
    >
      <span className="inline-block px-4 py-2 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-medium mb-4">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
        {title} <span className="text-gradient">{titleHighlight}</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        {description}
      </p>
    </motion.div>
  )
}
