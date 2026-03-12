import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
  if (!isOpen) return null

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-2xl mx-auto max-h-[80vh] bg-dark-100 border border-neon/30 rounded-2xl overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">Mentions légales</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 p-6 text-gray-300 text-sm space-y-4">
          <div><strong className="text-neon">Éditeur du site</strong><br/>SPINERS PRO COACHING - Sala Kamreuk, Siem Reap, Cambodge - spinerspoker@gmail.com</div>
          <div><strong className="text-neon">Directeur</strong><br/>Aladin Reskallah</div>
          <div><strong className="text-neon">Hébergement</strong><br/>GoDaddy Operating Company, LLC - Scottsdale, AZ 85260, USA</div>
          <div><strong className="text-neon">Activité</strong><br/>Contenus informatifs et coachings poker</div>
          <div><strong className="text-neon">Responsabilité</strong><br/>Le site est à titre informatif. Aucun résultat financier garanti.</div>
          <div><strong className="text-red-400">Prévention du jeu excessif</strong><br/>Le poker comporte des risques. Interdit aux mineurs. Joueurs Info Service: 09 74 75 13 13</div>
          <div><strong className="text-neon">Propriété intellectuelle</strong><br/>Tous les contenus sont protégés. Reproduction interdite sans autorisation.</div>
          <div><strong className="text-neon">Données personnelles</strong><br/>Collecte via formulaires. Droits d'accès et rectification auprès de spinerspoker@gmail.com</div>
        </div>
        <div className="border-t border-white/10 p-6">
          <button onClick={onClose} className="w-full px-6 py-2 bg-neon text-dark-100 rounded-lg font-semibold">
            Fermer
          </button>
        </div>
      </motion.div>
    </>
  )
}
