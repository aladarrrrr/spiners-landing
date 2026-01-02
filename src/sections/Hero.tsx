import { motion } from 'framer-motion'
import { ChevronDown, Spade, Heart, Diamond, Club } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoFull from '@/assets/logo-full.png'
import { scrollToSection } from '@/lib/scroll'
import { fadeInUp } from '@/lib/animations'

const floatingCards = [
  { icon: Spade, delay: 0, x: -180, y: -100, rotation: -15 },
  { icon: Heart, delay: 0.15, x: 200, y: -80, rotation: 12 },
  { icon: Diamond, delay: 0.3, x: -220, y: 120, rotation: 20 },
  { icon: Club, delay: 0.45, x: 240, y: 100, rotation: -18 },
  { icon: Spade, delay: 0.2, x: 80, y: 160, rotation: 25 },
  { icon: Heart, delay: 0.35, x: -100, y: -160, rotation: -10 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050a05] via-[#0a150a] to-[#030503]" />

      {/* Animated glow spots */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-neon/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-neon/5 rounded-full blur-[80px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating Cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.6,
              scale: 1,
              x: card.x,
              y: card.y,
            }}
            transition={{
              delay: card.delay + 0.5,
              duration: 0.5,
              type: 'spring',
            }}
            className="absolute"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [card.rotation, card.rotation + 8, card.rotation],
              }}
              transition={{
                duration: 5 + index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-16 h-24 md:w-20 md:h-28 rounded-xl bg-gradient-to-br from-dark-50 to-dark-100 border border-neon/30 flex items-center justify-center shadow-neon"
            >
              <card.icon className="w-8 h-8 md:w-10 md:h-10 text-neon" />
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

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 space-y-1"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-cream uppercase">
              Best Coaching
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-cream uppercase">
              Easy Grind
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-neon uppercase glow-text">
              Easy Money
            </p>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Accompagnement pro pour progresser rapidement en Spins & Go.
            Rejoins une équipe de coachs expérimentés et passe au niveau supérieur.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#equipe')}
              className="font-bold"
            >
              Découvrir notre équipe
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
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

      {/* Bottom delimiter */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  )
}
