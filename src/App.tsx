import {
  Navbar,
  Hero,
  PourquoiSpins,
  Equipe,
  FAQ,
  Footer,
} from './sections'
import { ThemeProvider } from './contexts/ThemeContext'
import { ApplicationModalProvider } from './contexts/ApplicationModalContext'
import ApplicationModal from './components/ApplicationModal'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <ThemeProvider>
      <ApplicationModalProvider>
        <div className="min-h-screen bg-dark text-white overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <PourquoiSpins />
            <Equipe />
            <FAQ />
          </main>
          <Footer />
          <FloatingCTA />
          <ApplicationModal />
        </div>
      </ApplicationModalProvider>
    </ThemeProvider>
  )
}

export default App
