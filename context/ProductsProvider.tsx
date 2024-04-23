import { createContext, ReactElement, useState, useEffect } from "react"

export type ProductType=
{
    sku: string,
    name:string,
    price: number
    image:string
}
const initState : ProductType[] = [
  {
    "sku": "item1",
    "name": "Cálculo",
    "price": 10000000,
    "image": "../images/item1.jpg"
    
  },
  {
    "sku": "item2",
    "name": "TMD",
    "price": 0.01,
    "image": "../images/item2.jpg"
  },
  {
    "sku": "item3",
    "name": "Algebra",
    "price": 69.90,
    "image": "../images/item3.jpg"

  },
  {
    "sku": "item4",
    "name": "PF",
    "price": 89.90,
    "image": "../images/item4.jpg"
    

  },
  {
    "sku": "item5",
    "name": "LI1",
    "price": 420,
    "image": "../images/item5.jpg"
    

  },
  {
    "sku": "item6",
    "name": "opção_Uminho/Astronomia",
    "price": 5,
    "image": "../images/item6.jpg"
    

  },
  {
    "sku": "item7",
    "name": "SC",
    "price": 100,
    "image": "../images/item7.jpg"
    

  },
  {
    "sku": "item8",
    "name": "Análise",
    "price": 20000000,
    "image": "../images/item8.jpg"
    

  },
  {
    "sku": "item9",
    "name": "Lógica",
    "price": 50,
    "image": "../images/item9.jpg"
    

  },
  {
    "sku": "item10",
    "name": "LI2",
    "price": 250,
    "image": "../images/item10.jpg"
    

  },
  {
    "sku": "item11",
    "name": "EPTN",
    "price": 95,
    "image": "../images/item11.jpg"
    

  },
  {
    "sku": "item12",
    "name": "PI",
    "price": 400,
    "image": "../images/item12.jpg"
    

  }, 
  {
    "sku": "item13",
    "name": "Apoio Emocional",
    "price": 9999999999,
    "image": "../images/item13.jpg"
    

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