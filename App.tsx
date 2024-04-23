import React from 'react'
import Header from './components/header'
import Footer from './components/Footer'
import Cart from "./components/Cart"
import ProductList from "./components/ProductsList"
import { useState } from 'react'






function App ()  {
const [viewCart, setViewCart] = useState(false)

const pageContent = viewCart ? <Cart /> : <ProductList />

const content = (
    <>
    <div >

    <Header viewCart = {viewCart} setViewCart = {setViewCart} />

   
    <>{pageContent}</>
   
      <Footer viewCart = {viewCart}></Footer>
    </div>
    
    </>


)

  return content
}

export default App
