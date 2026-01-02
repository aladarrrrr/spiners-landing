import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, TrendingUp, Users, DollarSign, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Users, value: '500+', label: 'Élèves actifs' },
  { icon: DollarSign, value: '5M€+', label: 'Gains cumulés' },
  { icon: TrendingUp, value: '85%', label: 'Taux de progression' },
  { icon: Award, value: '50+', label: 'Titres remportés' },
]

const testimonials = [
  {
    name: 'Thomas K.',
    level: 'De 5€ à 50€',
    avatar: 'TK',
    text: "J'ai rejoint Spiners il y a 6 mois avec un bankroll de 200€. Aujourd'hui je grind les 50€ et je suis profitable. Le coaching est top et la communauté m'a beaucoup aidé.",
    gain: '+12 000€',
  },
  {
    name: 'Marie L.',
    level: 'De 25€ à 100€',
    avatar: 'ML',
    text: "La méthode Spiners est incroyable. Les reviews de sessions m'ont permis de corriger mes leaks et le coaching mental d'Aladin a transformé mon jeu sous pression.",
    gain: '+28 000€',
  },
  {
    name: 'Lucas D.',
    level: 'De 10€ à 100€',
    avatar: 'LD',
    text: "Grâce au pack Elite, j'ai pu bénéficier d'un accompagnement personnalisé qui m'a fait passer un cap. Le staking m'a aussi permis de prendre des risques calculés.",
    gain: '+45 000€',
  },
  {
    name: 'Sarah M.',
    level: 'De 1€ à 25€',
    avatar: 'SM',
    text: "Débutante il y a 1 an, je joue maintenant les 25€ régulièrement. L'équipe est bienveillante et les contenus adaptés à tous les niveaux.",
    gain: '+8 500€',
  },
]

export default function Resultats() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="resultats" className="py-20 md:py-32 bg-dark-100 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-medium mb-4">
            Preuves sociales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Nos <span className="text-gradient">résultats</span> parlent
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Des chiffres concrets et des témoignages authentiques de notre communauté.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-dark/50 border-white/10 hover:border-neon/30 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-neon" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-dark/50 border-neon/20">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-12 h-12 text-neon/20" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon/30 to-neon/10 border border-neon/30 flex items-center justify-center">
                        <span className="text-lg font-bold text-neon">
                          {testimonials[currentIndex].avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-neon text-sm">
                          {testimonials[currentIndex].level}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <span className="px-4 py-2 rounded-full bg-neon/10 text-neon font-bold">
                          {testimonials[currentIndex].gain}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed italic">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-neon w-6'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={prevTestimonial}
                    className="w-10 h-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={nextTestimonial}
                    className="w-10 h-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
