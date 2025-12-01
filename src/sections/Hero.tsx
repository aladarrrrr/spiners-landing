import { motion } from 'framer-motion'
import { ChevronDown, Spade, Heart, Diamond, Club } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingCards = [
  { icon: Spade, delay: 0, x: -120, y: -80 },
  { icon: Heart, delay: 0.2, x: 150, y: -60 },
  { icon: Diamond, delay: 0.4, x: -100, y: 100 },
  { icon: Club, delay: 0.6, x: 180, y: 80 },
]

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon/10 rounded-full blur-[80px]" />

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
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: card.delay,
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-medium mb-6">
              Coaching Poker Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
          >
            <span className="text-white">Coaching </span>
            <span className="text-gradient glow-text">Spins & Go</span>
            <br />
            <span className="text-white">nouvelle génération</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Accompagnement pro pour progresser rapidement en Spins & Go.
            Rejoins une équipe de coachs expérimentés et passe au niveau supérieur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="shadow-neon-lg text-base"
            >
              Rejoindre Spiners
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#offres')}
            >
              Découvrir les offres
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-8 text-gray-500"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Élèves formés</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5M€+</div>
              <div className="text-sm">Gains cumulés</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
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
