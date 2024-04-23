import { createContext, ReactElement, useState, useEffect } from "react"

export type ProductType=
{
    sku: string,
    name:string,
    price:string
    image:string
}
const initState : ProductType[] = [
  {
    "sku": "item1",
    "name": "Cálculo",
    "price": "100€",
    "image": "../images/item1.jpg"
    
  },
  {
    "sku": "item2",
    "name": "Calças Chino",
    "price": 45.50,
    "image": "../images/item2.jpg"
  },
  {
    "sku": "item3",
    "name": "Sapatos de Couro",
    "price": 69.90,
    "image": "../images/item3.jpg"

  },
  {
    "sku": "item4",
    "name": "Gatinho",
    "price": 69.90,
    "image": "../images/item4.jpg"
    

  }
  
    ]

    

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>
(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>
    (initState) 

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductsContext 