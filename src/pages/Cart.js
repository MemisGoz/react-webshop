import React from 'react'
import { useSelector, } from 'react-redux'
import { Link } from "react-router-dom";
function Cart() {

  const state = useSelector((state) => state.handleCart);

  const getCartTotal = () => {
    let total = 0;
    for (let idx = 0; idx < state.length; idx++){
      total += state[idx].qty * state[idx].price
    }
    return total;
  }

  const emptyCart = () => {
    return (
      <div className='text-center'>
        
        <h2>Empty Cart</h2>
        
      </div>
    )
  }

  

  const cartItems = (product) => {
    return (
      <div className='grid grid-cols-3 justify-items-center md:px-10 py-1.5 bg-gray-200 md:mx-20 md:text-lg text-sm'>
        

        <h2>{product.name}</h2>
        <p>{product.qty}</p>
        <p>{product.qty * product.price}.-</p>

        

      </div>
    )
  }

const Overview = () => {
  return (
    <div>
      <h1 className='text-center text-5xl pt-10 pb-20'>Your Cart</h1>
    <div className='grid grid-cols-3 justify-items-center py-2 md:px-10 bg-gray-300 md:mx-20 md:text-xl'>
    <h2>Product</h2>
    <h2>Quantity</h2>
    <h2>Price</h2>
  </div>
  </div>
  )
}

const Back = () => {
  return (
<Link to="/" className="md:ml-20 mt-10 inline-flex items-center justify-center p-2 text-sm font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
<svg className='w-6'  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
</svg>                                        
    <span class="w-full">Back to store</span>
</Link> 
  )
}

  return (
    
    <div>
      <Back />
      {state.length === 0 && emptyCart()}

      {state.length !== 0 && (
        <div>
          <Overview />
          {state.map(cartItems)}
          <h1 className='text-center py-8 text-xl font-semibold'>Total: {getCartTotal()} DKK</h1>
      <div className='flex justify-center'>
      <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Checkout</button>
      </div>
        </div>
        
      )}

     

    </div>
  )
}

export default Cart