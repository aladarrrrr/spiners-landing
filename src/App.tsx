import {
  Navbar,
  Hero,
  PourquoiSpins,
  Offres,
  Equipe,
  Resultats,
  FAQ,
  CTAFinal,
  Footer,
} from './sections'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PourquoiSpins />
        <Offres />
        <Equipe />
        <Resultats />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}

export default App
