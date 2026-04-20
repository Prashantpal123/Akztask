import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Experience from '../components/Experience'
import AboutUs from '../components/About/About'
import Courses from '../components/Courses/Courses'
import ContactSection from '../components/Contactsection/ContactSection'
const Layout = () => {
  return (
    <div className=' bg-bgLight w-full h-screen  items-center justify-center'>
        <Hero/>
        <Experience/>
        <Services/>
        <Courses/>
        <AboutUs/>
        <ContactSection/>

    </div>
  )
}

export default Layout
