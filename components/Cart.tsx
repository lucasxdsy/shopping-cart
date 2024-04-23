import useCart from "../hooks.tsx/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Cart = () => {
    const [confirm, setConfirm] = useState<boolean>(false)
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)
    }

    const pageContent = confirm
        ? <h2>Thank you for your order.</h2>
        : <>
            <h2 className="offscreen">Cart</h2>
            <ul className="cart">
                {cart.map(item => {
                    return (
                        <CartLineItem
                            key={item.sku}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}
                        />
                    )
                })}
            </ul>
            <div className="flex justify-center items-start h-screen">
  <div className="cart__totals flex flex-col items-center">
    <div>Total Items: {totalItems}</div>
    <p>Total Price: {totalPrice}</p>
    <button className="cart__submit mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={!totalItems} onClick={onSubmitOrder}>
      Place Order
    </button>
  </div>
</div>


        </>

    const content = (
        <main className="main main--cart">
            {pageContent}
        </main>
    )

    return content
}
export default Cart