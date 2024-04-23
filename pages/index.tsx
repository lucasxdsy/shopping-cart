"use client"
import Head from 'next/head';
import App from '../App'
import React from 'react'

import { CartProvider } from '../context/CartProvider'
import { ProductsProvider } from '../context/ProductsProvider'

export default function Home() {

  return (

    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        

          
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,

         
      
      </main>

      <footer>
        
      </footer>
    </div>
  );
}


