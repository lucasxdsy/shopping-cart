import useCart from "../hooks.tsx/useCart"
import useProducts from "../hooks.tsx/useProducts"
import { UseProductsContextType } from "../context/ProductsProvider"
import { ReactElement } from "react"
import Product from "./Product"

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { products } = useProducts()

    let pageContent: ReactElement | ReactElement[] = <p className= "flex justify-center items-center h-screen text-center ">Loading...</p>

    if (products?.length) {
    
        pageContent = products.map(product => {
            const inCart: boolean = cart.some(item => item.sku == product.sku)

            return (
                <Product
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            )
        })
    }

    const content = (
        <main className="main main--products grid grid-cols-5">
            {pageContent}
        </main>
    )

    return content
}
export default ProductList