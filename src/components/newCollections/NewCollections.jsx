import React from 'react'
import new_collections from '../../assets/new_collection'
import Items from '../items/Items'

function NewCollections() {
  return (
    <div className='NewCollections h-full flex flex-col gap-4 p-5 md:p-10'>
        <h1 className='text-4xl font-semibold text-center uppercase'>NEW COLLECTION</h1>
        <hr className='h-[3px] w-1/6 mx-auto bg-gray-700 rounded' />
        <div className="collection-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 place-items-center md:px-28">
            {new_collections.map((item, i) => {
                return  <Items key={i} item={item} />
            })}
        </div>
    </div>
  )
}

export default NewCollections