import React from 'react'
import data_products from '../../assets/data'
import Items from '../items/Items'

function Popular() {
  return (
    <div className='popular h-full flex flex-col gap-4 p-5 md:p-10'>
        <h1 className='text-4xl font-semibold text-center uppercase'>Popular In Women</h1>
        <hr className='h-[3px] w-1/6 mx-auto bg-gray-700 rounded' />
        <div className="popular-item  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 place-items-center md:px-28">
            {data_products.map((item,i)=>{
                return <Items key={item.id} item={item} />
            })}
        </div>
    </div>
  )
}

export default Popular