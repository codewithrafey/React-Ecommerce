import React from 'react'

function NewsLetter() {
  return (
    <div className='NewsLetter h-full px-5 md:px-20 py-10'>
      <div className="bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex flex-col gap-4 items-center justify-center py-16 text-center">
        <h2 className='text-2xl md:text-4xl font-semibold text-gray-700'>Get Exclusive Offers On Your Email</h2>
        <p className='font-semibold text-sm md:text-base'>Subscribe to our NewsLetter and Stay Updated</p>
        <form className='flex items-center justify-between mt-6 border border-black rounded-full w-full max-w-lg overflow-hidden'>
          <input type="email" placeholder='Enter Your Email' className='flex-1 px-4 py-3 outline-none w-full'/>
          <button className='bg-black text-white px-6 py-3 rounded-full'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
