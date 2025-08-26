import React, { useContext } from "react";
import { IoStar } from "react-icons/io5";
import { Context } from "../../context/Context";
import { toast } from "react-toastify";

function ProductDisplay({ product }) {
const {addToCart} = useContext(Context)
    const notify = () => toast("Wow so easy!");

  if (!product) {
    return (
      <div className="p-4 text-gray-500 mx-auto text-sm">
        Loading product details...
      </div>
    );
  }

  return (
    <>
    <div className="productDisplay flex flex-col sm:flex-col md:flex-col lg:flex-row gap-6 md:gap-10 px-4 sm:px-6 md:px-16 lg-px-16 py-6">
      
      {/* LEFT IMAGES */}
      <div className="productDisplay-left flex justify-start md:flex-row gap-6 md:gap-10">
        
        {/* Thumbnail list */}
        <div className="productDisplay-imgList flex justify-between flex-col overflow-x-auto md:overflow-y-auto">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={product.img}
              className="w-15 sm:w-30 md:w-15 lg:w-25 lg:h-25 object-cover cursor-pointer"
              alt={`thumb-${i}`}
            />
          ))}
        </div>

        {/* Main image with zoom effect */}
        <div className="productDisplay-imgMain flex-1 flex justify-start item-start overflow-hidden ">
          <img
            src={product.img}
            className="w-full md:h-[550px] lg:h-[550px] object-contain transition-transform duration-500 ease-in-out hover:scale-110"
            alt={product.name}
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="productDisplay-right flex-1 space-y-4 mt-6 md:mt-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-gray-800">
          {product.name}
        </h1>
          {/* Rating */}
        <div className="flex items-center gap-2">
          <IoStar className="text-red-500 text-xl"/>
          <IoStar className="text-red-500 text-xl"/>
          <IoStar className="text-red-500 text-xl"/>
          <IoStar className="text-red-500 text-xl"/>
          <IoStar className="text-red-500 text-xl opacity-25"/>
          <p>(122)</p>
        </div>
        

        {/* Price */}
        <div className="flex items-center gap-5">
          {product.price_old && (
            <span className="text-gray-500 line-through text-sm ">
              ${product.price_old}
            </span>
          )}
          <span className="text-lg sm:text-xl md:text-sm text-red-500">
            ${product.price_new}
          </span>

        </div>
        <p className=" text-sm">
          {product.description || "Upgrade your wardrobe with our stylish type of clothing, made from high-quality [fabric/material] ."}
        </p>
        {/* Size Options */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-4">
            <h3 className="text-md font-semibold mb-4">Available Sizes:</h3>
            <div className="flex gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="border rounded px-6 py-4 text-sm bg-gray-50 border-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}               

        {/* Add to Cart Button */}
        <button onClick={()=>{addToCart(product.id); toast.success("Item added successfully",{position: "top-right", autoClose: 2000})}}  className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 rounded shadow transition cursor-pointer">
          Add to Cart
        </button>

        {/* category */}
        <div className="">
        <div className="text-md text-black mt-4 font-bold">
          Category : <span className="text-gray-800 font-medium">{product.category.charAt(0).toUpperCase() +product.category.slice(1)}</span>
        </div>
        <div className="text-md font-bold">
          Tags : <span className="text-gray-800 font-medium capitalize">modern, latest</span>
        </div>
        </div>
      </div>
    </div>

</>

  );
}

export default ProductDisplay;
