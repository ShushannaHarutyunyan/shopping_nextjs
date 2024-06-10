"use client"

import React from 'react'
import { useState, useEffect,  createContext, useContext } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'

// this component open hiden div in productId component, wher can add item in basket

const ProductAdd = ({id, price, title}:{id:number, price:number, title:string}) => {
    const {getItemQuantity, decreaseCartQuantity, increaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    const [isVisible, setIsVisible] =useState(false)
    const [count, setCount] = useState(0)

  return (
   
  <div className='mt-4 lg:row-span-3 lg:mt-0'>
    <button onClick={()=>{setIsVisible(true), increaseCartQuantity(id)}}
     className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${(count>=1)?`bg-indigo-300`:` bg-indigo-600`}`}>
        + Add to Cart</button>
        <div className={`grid sm:grid-cols-3 grid-cols-3 ${isVisible?`visible`:`invisible`}`}>
            <button  className='col-span-1 mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={()=>{quantity>0?decreaseCartQuantity(id):(removeFromCart(id), setIsVisible(false))}}>{quantity===1?"Deleate":"-"}</button>
            <div className='col-span-1 mt-10 mx-10 items-center px-3 py-3 justify-center text-base font-medium'>{count}</div>
            <button className='col-span-1 mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={()=>{setCount(count+1), increaseCartQuantity(id)}}>+</button>
            <div className='col-span-3 mt-10 mx-10 items-center px-3 py-3 justify-center text-base font-medium'>Total price:  ${price*count}</div>
            <button  className='col-span-3 mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={()=>{setIsVisible(false)}}>In Cart</button>
        </div>
    
   </div>
   )
}

export default ProductAdd