import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Send, CheckCircle, Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useApplicationModal } from '@/contexts/ApplicationModalContext'

// Types
interface FormData {
  // Step 1 - Identity
  fullName: string
  birthDate: string
  profession: string
  discordId: string
  otherContact: string
  // Step 2 - Experience
  currentLimit: string
  monthlyVolume: string
  tableCount: string
  weeklyHours: string
  bankroll: string
  previouslyStaked: string
  stakedDetails: string
  poolEV: string
  // Step 3 - Goals
  objectives: string
  additionalInfo: string
}

const initialFormData: FormData = {
  fullName: '',
  birthDate: '',
  profession: '',
  discordId: '',
  otherContact: '',
  currentLimit: '',
  monthlyVolume: '',
  tableCount: '',
  weeklyHours: '',
  bankroll: '',
  previouslyStaked: '',
  stakedDetails: '',
  poolEV: '',
  objectives: '',
  additionalInfo: '',
}

// Options for selectable choices
const limitOptions = ['1€', '2€', '5€', '10€', '25€', '50€', '100€+']
const volumeOptions = ['<500', '500-1000', '1000-2000', '2000-5000', '5000+']
const tableOptions = ['1-2', '3-4', '5-6', '7-8', '9+']
const hoursOptions = ['<10h', '10-20h', '20-30h', '30-40h', '40h+']
const bankrollOptions = ['<500€', '500-1000€', '1000-2500€', '2500-5000€', '5000€+']

// Choice Button Component
function ChoiceButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        selected
          ? 'bg-neon text-black'
          : 'bg-dark-50 text-gray-300 hover:bg-dark-50/80 hover:text-white border border-white/10'
      }`}
    >
      {children}
    </button>
  )
}

// Step Indicator
function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index < currentStep
              ? 'w-8 bg-neon'
              : index === currentStep
              ? 'w-8 bg-neon/50'
              : 'w-2 bg-white/20'
          }`}
        />
      ))}
    </div>
  )
}

