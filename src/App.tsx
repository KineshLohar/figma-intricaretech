import './App.css'
import CompleteLinkedInSalesSolutions from './components/CompleteLinkedInSalesSolutions'
import { FeatureStrip } from './components/FeatureStrip'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { HeroSection } from './components/Hero';
import HowItWorks from './components/HowItWorks'
import JoinProfessionalsCTA from './components/JoinProfessionalsCTA'
import LeadCRMComparison from './components/LeadCRMComparison'
import { Navbar } from './components/Navbar'
import SupportedIntegrations from './components/SupportedIntegrations'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <LeadCRMComparison />
      <HowItWorks />
      <Testimonials />
      <CompleteLinkedInSalesSolutions />
      <SupportedIntegrations />
      <JoinProfessionalsCTA />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
