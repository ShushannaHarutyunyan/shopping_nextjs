
import React 
from 'react'

import ProducstList from '../Components/productsList'


export default async function ProductList() {

  const response = await fetch ('https://fakestoreapi.com/products/', {cache:'no-cache'})
  const productsData : Product[]= await response.json()

  return (<>
   <div className=" m-[30px] grid sm:grid-cols-3 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    {productsData.map((product)=>
    <ProducstList           
            title={product.title} 
            id={product.id}
            price={product.price} 
            description={product.description} 
            category={product.category} 
            image={product.image} 
            rating={{
              rate: product.rating.rate,
              count: product.rating.count
          }}/>
    )
    }
    </div>
    </>)
}