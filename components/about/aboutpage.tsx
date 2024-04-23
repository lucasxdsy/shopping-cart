// AboutPage.js
import React, { useState }  from 'react';
import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../Footer';
import AboutContent from './aboutContent'; // Componente que renderiza o conteúdo "About Our Site"

const AboutPage = () => {

    const [viewCart, setViewCart] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen)
  return (
    <div>
      <Header viewCart={viewCart} setViewCart={setViewCart} toggleSidebar={toggleSidebar} /> {/* Adicionando toggleSidebar ao Header */}
      <div>
        <Sidebar isOpen={sidebarOpen} />
      </div>
      <div>
        <AboutContent />
      </div>
      <div>
        <Footer viewCart={viewCart}></Footer>
      </div>
    </div>
  )
}
}
export default AboutPage
