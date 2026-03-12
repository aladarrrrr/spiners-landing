
import { Routes, Route } from "react-router-dom"
import PrivacyPolicy from "./pages/privacypolicy"
import LegalPage from "./pages/LegalPage"
import {
  Navbar,
  Hero,
  PourquoiSpins,
  Equipe,
  FAQ,
  Footer,
} from './sections'
import { ApplicationModalProvider } from './contexts/ApplicationModalContext'
import ApplicationModal from './components/ApplicationModal'
import FloatingCTA from './components/FloatingCTA'

function HomePage() {
  return (
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
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mentions-legales" element={<LegalPage />} />
      <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
    </Routes>
  )
}
export default App
