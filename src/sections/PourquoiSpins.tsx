import { motion } from 'framer-motion'
import { Clock, TrendingUp, Trophy, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Clock,
    title: 'Sessions courtes',
    description:
      'Parties de 3 à 7 minutes. Parfait pour jouer même avec un emploi du temps chargé.',
  },
  {
    icon: TrendingUp,
    title: 'Variance maîtrisée',
    description:
      'Un format où le skill fait la différence. Moins de variance, plus de régularité.',
  },
  {
    icon: Trophy,
    title: 'Multiplicateurs géants',
    description:
      "Jusqu'à 10 000x le buy-in. Des gains exceptionnels accessibles à tous les niveaux.",
  },
  {
    icon: Zap,
    title: 'Progression rapide',
    description:
      'Volume de mains élevé = apprentissage accéléré. Progressez plus vite que jamais.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function PourquoiSpins() {
  return (
    <section id="pourquoi" className="py-20 md:py-32 relative overflow-hidden bg-[#050a05]">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon/5 rounded-full blur-[120px]" />

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
            Le format roi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Pourquoi les <span className="text-gradient">Spins & Go</span> ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Le format le plus excitant et rentable du poker en ligne.
            Découvrez pourquoi des milliers de joueurs ont fait le switch.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:border-neon/50 hover:shadow-neon transition-all duration-300 bg-dark-100/80">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-5 group-hover:bg-neon/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-neon" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-neon transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
