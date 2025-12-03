import { createContext, useContext, useState, ReactNode } from 'react'

interface ApplicationModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ApplicationModalContext = createContext<ApplicationModalContextType | undefined>(undefined)

export function ApplicationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <ApplicationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ApplicationModalContext.Provider>
  )
}

export function useApplicationModal() {
  const context = useContext(ApplicationModalContext)
  if (context === undefined) {
    throw new Error('useApplicationModal must be used within an ApplicationModalProvider')
  }
  return context
}
