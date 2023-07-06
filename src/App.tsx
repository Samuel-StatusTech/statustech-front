import React, { useRef, useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Soluctions from './sections/Soluctions'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {

  const [modalInfo, setModalInfo] = useState({
    showing: false,
    title: '',
    message: ''
  })

  const heroRef = useRef<HTMLElement | null>(null)
  const soluctionsRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const portfolioRef = useRef<HTMLElement | null>(null)
  const faqRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  const sectionsRelations = [
    { ref: heroRef, name: 'Home' },
    { ref: soluctionsRef, name: 'Soluções' },
    { ref: aboutRef, name: 'Sobre' },
    { ref: portfolioRef, name: 'Portfolio' },
    { ref: faqRef, name: 'Faq' },
    { ref: contactRef, name: 'Entre em contato' },
  ]


  const toggleModal = (success?: boolean) => {
    if (success) {
      setModalInfo({
        showing: success ?? !modalInfo.showing,
        title: success ? 'Email enviado com sucesso' : 'Ops.. Houve um erro',
        message: success ? 'Entraremos em contato em breve' : 'Tente novamente mais tarde'
      })
    } else {
      setModalInfo({ showing: false, title: '', message: '' })
    }
  }


  return (
    <>
      <Header sectionsRelations={sectionsRelations} />
      <Hero ref={heroRef} />
      <Soluctions ref={soluctionsRef} />
      <About ref={aboutRef} />
      <Portfolio ref={portfolioRef} />
      <Faq ref={faqRef} />
      <Testimonials />
      <Contact ref={contactRef} toggleModal={toggleModal} />
      <Footer />
    </>
  )

}


export default App