import { motion } from 'framer-motion'
import { useApplicationModal } from '@/contexts/ApplicationModalContext'
import { Button } from '@/components/ui/button'

export default function FloatingCTA() {
  const { openModal } = useApplicationModal()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-8 right-8 md:bottom-10 md:right-10 z-50"
    >
      <Button
        size="lg"
        onClick={openModal}
        className="shadow-neon-lg text-lg font-bold px-10 py-7 rounded-xl"
      >
        Postulez
      </Button>
    </motion.div>
  )
}
