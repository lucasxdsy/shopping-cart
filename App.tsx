import React, { useState } from 'react'
import Header from './components/header'
import Footer from './components/Footer'
import Sidebar from './components/sidebar'
import ProductList from './components/ProductsList'
import Cart from './components/Cart'

const App =() => {
  const [viewCart, setViewCart] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
const pageContent = viewCart ? <Cart/> : <ProductList/>
  const content = (
    <>
    <div>
      <Header viewCart={viewCart} setViewCart={setViewCart} toggleSidebar={toggleSidebar} /> {/* Adicionando toggleSidebar ao Header */}
      <div>
        <Sidebar isOpen={sidebarOpen} />
      </div>
      <div>
      <> {pageContent}</>
        <Footer viewCart={viewCart}></Footer>
      </div>
    </div>
    </>
  )

  return content
}

export default App
