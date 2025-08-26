import React from 'react'
import logo from '../../assets/logo.png';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className='Footer py-10 px-5'>
      
      {/* Logo */}
      <div className="logo flex justify-center items-center gap-2 cursor-pointer">
        <img src={logo} width={80} alt="Logo" />
        <p className='text-3xl font-bold uppercase [letter-spacing:5px]'>Zebi</p>
      </div>

      {/* Menu Links */}
      <div className="flex flex-wrap justify-center items-center gap-6 my-12 text-black font-medium">
        <p className="cursor-pointer hover:text-gray-600 transition">Company</p>
        <p className="cursor-pointer hover:text-gray-600 transition">Products</p>
        <p className="cursor-pointer hover:text-gray-600 transition">Services</p>
        <p className="cursor-pointer hover:text-gray-600 transition">About</p>
        <p className="cursor-pointer hover:text-gray-600 transition">Contact</p>
      </div>

      {/* Social Icons */}
      <div className="icons flex justify-center items-center gap-6 text-xl">
        <FaInstagram className='p-2 bg-gray-200 [font-size:42px] text-black rounded-full cursor-pointer hover:bg-pink-500 hover:text-white transition'/>
        <FaFacebookF className='p-2 bg-gray-200 text-[42px] text-black rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition'/>
        <FaWhatsapp className='p-2 bg-gray-200 text-[42px] text-black rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition'/>
      </div>

{/* Copyright */}
<div className="mt-10 md:px-12">
  <hr className="border-t border-black mx-auto" />
  <p className="text-center text-black text-sm mt-6">
    © {new Date().getFullYear()} Zebi. All Rights Reserved.
  </p>
</div>
    </div>
  )
}

export default Footer
