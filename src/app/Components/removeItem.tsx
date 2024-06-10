"use client"
import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
type CartItemProps ={
    id: number
    quantity: number
}
const RemoveItem = ({id, quantity}: CartItemProps) => {
    const {removeFromCart} = useShoppingCart()
  return (
    <button onClick={()=>{removeFromCart}} className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
)
}

export default RemoveItem