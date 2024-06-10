
import React from 'react'
import RemoveItem from './removeItem'
type CartItemProps ={
    id: number
    quantity: number
}

async function getProduct(id:number){
    const res = await fetch('https://fakestoreapi.com/products/'+id,{
      next:{
        revalidate : 60
      }
    })
    return res.json()
  }


export default async function CartItem ({id, quantity}: CartItemProps) {
    const product:Product = await getProduct(id)
  return (
    <div>
        <li className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img src={product.image} alt="" className="h-full w-full object-cover object-center"/>
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">

          <p className="ml-4">{}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.title}</p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty 1</p>

        <div className="flex">
            <RemoveItem id={id} quantity={quantity}/>
        </div>
      </div>
    </div>
  </li></div>
  )
}
