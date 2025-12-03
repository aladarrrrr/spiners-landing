import { motion } from 'framer-motion'
import { Clock, TrendingUp, Calendar, Briefcase, Users, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import SectionHeader from '@/components/SectionHeader'
import { staggerContainer, staggerItem } from '@/lib/animations'

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
    icon: Calendar,
    title: 'Plus de flexibilité',
    description:
      'Liberté totale sur les horaires. Jouez quand vous voulez, aussi longtemps que vous voulez.',
  },
  {
    icon: Briefcase,
    title: 'Compatible emploi du temps',
    description:
      'Possibilité de grind même avec un emploi du temps chargé. Idéal en complément d\'une activité.',
  },
  {
    icon: Users,
    title: 'Vie sociale préservée',
    description:
      'Plus facile pour la vie sociale et la vie de famille. Le poker s\'adapte à votre rythme.',
  },
  {
    icon: Zap,
    title: 'Progression rapide',
    description:
      'Volume de mains élevé = apprentissage accéléré. Progressez plus vite que jamais.',
  },
]

export default function PourquoiSpins() {
  return (
    <section id="pourquoi" className="py-20 md:py-32 relative overflow-hidden bg-[#050a05]">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Le format roi"
          title="Pourquoi les"
          titleHighlight="Spins & Go ?"
          description="Sûrement le format le plus facile et le plus rentable du poker en ligne. Découvrez pourquoi des milliers de joueurs ont fait le switch."
        />

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="h-full group hover:border-neon/30 hover:shadow-neon transition-all duration-300 bg-dark-100/80">
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
