import React from 'react'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import FounderMessageBlock from './components/Founder'
import LandingCarousel from './components/Landing'

const App = () => {
  return (
    <div>
      <LandingCarousel />
      <AboutUs />
      <Contact />
      <FounderMessageBlock />
      <Footer />
    </div>
  )
}

export default App