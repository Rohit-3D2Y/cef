import React from 'react'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import FounderMessageBlock from './components/Founder'
import LandingCarousel from './components/Landing'
import MentorAdvisors from './components/Advisor'
import AboutSection from './components/AboutSection'
import PartnersSection from './components/PartnerSection'
import StatsSection from './components/ProjectExp'
import OurWork from './components/OurWork'
<<<<<<< HEAD
import OurServices from './components/OurServices'
=======
import Client from './components/ClientSection'
>>>>>>> 79372aa47f3df83b32b71055de51c59157a41f27

const App = () => {
  return (
    <div>
      <LandingCarousel />
      <OurServices />
      <AboutSection />
      <PartnersSection />
      <AboutUs />
      <OurWork />
      <Client />
       <MentorAdvisors />
      <FounderMessageBlock />
      <StatsSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App