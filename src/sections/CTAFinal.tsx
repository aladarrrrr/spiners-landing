import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function CTAFinal() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    limite: '',
    objectifs: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon/20 via-neon/5 to-dark" />
      <div className="absolute inset-0 bg-dark/80" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-neon/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neon/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-neon/20 border border-neon/40 text-neon text-sm font-medium mb-4">
              Prêt à commencer ?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
              Rejoins <span className="text-gradient glow-text">Spiners</span> maintenant
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Envoie ta candidature et un membre de l'équipe te contactera
              sous 24h pour discuter de tes objectifs.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-dark-100/80 backdrop-blur-lg border-neon/20 shadow-neon">
              <CardContent className="p-6 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-neon/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-neon" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Candidature envoyée !
                    </h3>
                    <p className="text-gray-400">
                      Nous te recontactons très rapidement. À bientôt dans l'équipe !
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="pseudo"
                          className="text-sm font-medium text-gray-300"
                        >
                          Pseudo poker
                        </label>
                        <Input
                          id="pseudo"
                          name="pseudo"
                          placeholder="Ton pseudo sur les rooms"
                          value={formData.pseudo}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-300"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="ton@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="limite"
                        className="text-sm font-medium text-gray-300"
                      >
                        Limite actuelle
                      </label>
                      <Input
                        id="limite"
                        name="limite"
                        placeholder="Ex: Spins 5€ sur Winamax"
                        value={formData.limite}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="objectifs"
                        className="text-sm font-medium text-gray-300"
                      >
                        Tes objectifs
                      </label>
                      <Textarea
                        id="objectifs"
                        name="objectifs"
                        placeholder="Décris tes objectifs poker : limites visées, temps disponible, ce que tu attends du coaching..."
                        value={formData.objectifs}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full shadow-neon-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma candidature
                    </Button>

                    <p className="text-center text-gray-500 text-sm">
                      En envoyant ce formulaire, tu acceptes d'être recontacté par l'équipe Spiners.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
