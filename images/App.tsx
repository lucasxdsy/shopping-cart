import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import { useState } from 'react'






function App ()  {
const [viewCart, setViewCart] = useState(false)

const content = (
    <>
    <div>

    <Header viewCart = {viewCart} setViewCart = {setViewCart} />

    </div>
    
    <div>
      <Footer viewCart = {viewCart}></Footer>
    </div>
    
    </>


)

  return content
}

export default App
