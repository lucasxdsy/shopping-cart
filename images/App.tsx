

import React from 'react'
import Header from '../components/header'
import { useState } from 'react'






function App ()  {
const [viewCart, setViewCart] = useState(false)

const content = (
    <>
    <Header viewCart = {viewCart} setViewCart = {setViewCart} />
    
    
    </>


)

  return content
}

export default App
