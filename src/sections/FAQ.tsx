import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import SectionHeader from '@/components/SectionHeader'
import { fadeInUpWithDelay } from '@/lib/animations'

const faqs = [
  {
    question: 'Quel niveau faut-il pour rejoindre Spiners ?',
    answer:
      'Pour la Team Coaching For Profit, nous recherchons des grinders déjà gagnants. Nous restons inclusifs : contenu gratuit sur YouTube et cours de rattrapage pour ceux qui veulent rejoindre la team dans le futur.',
  },
  {
    question: 'Comment se déroule le coaching ?',
    answer:
      'Le coaching se fait via Discord : nous privilégions le coaching individuel pour un travail de qualité et efficace. Matériel nécessaire : Discord, un ordinateur, un tracker obligatoire pour analyser les mains et mesurer la progression.',
  },
  {
    question: 'Y a-t-il un engagement de durée ?',
    answer:
      'Nous pouvons être flexibles et voir au cas par cas, mais pour obtenir des résultats significatifs, il est préférable de travailler sur 1 an minimum.',
  },
  {
    question: 'Que se passe-t-il après avoir postulé ?',
    answer:
      'Nous analysons votre profil, votre niveau et vos objectifs. Nous vous répondons dans tous les cas, et si votre profil nous intéresse nous vous contacterons pour un entretien. ',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Questions fréquentes"
          title="Une"
          titleHighlight="question ?"
        />

        {/* FAQ Accordion */}
        <motion.div
          {...fadeInUpWithDelay(0.1)}
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
