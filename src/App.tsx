import { useCallback, useRef, useState } from 'react'
import {
  Header, Hero, Soluctions,
  About, Portfolio, Faq,
  Testimonials, Contact, Footer,
} from './sections'
import Modal from './components/Modal'


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


  const toggleModal = useCallback((show: boolean, success: boolean) => {
    const html = window.document.querySelector('html') as HTMLElement
    const body = window.document.body

    if (show) {
      html.style.overflowY = 'hidden'
      body.style.overflowY = 'hidden'
      setModalInfo({
        showing: true,
        title: success ? 'Sua mensagem foi enviada!' : 'Ops.. Houve um erro',
        message: success ? 'Entraremos em contato o mais breve possível!' : 'Por favor, tente novamente mais tarde.'
      })
    } else {
      setModalInfo({ showing: false, title: '', message: '' })
      html.style.overflowY = 'auto'
      body.style.overflowY = 'auto'
    }
  }, [])


  return (
    <>
      {modalInfo.showing &&
        <Modal info={modalInfo} closeModal={() => toggleModal(false, false)} />
      }
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