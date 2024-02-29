
import React from 'react'
import Nav from './nav'


type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
 
 }

const header = ({viewCart, setViewCart} : PropsType) => {

    const content = (
        <header className="flex h-10 items-center justify-between">
            <div className="bg-red-800" >
                <h1 className=''>Shopping-Cart</h1>
                <div className='header_price-box'>
                    <p>Total items</p>
                    <p>Total Price</p>
                </div>
            </div>
            <Nav viewCart = {viewCart} setViewCart = {setViewCart}></Nav>
        </header>


    )
    return (
        // <div>header</div>
        content
    )
}

export default header




