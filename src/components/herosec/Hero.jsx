import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import hero_image from '../../assets/hero-image.png';

function Hero() {
  return (
    <div className="hero flex text-center bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] min-h-screen md:justify-between md:px-24 px-8 py-10  items-center">
      {/* Left */}
      <div className="hero-left flex flex-col items-start justify-center gap-3 text-center md:text-left">
        <h2 className="font-bold text-sm sm:text-base">NEW ARRIVAL ONLY</h2>
        <div className="flex items-start flex-col text-4xl sm:text-7xl md:text-7xl font-bold leading-tight">
          <p>New</p>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="">
        <div className="hero-latest-btn mt-2 flex justify-center items-center bg-red-700 w-fit text-white py-2 px-4 sm:px-6 rounded-full gap-2 cursor-pointer">
          <div>Latest Collection</div>
          <HiArrowLongRight />
        </div>
        </div>
      </div>

      {/* Right */}
      <div className="hero-right hidden md:flex">
        <img src={hero_image} className="w-60 sm:w-72 md:w-90" alt="" />
      </div>
    </div>
  )
}

export default Hero