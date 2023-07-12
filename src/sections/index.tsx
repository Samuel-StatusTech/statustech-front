import { lazy } from 'react'

import Header from './Header'
import Hero from './Hero'
import Soluctions from './Soluctions'
import About from './About'
import Faq from './Faq'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
const Portfolio = lazy(() => import('./Portfolio'))

export {
  Header,
  Hero,
  Soluctions,
  About,
  Portfolio,
  Faq,
  Testimonials,
  Contact,
  Footer,
}