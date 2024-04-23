import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo } from "react"
import imagem1 from "images/item1.jpg"
import Image from 'next/image'

type PropsType={
    product:ProductType,
    dispatch:React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,

}


  



const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null;

    return (
        <div className="flex flex-wrap" >
            <div className=" w-1/5  px-2 mb-4">
                <article className="product border rounded p-4">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} className="product__img mt-2 w-60 h-60 object-cover" />
                    <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
                    <button onClick={onAddToCart} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                </article>
                </div>
        </div>
    );
}

function areProductsEqual(prevProps: PropsType, nextProps: PropsType) {
    return (
        prevProps.product === nextProps.product &&
        prevProps.inCart === nextProps.inCart
    );
}

const MemoizedProduct = memo(Product, areProductsEqual);

export default MemoizedProduct;


