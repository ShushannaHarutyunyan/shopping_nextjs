import React, { FC } from 'react'

export default function ProductItem({params,}:{params:{productId:string}}) 
  {     
  return (<>

<p> {params.productId}</p>
</> )
}
