import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoFull from '@/assets/logo-full.png'

// Poker chip positions for floating animation
const pokerChips = [
  { delay: 0, x: -200, y: -120, size: 'w-12 h-12 md:w-16 md:h-16', rotation: 15 },
  { delay: 0.2, x: 220, y: -80, size: 'w-16 h-16 md:w-20 md:h-20', rotation: -10 },
  { delay: 0.4, x: -180, y: 140, size: 'w-14 h-14 md:w-18 md:h-18', rotation: 25 },
  { delay: 0.6, x: 250, y: 100, size: 'w-10 h-10 md:w-14 md:h-14', rotation: -20 },
  { delay: 0.3, x: 50, y: 180, size: 'w-8 h-8 md:w-12 md:h-12', rotation: 45 },
]

// Poker chip SVG component
const PokerChip = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#39FF14" strokeWidth="3" />
    <circle cx="50" cy="50" r="35" fill="#0a0a0a" stroke="#39FF14" strokeWidth="2" />
    <circle cx="50" cy="50" r="20" fill="#1a1a1a" stroke="#39FF14" strokeWidth="1.5" />
    {/* Edge notches */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <rect
        key={angle}
        x="47"
        y="2"
        width="6"
        height="10"
        rx="2"
        fill="#39FF14"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
  </svg>
)

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background matching banner */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f0a] via-[#0d2d0d] to-[#041504]" />

      {/* Animated glow spots */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-neon/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-neon/8 rounded-full blur-[80px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating Poker Chips */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {pokerChips.map((chip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.7,
              scale: 1,
              x: chip.x,
              y: chip.y,
            }}
            transition={{
              delay: chip.delay + 0.5,
              duration: 0.6,
              type: 'spring',
            }}
            className="absolute"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [chip.rotation, chip.rotation + 10, chip.rotation],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={chip.size}
            >
              <PokerChip className="w-full h-full drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="mb-8"
          >
            <img
              src={logoFull}
              alt="Spiners"
              className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-[0_0_30px_rgba(57,255,20,0.4)]"
            />
          </motion.div>

          {/* Tagline like banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 space-y-1"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-cream uppercase">
              Best Coaching.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-cream uppercase">
              Easy Grind.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-neon uppercase glow-text">
              Easy Money.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Accompagnement pro pour progresser rapidement en Spins & Go.
            Rejoins une équipe de coachs expérimentés et passe au niveau supérieur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="shadow-neon-lg text-base font-bold"
            >
              Rejoindre Spiners
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#offres')}
              className="font-bold"
            >
              Découvrir les offres
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-6 sm:gap-8 text-gray-500"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
              <div className="text-xs sm:text-sm">Élèves formés</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-neon/30" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">5M€+</div>
              <div className="text-xs sm:text-sm">Gains cumulés</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-neon/30" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
              <div className="text-xs sm:text-sm">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection('#pourquoi')}
        >
          <ChevronDown className="w-8 h-8 text-neon" />
        </motion.div>
      </motion.div>
    </section>
  )
}
