"use client"
import React, { FC } from 'react'
import Link from 'next/link'
import ProductModal from '../Components/praductModal'

export default function ProducstList ({title, id, price, description, category, image, rating}:{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
}
}){
  return (
        <div className='mx-[20px] my-[30px] bg-white'>
          <div className='grid sm:grid-cols-12 grid-cols-12 '>
            <div className='col-span-11 px-20 py-10 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7'>
            <img src={image} className='w-50 h-55' />
        </div>
        <div className='col-span-1 mt-5'>
        <ProductModal
          title={title} 
          id={id}
          price={price} 
          description={description} 
          category={category} 
          image={image} 
          rating={{
            rate: rating.rate,
            count: rating.count
        }}/>
        </div>
      </div>
      <div className=' p-2 mt-4 text-sm text-gray-700'>
      <Link href= {`/products/${id}`} key ={id}>{title}</Link>
      </div>  
      <div className=" pb-2 px-2 mt-1 text-lg font-medium text-gray-900">${price}</div>
    </div>
  )
}
