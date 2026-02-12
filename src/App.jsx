import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import FeaturesSection from './components/FeaturesSection'
import Testimonial from './components/Testimonial'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CountryMarquee from './components/CountryMarquee'
import InvoiceFeatures from './components/InvoiceFeatures'
import FounderLetter from './components/FounderLetter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <FeaturesSection />
      <Testimonial />
      <HowItWorks />
      <Pricing />
      <CountryMarquee />
      <InvoiceFeatures />
      <FounderLetter />
      <Footer />
      <div className="grain-overlay"></div>
    </>
  )
}

export default App
