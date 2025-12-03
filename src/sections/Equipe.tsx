import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import SectionHeader from '@/components/SectionHeader'
import { fadeInUpWithDelay } from '@/lib/animations'

const team = [
  {
    name: 'Aladin',
    role: 'Team Manager',
    initial: 'A',
    image: 'https://s.pnimg.net/4F3sg3G3eA67uwHwdLCm06fjxXnjZSRe_gK4kzLE2ao/pr:article-body/aHR0cHM6Ly9wbmlt/Zy5uZXQvdy9hcnRp/Y2xlcy1hdHRhY2ht/ZW50cy8wLzVjZS83/MmI4NDAzMDI4Lmpw/Zw.webp',
    bio: `Aladin est une des figures respectées du poker francophone. Ancien Team Pro Winamax, il est également le seul double vainqueur de la Top Shark Academy, un exploit qui témoigne autant de son talent que de sa constance dans la performance.

Co-fondateur de la Team Cimitarra, Aladin s'est imposé au fil des années comme un joueur polyvalent, capable de grinder plusieurs formats :

• Tournoi, sa spécialité de prédilection
• Cash game, aussi bien online que live
• Et plus récemment, Spin & Go, un format dans lequel il poursuit son développement sous le coaching de Blagops.

Curieux, rigoureux et animé par la volonté permanente de progresser, Aladin a très tôt intégré la dimension essentielle du mental dans le poker. Cette approche globale du jeu — technique, stratégique et psychologique — fait de lui un joueur complet, mais aussi un mentor exigeant et bienveillant.

Aujourd'hui, au sein du projet Spiners, il met à profit son expérience, sa vision long terme et son professionnalisme pour accompagner les élèves dans une progression structurée et durable.`,
    highlights: ['Double vainqueur Top Shark Academy', 'Ancien Team Pro Winamax', 'Co-fondateur Team Cimitarra'],
  },
  {
    name: 'Blagops',
    role: 'Head Coach',
    initial: 'B',
    image: 'https://s3-eu-west-1.amazonaws.com/medias.poker-academie.com/coachs/Blagops_460.png',
    bio: `Blagops est l'un des spécialistes français les plus reconnus dans le format Spins / Expresso, où il a bâti sa réputation à la fois comme joueur high-stakes et comme coach exigeant et respecté. Actif depuis plus de dix ans sur le circuit online, il a atteint les plus hauts niveaux du format, jouant jusqu'aux Spins 400 € sur Betclic et 500 € sur Winamax, tout en affichant une maîtrise technique rare sur un format parmi les plus compétitifs du poker moderne.

Coach depuis 2016, Blagops a accompagné des dizaines de joueurs, du micro à l'élite online. Sa pédagogie structurée, son sens de l'analyse et sa capacité à simplifier des concepts complexes en ont fait une référence pour ceux qui cherchent une progression sérieuse, durable et orientée performance.

Joueur méthodique, adepte du travail théorique poussé et de l'adaptation en temps réel, Blagops s'est imposé parmi les meilleurs coachs français du format grâce à une approche à la fois rigoureuse, logique et profondément orientée vers la compréhension du jeu.

Aujourd'hui, il apporte à Spiners son expertise unique des Spins high-stakes, sa vision stratégique et son expérience du coaching intensif, afin d'aider les élèves à structurer leur progression et à atteindre un niveau de compétence solide, quel que soit leur point de départ.`,
    highlights: ['Spins 400€ Betclic / 500€ Winamax', 'Coach depuis 2016', 'Dizaines de joueurs accompagnés'],
  },
]

export default function Equipe() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="equipe" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="L'équipe"
          title="Tes"
          titleHighlight="coachs"
          description="Des professionnels du poker qui ont prouvé leur valeur sur les tables et qui transmettent maintenant leur expertise."
          className="mb-12"
        />

        {/* Profile Selector */}
        <motion.div
          {...fadeInUpWithDelay(0.2)}
          className="flex justify-center gap-8 md:gap-16 mb-12"
        >
          {team.map((member, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`group flex flex-col items-center transition-all duration-300 ${
                index === selectedIndex ? 'scale-105' : 'opacity-60 hover:opacity-80'
              }`}
            >
              <div
                className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  index === selectedIndex
                    ? 'border-neon shadow-[0_0_30px_rgba(57,255,20,0.4)]'
                    : 'border-white/20 group-hover:border-white/40'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className={`mt-3 text-lg md:text-xl font-bold font-display transition-colors duration-300 ${
                  index === selectedIndex ? 'text-neon' : 'text-white'
                }`}
              >
                {member.name}
              </h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          {...fadeInUpWithDelay(0.3)}
          className="max-w-4xl mx-auto"
        >
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-dark-50 border border-white/10 flex items-center justify-center text-white hover:border-neon/30 hover:text-neon transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-dark-50 border border-white/10 flex items-center justify-center text-white hover:border-neon/30 hover:text-neon transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {team.map((member, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <Card className="bg-dark-100/80 border-white/10 hover:border-neon/30 transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-neon/30 to-neon/10 border border-neon/30 flex items-center justify-center">
                          <span className="text-2xl md:text-3xl font-bold text-neon">
                            {member.initial}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                            {member.name}
                          </h3>
                          <p className="text-neon font-medium">{member.role}</p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Bio */}
                      <div className="prose prose-invert prose-sm max-w-none">
                        {member.bio.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
