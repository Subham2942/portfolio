import React from 'react'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  )
}

export default App