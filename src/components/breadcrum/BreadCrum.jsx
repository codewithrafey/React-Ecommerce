import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function BreadCrum({ product }) {
  if (!product) {
    return (
      <div className="p-4 text-gray-500 mx-auto text-sm">
        Loading product details...
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-[12px] text-gray-600 px-4 sm:px-6 md:px-16 pt-4">
      <Link to={'/'}> <span className="cursor-pointer hover:text-red-600">HOME</span></Link>
      <IoIosArrowForward className="inline text-gray-400" />
      <Link to={'/'}><span className="cursor-pointer hover:text-red-600">SHOP</span></Link>
      <IoIosArrowForward className="inline text-gray-400" />
      <Link to={`/${product.category.toLowerCase()}`}><span className="cursor-pointer hover:text-red-600">{product.category.toUpperCase()}</span></Link>
      <IoIosArrowForward className="inline text-gray-400" />
      <span className="font-semibold text-gray-800">{product.name.toUpperCase()}</span>
    </div>
  )
}

export default BreadCrum