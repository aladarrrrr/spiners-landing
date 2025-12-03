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
      'Pour la Team Coaching For Profit, nous recherchons des grinders déjà gagnants en 10€+. Nous restons inclusifs : contenu gratuit sur YouTube et cours de rattrapage pour ceux qui veulent rejoindre la team dans le futur.',
  },
  {
    question: 'Comment se déroule le coaching ?',
    answer:
      'Le coaching se fait via Discord : en individuel (travail personnalisé) ou en collectif (thématiques communes, analyses de mains). Matériel nécessaire : Discord, un ordinateur, un tracker obligatoire pour analyser les mains et mesurer la progression.',
  },
  {
    question: 'Y a-t-il un engagement de durée ?',
    answer:
      'Nous pouvons être flexibles et voir au cas par cas, mais pour obtenir des résultats significatifs, il est préférable de travailler sur plusieurs mois.',
  },
  {
    question: 'Que se passe-t-il après avoir postulé ?',
    answer:
      'Nous analysons votre profil, votre niveau et vos objectifs. Si votre profil correspond, nous vous recontactons pour établir un plan d\'action personnalisé.',
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
