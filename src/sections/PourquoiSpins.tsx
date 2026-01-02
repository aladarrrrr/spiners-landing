import { motion } from 'framer-motion'
import { TrendingUp, Calendar, Zap, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import SectionHeader from '@/components/SectionHeader'
import { fadeInUpWithDelay } from '@/lib/animations'

const features = [
  {
    icon: DollarSign,
    title: 'Format le plus rentable',
    description:
      'Sûrement le format le plus facile et le plus rentable du poker en ligne. Découvrez pourquoi des milliers de joueurs l\'ont choisi.',
  },
  {
    icon: TrendingUp,
    title: 'Variance maîtrisée',
    description:
      'Un format où le skill fait la différence. Moins de variance, plus de régularité.',
  },
  {
    icon: Calendar,
    title: 'Flexibilité totale',
    description:
      'Liberté totale sur les horaires, compatible avec un emploi du temps chargé. Le poker s\'adapte à votre rythme et préserve votre vie sociale et familiale.',
  },
  {
    icon: Zap,
    title: 'Progression rapide',
    description:
      'Vous jouez plus de mains, vous progresserez donc plus rapidement. Atteignez vos objectifs de gains plus vite que jamais.',
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
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUpWithDelay(0.2 + index * 0.1)}
            >
              <Card className="h-full group hover:border-neon/30 hover:shadow-neon transition-all bg-dark-100/80">
                <CardContent className="p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold font-display group-hover:text-neon transition-colors flex-1 pr-4">
                      {feature.title}
                    </h3>
                    <div className="w-14 h-14 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center group-hover:bg-neon/20 transition-colors flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-neon" />
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-balance">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
