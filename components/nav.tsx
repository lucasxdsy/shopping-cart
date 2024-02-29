import React from 'react'
import App from '../images/App'


type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>

 }



const navv = ({viewCart, setViewCart} : PropsType) => {
    const button =  viewCart
        ? <button onClick={() => setViewCart(false)}> View Products</button>
        : <button onClick={() => setViewCart (true)}> View Cart</button>

    const content = (
        <nav className='nav'>
            {button}
        </nav>



    )
  return (
    <div>nav</div>
  )
}

export default navv  
