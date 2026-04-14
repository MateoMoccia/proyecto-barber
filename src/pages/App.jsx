import { useState } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import ClientForm from '../components/ClientForm'
import Footer from '../components/Footer'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <ClientForm />
      <Footer />
    </>
  )
}

export default App
