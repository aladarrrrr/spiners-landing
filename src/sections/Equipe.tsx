import { motion } from 'framer-motion'
import { Trophy, Target, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const team = [
  {
    name: 'Blagops',
    role: 'Head Coach',
    image: '/team/blagops.jpg',
    description: 'Spécialiste des hautes limites, Blagops cumule plus de 10 ans d\'expérience en poker professionnel.',
    achievements: [
      { icon: Trophy, text: '2M€+ de gains en carrière' },
      { icon: Target, text: 'Expert stratégie ICM' },
      { icon: Users, text: '300+ élèves coachés' },
      { icon: TrendingUp, text: 'Top 10 France Spins' },
    ],
  },
  {
    name: 'Aladin',
    role: 'Coach Mental & Stratégie',
    image: '/team/aladin.jpg',
    description: 'Champion de tournois et expert en préparation mentale, Aladin t\'aide à performer sous pression.',
    achievements: [
      { icon: Trophy, text: '1.5M€+ de gains live' },
      { icon: Target, text: 'Coaching mental certifié' },
      { icon: Users, text: '200+ élèves accompagnés' },
      { icon: TrendingUp, text: 'Spécialiste des finals' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Equipe() {
  return (
    <section id="equipe" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[150px]" />

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
            L'équipe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Tes <span className="text-gradient">coachs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Des professionnels du poker qui ont prouvé leur valeur sur les tables
            et qui transmettent maintenant leur expertise.
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:border-neon/50 hover:shadow-neon transition-all duration-300 bg-dark-100/80 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Avatar Placeholder */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon/30 to-neon/10 border border-neon/30 flex items-center justify-center">
                      <span className="text-3xl font-bold text-neon">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-display group-hover:text-neon transition-colors">
                        {member.name}
                      </CardTitle>
                      <p className="text-neon font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {member.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-center gap-3 p-3 rounded-xl bg-dark/50 border border-white/5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center shrink-0">
                          <achievement.icon className="w-4 h-4 text-neon" />
                        </div>
                        <span className="text-sm text-gray-300">{achievement.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