export default function ApplicationModal() {
  const { isOpen, closeModal } = useApplicationModal()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 3

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.fullName && formData.birthDate && formData.discordId
      case 1:
        return (
          formData.currentLimit &&
          formData.monthlyVolume &&
          formData.tableCount &&
          formData.weeklyHours &&
          formData.bankroll &&
          formData.previouslyStaked &&
          formData.poolEV
        )
      case 2:
        return formData.objectives
      default:
        return false
    }
  }

  const nextStep = () => {
    if (step < totalSteps - 1 && canProceed()) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    if (!canProceed()) return

    setIsSubmitting(true)

    // Format message for Discord
    const discordMessage = {
      content: null,
      embeds: [
        {
          title: '🎰 Nouvelle candidature Spiners',
          color: 1096009, // Emerald color
          fields: [
            { name: '👤 Nom', value: formData.fullName, inline: true },
            { name: '📅 Naissance', value: formData.birthDate, inline: true },
            { name: '💼 Profession', value: formData.profession || 'Non renseigné', inline: true },
            { name: '🎮 Discord', value: formData.discordId, inline: true },
            { name: '📱 Autre contact', value: formData.otherContact || 'Non renseigné', inline: true },
            { name: '\u200B', value: '**📊 Expérience Poker**', inline: false },
            { name: 'Limite', value: formData.currentLimit, inline: true },
            { name: 'Volume/mois', value: formData.monthlyVolume, inline: true },
            { name: 'Tables', value: formData.tableCount, inline: true },
            { name: 'Heures/sem', value: formData.weeklyHours, inline: true },
            { name: 'Bankroll', value: formData.bankroll, inline: true },
            { name: 'Pool EV', value: formData.poolEV, inline: true },
            {
              name: 'Staké/coaché avant',
              value: formData.previouslyStaked === 'oui'
                ? `Oui - ${formData.stakedDetails || 'Pas de détails'}`
                : 'Non',
              inline: false,
            },
            { name: '🎯 Objectifs', value: formData.objectives, inline: false },
            {
              name: '💬 Infos supplémentaires',
              value: formData.additionalInfo || 'Aucune',
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
      thread_name: `Candidature - ${formData.fullName}`,
    }

    try {
      // Replace with your Discord webhook URL
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL

      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(discordMessage),
        })
      } else {
        // Fallback: log to console if no webhook configured
        console.log('Application submitted:', formData)
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting application:', error)
      // Still show success to user
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    closeModal()
    // Reset form after animation
    setTimeout(() => {
      setStep(0)
      setFormData(initialFormData)
      setIsSubmitted(false)
    }, 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-display">
            {isSubmitted ? 'Candidature envoyée !' : 'Rejoindre Spiners'}
          </DialogTitle>
          {!isSubmitted && (
            <DialogDescription>
              {step === 0 && 'Commençons par faire connaissance'}
              {step === 1 && 'Parle-nous de ton expérience poker'}
              {step === 2 && 'Quels sont tes objectifs ?'}
            </DialogDescription>
          )}
        </DialogHeader>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-neon" />
            </div>
            <p className="text-gray-400 mb-6">
              Nous avons bien reçu ta candidature. Un membre de l'équipe te contactera très
              rapidement sur Discord.
            </p>
            <Button onClick={handleClose}>Fermer</Button>
          </motion.div>
        ) : (
          <>
            <StepIndicator currentStep={step} totalSteps={totalSteps} />

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Step 1: Identity */}
                {step === 0 && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Nom Prénom <span className="text-neon">*</span>
                      </label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Date de naissance <span className="text-neon">*</span>
                      </label>
                      <Input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => updateField('birthDate', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Profession</label>
                      <Input
                        value={formData.profession}
                        onChange={(e) => updateField('profession', e.target.value)}
                        placeholder="Développeur, Étudiant..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Identifiant Discord <span className="text-neon">*</span>
                      </label>
                      <Input
                        value={formData.discordId}
                        onChange={(e) => updateField('discordId', e.target.value)}
                        placeholder="pseudo ou pseudo#1234"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Autre contact (WhatsApp/Telegram)
                      </label>
                      <Input
                        value={formData.otherContact}
                        onChange={(e) => updateField('otherContact', e.target.value)}
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </>
                )}

                {/* Step 2: Experience */}
                {step === 1 && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Limite actuelle <span className="text-neon">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {limitOptions.map((option) => (
                          <ChoiceButton
                            key={option}
                            selected={formData.currentLimit === option}
                            onClick={() => updateField('currentLimit', option)}
                          >
                            {option}
                          </ChoiceButton>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Volume mensuel <span className="text-neon">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {volumeOptions.map((option) => (
                          <ChoiceButton
                            key={option}
                            selected={formData.monthlyVolume === option}
                            onClick={() => updateField('monthlyVolume', option)}
                          >
                            {option}
                          </ChoiceButton>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Nombre de tables <span className="text-neon">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {tableOptions.map((option) => (
                          <ChoiceButton
                            key={option}
                            selected={formData.tableCount === option}
                            onClick={() => updateField('tableCount', option)}
                          >
                            {option}
                          </ChoiceButton>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Heures de grind/semaine <span className="text-neon">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {hoursOptions.map((option) => (
                          <ChoiceButton
                            key={option}
                            selected={formData.weeklyHours === option}
                            onClick={() => updateField('weeklyHours', option)}
                          >
                            {option}
                          </ChoiceButton>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Bankroll actuelle <span className="text-neon">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {bankrollOptions.map((option) => (
                          <ChoiceButton
                            key={option}
                            selected={formData.bankroll === option}
                            onClick={() => updateField('bankroll', option)}
                          >
                            {option}
                          </ChoiceButton>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Déjà staké/coaché ? <span className="text-neon">*</span>
                      </label>
                      <div className="flex gap-2">
                        <ChoiceButton
                          selected={formData.previouslyStaked === 'oui'}
                          onClick={() => updateField('previouslyStaked', 'oui')}
                        >
                          Oui
                        </ChoiceButton>
                        <ChoiceButton
                          selected={formData.previouslyStaked === 'non'}
                          onClick={() => updateField('previouslyStaked', 'non')}
                        >
                          Non
                        </ChoiceButton>
                      </div>
                      {formData.previouslyStaked === 'oui' && (
                        <Input
                          value={formData.stakedDetails}
                          onChange={(e) => updateField('stakedDetails', e.target.value)}
                          placeholder="Par qui ? (coach, structure...)"
                          className="mt-2"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Pool EV ? <span className="text-neon">*</span>
                      </label>
                      <div className="flex gap-2">
                        <ChoiceButton
                          selected={formData.poolEV === 'oui'}
                          onClick={() => updateField('poolEV', 'oui')}
                        >
                          Oui
                        </ChoiceButton>
                        <ChoiceButton
                          selected={formData.poolEV === 'non'}
                          onClick={() => updateField('poolEV', 'non')}
                        >
                          Non
                        </ChoiceButton>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3: Goals */}
                {step === 2 && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Tes objectifs poker <span className="text-neon">*</span>
                      </label>
                      <Textarea
                        value={formData.objectives}
                        onChange={(e) => updateField('objectives', e.target.value)}
                        placeholder="Limites visées, temps disponible, ce que tu attends du coaching..."
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Autre chose à partager ?
                      </label>
                      <Textarea
                        value={formData.additionalInfo}
                        onChange={(e) => updateField('additionalInfo', e.target.value)}
                        placeholder="Informations personnelles, motivation, questions..."
                        rows={3}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between pt-4">
              <Button
                variant="ghost"
                onClick={prevStep}
                disabled={step === 0}
                className={step === 0 ? 'invisible' : ''}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Précédent
              </Button>
              {step < totalSteps - 1 ? (
                <Button onClick={nextStep} disabled={!canProceed()}>
                  Suivant
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!canProceed() || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer
                    </>
                  )}
                </Button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
