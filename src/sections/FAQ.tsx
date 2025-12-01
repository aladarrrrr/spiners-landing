import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

const faqs = [
  {
    question: 'Quel niveau faut-il pour rejoindre Spiners ?',
    answer:
      'Spiners accueille tous les niveaux, du débutant au joueur confirmé. Nos formules sont adaptées à chaque profil. Le pack Starter est parfait pour débuter, tandis que le pack Elite convient aux joueurs expérimentés cherchant à atteindre les hautes limites.',
  },
  {
    question: 'Comment se déroule le coaching ?',
    answer:
      'Le coaching se fait principalement via Discord. Tu auras accès à des sessions live, des reviews de tes parties, du contenu vidéo exclusif et un accompagnement personnalisé selon ta formule. Les coachs sont disponibles pour répondre à tes questions et analyser ton jeu.',
  },
  {
    question: 'Quelle bankroll faut-il pour commencer ?',
    answer:
      'Nous recommandons un minimum de 100 buy-ins pour la limite que tu veux jouer. Par exemple, 100€ pour les Spins à 1€, 500€ pour les 5€. Nos coachs t\'aident à gérer ta bankroll de manière optimale pour minimiser les risques.',
  },
  {
    question: 'Puis-je changer de formule en cours de route ?',
    answer:
      'Absolument ! Tu peux upgrader ta formule à tout moment. La différence de prix sera calculée au prorata. Beaucoup de nos élèves commencent par le pack Starter et évoluent vers Grind ou Elite au fur et à mesure de leur progression.',
  },
  {
    question: 'Y a-t-il un engagement de durée ?',
    answer:
      'Non, nos abonnements sont mensuels sans engagement. Tu peux arrêter ou mettre en pause à tout moment. Cela dit, nous recommandons un minimum de 3 mois pour voir des résultats significatifs.',
  },
  {
    question: 'Comment fonctionne le staking ?',
    answer:
      'Le staking est disponible pour les membres Elite après évaluation. Nous investissons dans ton jeu en échange d\'un pourcentage des gains. C\'est une opportunité de jouer des limites plus élevées sans risquer ton propre argent. Les conditions sont discutées individuellement.',
  },
  {
    question: 'Sur quelles rooms puis-je jouer ?',
    answer:
      'Notre coaching s\'adapte à toutes les principales rooms : Winamax, PokerStars, GGPoker, PMU, Unibet... Les stratégies de base sont les mêmes, et nous adaptons certains conseils selon les spécificités de chaque room.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[150px]" />

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
            Questions fréquentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Une <span className="text-gradient">question</span> ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Retrouve les réponses aux questions les plus posées par notre communauté.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-dark-100/50 border-white/10">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
