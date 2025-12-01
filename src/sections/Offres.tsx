import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: '99',
    description: 'Pour débuter en Spins & Go avec un accompagnement solide.',
    features: [
      'Accès Discord privé',
      'Contenu vidéo de base',
      'Review de sessions (2/mois)',
      'Groupe de travail débutant',
      'Support par messagerie',
    ],
    popular: false,
  },
  {
    name: 'Grind',
    price: '249',
    description: 'Le pack complet pour passer au niveau supérieur.',
    features: [
      'Tout le pack Starter',
      'Coaching live hebdomadaire',
      'Review de sessions illimitées',
      'Accès aux ranges GTO',
      'Suivi personnalisé',
      'Challenges mensuels avec prizes',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '499',
    description: 'Accompagnement premium pour les joueurs sérieux.',
    features: [
      'Tout le pack Grind',
      'Coaching 1-on-1 (4h/mois)',
      'Analyse de leaks avancée',
      'Préparation mentale',
      'Accès aux sessions live des coachs',
      'Staking partnership possible',
      'Priorité support 24/7',
    ],
    popular: false,
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

export default function Offres() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="offres" className="py-20 md:py-32 bg-dark-100 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[150px]" />

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
            Nos formules
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Choisis ton <span className="text-gradient">niveau</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trois formules adaptées à ton profil et tes ambitions.
            Commence où tu veux, évolue à ton rythme.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`h-full relative ${
                  plan.popular
                    ? 'border-neon shadow-neon-lg scale-105 bg-dark-100'
                    : 'bg-dark-100/50 hover:border-white/20'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-neon text-black text-sm font-semibold">
                      <Star className="w-4 h-4" fill="currentColor" />
                      Populaire
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400 mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-white">{plan.price}€</span>
                    <span className="text-gray-400">/mois</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-neon" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4 pb-8">
                  <Button
                    onClick={scrollToContact}
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.popular ? 'Commencer maintenant' : 'Choisir ce plan'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
