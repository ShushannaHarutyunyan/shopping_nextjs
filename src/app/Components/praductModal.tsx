"use client"
import React, { FC } from 'react'
import { useState } from 'react'
import { ArrowsPointingOutIcon} from '@heroicons/react/24/solid'
//creat Modal for quick view 
const PraductModal:FC<Product> = ({title, id, price, description, category, image, rating}) => {
    const [modalState, setModalState] = useState(false)
  return (<>
    <button onClick={() => setModalState(true)}>
        <ArrowsPointingOutIcon className="size-6 text-grey-500" />
    </button> 
    <div>
        { modalState && <>
      <div className="fixed inset-0  bg-black bg-opacity-50  flex justify-center items-center">
        <div className="w-[800px] flex flex-col">
          <button className="text-white text-[24px] place-self-end" onClick={()=>setModalState(false)}>
              x
          </button>
          <div className='grid sm:grid-cols-2 grid-cols-2 bg-white'>
          <div  className=" p-10 col-span-1">
            <img className='w-[420px] h-[450px] px-[30px]' src = {image}/>
          </div>
          <div className=' text-zinc-900 py-[50px] px-[20px] col-span-1 font-xl mr-[45px] mt-[40px]'>
          <div className='pt-[10px]'>{title}</div>
          <div className='pt-[10px]'>${price}</div>
          <div className='pt-[10px]'>{category}</div>
          <div className='pt-[10px]'>{description}</div>
         </div>
        </div>
        </div>
      </div>
        </> 
      }
    </div>
    </>
  )
}

export default PraductModal