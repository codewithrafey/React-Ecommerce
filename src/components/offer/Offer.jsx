import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'
function Offer() {
  return (
    <div className="px-20 py-10">
    <div className='offer flex justify-between items-center bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] px-20'>
        <div className="offer-left flex flex-col items-start justify-center gap-6 text-center md:text-left">
            <h2 className='text-5xl font-bold'>Exclusive</h2>
            <h2 className='text-5xl font-bold'>Offer For You</h2>
            <p className='uppercase font-bold'>Only one best seller products</p>
            <button className='bg-red-700 text-white px-9 py-2 rounded-full'>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} className='w-60 md:w-55' alt="" />
        </div>
    </div>
    </div>
  )
}

export default Offer